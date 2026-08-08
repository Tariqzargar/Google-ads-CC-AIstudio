import React, { useState } from 'react';
import { SectionId } from './types';
import { Header } from './components/Header';
import { FeasibilityView } from './components/FeasibilityView';
import { ResourcesView } from './components/ResourcesView';
import { GaqlView } from './components/GaqlView';
import { MetricsView } from './components/MetricsView';
import { AlertsView } from './components/AlertsView';
import { OAuthScaleView } from './components/OAuthScaleView';
import { TrapsView } from './components/TrapsView';
import { FinalContractView } from './components/FinalContractView';

export function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('feasibility');
  const [copied, setCopied] = useState(false);

  const fullMarkdownContract = `# INSIGHTS OS — GOOGLE ADS COMMAND CENTER V1
## Senior Google Ads API Platform Contract & Review Specification

---

### 1. V1 FEASIBILITY REVIEW SUMMARY
- **Command Center & Needs Attention**: Feasible via \`customer\`, \`campaign\`, \`campaign_budget\`, and \`metrics\`. Pacing calculated mathematically in backend.
- **Accounts & Lenses**: Directly Feasible via \`customer_client\` query at MCC level.
- **Alerts & Journal**: Feasible via local DB threshold detection during daily/hourly syncs.
- **Reports**: Directly Feasible via GAQL aggregations across 30-day date ranges.
- **Recommendations**: Read-Only Mirroring Feasible via \`recommendation\` resource. Apply/Dismiss mutations are OUT OF SCOPE for V1.
- **Change Lab**: Feasible with Caveats. Google Ads API \`change_event\` has a hard 30-day retention limit. Django MUST snapshot change records permanently into PostgreSQL.
- **AI Setup Studio**: DEFERRED / OUT OF SCOPE for V1 per locked product boundary.

---

### 2. EXACT GOOGLE ADS RESOURCE INVENTORY
1. **customer**: Account metadata, currency, timezone, status.
2. **customer_client**: MCC hierarchy and linked client CIDs.
3. **campaign**: Campaign serving status, channel types, primary status reasons.
4. **campaign_budget**: Daily budget caps, explicitly shared flag.
5. **ad_group**: Search/Display structure.
6. **ad_group_ad**: Policy approval status, policy topic entries, disapproval reasons.
7. **keyword_view**: Search keywords, Quality Score components.
8. **search_term_view**: Search query report, non-converting spend.
9. **conversion_action**: Primary vs secondary actions, tag health.
10. **recommendation**: Google optimization suggestions and impact metrics.
11. **change_event**: Mutation audit trail (snapshotted immediately).
12. **asset_group & asset_group_asset**: Performance Max asset coverage and performance ratings.

---

### 3. PRODUCTION GAQL CONTRACT (KEY PATTERNS)
\`\`\`sql
-- Daily Campaign Performance & Pacing Query
SELECT
  campaign.id,
  campaign.name,
  campaign.status,
  campaign.serving_status,
  campaign.primary_status,
  campaign.advertising_channel_type,
  campaign_budget.amount_micros,
  metrics.cost_micros,
  metrics.impressions,
  metrics.clicks,
  metrics.conversions,
  metrics.conversions_value,
  segments.date
FROM campaign
WHERE segments.date BETWEEN '{START_DATE}' AND '{END_DATE}'
  AND campaign.status IN ('ENABLED', 'PAUSED')
\`\`\`

---

### 8. DETERMINISTIC ALERT PRIMITIVES
1. **Conversions Heartbeat Failure**: Active spend > $100/day AND 0 conversions in last 48h AND 14d baseline avg > 5 conv/day.
2. **Pacing Exposure Alert**: MTD Spend + (Yesterday Spend * Remaining Days) > Monthly Target * 1.15.
3. **Serving Interruption**: Campaign ENABLED AND 0 impressions today AND 7-day avg > 500/day.
4. **Search Waste Ratio**: Spend on 0-conversion terms with > $50 spend / Total Search Spend > 25%.
5. **Policy Disapproval**: Count of disapproved ad_group_ad records > 0.

---

### 12. CRITICAL API TRAPS
- **Currency Micros**: Divide \`cost_micros\` by 1,000,000.0.
- **Conversion Lag**: Maintain 14-day rolling re-fetch window to capture late-arriving conversions.
- **Change Event Retention**: Snapshot \`change_event\` before 30-day API purge.
- **PMax Compatibility**: Do NOT query \`keyword_view\` for Performance Max campaigns.
- **OAuth Login Header**: Set \`login-customer-id\` to top-level MCC ID on all API calls.

---

### 13. FINAL V1 GOOGLE CONTRACT
- **MUST INGEST**: customer, customer_client, campaign, campaign_budget, conversion_action, change_event, recommendation, ad_group_ad.
- **NICE TO HAVE**: search_term_view, keyword_view, asset_group.
- **DEFER**: Campaign creation/mutate APIs, AI Setup Studio write-backs, automated execution in Change Lab.
`;

  const handleExportMarkdown = () => {
    navigator.clipboard.writeText(fullMarkdownContract);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#F1F3F4] text-[#202124] font-sans antialiased flex flex-col">
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onExportMarkdown={handleExportMarkdown}
        copied={copied}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {activeSection === 'feasibility' && <FeasibilityView />}
        {activeSection === 'resources' && <ResourcesView />}
        {activeSection === 'gaql' && <GaqlView />}
        {activeSection === 'metrics' && <MetricsView />}
        {activeSection === 'alerts' && <AlertsView />}
        {activeSection === 'oauth' && <OAuthScaleView />}
        {activeSection === 'traps' && <TrapsView />}
        {activeSection === 'final' && <FinalContractView />}
      </main>

      <footer className="bg-white border-t border-[#DADCE0] py-4 text-center text-xs text-[#5F6368]">
        Insights OS — Google Ads Command Center V1 Contract Specification &bull; Google Ads API v18 Compliant
      </footer>
    </div>
  );
}

export default App;
