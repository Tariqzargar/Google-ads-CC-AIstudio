import React, { useState } from 'react';
import { SectionId } from './types';
import { Header } from './components/Header';
import { SeniorArchitectReviewView } from './components/SeniorArchitectReviewView';
import { GateAValidationView } from './components/GateAValidationView';
import { GateBDomainModelView } from './components/GateBDomainModelView';
import { GateCAppServicesView } from './components/GateCAppServicesView';
import { FinalConsolidationView } from './components/FinalConsolidationView';
import { GateDAddendumView } from './components/GateDAddendumView';
import { FoundationView } from './components/FoundationView';
import { FeasibilityView } from './components/FeasibilityView';
import { ResourcesView } from './components/ResourcesView';
import { GaqlView } from './components/GaqlView';
import { MetricsView } from './components/MetricsView';
import { AlertsView } from './components/AlertsView';
import { OAuthScaleView } from './components/OAuthScaleView';
import { TrapsView } from './components/TrapsView';
import { FinalContractView } from './components/FinalContractView';

export function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('freeze');
  const [copied, setCopied] = useState(false);

  const fullMarkdownContract = `# INSIGHTS OS — GOOGLE ADS COMMAND CENTER V1
## Senior Google Ads API Platform Contract & Review Specification (Gate A & Gate B)

---

### GATE A — GOOGLE ADS ARCHITECTURE CONTRACT SUMMARY
- **Capability Model**: Direct, Derived, Partial, External Evidence Required, Unavailable.
- **V1 Focus**: Read-only, diagnostic, management-by-exception platform for enterprise agencies.
- **Future Roadmap**: Telegram delivery, Change Lab interactive mutation workspace, campaign creation/mutate APIs.

---

### GATE B — GOOGLE ADS DOMAIN MODEL & ENTITY CONTRACT
1. **BusinessRecord**: Root tenant entity linking Google Ads accounts to organization scope.
2. **GoogleAdsAccount**: Aggregate root for CID, currency, timezone, status, auth ref. Scoped to Tenant ID.
3. **CampaignAggregate**: Aggregate root for Campaign + CampaignBudget child entity.
4. **AdGroup & AdGroupAd**: Child entities owning policy topics and disapproval statuses.
5. **ConversionActionEntity**: Aggregate root for conversion tracking health and heartbeat baselines.
6. **MetricSnapshot**: Immutable fact entity (DAILY & HOURLY) with 14-day rolling window reconciliation.
7. **ChangeEventSnapshot**: Permanent snapshot entity bypassing Google's 30-day API deletion purge.
8. **RecommendationSnapshot**: Read-only mirror for human review in Recommendations tab.
9. **AlertInstance & JournalEntry**: Generated deterministically by Insights OS Alert Engine.

---

### MANDATORY GATE B MATRICES
- **Entity Ownership Matrix**: Scoped strictly to Insights OS Tenant ID with multi-tenant isolation.
- **Aggregate-Root Map**: Defines roots (BusinessRecord, GoogleAdsAccount, CampaignAggregate, AlertInstance) and cascade rules.
- **Cardinality Map**: 1:1, 1:N, N:M mappings to Google Ads API v25 resources.
- **Source-of-Truth Matrix**: Google Ads API is canonical for campaign status; Insights OS DB is canonical for pacing & alert states.
- **Persistence / Retention Matrix**: 365+ days for daily metrics, permanent for change events, 30 days for hourly facts.
- **Shared-Foundation Dependency Map**: Auth Token Ref ID -> Integration Foundation; Tenant ID -> Tenant Foundation; Schedules & Retries -> Durable Job Foundation.
- **Scaling Risks**: Parallel MCC CID traversal, bulk 14-day upserts, change event noise filtering, API rate limiting.
- **Verdict**: READY FOR GATE B FREEZE 🟢

---

### GATE C — APPLICATION SERVICES & WORKFLOW CONTRACT
1. **Application Service Catalogue**: 12 core services (Account Sync, Campaign Sync, Metric Reconciliation, Change Event Snapshot, Recommendation Sync, Alert Eval, Alert Resolution, Journal Recording, Health Verification, Manual Refresh, Read Model, Command Validation).
2. **Command & Query Catalogues**: 10 deterministic commands, 9 read queries.
3. **Workflow Contracts**: 10 complete workflows with sequence, decision points, and recovery ownership.
4. **State Machines**: 5 lifecycle state machines (Sync, Health, Alert, Recommendation, Refresh).
5. **Foundation Ownership Matrix**: Integration Foundation, BusinessRecord, Work Management, Notification Foundation, Durable Job Foundation, Reporting.
6. **Failure Contracts**: 11 pure business failure modes handled without technology/code assumptions.
7. **Verdict**: READY FOR GATE C FREEZE 🟢

---

### FINAL ARCHITECTURE CONSOLIDATION (PRE-IMPLEMENTATION FREEZE)
1. **Executive Summary**: One-page consolidated single source of truth for Google Ads Command Center unifying Gates A, B, and C.
2. **Final Frozen Architecture**: 10 Core Entities, 12 Application Services, 10 Commands, 9 Queries, 10 Workflow Contracts, 5 State Machines, 11 Failure Contracts.
3. **Consistency Report**: 100% terminology normalization (Integration Foundation, BusinessRecord, GoogleAdsAccount, ChangeEventSnapshot), single-owner responsibility matrix verified, zero shared auth/tenant legacy strings.
4. **Founder Decisions**: 3 unresolved strategic business decisions (MCC Traversal Depth, Change Event Storage Retention, Recommendation Auto-Apply Approval).
5. **Architecture Readiness**: Complete, internally consistent, zero code leakage, implementation ready.
6. **FINAL VERDICT**: 🟢 GOOGLE ADS ARCHITECTURE FROZEN — READY FOR IMPLEMENTATION CONTRACT (Gate D)

*This is the final architecture freeze. Do not invent new capabilities, entities, workflows, shared foundations, platform services, or future modules unless an actual contradiction between Gates A, B, and C makes it impossible to produce a coherent architecture. The goal is consolidation, not expansion. Any issue that is merely an enhancement or future idea must be recorded as a future consideration, not incorporated into the frozen architecture.*
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
        {activeSection === 'freeze' && <FinalConsolidationView />}
        {activeSection === 'gate_d_addendum' && <GateDAddendumView />}
        {activeSection === 'architect_review' && <SeniorArchitectReviewView />}
        {activeSection === 'gate_a' && <GateAValidationView />}
        {activeSection === 'gate_b' && <GateBDomainModelView />}
        {activeSection === 'gate_c' && <GateCAppServicesView />}
        {activeSection === 'foundation' && <FoundationView />}
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
        Insights OS — Google Ads Command Center V1 Contract Specification &bull; Google Ads API v25 Specification
      </footer>
    </div>
  );
}

export default App;
