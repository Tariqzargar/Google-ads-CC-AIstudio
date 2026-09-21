import { FeasibilityItem, ResourceInventoryItem, GaqlQuery, AlertPrimitive, ApiTrap, FinalContractCategory } from '../types';

export const FEASIBILITY_DATA: FeasibilityItem[] = [
  {
    screen: '01. Command Center',
    feature: 'Multi-Account Health Overview & Summary Strip',
    status: 'Direct',
    confidence: 'High',
    apiResource: 'customer, customer_client, campaign, metrics',
    details: 'Daily aggregate stats (cost, conversions, impressions) and health state derived from snapshot table in Insights OS.',
  },
  {
    screen: '01. Command Center',
    feature: 'Pacing Exposure Calculation (e.g. +22% / AED 8.4K)',
    status: 'Derived',
    confidence: 'High',
    apiResource: 'campaign, campaign_budget, metrics.cost_micros',
    details: 'Google Ads API provides campaign_budget.amount_micros and metrics.cost_micros. Pacing projection is calculated mathematically based on day-of-month and remaining daily budgets.',
    caveat: 'Shared budgets require aggregating across all linked campaigns using campaign_budget resource.'
  },
  {
    screen: '01. Command Center',
    feature: 'Needs Attention List & 30-Day Health Heatmap',
    status: 'Derived',
    confidence: 'Medium',
    apiResource: 'customer, campaign, conversion_action, change_event',
    details: 'Health scores and 30-day daily health bar strips are calculated deterministically from daily snapshot records in Insights OS database.',
  },
  {
    screen: '02. Accounts',
    feature: 'Account List & Custom Metric Selections (Lens)',
    status: 'Direct',
    confidence: 'High',
    apiResource: 'customer_client, metrics',
    details: 'Sync active client accounts under MCC via customer_client query. Filter by status == ENABLED.',
  },
  {
    screen: '03. Alerts & 24-hour Journal',
    feature: 'Alert Generation & In-App Notification Dispatch',
    status: 'Derived',
    confidence: 'High',
    apiResource: 'Derived from API sync pipeline',
    details: 'Google Ads API does NOT send webhooks or alerts. Insights OS batch sync detects metric threshold breaches and logs alerts into local DB.',
  },
  {
    screen: '04. Reports',
    feature: 'One-Click Meeting-Ready Reports & 30d Comparison',
    status: 'Direct',
    confidence: 'High',
    apiResource: 'campaign, ad_group, metrics, segments.date',
    details: 'Aggregated via GAQL over current 30d vs previous 30d date ranges in server backend.',
  },
  {
    screen: '05. Recommendations',
    feature: 'Google Recommendations Mirroring (Read-Only)',
    status: 'Direct',
    confidence: 'High',
    apiResource: 'recommendation',
    details: 'Fetched via GAQL recommendation resource. Filtered by recommendation_type and status.',
    caveat: 'V1 is strictly read-only. Recommendation execution is explicitly out of scope for V1.'
  },
  {
    screen: '05. Recommendations',
    feature: 'Recommendation Execution (Apply/Dismiss Buttons)',
    status: 'Unavailable',
    confidence: 'Low',
    apiResource: 'RecommendationService.ApplyRecommendation',
    details: 'Automated recommendation execution is moved to FUTURE ROADMAP — OUT OF V1.',
  },
  {
    screen: '06. Change Lab',
    feature: 'Change Lab & Automated Mutation Outcome Workspace',
    status: 'Unavailable',
    confidence: 'Low',
    apiResource: 'change_event, MutateService',
    details: 'Interactive Change Lab workspace and automated mutation tracking moved to FUTURE ROADMAP — OUT OF V1.',
  },
  {
    screen: '07. AI Setup Studio',
    feature: 'Campaign Setup Wizard & AI Plan Builder',
    status: 'Unavailable',
    confidence: 'Low',
    apiResource: 'CampaignService, AdGroupService',
    details: 'Campaign creation and write-backs moved to FUTURE ROADMAP — OUT OF V1.',
  }
];

export const RESOURCE_INVENTORY: ResourceInventoryItem[] = [
  {
    resourceName: 'customer',
    identifiers: 'customer.id',
    requiredFields: ['customer.id', 'customer.descriptive_name', 'customer.currency_code', 'customer.time_zone', 'customer.status'],
    mccImplications: 'Queryable at individual client account level with login-customer-id header.',
    campaignTypeLimitations: 'None.',
    changesHistorically: 'Rarely (name/status changes).',
    recommendedSyncFrequency: 'Daily (02:00 AM)',
    recommendedStorageGrain: 'Account Master Record (Single Row per account)',
    purpose: 'Account identity, time zone, and base status verification.'
  },
  {
    resourceName: 'customer_client',
    identifiers: 'customer_client.client_customer',
    requiredFields: ['customer_client.client_customer', 'customer_client.level', 'customer_client.status', 'customer_client.descriptive_name', 'customer_client.currency_code', 'customer_client.time_zone', 'customer_client.hidden', 'customer_client.manager'],
    mccImplications: 'Queried directly at MCC level to discover linked client accounts hierarchy.',
    campaignTypeLimitations: 'None.',
    changesHistorically: 'Updated when accounts are linked or unlinked.',
    recommendedSyncFrequency: 'Every 6 hours / On Demand',
    recommendedStorageGrain: 'MCC Hierarchy Mapping Table',
    purpose: 'Account discovery and MCC management structure.'
  },
  {
    resourceName: 'campaign',
    identifiers: 'campaign.id',
    requiredFields: ['campaign.id', 'campaign.name', 'campaign.status', 'campaign.serving_status', 'campaign.advertising_channel_type', 'campaign.bidding_strategy_type', 'campaign.campaign_budget', 'campaign.start_date', 'campaign.end_date', 'campaign.primary_status', 'campaign.primary_status_reasons'],
    mccImplications: 'Must be queried with login-customer-id set to MCC or target Client CID.',
    campaignTypeLimitations: 'Fields vary slightly by channel type (Search, Display, Shopping, Performance Max).',
    changesHistorically: 'Statuses change dynamically; performance metrics attached via segments.date.',
    recommendedSyncFrequency: 'Hourly (for status/alerts) or Every 4 Hours',
    recommendedStorageGrain: 'Daily Campaign Performance Snapshot (campaign_id x date)',
    purpose: 'Campaign serving health, campaign-level budget mapping, and core metrics aggregate.'
  },
  {
    resourceName: 'campaign_budget',
    identifiers: 'campaign_budget.id',
    requiredFields: ['campaign_budget.id', 'campaign_budget.name', 'campaign_budget.amount_micros', 'campaign_budget.type', 'campaign_budget.status', 'campaign_budget.is_explicitly_shared', 'campaign_budget.period'],
    mccImplications: 'Account level resource.',
    campaignTypeLimitations: 'None.',
    changesHistorically: 'Budget amounts change upon user updates.',
    recommendedSyncFrequency: 'Every 4 Hours',
    recommendedStorageGrain: 'Current Budget Snapshot / Audit Log',
    purpose: 'Budget pacing, daily cap calculations, and shared budget tracking.'
  },
  {
    resourceName: 'ad_group',
    identifiers: 'ad_group.id',
    requiredFields: ['ad_group.id', 'ad_group.name', 'ad_group.status', 'ad_group.type', 'ad_group.campaign'],
    mccImplications: 'Account level resource.',
    campaignTypeLimitations: 'Performance Max does NOT use ad_groups; it uses asset_groups.',
    changesHistorically: 'Statuses change dynamically.',
    recommendedSyncFrequency: 'Daily',
    recommendedStorageGrain: 'Daily Ad Group Snapshot',
    purpose: 'Ad group breakdown and active structure metrics.'
  },
  {
    resourceName: 'ad_group_ad',
    identifiers: 'ad_group_ad.ad.id',
    requiredFields: ['ad_group_ad.ad.id', 'ad_group_ad.status', 'ad_group_ad.policy_summary.approval_status', 'ad_group_ad.policy_summary.review_status', 'ad_group_ad.policy_summary.policy_topic_entries', 'ad_group_ad.ad.type'],
    mccImplications: 'Account level resource.',
    campaignTypeLimitations: 'Applies to Search/Display. Performance Max ads are auto-assembled from assets.',
    changesHistorically: 'Policy statuses update asynchronously after review.',
    recommendedSyncFrequency: 'Daily / Hourly for Policy Scans',
    recommendedStorageGrain: 'Ad Policy Audit Snapshot',
    purpose: 'Ad disapproval alerts, policy violation detection.'
  },
  {
    resourceName: 'keyword_view (ad_group_criterion)',
    identifiers: 'ad_group_criterion.criterion_id',
    requiredFields: ['ad_group_criterion.criterion_id', 'ad_group_criterion.keyword.text', 'ad_group_criterion.keyword.match_type', 'ad_group_criterion.status', 'ad_group_criterion.quality_info.quality_score', 'ad_group_criterion.quality_info.creative_quality_score', 'ad_group_criterion.quality_info.post_click_quality_score', 'ad_group_criterion.quality_info.search_predicted_ctr'],
    mccImplications: 'Account level resource.',
    campaignTypeLimitations: 'Search campaigns only.',
    changesHistorically: 'Quality scores update daily.',
    recommendedSyncFrequency: 'Daily',
    recommendedStorageGrain: 'Daily Keyword Metric Record',
    purpose: 'Quality Score component breakdown and targeted keyword efficiency.'
  },
  {
    resourceName: 'search_term_view',
    identifiers: 'search_term_view.search_term',
    requiredFields: ['search_term_view.search_term', 'search_term_view.status', 'metrics.cost_micros', 'metrics.impressions', 'metrics.clicks', 'metrics.conversions', 'metrics.conversions_value'],
    mccImplications: 'Account level resource.',
    campaignTypeLimitations: 'Search and Shopping campaigns. Performance Max provides limited search terms under campaign level or insights.',
    changesHistorically: 'Historical terms subject to Google privacy thresholds (unidentified terms omitted).',
    recommendedSyncFrequency: 'Daily / Weekly',
    recommendedStorageGrain: 'Daily Search Term Performance Log',
    purpose: 'Search Waste identification (non-converting spend) and Search Query Reports (SQR).'
  },
  {
    resourceName: 'conversion_action',
    identifiers: 'conversion_action.id',
    requiredFields: ['conversion_action.id', 'conversion_action.name', 'conversion_action.status', 'conversion_action.type', 'conversion_action.category', 'conversion_action.primary_for_goal', 'conversion_action.include_in_conversions_metric', 'conversion_action.counting_type', 'conversion_action.attribution_model_settings.attribution_model'],
    mccImplications: 'Can be defined at Account level or Cross-Account MCC Conversion level.',
    campaignTypeLimitations: 'None.',
    changesHistorically: 'Statuses change if tags stop firing (e.g. INACTIVE / HIDDEN).',
    recommendedSyncFrequency: 'Daily / Every 4 Hours for Heartbeat',
    recommendedStorageGrain: 'Conversion Action Master Record',
    purpose: 'Tracking health evaluation, distinguishing primary vs secondary conversions, heartbeat checks.'
  },
  {
    resourceName: 'recommendation',
    identifiers: 'recommendation.resource_name',
    requiredFields: ['recommendation.resource_name', 'recommendation.type', 'recommendation.impact.base_metrics', 'recommendation.impact.potential_metrics', 'recommendation.campaign_budget_recommendation', 'recommendation.keyword_recommendation', 'recommendation.text_ad_recommendation'],
    mccImplications: 'Account level resource.',
    campaignTypeLimitations: 'Varies by recommendation type.',
    changesHistorically: 'Transient! Recommendations appear and vanish dynamically based on Google algorithms.',
    recommendedSyncFrequency: 'Daily',
    recommendedStorageGrain: 'Recommendations Snapshot Ledger',
    purpose: 'Read-only display of Google Optimization Score and opportunity suggestions.'
  },
  {
    resourceName: 'change_event',
    identifiers: 'change_event.change_date_time, change_event.change_resource_name',
    requiredFields: ['change_event.change_date_time', 'change_event.change_resource_type', 'change_event.user_email', 'change_event.client_type', 'change_event.old_resource', 'change_event.new_resource', 'change_event.resource_change_operation'],
    mccImplications: 'Account level resource.',
    campaignTypeLimitations: 'All campaign types.',
    changesHistorically: 'Hard 30-day retention window in Google Ads API! MUST be snapshotted by Django.',
    recommendedSyncFrequency: 'Hourly / Daily Delta Sync',
    recommendedStorageGrain: 'Immutable Change Log Table in PostgreSQL',
    purpose: 'Audit trail of mutations for Change Lab and outcome measurement.'
  },
  {
    resourceName: 'asset_group & asset_group_asset',
    identifiers: 'asset_group.id',
    requiredFields: ['asset_group.id', 'asset_group.name', 'asset_group.status', 'asset_group.performance_label', 'asset_group.campaign'],
    mccImplications: 'Account level resource.',
    campaignTypeLimitations: 'Performance Max campaigns only.',
    changesHistorically: 'Asset performance ratings (BEST, GOOD, POOR) update periodically.',
    recommendedSyncFrequency: 'Daily',
    recommendedStorageGrain: 'Daily Asset Group Performance Record',
    purpose: 'Performance Max structural health and asset coverage monitoring.'
  }
];

export const GAQL_QUERIES: GaqlQuery[] = [
  {
    id: 'q1_account_summary',
    title: '1. Account Identity & Status Scan',
    fromResource: 'customer',
    purpose: 'Fetch account metadata, currency, timezone, and top-level customer status.',
    query: `SELECT
  customer.id,
  customer.descriptive_name,
  customer.currency_code,
  customer.time_zone,
  customer.status,
  customer.auto_tagging_enabled
FROM customer`,
    segments: ['None'],
    datePredicates: 'Not applicable (entity query)',
    incompatibilities: ['Do not combine with metrics.* or segments.date in entity scan'],
    paginationNotes: 'Single row per client CID. Fast execution (<50ms).',
    campaignTypeRestrictions: 'All accounts'
  },
  {
    id: 'q2_mcc_hierarchy',
    title: '2. MCC Linked Client Accounts Discovery',
    fromResource: 'customer_client',
    purpose: 'Enumerate all client accounts linked under the agency MCC account hierarchy.',
    query: `SELECT
  customer_client.client_customer,
  customer_client.level,
  customer_client.status,
  customer_client.descriptive_name,
  customer_client.currency_code,
  customer_client.time_zone,
  customer_client.manager,
  customer_client.hidden
FROM customer_client
WHERE customer_client.status = 'ENABLED'
  AND customer_client.manager = FALSE`,
    segments: ['None'],
    datePredicates: 'None',
    incompatibilities: ['Executed directly against MCC Customer ID'],
    paginationNotes: 'Uses searchStream for bulk MCC account discovery.',
    campaignTypeRestrictions: 'MCC level query only'
  },
  {
    id: 'q3_campaign_daily_performance',
    title: '3. Daily Campaign Performance & Pacing Query',
    fromResource: 'campaign',
    purpose: 'Extract daily spend, impressions, clicks, conversions, and status for pacing and health.',
    query: `SELECT
  campaign.id,
  campaign.name,
  campaign.status,
  campaign.serving_status,
  campaign.primary_status,
  campaign.primary_status_reasons,
  campaign.advertising_channel_type,
  campaign.campaign_budget,
  campaign_budget.amount_micros,
  campaign_budget.is_explicitly_shared,
  metrics.cost_micros,
  metrics.impressions,
  metrics.clicks,
  metrics.conversions,
  metrics.conversions_value,
  segments.date
FROM campaign
WHERE segments.date BETWEEN '{START_DATE}' AND '{END_DATE}'
  AND campaign.status IN ('ENABLED', 'PAUSED')`,
    segments: ['segments.date'],
    datePredicates: "segments.date BETWEEN 'YYYY-MM-DD' AND 'YYYY-MM-DD'",
    incompatibilities: ['Do not select search impression share metrics when querying Display or Video campaigns'],
    paginationNotes: 'Use searchStream. Always convert cost_micros / 1,000,000 in backend.',
    campaignTypeRestrictions: 'Metrics vary by advertising_channel_type'
  },
  {
    id: 'q4_search_impression_share',
    title: '4. Search Impression Share & Lost IS (Search Campaigns Only)',
    fromResource: 'campaign',
    purpose: 'Extract Search Impression Share, Lost IS (Budget), and Lost IS (Rank).',
    query: `SELECT
  campaign.id,
  campaign.name,
  metrics.search_impression_share,
  metrics.search_budget_lost_impression_share,
  metrics.search_rank_lost_impression_share,
  metrics.search_top_impression_share,
  metrics.search_absolute_top_impression_share,
  segments.date
FROM campaign
WHERE campaign.advertising_channel_type = 'SEARCH'
  AND campaign.status = 'ENABLED'
  AND segments.date DURING LAST_30_DAYS`,
    segments: ['segments.date'],
    datePredicates: 'DURING LAST_30_DAYS',
    incompatibilities: ['Incompatible with Performance Max, Display, Video, or Shopping channel types'],
    paginationNotes: 'Values returned as double ratios (e.g. 0.45 = 45%). Zero/Null when traffic volume < threshold.',
    campaignTypeRestrictions: 'SEARCH campaigns only'
  },
  {
    id: 'q5_conversion_actions_health',
    title: '5. Conversion Actions Status & Heartbeat',
    fromResource: 'conversion_action',
    purpose: 'Inspect tag health, status, primary vs secondary, and last entry date.',
    query: `SELECT
  conversion_action.id,
  conversion_action.name,
  conversion_action.status,
  conversion_action.type,
  conversion_action.category,
  conversion_action.primary_for_goal,
  conversion_action.include_in_conversions_metric,
  conversion_action.owner_customer
FROM conversion_action
WHERE conversion_action.status IN ('ENABLED', 'PAUSED')`,
    segments: ['None'],
    datePredicates: 'None',
    incompatibilities: ['Do not join segments.date directly on conversion_action definition'],
    paginationNotes: 'Run daily to catch INACTIVE or UNVERIFIED tag statuses.',
    campaignTypeRestrictions: 'All campaign types'
  },
  {
    id: 'q6_search_waste_sqr',
    title: '6. Search Term Performance & Waste Query',
    fromResource: 'search_term_view',
    purpose: 'Detect non-converting search terms generating excessive spend.',
    query: `SELECT
  search_term_view.search_term,
  search_term_view.status,
  campaign.id,
  campaign.name,
  ad_group.id,
  metrics.cost_micros,
  metrics.clicks,
  metrics.conversions,
  metrics.conversions_value
FROM search_term_view
WHERE segments.date DURING LAST_30_DAYS
  AND metrics.cost_micros > 50000000
  AND metrics.conversions = 0`,
    segments: ['segments.date'],
    datePredicates: 'DURING LAST_30_DAYS',
    incompatibilities: ['Incompatible with Performance Max and Display campaigns'],
    paginationNotes: 'High row count. Always stream and limit to spend thresholds.',
    campaignTypeRestrictions: 'Search & Shopping only'
  },
  {
    id: 'q7_change_event_audit',
    title: '7. Change Event Delta Sync (30-Day Window Limit)',
    fromResource: 'change_event',
    purpose: 'Snapshot external changes made in Google Ads UI or third-party tools.',
    query: `SELECT
  change_event.change_date_time,
  change_event.change_resource_type,
  change_event.change_resource_name,
  change_event.user_email,
  change_event.client_type,
  change_event.resource_change_operation,
  change_event.old_resource,
  change_event.new_resource
FROM change_event
WHERE change_event.change_date_time >= '{LAST_SYNC_TIMESTAMP}'
ORDER BY change_event.change_date_time DESC
LIMIT 10000`,
    segments: ['None'],
    datePredicates: "change_event.change_date_time >= 'YYYY-MM-DD HH:MM:SS'",
    incompatibilities: ['30-day API hard retention limit. Older data cannot be queried!'],
    paginationNotes: 'Mandatory LIMIT 10000 enforced. Safe continuation uses change_date_time timestamp cursor or next_page_token.',
    campaignTypeRestrictions: 'All resources'
  },
  {
    id: 'q8_recommendations_mirror',
    title: '8. Read-Only Recommendations Mirroring',
    fromResource: 'recommendation',
    purpose: 'Retrieve Google AI optimization suggestions for UI display.',
    query: `SELECT
  recommendation.resource_name,
  recommendation.type,
  recommendation.impact.base_metrics.conversion_value,
  recommendation.impact.potential_metrics.conversion_value,
  campaign.id,
  campaign.name
FROM recommendation`,
    segments: ['None'],
    datePredicates: 'None',
    incompatibilities: ['Do not select obsolete fields for deprecated recommendation types'],
    paginationNotes: 'Transient resource. Re-fetch daily; purge deleted resource_names.',
    campaignTypeRestrictions: 'Varies by recommendation type'
  }
];

export const ALERT_PRIMITIVES: AlertPrimitive[] = [
  {
    id: 'alert_zero_conversions',
    name: 'Conversions Heartbeat Failure (Zero Conversion Anomaly)',
    category: 'Conversion Anomaly',
    inputData: ['Daily conversion count by conversion_action', 'Historical 14-day average daily conversions', 'Campaign metrics.cost_micros'],
    condition: 'Account active spend > $100/day AND total primary conversions in last 48 hours = 0 AND 14-day baseline avg > 5 conv/day.',
    observationWindow: '48 Hours rolling',
    falsePositiveRisks: ['Account recently paused', 'B2B accounts with long weekend conversion lulls', 'Major site code update deploy'],
    clearanceCondition: 'Minimum 1 primary conversion recorded in last 24 hours.',
    reliability: 'High (Production Grade)',
    sampleScenario: 'Falcon Clinics tag broke during website update, cost continued at $600/day with 0 conversions for 2 days.'
  },
  {
    id: 'alert_pacing_overspend',
    name: 'Monthly Budget Overspend Exposure',
    category: 'Pacing',
    inputData: ['campaign_budget.amount_micros', 'Monthly cumulative spend (cost_micros)', 'Days elapsed in current calendar month', 'Total days in calendar month'],
    condition: '(Cumulative Spend + (Yesterday Spend * Remaining Days)) > (Monthly Budget Target * 1.15) AND Elapsed Days >= 5.',
    observationWindow: 'Month-To-Date (MTD)',
    falsePositiveRisks: ['Budget was deliberately increased mid-month', 'First 3 days of month high volatility'],
    clearanceCondition: 'Projected month-end spend falls within +10% of monthly budget target.',
    reliability: 'High (Production Grade)',
    sampleScenario: 'Marina Home projected +22% overspend (AED 8,400 variance) due to aggressive Smart Bidding ramp up.'
  },
  {
    id: 'alert_serving_interruption',
    name: 'Campaign Serving Halt / Billing Issue',
    category: 'Serving Interruption',
    inputData: ['campaign.status', 'campaign.serving_status', 'campaign.primary_status_reasons', 'metrics.impressions (today vs 7-day avg)'],
    condition: 'campaign.status = ENABLED AND metrics.impressions (today) == 0 AND 7-day avg impressions > 500/day.',
    observationWindow: '24 Hours',
    falsePositiveRisks: ['Scheduled ad schedule pauses', 'Extreme low search volume days'],
    clearanceCondition: 'Impressions resume > 20% of 7-day average.',
    reliability: 'High (Production Grade)',
    sampleScenario: 'Willow Schools declined credit card caused billing hold; all campaigns stopped serving.'
  },
  {
    id: 'alert_search_waste_high',
    name: 'Excessive Search Waste Ratio',
    category: 'Search Waste',
    inputData: ['search_term_view cost_micros', 'search_term_view conversions', 'Total search campaign spend'],
    condition: '(Spend on 0-conversion search terms with > $50 spend in 30d) / Total Search Spend > 0.25 (25%).',
    observationWindow: '30 Days rolling',
    falsePositiveRisks: ['Broad match testing campaigns launched recently', 'High-value long sales cycle B2B keywords'],
    clearanceCondition: 'Search waste ratio falls below 18%.',
    reliability: 'Medium (Needs Guardrails)',
    sampleScenario: 'Desert Oak spend 31% on irrelevent search queries like "free interior design app".'
  },
  {
    id: 'alert_policy_disapproval',
    name: 'Critical Ad Policy Disapproval',
    category: 'Policy Risk',
    inputData: ['ad_group_ad.policy_summary.approval_status', 'ad_group_ad.policy_summary.policy_topic_entries'],
    condition: 'Count of ad_group_ad records with approval_status = DISAPPROVED > 0 for active campaigns.',
    observationWindow: 'Immediate upon daily scan',
    falsePositiveRisks: ['Trademark approval pending from Google support'],
    clearanceCondition: 'Disapproved ad removed or status updated to APPROVED / APPROVED_LIMITED.',
    reliability: 'High (Production Grade)',
    sampleScenario: 'Healthcare client ad disapproved due to restricted medical terms in headline.'
  }
];

export const API_TRAPS: ApiTrap[] = [
  {
    id: 'trap_micros_conversion',
    title: '1. Ignoring Currency Micros Multiplier',
    category: 'Financial Precision',
    symptom: 'Spend displayed as $100,000,000 instead of $100.00 in report or dashboard.',
    rootCause: 'Google Ads API returns all monetary values (cost_micros, amount_micros, etc.) in micros (1 unit = 1,000,000 micros).',
    correctImplementation: 'Always divide cost_micros by 1,000,000.0 in Python/Django backend service before storing or rendering: `cost = Decimal(row.metrics.cost_micros) / Decimal(1000000)`.',
    impactLevel: 'CRITICAL (Silent Corruption)'
  },
  {
    id: 'trap_zero_conversion_confusion',
    title: '2. Equating Zero Conversions with Broken Tracking',
    category: 'Attribution & Diagnostics',
    symptom: 'False critical alerts sent to account managers every weekend for low-volume accounts.',
    rootCause: 'Zero conversions over 24-48 hours can be normal for low-volume accounts, weekend lulls, or campaigns with long conversion windows.',
    correctImplementation: 'Check `conversion_action.status` first. Verify baseline volume over 14d (>5 conv/day). Do NOT trigger tracking alerts solely on 24-hour zero metrics without checking tag activity.',
    impactLevel: 'HIGH (Inaccurate Metrics)'
  },
  {
    id: 'trap_attribution_lag_restatement',
    title: '3. Overwriting Historical Data Without Re-Fetch Window',
    category: 'Data Integrity',
    symptom: 'Insights OS report shows lower conversions than Google Ads UI for the same historical week.',
    rootCause: 'Google Ads uses `conversions_by_conversion_date`. Conversions occurring days after click are attributed back to the click date, changing past numbers.',
    correctImplementation: 'Maintain a 14-day rolling re-fetch window during daily syncs. Every night, re-fetch the last 14 days of performance metrics to ingest conversion restatements.',
    impactLevel: 'HIGH (Inaccurate Metrics)'
  },
  {
    id: 'trap_pmax_blindspot',
    title: '4. Attempting to Query Keywords/Search Terms for Performance Max',
    category: 'API Compatibility',
    symptom: 'GAQL query returns zero rows or API throws `INVALID_ARGUMENT: Cannot query keyword_view for Performance Max`.',
    rootCause: 'Performance Max campaigns do not use ad_groups or keyword_views. They use asset_groups and asset_group_signals.',
    correctImplementation: 'Filter GAQL queries by `advertising_channel_type = SEARCH` when querying keyword_view or search_term_view. Query `asset_group` for PMax.',
    impactLevel: 'CRITICAL (Silent Corruption)'
  },
  {
    id: 'trap_implicit_segment_join',
    title: '5. Implicit Segment Join Cartesians',
    category: 'Query Mechanics',
    symptom: 'Metric totals (cost, clicks) double or triple when adding segments like `segments.device` or `segments.click_type`.',
    rootCause: 'Adding certain segments forces a breakdown join that can lead to unexpected row duplication if grouped improperly.',
    correctImplementation: 'Keep entity performance queries separated from detailed segment queries. Do not combine device, date, and network segments in a single summary query.',
    impactLevel: 'HIGH (Inaccurate Metrics)'
  },
  {
    id: 'trap_manager_login_header',
    title: '6. Missing or Incorrect login-customer-id Header',
    category: 'Authentication',
    symptom: 'API throws `PERMISSION_DENIED: The caller does not have permission` even though OAuth token is valid.',
    rootCause: 'When accessing client accounts through a manager hierarchy, the HTTP header login-customer-id MUST specify the appropriate authorized Manager Account ID managing that target customer.',
    correctImplementation: 'Set `login-customer-id: {MANAGER_CUSTOMER_ID}` to specify the authorized manager account in the account hierarchy.',
    impactLevel: 'CRITICAL (Silent Corruption)'
  }
];

export const FINAL_CONTRACT_CATEGORIES: FinalContractCategory[] = [
  {
    tier: 'MUST INGEST (V1 Core)',
    color: 'emerald',
    items: [
      {
        name: 'customer & customer_client',
        description: 'Account status, hierarchy, time zones, currency, and descriptive names.',
        justification: 'Essential for multi-account discovery, status, and MCC structure.',
        resource: 'customer, customer_client'
      },
      {
        name: 'campaign & campaign_budget',
        description: 'Campaign serving status, channel types, budget amounts, daily spend, impressions, clicks, conversions.',
        justification: 'Core pacing, budget exposure, and campaign health calculations.',
        resource: 'campaign, campaign_budget, metrics'
      },
      {
        name: 'conversion_action',
        description: 'Conversion action name, status, category, primary vs secondary designation.',
        justification: 'Crucial for conversion heartbeat alerts and distinguishing real leads from secondary events.',
        resource: 'conversion_action'
      },
      {
        name: 'change_event (Snapshotted Daily)',
        description: 'Mutation audit log capturing who changed what and when.',
        justification: 'Google Ads only keeps 30 days. Insights OS must snapshot into PostgreSQL for long-term Change Lab history.',
        resource: 'change_event'
      },
      {
        name: 'recommendation (Read-Only)',
        description: 'Google Ads optimization recommendations and impact scores.',
        justification: 'Provides read-only mirroring of Google recommendations in Command Center.',
        resource: 'recommendation'
      },
      {
        name: 'ad_group_ad (Policy Statuses)',
        description: 'Ad disapproval summaries, policy topics, and approval status.',
        justification: 'Required for policy disapproval alerts and account risk flags.',
        resource: 'ad_group_ad'
      }
    ]
  },
  {
    tier: 'NICE TO HAVE (V1 Optional)',
    color: 'amber',
    items: [
      {
        name: 'search_term_view',
        description: 'Search query report data, non-converting spend queries.',
        justification: 'Enables Search Waste alert primitive and SQR review overdue indicators.',
        resource: 'search_term_view'
      },
      {
        name: 'keyword_view (Quality Score)',
        description: 'Keyword text, match types, quality score, landing page experience, ad relevance.',
        justification: 'Provides deep keyword quality score component insights for Search health.',
        resource: 'keyword_view'
      },
      {
        name: 'asset_group & asset_group_asset',
        description: 'Performance Max asset coverage and performance labels (BEST, GOOD, POOR).',
        justification: 'Enhances Performance Max diagnostic coverage.',
        resource: 'asset_group'
      }
    ]
  },
  {
    tier: 'FUTURE ROADMAP — OUT OF V1',
    color: 'rose',
    items: [
      {
        name: 'Telegram & External Delivery',
        description: 'Direct alert pushing to Telegram bots or Slack webhook channels.',
        justification: 'External delivery channels are out of V1 scope. V1 supports internal in-app alert journaling only.',
        resource: 'External Webhooks'
      },
      {
        name: 'Change Lab & Historical Mutation Ledger',
        description: 'Interactive change lab workspace and automated mutation tracking.',
        justification: 'Interactive change lab workspace and execution workflows belong in future releases.',
        resource: 'Change Lab'
      },
      {
        name: 'Recommendation Execution',
        description: 'Applying or dismissing recommendations automatically via API (RecommendationService).',
        justification: 'V1 provides read-only mirroring. Automated execution is out of V1 scope.',
        resource: 'RecommendationService'
      },
      {
        name: 'Campaign Creation / Mutation APIs',
        description: 'CampaignService.Mutate, AdGroupService.Mutate, BiddingStrategy.Mutate.',
        justification: 'V1 is strictly read-only and diagnostic. No mutation on Google Ads permitted in V1.',
        resource: 'Mutate Services'
      },
      {
        name: 'AI Setup Studio Write-Backs',
        description: 'Drafting or pushing new campaign structures to Google Ads.',
        justification: 'Out of V1 product scope. Must remain deferred.',
        resource: 'Campaign Drafts'
      }
    ]
  }
];
