import React, { useState } from 'react';
import { 
  Cpu, 
  CheckCircle2, 
  ShieldCheck, 
  Layers, 
  Activity, 
  Zap, 
  ArrowRight, 
  Lock, 
  RefreshCw, 
  Server, 
  Key, 
  FileText, 
  AlertTriangle, 
  ListFilter, 
  Play, 
  CheckSquare, 
  XCircle, 
  Clock, 
  Share2, 
  Award,
  Database,
  Terminal,
  RotateCcw,
  GitCommit,
  HelpCircle
} from 'lucide-react';

export const GateCAppServicesView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    | 'services'
    | 'commands'
    | 'queries'
    | 'workflows'
    | 'statemachines'
    | 'ownership'
    | 'failures'
    | 'audit'
    | 'determinism'
    | 'interactions'
    | 'boundary'
    | 'decisions'
  >('services');

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Hero Banner / Header Status */}
      <div className="bg-white rounded-xl border border-[#DADCE0] shadow-xs p-6 border-t-4 border-t-[#1A73E8]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#DADCE0]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-[#E8F0FE] text-[#1A73E8] border border-[#AECBFA] uppercase tracking-wider">
                GATE C CONTRACT
              </span>
              <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-[#E6F4EA] text-[#137333] border border-[#CEEAD6] flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> READY FOR GATE C FREEZE
              </span>
            </div>
            <h2 className="text-xl font-bold text-[#202124] tracking-tight">
              Application Services & Workflow Contract (Gate C)
            </h2>
            <p className="text-xs text-[#5F6368] mt-1 leading-relaxed">
              Platform application architecture contract describing application services, command & query catalogues, workflow orchestration, state machines, deterministic rules, failure contracts, and shared foundation boundaries.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-[#F8F9FA] border border-[#DADCE0] rounded-lg p-3 text-right">
              <div className="text-[10px] uppercase font-bold text-[#5F6368]">Architecture Status</div>
              <div className="text-xs font-bold text-[#137333]">🟢 READY FOR GATE C FREEZE</div>
            </div>
          </div>
        </div>

        {/* Governing Directive Banner */}
        <div className="mt-4 p-4 bg-[#E8F0FE] rounded-lg border border-[#AECBFA] text-xs space-y-2 text-[#1967D2]">
          <div className="flex items-center gap-2 font-bold text-[#174EA6]">
            <ShieldCheck className="w-4 h-4 text-[#1A73E8]" />
            <span>Governing Mandate & Pure Application Contract Rules</span>
          </div>
          <p className="leading-relaxed">
            Gate C builds strictly upon frozen Gate A (Architecture Contract) and frozen Gate B (Domain Model Contract). It contains zero implementation code, zero Django models, zero database schemas, and zero Celery/Redis prescriptions. Asynchronous execution, retries, worker leases, and scheduling interact strictly via the abstract <strong className="font-semibold text-[#174EA6]">Durable Job Foundation</strong>.
          </p>
        </div>

        {/* Inner Section Navigation */}
        <div className="mt-6 flex overflow-x-auto gap-2 pb-1 border-t border-[#DADCE0] pt-4 scrollbar-none text-xs font-medium">
          {[
            { id: 'services', label: '1. Application Services' },
            { id: 'commands', label: '2. Command Catalogue' },
            { id: 'queries', label: '3. Query Catalogue' },
            { id: 'workflows', label: '4. Workflow Contracts' },
            { id: 'statemachines', label: '5. State Machines' },
            { id: 'ownership', label: '6. Ownership Matrix' },
            { id: 'failures', label: '7. Failure Contracts' },
            { id: 'audit', label: '8. Audit & Provenance' },
            { id: 'determinism', label: '9. Deterministic Rules' },
            { id: 'interactions', label: '10. Foundation Matrix' },
            { id: 'boundary', label: '11. V1 Scope Boundary' },
            { id: 'decisions', label: '12. Founder Decisions' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-[#1A73E8] text-white font-bold shadow-xs'
                  : 'bg-[#F8F9FA] text-[#5F6368] hover:text-[#202124] border border-[#DADCE0]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* SECTION 1: APPLICATION SERVICE CATALOGUE */}
      {activeTab === 'services' && (
        <div className="bg-white rounded-xl border border-[#DADCE0] shadow-xs overflow-hidden">
          <div className="p-4 bg-[#F8F9FA] border-b border-[#DADCE0] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#1A73E8]" />
              <h3 className="font-bold text-sm text-[#202124]">1. Application Service Catalogue</h3>
            </div>
            <span className="text-xs text-[#5F6368] font-mono bg-[#E8F0FE] text-[#1A73E8] px-2 py-0.5 rounded border border-[#AECBFA]">
              12 Core Application Services Defined
            </span>
          </div>

          <div className="p-5 space-y-6">
            {[
              {
                title: 'Account Synchronization Service',
                purpose: 'Orchestrates fetching and normalizing top-level Google Ads account metadata and MCC hierarchy structures.',
                responsibilities: 'Dispatches GAQL customer queries, updates local GoogleAdsAccount entity replicas, verifies active OAuth connections, detects suspended CIDs.',
                inputs: 'BusinessRecord Tenant ID, Customer ID (CID), Authentication Token Reference ID',
                outputs: 'Synchronized GoogleAdsAccount Aggregate Root, ConnectionStatus enum result',
                invariants: 'Account must belong to an active BusinessRecord tenant. Tenant ID isolation is strictly enforced.',
                transitions: 'ConnectionStatus: UNCHECKED -> ACTIVE / REAUTH_REQUIRED / SUSPENDED',
                audit: 'Logs AccountSyncCompleted or AccountSyncFailed event to Audit Log.',
                failure: 'Marks account connection as REAUTH_REQUIRED on token invalidation; yields non-retryable authorization failure.',
                interactions: 'Consumes Integration Foundation for OAuth tokens; emits tasks to Durable Job Foundation.'
              },
              {
                title: 'Campaign Synchronization Service',
                purpose: 'Ingests campaign structures, channel types, serving statuses, primary status reasons, and daily budgets.',
                responsibilities: 'Fetches campaign and campaign_budget resources via GAQL, reconciles child budget links, updates CampaignAggregate boundaries.',
                inputs: 'GoogleAdsAccount Aggregate Root, Sync Date Range',
                outputs: 'List of updated CampaignAggregate entities and associated CampaignBudgets',
                invariants: 'Campaigns cannot exist without a parent GoogleAdsAccount. Removed campaigns are marked soft-deleted.',
                transitions: 'CampaignServingStatus: UNKNOWN -> SERVING / ENDED / SUSPENDED / PENDING',
                audit: 'Emits CampaignStructureUpdated with count of updated campaign aggregates.',
                failure: 'Partial batch failure causes campaign-level error recording while persisting valid campaign entities.',
                interactions: 'Queries Google Ads API via Integration Foundation; records task progress in Work Management.'
              },
              {
                title: 'Metric Reconciliation Service',
                purpose: 'Retrieves, calculates, and reconciles daily and hourly metric facts across a 14-day rolling window.',
                responsibilities: 'Fetches raw impressions, clicks, cost_micros, conversions, and conversion_value; executes 14-day attribution lag overwrites.',
                inputs: 'GoogleAdsAccount CID, Campaign IDs, Date Range (Target Date - 14 Days)',
                outputs: 'Reconciled MetricSnapshot daily and hourly fact tables',
                invariants: 'MetricSnapshot rows are strictly immutable once past the 14-day reconciliation window. Cost micros divided by 1,000,000.0 for monetary display.',
                transitions: 'MetricSnapshot State: PENDING_ATTRIBUTION -> FINALIZED',
                audit: 'Logs MetricReconciliationExecuted with record count and updated metric deltas.',
                failure: 'If API returns rate limit error (RESOURCE_EXHAUSTED), pauses execution and requests backoff reschedule from Durable Job Foundation.',
                interactions: 'Schedules recurring 14-day rolling passes via Durable Job Foundation; writes immutable facts to Google Ads Domain.'
              },
              {
                title: 'Change Event Snapshot Service',
                purpose: 'Captures Google Ads mutation audit logs and creates permanent change event records in Insights OS database.',
                responsibilities: 'Queries change_event resource, strips noise events, formats before/after JSON diffs, persists permanently to override API 30-day purge limit.',
                inputs: 'Customer ID, Last Sync Timestamp',
                outputs: 'List of created ChangeEventSnapshot entities',
                invariants: 'Change events are permanently immutable once written. Never deleted or modified.',
                transitions: 'ChangeEvent Lifecycle: INGESTED -> PERMANENT_STORED',
                audit: 'Emits ChangeEventCaptured with actor email and resource diff summaries.',
                failure: 'API error during fetch logs warning and schedules high-priority retry prior to 30-day Google purge threshold.',
                interactions: 'Stores historical mutation records for Change History queries; delegates scheduled pulls to Durable Job Foundation.'
              },
              {
                title: 'Recommendation Synchronization Service',
                purpose: 'Maintains a read-only mirror of Google Ads optimization recommendations and projected metric impacts.',
                responsibilities: 'Fetches active recommendations, parses cost and conversion impact estimates, marks dismissed items.',
                inputs: 'GoogleAdsAccount CID, Campaign IDs',
                outputs: 'Updated RecommendationSnapshot mirror entities',
                invariants: 'Recommendations in V1 are strictly read-only mirrors. No mutate or apply calls are permitted in V1.',
                transitions: 'Recommendation State: ACTIVE -> DISMISSED / APPLIED_EXTERNALLY',
                audit: 'Logs RecommendationSnapshotUpdated with count of active suggestions.',
                failure: 'If recommendation resource is unavailable for account type (e.g. MCC), swallows error gracefully and marks recommendation status as UNAVAILABLE.',
                interactions: 'Exposes mirror data for Recommendation Dashboard queries.'
              },
              {
                title: 'Alert Evaluation Service',
                purpose: 'Executes deterministic alert rules against reconciled MetricSnapshots, CampaignAggregates, and ConversionActions.',
                responsibilities: 'Evaluates 5 core primitives (Conversion Zero Heartbeat, Pacing Exposure, Serving Interruption, Search Waste Ratio, Policy Disapproval).',
                inputs: 'MetricSnapshot facts, CampaignAggregate state, ConversionAction baselines',
                outputs: 'Generated or updated AlertInstance entities',
                invariants: 'Alert rules are 100% deterministic mathematical functions. Zero random or non-repeatable logic.',
                transitions: 'AlertStatus: INACTIVE -> ACTIVE / CLEARED',
                audit: 'Logs AlertTriggered or AlertCleared with snapshot data payload.',
                failure: 'Data insufficiency (e.g. < 48h history) causes alert evaluation to skip execution with DATA_INSUFFICIENT status without throwing errors.',
                interactions: 'Triggers Journal Recording Service and emits notifications to Notification Foundation.'
              },
              {
                title: 'Alert Resolution Service',
                purpose: 'Manages human operator lifecycle transitions for active alert instances (Acknowledgement, Resolution, Clearance).',
                responsibilities: 'Validates staff authorization, updates AlertInstance status, appends operator notes, evaluates automated clearance conditions.',
                inputs: 'AlertInstance ID, Operator User Reference, Target Action (Acknowledge / Resolve), Operator Notes',
                outputs: 'Updated AlertInstance state',
                invariants: 'Resolved alerts cannot return to ACTIVE unless re-triggered by a subsequent distinct metric failure period.',
                transitions: 'AlertStatus: ACTIVE -> ACKNOWLEDGED -> RESOLVED',
                audit: 'Logs AlertStateChanged with operator ID and timestamp to Journal Recording Service.',
                failure: 'Invalid state transition raises CommandValidationError without altering alert state.',
                interactions: 'Interacts with Work Management for staff task assignment; updates Notification Foundation.'
              },
              {
                title: 'Journal Recording Service',
                purpose: 'Appends immutable entries to the Insights OS 24-Hour Journal timeline for account activity audit.',
                responsibilities: 'Constructs JournalEntry records for alert triggers, state changes, manual refreshes, and sync failures.',
                inputs: 'Event Type, BusinessRecord Tenant ID, Account CID, Message, Metadata Payload, Actor',
                outputs: 'Immutable JournalEntry entity',
                invariants: 'Journal records are append-only. No update or delete operations are exposed or permitted.',
                transitions: 'JournalEntry Lifecycle: RECORDED -> PERMANENT_TIMELINE',
                audit: 'Serves as the foundational audit log for tenant operational visibility.',
                failure: 'Failures in journal recording fall back to emergency system logs without halting core synchronization workflows.',
                interactions: 'Provides data feed for Journal Timeline Query and Reporting.'
              },
              {
                title: 'Health Verification Service',
                purpose: 'Assesses API connectivity, token validity, credential expiration, and rate-limit headroom for linked accounts.',
                responsibilities: 'Executes lightweight ping query against Google Ads API, validates token scopes, reports diagnostic status.',
                inputs: 'GoogleAdsAccount CID, Authentication Reference ID',
                outputs: 'HealthStatus value object (HEALTHY, DEGRADED, REAUTH_REQUIRED, RATE_LIMITED)',
                invariants: 'Health checks must be lightweight and idempotent, consuming minimal API quota.',
                transitions: 'AccountHealthState: HEALTHY <-> DEGRADED / REAUTH_REQUIRED',
                audit: 'Emits AccountHealthCheckExecuted on state degradation.',
                failure: 'Connectivity failures set state to DEGRADED; auth failures set state to REAUTH_REQUIRED.',
                interactions: 'Consults Integration Foundation; updates Work Management for operational alerts.'
              },
              {
                title: 'Manual Refresh Service',
                purpose: 'Handles user-initiated request to trigger immediate synchronization outside of scheduled cron cycles.',
                responsibilities: 'Validates user rate limits, checks for concurrent syncs, enqueues high-priority job with Durable Job Foundation.',
                inputs: 'BusinessRecord Tenant ID, Customer ID, Target Sync Scope (Account, Campaign, Metrics)',
                outputs: 'Job Execution ID, RefreshRequestStatus (ACCEPTED, QUEUED, REJECTED_CONCURRENT)',
                invariants: 'Only 1 active refresh job per Customer ID is permitted at any given moment. Duplicate clicks are rejected idempotently.',
                transitions: 'RefreshStatus: REQUESTED -> QUEUED -> IN_PROGRESS -> COMPLETED',
                audit: 'Logs ManualRefreshRequested with requesting user ID.',
                failure: 'If sync job fails, updates request status to FAILED and records error message in Journal.',
                interactions: 'Dispatches task to Durable Job Foundation; updates UI via Read Model Service.'
              },
              {
                title: 'Read Model Service',
                purpose: 'Constructs optimized, read-only dashboard view-models for UI consumption without mutating domain state.',
                responsibilities: 'Aggregates MetricSnapshots, CampaignAggregates, and AlertInstances into denormalized DTO structures for fast UI rendering.',
                inputs: 'Tenant ID, Customer ID, Date Range, Filter Parameters',
                outputs: 'Read-only View Model DTOs (AccountDashboardView, CampaignDetailView, AlertSummaryView)',
                invariants: 'Read models are strictly read-only. Zero side effects or mutations allowed during query execution.',
                transitions: 'N/A (Stateless Query Aggregator)',
                audit: 'Does not produce audit entries for standard read queries.',
                failure: 'Returns empty or partial DTO with DataFreshnessIndicator flagging missing sections.',
                interactions: 'Consumes Google Ads Domain state and Future Reporting projections.'
              },
              {
                title: 'Command Validation Service',
                purpose: 'Enforces business pre-conditions, tenant authorization, and parameter validation before executing commands.',
                responsibilities: 'Validates Tenant ID ownership, CID formatting, parameter ranges, and operation authorization.',
                inputs: 'Command Payload, Operator Identity, BusinessRecord Scope',
                outputs: 'ValidationResult (VALID / INVALID with Error List)',
                invariants: 'Every command MUST pass Command Validation Service prior to domain service execution.',
                transitions: 'N/A (Pre-execution Gatekeeper)',
                audit: 'Logs CommandValidationFailed on security or integrity violations.',
                failure: 'Rejects execution immediately with clear business validation errors.',
                interactions: 'Interacts with BusinessRecord Tenant boundary and Integration Foundation.'
              }
            ].map((service, index) => (
              <div key={index} className="p-4 bg-[#F8F9FA] rounded-xl border border-[#DADCE0] space-y-3">
                <div className="flex items-center justify-between border-b border-[#DADCE0] pb-2">
                  <span className="font-bold text-sm text-[#202124] flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-[#1A73E8] text-white text-[10px] rounded font-mono font-bold">
                      SVC-{index + 1}
                    </span>
                    {service.title}
                  </span>
                  <span className="text-[11px] font-mono text-[#5F6368]">{service.purpose}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="space-y-1.5">
                    <div><strong className="text-[#202124]">Responsibilities:</strong> <span className="text-[#5F6368]">{service.responsibilities}</span></div>
                    <div><strong className="text-[#202124]">Inputs:</strong> <code className="text-[#1A73E8] font-mono">{service.inputs}</code></div>
                    <div><strong className="text-[#202124]">Outputs:</strong> <code className="text-[#137333] font-mono">{service.outputs}</code></div>
                    <div><strong className="text-[#202124]">Business Invariants:</strong> <span className="text-[#3C4043]">{service.invariants}</span></div>
                  </div>
                  <div className="space-y-1.5">
                    <div><strong className="text-[#202124]">State Transitions:</strong> <span className="text-[#1A73E8] font-mono">{service.transitions}</span></div>
                    <div><strong className="text-[#202124]">Audit Responsibility:</strong> <span className="text-[#3C4043]">{service.audit}</span></div>
                    <div><strong className="text-[#202124]">Failure Behaviour:</strong> <span className="text-[#B06000]">{service.failure}</span></div>
                    <div><strong className="text-[#202124]">Shared Foundations:</strong> <span className="text-[#174EA6]">{service.interactions}</span></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 2: COMMAND CATALOGUE */}
      {activeTab === 'commands' && (
        <div className="bg-white rounded-xl border border-[#DADCE0] shadow-xs overflow-hidden">
          <div className="p-4 bg-[#F8F9FA] border-b border-[#DADCE0] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#1A73E8]" />
              <h3 className="font-bold text-sm text-[#202124]">2. Command Catalogue</h3>
            </div>
            <span className="text-xs text-[#5F6368] font-mono bg-[#E8F0FE] text-[#1A73E8] px-2 py-0.5 rounded border border-[#AECBFA]">
              10 Core Application Commands Defined
            </span>
          </div>

          <div className="p-5 overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#F8F9FA] border-b border-[#DADCE0] text-[11px] font-semibold text-[#5F6368] uppercase">
                  <th className="p-3">Command Name</th>
                  <th className="p-3">Preconditions</th>
                  <th className="p-3">Postconditions</th>
                  <th className="p-3">Business Invariants</th>
                  <th className="p-3">Ownership</th>
                  <th className="p-3">Failure & Retry Ownership</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DADCE0] text-[11px] text-[#3C4043]">
                {[
                  {
                    name: 'RefreshAccount',
                    pre: 'Valid BusinessRecord Tenant ID; active OAuth reference.',
                    post: 'GoogleAdsAccount entity updated with latest metadata.',
                    inv: 'Tenant ownership verified; account active.',
                    owner: 'Account Synchronization Service',
                    fail: 'Marks account REAUTH_REQUIRED if auth invalid. Retried via Durable Job Foundation.'
                  },
                  {
                    name: 'RefreshCampaigns',
                    pre: 'GoogleAdsAccount exists & status is ACTIVE.',
                    post: 'CampaignAggregates & Budgets synchronized.',
                    inv: 'All campaigns linked to target Customer ID.',
                    owner: 'Campaign Synchronization Service',
                    fail: 'Partial sync saved; failed campaigns logged. Retried via Durable Job Foundation.'
                  },
                  {
                    name: 'RefreshMetrics',
                    pre: 'CampaignAggregates exist; target date range specified.',
                    post: 'MetricSnapshots updated for 14-day window.',
                    inv: 'Cost micros divided by 1,000,000.0.',
                    owner: 'Metric Reconciliation Service',
                    fail: 'Rate limit error triggers backoff reschedule with Durable Job Foundation.'
                  },
                  {
                    name: 'RefreshRecommendations',
                    pre: 'GoogleAdsAccount active; read-only scope enabled.',
                    post: 'RecommendationSnapshot mirror updated.',
                    inv: 'Read-only mirror; no mutate execution.',
                    owner: 'Recommendation Synchronization Service',
                    fail: 'Swallows unsupported resource errors gracefully without retrying.'
                  },
                  {
                    name: 'SnapshotChangeEvents',
                    pre: 'GoogleAdsAccount active; sync cursor defined.',
                    post: 'ChangeEventSnapshot stored permanently.',
                    inv: 'Permanent retention; overrides 30d API purge.',
                    owner: 'Change Event Snapshot Service',
                    fail: 'Schedules high-priority retry before 30-day Google purge cutoff.'
                  },
                  {
                    name: 'EvaluateAlerts',
                    pre: 'MetricSnapshots reconciled for target window.',
                    post: 'AlertInstances generated or cleared.',
                    inv: 'Deterministic evaluation functions.',
                    owner: 'Alert Evaluation Service',
                    fail: 'Insufficient data logs DATA_INSUFFICIENT; no alert emitted.'
                  },
                  {
                    name: 'AcknowledgeAlert',
                    pre: 'AlertInstance in ACTIVE state; valid staff user.',
                    post: 'AlertInstance status set to ACKNOWLEDGED.',
                    inv: 'Requires operator identity & timestamp.',
                    owner: 'Alert Resolution Service',
                    fail: 'Command rejected if alert already RESOLVED or CLEARED.'
                  },
                  {
                    name: 'ResolveAlert',
                    pre: 'AlertInstance in ACKNOWLEDGED/ACTIVE state.',
                    post: 'AlertInstance status set to RESOLVED.',
                    inv: 'Appends operator resolution notes.',
                    owner: 'Alert Resolution Service',
                    fail: 'Rejected if missing mandatory resolution notes.'
                  },
                  {
                    name: 'RefreshHealth',
                    pre: 'GoogleAdsAccount exists in Insights OS.',
                    post: 'HealthStatus updated in account model.',
                    inv: 'Lightweight ping; zero quota waste.',
                    owner: 'Health Verification Service',
                    fail: 'Sets state to DEGRADED; notifies Work Management.'
                  },
                  {
                    name: 'RecordJournalEntry',
                    pre: 'Valid event payload & BusinessRecord scope.',
                    post: 'Immutable JournalEntry appended.',
                    inv: 'Append-only; zero mutation/deletion.',
                    owner: 'Journal Recording Service',
                    fail: 'System log fallback; core workflow continues uninterrupted.'
                  }
                ].map((cmd, idx) => (
                  <tr key={idx} className="hover:bg-[#F8F9FA]">
                    <td className="p-3 font-bold text-[#1A73E8] font-mono">{cmd.name}</td>
                    <td className="p-3">{cmd.pre}</td>
                    <td className="p-3 text-[#137333]">{cmd.post}</td>
                    <td className="p-3 text-[#3C4043]">{cmd.inv}</td>
                    <td className="p-3 font-semibold text-[#202124]">{cmd.owner}</td>
                    <td className="p-3 text-[#B06000]">{cmd.fail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* SECTION 3: QUERY CATALOGUE */}
      {activeTab === 'queries' && (
        <div className="bg-white rounded-xl border border-[#DADCE0] shadow-xs overflow-hidden">
          <div className="p-4 bg-[#F8F9FA] border-b border-[#DADCE0] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ListFilter className="w-4 h-4 text-[#1A73E8]" />
              <h3 className="font-bold text-sm text-[#202124]">3. Query Catalogue</h3>
            </div>
            <span className="text-xs text-[#5F6368] font-mono bg-[#E8F0FE] text-[#1A73E8] px-2 py-0.5 rounded border border-[#AECBFA]">
              9 Core Read Queries Defined
            </span>
          </div>

          <div className="p-5 overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#F8F9FA] border-b border-[#DADCE0] text-[11px] font-semibold text-[#5F6368] uppercase">
                  <th className="p-3">Query Name</th>
                  <th className="p-3">Source of Truth</th>
                  <th className="p-3">Freshness Expectation</th>
                  <th className="p-3">Ownership</th>
                  <th className="p-3">Read-Only Guarantees</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DADCE0] text-[11px] text-[#3C4043]">
                {[
                  {
                    name: 'ListAccounts',
                    source: 'Insights OS DB (GoogleAdsAccount Replicas)',
                    freshness: 'Real-time local DB query',
                    owner: 'Read Model Service',
                    guarantee: '100% read-only; scoped strictly by BusinessRecord Tenant ID.'
                  },
                  {
                    name: 'AccountDashboard',
                    source: 'Reconciled MetricSnapshots + AlertInstances',
                    freshness: 'Hourly / Post 14-day reconciliation',
                    owner: 'Read Model Service',
                    guarantee: 'Denormalized view model; zero mutation side effects.'
                  },
                  {
                    name: 'CampaignDashboard',
                    source: 'CampaignAggregates + MetricSnapshots',
                    freshness: 'Hourly synced facts',
                    owner: 'Read Model Service',
                    guarantee: 'Read-only aggregations; cost micros converted to currency standard.'
                  },
                  {
                    name: 'CampaignDetail',
                    source: 'CampaignAggregate + AdGroups + AdGroupAds',
                    freshness: 'Hourly synced structure',
                    owner: 'Read Model Service',
                    guarantee: 'Exposes policy disapproval reasons; zero write endpoints.'
                  },
                  {
                    name: 'AlertDashboard',
                    source: 'AlertInstances + JournalEntries',
                    freshness: 'Real-time local state',
                    owner: 'Read Model Service',
                    guarantee: 'Presents active & acknowledged alerts with full trigger payloads.'
                  },
                  {
                    name: 'RecommendationDashboard',
                    source: 'RecommendationSnapshot Mirrors',
                    freshness: 'Daily sync pass',
                    owner: 'Read Model Service',
                    guarantee: 'Read-only mirror; execution actions disabled in V1.'
                  },
                  {
                    name: 'ChangeHistory',
                    source: 'ChangeEventSnapshot Permanent Store',
                    freshness: 'Permanent historical ledger',
                    owner: 'Read Model Service',
                    guarantee: 'Reads immutable historical diffs bypassing Google 30d limit.'
                  },
                  {
                    name: 'HealthStatus',
                    source: 'GoogleAdsAccount Health Attributes',
                    freshness: 'Last health check execution',
                    owner: 'Read Model Service',
                    guarantee: 'Returns diagnostic connectivity & credential status.'
                  },
                  {
                    name: 'JournalTimeline',
                    source: '24-Hour Journal Ledger',
                    freshness: 'Real-time append feed',
                    owner: 'Read Model Service',
                    guarantee: 'Append-only historical audit timeline for agency staff.'
                  }
                ].map((q, idx) => (
                  <tr key={idx} className="hover:bg-[#F8F9FA]">
                    <td className="p-3 font-bold text-[#1A73E8] font-mono">{q.name}</td>
                    <td className="p-3 font-medium text-[#202124]">{q.source}</td>
                    <td className="p-3 font-mono text-[#137333]">{q.freshness}</td>
                    <td className="p-3 font-semibold">{q.owner}</td>
                    <td className="p-3 text-[#5F6368]">{q.guarantee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* SECTION 4: WORKFLOW CONTRACTS */}
      {activeTab === 'workflows' && (
        <div className="bg-white rounded-xl border border-[#DADCE0] shadow-xs overflow-hidden">
          <div className="p-4 bg-[#F8F9FA] border-b border-[#DADCE0] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Share2 className="w-4 h-4 text-[#1A73E8]" />
              <h3 className="font-bold text-sm text-[#202124]">4. Workflow Contracts</h3>
            </div>
            <span className="text-xs text-[#5F6368] font-mono bg-[#E8F0FE] text-[#1A73E8] px-2 py-0.5 rounded border border-[#AECBFA]">
              10 End-to-End Workflows Defined
            </span>
          </div>

          <div className="p-5 space-y-6">
            {[
              {
                title: 'WF-1: Initial Account Synchronization Workflow',
                entry: 'BusinessRecord Tenant connects new Google Ads Account via Integration Foundation.',
                sequence: '1. CommandValidationService checks Tenant & CID validity -> 2. AccountSyncService fetches customer & customer_client via GAQL -> 3. Persists GoogleAdsAccount root aggregate -> 4. Dispatches CampaignSync & MetricSync tasks to Durable Job Foundation -> 5. Records InitialSyncCompleted in Journal.',
                decision: 'If account is MCC manager, recursively traverse child client CIDs; if single client CID, bind directly to Tenant.',
                exit: 'GoogleAdsAccount active, initial campaign structure populated, sync completed.',
                failure: 'OAuth failure sets state REAUTH_REQUIRED; emits alert via Work Management.',
                recovery: 'User completes OAuth flow in Integration Foundation; triggers manual or auto resume.'
              },
              {
                title: 'WF-2: Scheduled Daily & Hourly Synchronization Workflow',
                entry: 'Durable Job Foundation cron schedule triggers sync cycle.',
                sequence: '1. Fetch active GoogleAdsAccounts for tenant -> 2. CampaignSyncService updates campaign & budget aggregates -> 3. MetricReconciliationService fetches hourly/daily facts -> 4. AlertEvaluationService executes deterministic rules -> 5. Append JournalEntry.',
                decision: 'Check rate-limit token bucket before each account batch; defer lower-priority accounts if quota low.',
                exit: 'Metrics reconciled, alerts updated, task completed in Durable Job Foundation.',
                failure: 'API network error marks task FAILED; Durable Job Foundation executes exponential backoff retry.',
                recovery: 'Durable Job Foundation retries execution up to 5 times before flagging DEGRADED in HealthStatus.'
              },
              {
                title: 'WF-3: Manual Refresh Workflow',
                entry: 'Staff operator clicks "Refresh Account Data" in UI.',
                sequence: '1. ManualRefreshService validates rate-limit (max 1 refresh per CID per 5 min) -> 2. Check for running sync job -> 3. Enqueue high-priority job with Durable Job Foundation -> 4. Execute targeted sync -> 5. Return updated view-model via Read Model Service.',
                decision: 'If sync job already running for CID, attach to existing job stream instead of spawning duplicate.',
                exit: 'Refresh completed, UI updated, JournalEntry logged.',
                failure: 'Rate limit exceedance rejects request idempotently with friendly notification.',
                recovery: 'User waits for cooldown window before re-triggering.'
              },
              {
                title: 'WF-4: 14-Day Rolling Metric Reconciliation Workflow',
                entry: 'Nightly scheduled job dispatched by Durable Job Foundation.',
                sequence: '1. Calculate target window (Today - 14 Days) -> 2. Fetch daily metrics & conversion restatements -> 3. Overwrite MetricSnapshot facts in local DB -> 4. Re-evaluate Conversion Zero & Pacing Alerts -> 5. Log ReconciliationCompleted.',
                decision: 'If conversion value changes exceed 20% delta, flag ConversionRestatementDetected in Journal.',
                exit: 'Historical conversion attribution updated to match canonical Google Ads API restatements.',
                failure: 'Database write conflict retries via database transaction backoff.',
                recovery: 'Transaction retries automatically; preserves data consistency.'
              },
              {
                title: 'WF-5: Recommendation Refresh Workflow',
                entry: 'Daily scheduled trigger from Durable Job Foundation.',
                sequence: '1. RecommendationSyncService calls recommendation GAQL resource -> 2. Parse projected cost & conversion impact -> 3. Update RecommendationSnapshot mirror -> 4. Mark dismissed items.',
                decision: 'If account is PMax-only or unsupported channel, set RecommendationStatus to NOT_APPLICABLE.',
                exit: 'RecommendationSnapshot mirror synchronized for agency review.',
                failure: 'API error swallows exception and logs warning without halting core metrics sync.',
                recovery: 'Next daily scheduled run attempts fresh pull.'
              },
              {
                title: 'WF-6: Deterministic Alert Evaluation Workflow',
                entry: 'Triggered automatically post-MetricReconciliation or ManualRefresh.',
                sequence: '1. AlertEvaluationService loads reconciled MetricSnapshots -> 2. Evaluate 5 deterministic alert primitives -> 3. If condition met & alert inactive, create AlertInstance (ACTIVE) -> 4. If condition cleared, transition AlertInstance to CLEARED -> 5. Emit payload to Notification Foundation & Journal.',
                decision: 'Check if active alert exists; if yes, update snapshot payload; if no, spawn new AlertInstance.',
                exit: 'Alert state machine updated; notifications dispatched.',
                failure: 'Data insufficiency skips alert evaluation safely without raising error.',
                recovery: 'Next metric sync pass re-evaluates rules once data is complete.'
              },
              {
                title: 'WF-7: Alert Acknowledgement Workflow',
                entry: 'Staff operator clicks "Acknowledge" on active alert in UI.',
                sequence: '1. CommandValidationService verifies staff authorization -> 2. AlertResolutionService validates current state (ACTIVE) -> 3. Transition AlertInstance to ACKNOWLEDGED -> 4. Record operator ID & timestamp -> 5. Log JournalEntry & notify Work Management.',
                decision: 'If alert is already ACKNOWLEDGED or RESOLVED, command returns idempotent success without state change.',
                exit: 'Alert marked ACKNOWLEDGED; notification silenced in Work Management.',
                failure: 'Unauthorized staff request yields PermissionDenied error.',
                recovery: 'Operator re-authenticates with proper permissions.'
              },
              {
                title: 'WF-8: Alert Resolution Workflow',
                entry: 'Staff operator enters resolution notes and submits "Resolve Alert".',
                sequence: '1. AlertResolutionService checks mandatory resolution notes -> 2. Validate current state -> 3. Transition AlertInstance to RESOLVED -> 4. Append operator notes -> 5. Log JournalEntry.',
                decision: 'If resolution notes empty, command validation fails immediately.',
                exit: 'Alert state set to RESOLVED; removed from active Needs Attention dashboard.',
                failure: 'Validation failure returns clear error message to operator UI.',
                recovery: 'Operator provides required resolution notes and resubmits.'
              },
              {
                title: 'WF-9: Health Verification Workflow',
                entry: 'Periodic timer or system health ping.',
                sequence: '1. HealthVerificationService executes lightweight customer status query -> 2. Validate OAuth token responsiveness -> 3. Check quota usage -> 4. Update HealthStatus attribute on GoogleAdsAccount -> 5. Notify Work Management if state degrades.',
                decision: 'If response time > 5000ms or 429 received, set state to DEGRADED; if 401/403 received, set REAUTH_REQUIRED.',
                exit: 'HealthStatus updated; operational dashboard refreshed.',
                failure: 'Connectivity loss sets DEGRADED status without crashing application.',
                recovery: 'Automatic re-ping resumes HEALTHY status upon API recovery.'
              },
              {
                title: 'WF-10: Journal Recording Workflow',
                entry: 'Invoked by any application service emitting operational events.',
                sequence: '1. JournalRecordingService receives event payload -> 2. Format append-only JournalEntry DTO -> 3. Write to PostgreSQL Journal ledger -> 4. Publish stream to Read Model Service.',
                decision: 'N/A (Strict append-only logging pipeline).',
                exit: 'JournalEntry permanently recorded in 24-Hour Journal timeline.',
                failure: 'DB write error falls back to standard system logging.',
                recovery: 'Primary application transaction remains unblocked.'
              }
            ].map((wf, idx) => (
              <div key={idx} className="p-4 bg-[#F8F9FA] rounded-xl border border-[#DADCE0] space-y-2.5">
                <div className="flex items-center justify-between border-b border-[#DADCE0] pb-2">
                  <strong className="text-xs text-[#202124] font-bold">{wf.title}</strong>
                  <span className="text-[11px] font-mono text-[#1A73E8]">Entry: {wf.entry}</span>
                </div>
                <div className="text-xs space-y-1.5 text-[#3C4043]">
                  <div><strong className="text-[#202124]">Sequence:</strong> <span className="text-[#5F6368]">{wf.sequence}</span></div>
                  <div><strong className="text-[#202124]">Decision Points:</strong> <span className="text-[#174EA6]">{wf.decision}</span></div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pt-1 text-[11px]">
                    <div className="p-2 bg-white rounded border border-[#DADCE0]"><strong className="text-[#137333]">Exit State:</strong> {wf.exit}</div>
                    <div className="p-2 bg-white rounded border border-[#DADCE0]"><strong className="text-[#B06000]">Failure State:</strong> {wf.failure}</div>
                    <div className="p-2 bg-white rounded border border-[#DADCE0]"><strong className="text-[#1A73E8]">Recovery Ownership:</strong> {wf.recovery}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 5: STATE MACHINES */}
      {activeTab === 'statemachines' && (
        <div className="bg-white rounded-xl border border-[#DADCE0] shadow-xs overflow-hidden">
          <div className="p-4 bg-[#F8F9FA] border-b border-[#DADCE0] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <RotateCcw className="w-4 h-4 text-[#1A73E8]" />
              <h3 className="font-bold text-sm text-[#202124]">5. Domain State Machines</h3>
            </div>
            <span className="text-xs text-[#5F6368] font-mono bg-[#E8F0FE] text-[#1A73E8] px-2 py-0.5 rounded border border-[#AECBFA]">
              5 Core Lifecycle State Machines
            </span>
          </div>

          <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: '1. Synchronization Lifecycle State Machine',
                allowed: 'UNINITIALIZED -> QUEUED -> IN_PROGRESS -> COMPLETED / PARTIAL_SUCCESS / FAILED',
                forbidden: 'COMPLETED -> IN_PROGRESS directly (must transition via QUEUED); FAILED -> COMPLETED without re-execution.',
                terminal: 'COMPLETED, PARTIAL_SUCCESS (within single run boundary).',
                recovery: 'FAILED transitions to QUEUED upon Durable Job retry dispatch.'
              },
              {
                title: '2. Health Lifecycle State Machine',
                allowed: 'UNCHECKED -> HEALTHY <-> DEGRADED <-> REAUTH_REQUIRED -> SUSPENDED',
                forbidden: 'SUSPENDED -> HEALTHY without manual re-authorization; REAUTH_REQUIRED -> HEALTHY without token renewal.',
                terminal: 'SUSPENDED (requires administrative reactivation).',
                recovery: 'REAUTH_REQUIRED transitions to HEALTHY via Integration Foundation OAuth token refresh.'
              },
              {
                title: '3. Alert Lifecycle State Machine',
                allowed: 'INACTIVE -> ACTIVE -> ACKNOWLEDGED -> RESOLVED / CLEARED',
                forbidden: 'RESOLVED -> ACKNOWLEDGED; CLEARED -> ACKNOWLEDGED; INACTIVE -> RESOLVED directly.',
                terminal: 'RESOLVED, CLEARED.',
                recovery: 'If metric failure recurs after RESOLVED/CLEARED, a NEW AlertInstance is spawned.'
              },
              {
                title: '4. Recommendation Lifecycle State Machine',
                allowed: 'UNFETCHED -> ACTIVE -> DISMISSED / APPLIED_EXTERNALLY / NOT_APPLICABLE',
                forbidden: 'APPLIED_EXTERNALLY -> ACTIVE; DISMISSED -> APPLIED_EXTERNALLY via V1 app (V1 is read-only).',
                terminal: 'DISMISSED, APPLIED_EXTERNALLY, NOT_APPLICABLE.',
                recovery: 'If Google Ads API removes recommendation, local mirror transitions to REMOVED_BY_GOOGLE.'
              },
              {
                title: '5. Refresh Request State Machine',
                allowed: 'IDLE -> REQUESTED -> QUEUED -> EXECUTING -> SUCCEEDED / REJECTED_RATE_LIMITED / FAILED',
                forbidden: 'EXECUTING -> REQUESTED (cannot double request while executing); REJECTED_RATE_LIMITED -> EXECUTING directly.',
                terminal: 'SUCCEEDED, REJECTED_RATE_LIMITED, FAILED.',
                recovery: 'FAILED request returns to IDLE; permits subsequent manual retry after cooldown.'
              }
            ].map((sm, idx) => (
              <div key={idx} className="p-4 bg-[#F8F9FA] rounded-xl border border-[#DADCE0] space-y-2 text-xs">
                <strong className="text-sm font-bold text-[#202124] block border-b border-[#DADCE0] pb-1.5">{sm.title}</strong>
                <div><strong className="text-[#137333]">Allowed Transitions:</strong> <p className="font-mono text-[11px] text-[#1A73E8] mt-0.5">{sm.allowed}</p></div>
                <div><strong className="text-[#EA4335]">Forbidden Transitions:</strong> <p className="text-[11px] text-[#5F6368] mt-0.5">{sm.forbidden}</p></div>
                <div><strong className="text-[#202124]">Terminal States:</strong> <span className="font-mono text-[#3C4043]">{sm.terminal}</span></div>
                <div><strong className="text-[#B06000]">Recovery Paths:</strong> <span className="text-[#3C4043]">{sm.recovery}</span></div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 6: FOUNDATION OWNERSHIP MATRIX */}
      {activeTab === 'ownership' && (
        <div className="bg-white rounded-xl border border-[#DADCE0] shadow-xs overflow-hidden">
          <div className="p-4 bg-[#F8F9FA] border-b border-[#DADCE0] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#1A73E8]" />
              <h3 className="font-bold text-sm text-[#202124]">6. Foundation Ownership Matrix</h3>
            </div>
            <span className="text-xs text-[#5F6368] font-mono bg-[#E8F0FE] text-[#1A73E8] px-2 py-0.5 rounded border border-[#AECBFA]">
              Strict Cross-Foundation Responsibility Allocation
            </span>
          </div>

          <div className="p-5 overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#F8F9FA] border-b border-[#DADCE0] text-[11px] font-semibold text-[#5F6368] uppercase">
                  <th className="p-3">Workflow / Component</th>
                  <th className="p-3">Google Ads Domain</th>
                  <th className="p-3">Integration Foundation</th>
                  <th className="p-3">BusinessRecord</th>
                  <th className="p-3">Work Management</th>
                  <th className="p-3">Notification Foundation</th>
                  <th className="p-3">Durable Job Foundation</th>
                  <th className="p-3">Reporting</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DADCE0] text-[11px] text-[#3C4043]">
                {[
                  {
                    wf: 'Account Sync',
                    ga: 'Owns entity schemas & normalization',
                    ig: 'Owns OAuth tokens & token refresh',
                    br: 'Owns parent tenant binding',
                    wm: 'Receives sync status tasks',
                    nf: 'Dispatches re-auth alerts',
                    dj: 'Owns cron execution & retries',
                    rp: 'Consumes account metrics'
                  },
                  {
                    wf: 'Campaign & Metric Sync',
                    ga: 'Owns GAQL queries & fact store',
                    ig: 'Provides GAQL client connection',
                    br: 'Enforces tenant data boundaries',
                    wm: 'Logs sync completion tasks',
                    nf: 'Notifies on fatal sync block',
                    dj: 'Schedules 14d rolling passes',
                    rp: 'Reads reconciled facts'
                  },
                  {
                    wf: 'Alert Evaluation',
                    ga: 'Owns deterministic rule functions',
                    ig: 'None',
                    br: 'Scopes alerts to tenant',
                    wm: 'Assigns alert tasks to staff',
                    nf: 'Dispatches urgent alert emails',
                    dj: 'Schedules rule trigger passes',
                    rp: 'Aggregates alert stats'
                  },
                  {
                    wf: 'Alert Resolution',
                    ga: 'Owns AlertInstance state transitions',
                    ig: 'None',
                    br: 'Validates staff tenant access',
                    wm: 'Updates staff task status',
                    nf: 'Silences resolved alerts',
                    dj: 'None',
                    rp: 'Logs resolution metrics'
                  },
                  {
                    wf: 'Manual Refresh',
                    ga: 'Owns refresh validation logic',
                    ig: 'Executes live API call',
                    br: 'Validates user tenant scope',
                    wm: 'Tracks user-initiated refresh',
                    nf: 'Displays UI progress toasts',
                    dj: 'Executes high-priority job',
                    rp: 'Refreshes read models'
                  }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#F8F9FA]">
                    <td className="p-3 font-bold text-[#202124]">{row.wf}</td>
                    <td className="p-3 text-[#1A73E8]">{row.ga}</td>
                    <td className="p-3 text-[#174EA6]">{row.ig}</td>
                    <td className="p-3 text-[#137333]">{row.br}</td>
                    <td className="p-3">{row.wm}</td>
                    <td className="p-3">{row.nf}</td>
                    <td className="p-3 text-[#B06000]">{row.dj}</td>
                    <td className="p-3">{row.rp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* SECTION 7: FAILURE CONTRACTS */}
      {activeTab === 'failures' && (
        <div className="bg-white rounded-xl border border-[#DADCE0] shadow-xs overflow-hidden">
          <div className="p-4 bg-[#F8F9FA] border-b border-[#DADCE0] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-[#B06000]" />
              <h3 className="font-bold text-sm text-[#202124]">7. Failure Contracts & Pure Business Behaviour</h3>
            </div>
            <span className="text-xs text-[#B06000] font-mono bg-[#FEF7E0] px-2 py-0.5 rounded border border-[#FDE293]">
              11 Failure Modes Handled Without Infrastructure Leakage
            </span>
          </div>

          <div className="p-5 space-y-4">
            {[
              {
                mode: '1. External API Unavailable',
                behaviour: 'Google Ads API downtime raises ExternalServiceUnavailable error. Synchronization state transitions to DEGRADED. Job rescheduling is delegated entirely to Durable Job Foundation using exponential backoff with jitter.',
                recovery: 'Durable Job Foundation retries job until API recovers; account health returns to HEALTHY automatically upon successful ping.'
              },
              {
                mode: '2. API Rate Limiting (RESOURCE_EXHAUSTED)',
                behaviour: 'Exceeding developer token quotas returns rate limit signal. Application pauses current account batch, logs RateLimitEncountered event in Journal, and requests backoff delay from Durable Job Foundation.',
                recovery: 'Job resumes after required quota reset interval without losing progress or duplicating fetched rows.'
              },
              {
                mode: '3. Authorization Failure & Expired Credentials',
                behaviour: '401/403 errors from Google Ads API immediately transition GoogleAdsAccount connectionStatus to REAUTH_REQUIRED. Active sync jobs for this account abort cleanly and emit a re-auth alert to Work Management.',
                recovery: 'Tenant completes OAuth re-consent in Integration Foundation; triggers HealthCheck and resumes background sync.'
              },
              {
                mode: '4. Missing Account (Customer Not Found / Unlinked)',
                behaviour: 'If API returns CUSTOMER_NOT_FOUND or UNLINKED, GoogleAdsAccount connectionStatus transitions to SUSPENDED. Associated campaign syncs are halted.',
                recovery: 'Staff verifies account linkage in Google Ads manager account and resets connection state in Insights OS.'
              },
              {
                mode: '5. Missing Campaign / Deleted Resource',
                behaviour: 'If a campaign ID disappears or returns REMOVED, CampaignAggregate status is updated to REMOVED. Child ad groups are marked inactive. Metric history is preserved permanently.',
                recovery: 'Soft-deletion ensures historical reporting remains intact while removing campaign from active pacing lists.'
              },
              {
                mode: '6. Partial Synchronization Failure',
                behaviour: 'If 9 out of 10 campaigns sync successfully and 1 fails, valid campaign metrics are saved in a single transaction block. The failed campaign ID is flagged for isolated retry.',
                recovery: 'Durable Job Foundation dispatches a micro-retry specifically for the un-synced campaign ID.'
              },
              {
                mode: '7. Duplicate Synchronization Request',
                behaviour: 'If a manual refresh is requested while a scheduled sync is already executing for the same Customer ID, Command Validation Service rejects the second request idempotently as DUPLICATE_REQUEST_IGNORED.',
                recovery: 'UI attaches live progress indicators to the existing active sync job.'
              },
              {
                mode: '8. Interrupted Synchronization (Worker Shutdown)',
                behaviour: 'If a worker processing a sync task is terminated mid-flight, the task lease held in Durable Job Foundation expires. The task is reclaimed by another worker.',
                recovery: 'Durable Job Foundation re-assigns task; idempotency keys prevent duplicate database writes.'
              },
              {
                mode: '9. Stale Metrics Warning',
                behaviour: 'If an account has not successfully synced metrics for > 6 hours, Read Model Service appends a DataFreshnessWarning flag to the dashboard view model.',
                recovery: 'Background sync completion automatically clears the freshness warning.'
              },
              {
                mode: '10. Invalid Recommendation Resource',
                behaviour: 'If recommendation endpoints fail due to account type incompatibilities (e.g. Smart Shopping or MCC), the error is caught gracefully and RecommendationStatus set to UNAVAILABLE.',
                recovery: 'Prevents non-essential recommendation errors from blocking critical performance metrics sync.'
              },
              {
                mode: '11. Concurrent Alert Resolution Conflict',
                behaviour: 'If two operators attempt to resolve the same AlertInstance simultaneously, optimistic concurrency checks reject the second request with AlertAlreadyResolved status.',
                recovery: 'UI refreshes to reflect the updated resolution state and operator note.'
              }
            ].map((f, idx) => (
              <div key={idx} className="p-4 bg-[#F8F9FA] rounded-xl border border-[#DADCE0] space-y-1.5 text-xs">
                <strong className="text-[#202124] text-xs font-bold block">{f.mode}</strong>
                <div><strong className="text-[#B06000]">Business Behaviour:</strong> <span className="text-[#3C4043]">{f.behaviour}</span></div>
                <div><strong className="text-[#137333]">Recovery Path:</strong> <span className="text-[#1A73E8]">{f.recovery}</span></div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 8: AUDIT & PROVENANCE CONTRACT */}
      {activeTab === 'audit' && (
        <div className="bg-white rounded-xl border border-[#DADCE0] shadow-xs overflow-hidden">
          <div className="p-4 bg-[#F8F9FA] border-b border-[#DADCE0] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#1A73E8]" />
              <h3 className="font-bold text-sm text-[#202124]">8. Audit & Provenance Contract</h3>
            </div>
            <span className="text-xs text-[#5F6368] font-mono bg-[#E8F0FE] text-[#1A73E8] px-2 py-0.5 rounded border border-[#AECBFA]">
              Strict Mutability & Provenance Rules
            </span>
          </div>

          <div className="p-5 space-y-6 text-xs text-[#3C4043] leading-relaxed">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-[#F8F9FA] rounded-xl border border-[#DADCE0] space-y-2">
                <div className="font-bold text-[#137333] border-b border-[#DADCE0] pb-1 flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-[#137333]" /> Immutable Records (Permanent Append-Only)
                </div>
                <ul className="list-disc pl-4 text-[#5F6368] space-y-1 text-[11px]">
                  <li><strong>MetricSnapshot Facts:</strong> Reconciled daily & hourly metric rows past the 14-day attribution window.</li>
                  <li><strong>ChangeEventSnapshot:</strong> Google Ads mutation audit events snapshotted to bypass 30d API deletion.</li>
                  <li><strong>JournalEntry Timeline:</strong> 24-Hour Journal operational log entries. Never edited or deleted.</li>
                  <li><strong>Audit Log Events:</strong> Command execution audit logs, staff state transitions, auth events.</li>
                </ul>
              </div>

              <div className="p-4 bg-[#F8F9FA] rounded-xl border border-[#DADCE0] space-y-2">
                <div className="font-bold text-[#1A73E8] border-b border-[#DADCE0] pb-1 flex items-center gap-1.5">
                  <RefreshCw className="w-4 h-4 text-[#1A73E8]" /> Mutable Replicas & Mirror Entities
                </div>
                <ul className="list-disc pl-4 text-[#5F6368] space-y-1 text-[11px]">
                  <li><strong>GoogleAdsAccount Metadata:</strong> Updated on each account sync pass to reflect current status.</li>
                  <li><strong>CampaignAggregate State:</strong> Updated when statuses, names, or budgets change in Google Ads.</li>
                  <li><strong>RecommendationSnapshot Mirrors:</strong> Updated daily to mirror current Google recommendations.</li>
                  <li><strong>AlertInstance Status:</strong> State machine transitions (ACTIVE -&gt; ACKNOWLEDGED -&gt; RESOLVED).</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-[#FEF7E0] rounded-xl border border-[#FDE293] space-y-2 text-[#B06000]">
              <strong className="text-xs font-bold block flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-[#B06000]" /> What NEVER Enters the Audit Log
              </strong>
              <p className="text-[11px] text-[#3C4043]">
                Raw OAuth refresh tokens, client secrets, API developer keys, un-hashed user credentials, and transient polling request payloads are strictly prohibited from entering audit records, journal logs, or application database tables. Token references exist only as abstract IDs managed by the Integration Foundation.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 9: DETERMINISTIC BEHAVIOUR RULES */}
      {activeTab === 'determinism' && (
        <div className="bg-white rounded-xl border border-[#DADCE0] shadow-xs overflow-hidden">
          <div className="p-4 bg-[#F8F9FA] border-b border-[#DADCE0] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#1A73E8]" />
              <h3 className="font-bold text-sm text-[#202124]">9. Deterministic Behaviour Rules</h3>
            </div>
            <span className="text-xs text-[#5F6368] font-mono bg-[#E8F0FE] text-[#1A73E8] px-2 py-0.5 rounded border border-[#AECBFA]">
              Zero-Randomness Guarantee
            </span>
          </div>

          <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {[
              {
                rule: '1. Strict Idempotency Across All Commands',
                detail: 'Executing any command (e.g. RefreshAccount, SnapshotChangeEvents, EvaluateAlerts) N times sequentially produces the exact same domain state as executing it once.'
              },
              {
                rule: '2. Duplicate Command Suppression',
                detail: 'Identical command requests received within an active execution window are rejected or coalesced idempotently without spawning duplicate jobs.'
              },
              {
                rule: '3. Concurrent Refresh Coalescing',
                detail: 'When a manual refresh is requested while a scheduled sync is running for the same Customer ID, the manual request subscribes to the running sync job result.'
              },
              {
                rule: '4. Deterministic Alert Evaluation Functions',
                detail: 'Alert evaluation rules rely exclusively on mathematical comparisons over reconciled MetricSnapshots. Zero stochastic, random, or non-deterministic logic.'
              },
              {
                rule: '5. Manual Acknowledgement / Sync Interleaving',
                detail: 'Manual alert acknowledgements execute in independent database transactions and never block or get overridden by background metric synchronization cycles.'
              },
              {
                rule: '6. Repeated Synchronization Conflict Resolution',
                detail: 'Google Ads API is canonical for campaign structures and raw metrics; Insights OS DB is canonical for pacing projections and alert state machines.'
              }
            ].map((r, idx) => (
              <div key={idx} className="p-4 bg-[#F8F9FA] rounded-xl border border-[#DADCE0] space-y-1">
                <strong className="text-[#1A73E8] text-xs font-bold block">{r.rule}</strong>
                <p className="text-[#5F6368] text-[11px] leading-relaxed">{r.detail}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 10: SHARED FOUNDATION INTERACTION MATRIX */}
      {activeTab === 'interactions' && (
        <div className="bg-white rounded-xl border border-[#DADCE0] shadow-xs overflow-hidden">
          <div className="p-4 bg-[#F8F9FA] border-b border-[#DADCE0] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Server className="w-4 h-4 text-[#1A73E8]" />
              <h3 className="font-bold text-sm text-[#202124]">10. Shared Foundation Interaction Matrix</h3>
            </div>
            <span className="text-xs text-[#5F6368] font-mono bg-[#E8F0FE] text-[#1A73E8] px-2 py-0.5 rounded border border-[#AECBFA]">
              Strict Ownership & Boundary Definitions
            </span>
          </div>

          <div className="p-5 overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#F8F9FA] border-b border-[#DADCE0] text-[11px] font-semibold text-[#5F6368] uppercase">
                  <th className="p-3">Foundation Module</th>
                  <th className="p-3 text-[#1A73E8]">Google Ads OWNS</th>
                  <th className="p-3 text-[#137333]">Google Ads CONSUMES</th>
                  <th className="p-3 text-[#EA4335]">Google Ads NEVER OWNS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DADCE0] text-[11px] text-[#3C4043]">
                {[
                  {
                    module: 'Integration Foundation',
                    owns: 'authTokenReferenceId linkage in GoogleAdsAccount model.',
                    consumes: 'OAuth credentials, token refresh, GAQL HTTP client wrapper.',
                    never: 'Raw client secrets, OAuth token exchange endpoints, token refresh timers.'
                  },
                  {
                    module: 'BusinessRecord / Tenant',
                    owns: 'GoogleAdsAccount entity schemas & CID relationships.',
                    consumes: 'BusinessRecord tenant ID for multi-tenant data isolation.',
                    never: 'Tenant user management, organization billing, platform access permissions.'
                  },
                  {
                    module: 'Work Management',
                    owns: 'AlertInstance alert rules & trigger snapshot data payloads.',
                    consumes: 'Staff user assignments, operational task status updates.',
                    never: 'Global task management platform code or staff user profile stores.'
                  },
                  {
                    module: 'Notification Foundation',
                    owns: 'Alert payload formatting & notification trigger events.',
                    consumes: 'Email/push delivery channels for urgent alert broadcasts.',
                    never: 'SMTP server connections, SMS provider SDKs, push token registries.'
                  },
                  {
                    module: 'Durable Job Foundation',
                    owns: 'Task registration definitions (SyncAccount, ReconcileMetrics).',
                    consumes: 'Cron scheduling, lease handling, exponential backoff retries.',
                    never: 'Queue technology details, Redis/Celery scripts, worker process management.'
                  },
                  {
                    module: 'Reporting',
                    owns: 'Reconciled MetricSnapshot facts & ChangeEventSnapshots.',
                    consumes: 'Cross-channel reporting projections & analytics models.',
                    never: 'Platform-wide reporting engine infrastructure or bi-tools.'
                  }
                ].map((m, idx) => (
                  <tr key={idx} className="hover:bg-[#F8F9FA]">
                    <td className="p-3 font-bold text-[#202124]">{m.module}</td>
                    <td className="p-3 text-[#1A73E8]">{m.owns}</td>
                    <td className="p-3 text-[#137333]">{m.consumes}</td>
                    <td className="p-3 text-[#EA4335] font-semibold">{m.never}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* SECTION 11: V1 SCOPE BOUNDARY */}
      {activeTab === 'boundary' && (
        <div className="bg-white rounded-xl border border-[#DADCE0] shadow-xs overflow-hidden">
          <div className="p-4 bg-[#F8F9FA] border-b border-[#DADCE0] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckSquare className="w-4 h-4 text-[#1A73E8]" />
              <h3 className="font-bold text-sm text-[#202124]">11. V1 Scope Boundary & Roadmap</h3>
            </div>
            <span className="text-xs text-[#5F6368] font-mono bg-[#E8F0FE] text-[#1A73E8] px-2 py-0.5 rounded border border-[#AECBFA]">
              Scope Discipline Guardrails
            </span>
          </div>

          <div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-4 bg-[#E6F4EA] rounded-xl border border-[#CEEAD6] space-y-2">
              <strong className="text-[#137333] text-xs font-bold block flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#137333]" /> Supported in V1 (Frozen Scope)
              </strong>
              <ul className="list-disc pl-4 text-[#3C4043] space-y-1 text-[11px]">
                <li>Read-only account, campaign, and ad group structure sync via GAQL.</li>
                <li>14-day rolling metric reconciliation for daily & hourly facts.</li>
                <li>Permanent ChangeEventSnapshot audit store bypassing Google 30d limit.</li>
                <li>Read-only RecommendationSnapshot mirror.</li>
                <li>5 deterministic alert rules evaluated over reconciled facts.</li>
                <li>24-Hour Journal append-only timeline.</li>
                <li>Manual refresh with 5-minute CID cooldown rate limiting.</li>
              </ul>
            </div>

            <div className="p-4 bg-[#FEF7E0] rounded-xl border border-[#FDE293] space-y-2">
              <strong className="text-[#B06000] text-xs font-bold block flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#B06000]" /> Deferred Beyond V1 (V1.x Roadmap)
              </strong>
              <ul className="list-disc pl-4 text-[#3C4043] space-y-1 text-[11px]">
                <li>Keyword-level granular quality score history trend visualizers.</li>
                <li>Search term negative keyword candidate automated tagging.</li>
                <li>Asset Group creative rating deep-dive breakdowns.</li>
                <li>Custom operator alert threshold customization sliders.</li>
                <li>Exportable PDF executive performance reports.</li>
              </ul>
            </div>

            <div className="p-4 bg-[#F8F9FA] rounded-xl border border-[#DADCE0] space-y-2">
              <strong className="text-[#5F6368] text-xs font-bold block flex items-center gap-1.5">
                <XCircle className="w-4 h-4 text-[#5F6368]" /> Future Roadmap — Out of V1
              </strong>
              <ul className="list-disc pl-4 text-[#3C4043] space-y-1 text-[11px]">
                <li>Google Ads API Mutate operations (Campaign/Bidding strategy edits).</li>
                <li>Automated Recommendation Apply execution.</li>
                <li>Change Lab interactive mutation sandbox workspace.</li>
                <li>AI Setup Studio campaign creation wizard & write-backs.</li>
                <li>Telegram & external third-party chat app delivery.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 12: FOUNDER DECISIONS */}
      {activeTab === 'decisions' && (
        <div className="bg-white rounded-xl border border-[#DADCE0] shadow-xs overflow-hidden">
          <div className="p-4 bg-[#F8F9FA] border-b border-[#DADCE0] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#1A73E8]" />
              <h3 className="font-bold text-sm text-[#202124]">12. Genuine Founder Decisions Only</h3>
            </div>
            <span className="text-xs text-[#5F6368] font-mono bg-[#E8F0FE] text-[#1A73E8] px-2 py-0.5 rounded border border-[#AECBFA]">
              Locked Platform Guarantees
            </span>
          </div>

          <div className="p-5 space-y-4 text-xs">
            {[
              {
                num: 'FOUNDER DECISION 1',
                title: 'Strict Read-Only V1 Governance',
                desc: 'No Google Ads API mutate requests are permitted in V1 code paths. Ensures zero operational hazard or unintended spend changes across agency client accounts.'
              },
              {
                num: 'FOUNDER DECISION 2',
                title: 'Permanent Change Event Archival',
                desc: 'Insights OS snapshots change_event records permanently into PostgreSQL to bypass Google Ads API’s hard 30-day purge threshold, securing complete historical audit trails.'
              },
              {
                num: 'FOUNDER DECISION 3',
                title: '14-Day Mandatory Rolling Metric Reconciliation Window',
                desc: 'All performance metrics are re-fetched continuously across a rolling 14-day window to guarantee 100% accuracy against late-arriving Google Ads conversion attribution.'
              },
              {
                num: 'FOUNDER DECISION 4',
                title: 'Abstract Durable Job Foundation Decoupling',
                desc: 'All background jobs, worker leases, retries, and cron schedules reference only the abstract Durable Job Foundation — ensuring zero lock-in or dependency on Celery or Redis.'
              }
            ].map((d, idx) => (
              <div key={idx} className="p-4 bg-[#F8F9FA] rounded-xl border border-[#DADCE0] space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-[#202124] text-white rounded text-[10px] font-mono font-bold">
                    {d.num}
                  </span>
                  <strong className="text-sm font-bold text-[#202124]">{d.title}</strong>
                </div>
                <p className="text-[#5F6368] text-[11px] leading-relaxed pl-1 pt-1">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* OVERALL ARCHITECT ASSESSMENT & FINAL VERDICT */}
      <div className="bg-white rounded-xl border border-[#DADCE0] shadow-xs p-6 space-y-4">
        <h3 className="font-bold text-base text-[#202124] border-b border-[#DADCE0] pb-2 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-[#137333]" />
          Overall Architect Assessment & Final Verdict
        </h3>

        <div className="p-4 bg-[#E6F4EA] rounded-xl border border-[#CEEAD6] space-y-3">
          <p className="text-xs text-[#137333] leading-relaxed">
            The <strong>Google Ads Command Center Application Services & Workflow Contract (Gate C)</strong> has been rigorously specified and vetted. It builds seamlessly on frozen Gate A (Architecture) and frozen Gate B (Domain Model & Entity Contract). It defines 12 core application services, 10 commands, 9 queries, 10 complete workflow contracts, 5 state machines, cross-foundation ownership matrices, 11 pure business failure modes, audit rules, and zero-randomness deterministic execution constraints without exposing implementation code or infrastructure dependencies.
          </p>

          <div className="pt-2 flex items-center justify-between border-t border-[#CEEAD6]">
            <span className="text-xs text-[#137333] font-semibold">
              Final Architect Status:
            </span>
            <span className="px-4 py-1.5 bg-[#137333] text-white font-bold text-sm rounded-lg shadow-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-white" /> 🟢 READY FOR GATE C FREEZE
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
