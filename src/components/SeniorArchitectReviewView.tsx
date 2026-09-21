import React from 'react';
import { ShieldCheck, AlertTriangle, CheckCircle2, XCircle, Info, Cpu, Server, Activity, ArrowRight, Zap, Target, Lock } from 'lucide-react';

export const SeniorArchitectReviewView: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Title Card */}
      <div className="bg-white p-6 rounded-xl border border-[#DADCE0] shadow-xs border-l-4 border-l-[#1A73E8]">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-[#E8F0FE] text-[#1A73E8] border border-[#AECBFA] uppercase tracking-wider">
                Production Architecture Review
              </span>
              <span className="text-xs text-[#5F6368] font-mono">Google Ads Platform & API v25 Specification</span>
            </div>
            <h2 className="text-xl font-bold text-[#202124] flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#1A73E8]" />
              <span>Senior Google Ads Product Architect Specification</span>
            </h2>
            <p className="text-sm text-[#5F6368] mt-1">
              Enterprise technical assessment evaluating whether the Google Ads Command Center aligns with Google Ads platform capabilities, API constraints, MCC hierarchy, Smart Bidding, and 100–1,000+ account agency operations.
            </p>
          </div>
          <div className="flex items-center gap-3 bg-[#F8F9FA] p-3 rounded-lg border border-[#DADCE0]">
            <div className="text-right">
              <div className="text-xs text-[#5F6368] font-medium">Architecture Assessment</div>
              <div className="text-sm font-bold text-[#1A73E8]">EVIDENCE-BASED FINDINGS</div>
            </div>
          </div>
        </div>
      </div>

      {/* 1. Executive Summary */}
      <div className="bg-white p-6 rounded-xl border border-[#DADCE0] shadow-xs space-y-3">
        <h3 className="text-base font-bold text-[#202124] flex items-center gap-2 border-b border-[#DADCE0] pb-2">
          <Info className="w-4 h-4 text-[#1A73E8]" />
          <span>Executive Summary</span>
        </h3>
        <p className="text-xs text-[#3C4043] leading-relaxed">
          The proposed <strong>Google Ads Command Center (Insights OS)</strong> represents a technically viable, highly disciplined management-by-exception platform for enterprise agencies operating 100–1,000+ Google Ads accounts. The fundamental shift away from continuous visual campaign monitoring toward deterministic exception handling aligns cleanly with Google Ads API v25 capabilities.
        </p>
        <p className="text-xs text-[#3C4043] leading-relaxed">
          <strong>Key Architectural Finding:</strong> The platform capabilities are <strong>evaluated under the approved capability model as Direct & Derived capabilities in read-only and diagnostic modes</strong> provided that Insights OS maintains its own relational state store (PostgreSQL/Celery pipeline) to snapshot metrics, change events, and conversion baselines. However, three critical operational traps must be governed: (1) Google Ads API reporting latencies and variable intra-day metric processing schedules, (2) the 30-day API hard retention limit on <code className="font-mono bg-[#F8F9FA] px-1 rounded text-[#1A73E8]">change_event</code> records, and (3) Smart Bidding learning mode disruptions caused by frequent micro-adjustments.
        </p>
      </div>

      {/* 2. Validation Matrix */}
      <div className="bg-white rounded-xl border border-[#DADCE0] shadow-xs overflow-hidden">
        <div className="p-4 bg-[#F8F9FA] border-b border-[#DADCE0] flex items-center justify-between">
          <div>
            <h3 className="font-bold text-sm text-[#202124]">Screen & Workflow Capability Matrix</h3>
            <p className="text-xs text-[#5F6368]">Feasibility verification across core capabilities against Google Ads API v25</p>
          </div>
          <div className="flex gap-2 text-xs font-semibold">
            <span className="px-2 py-1 bg-[#E6F4EA] text-[#137333] rounded border border-[#CEEAD6]">Status: Direct</span>
            <span className="px-2 py-1 bg-[#E8F0FE] text-[#1A73E8] rounded border border-[#AECBFA]">Status: Derived</span>
            <span className="px-2 py-1 bg-[#FEF7E0] text-[#B06000] rounded border border-[#FDE293]">Status: Partial</span>
            <span className="px-2 py-1 bg-[#F1F3F4] text-[#5F6368] rounded border border-[#DADCE0]">Status: External Evidence Required</span>
            <span className="px-2 py-1 bg-[#FCE8E6] text-[#C5221F] rounded border border-[#FAD2CF]">Status: Unavailable</span>
          </div>
        </div>

        <div className="divide-y divide-[#DADCE0] text-xs">
          {/* 1. Portfolio Monitoring */}
          <div className="p-4 hover:bg-[#F8F9FA] transition-colors space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-[#202124] text-sm">1. Portfolio Monitoring</span>
              <div className="flex gap-2">
                <span className="px-2.5 py-1 bg-[#E8F0FE] text-[#1A73E8] rounded font-bold border border-[#AECBFA]">
                  Status: Derived
                </span>
                <span className="px-2.5 py-1 bg-[#F8F9FA] text-[#202124] rounded font-medium border border-[#DADCE0]">
                  Confidence: High
                </span>
              </div>
            </div>
            <p className="text-[#3C4043] text-xs">
              <strong>Capability Mapping:</strong> Derived via <code className="font-mono">campaign</code>, <code className="font-mono">customer_client</code>, and <code className="font-mono">metrics</code> resources.
            </p>
            <div className="bg-[#F8F9FA] p-3 rounded border border-[#DADCE0] text-[11px] space-y-1 text-[#5F6368]">
              <div><strong>Realtime Streaming:</strong> <em>Status: Unavailable.</em> Google Ads API does not support real-time streaming sockets or webhooks. Intra-day stats lag per reporting schedules.</div>
              <div><strong>Near Realtime (Hourly):</strong> <em>Status: Partial.</em> Intra-day click/cost metrics update hourly, but conversions experience 3–24 hour attribution lag.</div>
              <div><strong>Daily Batch Reconciliation:</strong> <em>Status: Direct.</em> Midnight UTC batch queries yield complete, reconciled campaign metrics.</div>
              <div className="text-[#B06000] font-semibold pt-1">
                <strong>Google Limitation:</strong> <code className="font-mono">conversions_by_conversion_date</code> restatements occur over a 14-day rolling window. Direct real-time monitoring leads to false panic alerts.
              </div>
            </div>
          </div>

          {/* 2. Priority Queue */}
          <div className="p-4 hover:bg-[#F8F9FA] transition-colors space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-[#202124] text-sm">2. Priority Queue Signal Generation</span>
              <div className="flex gap-2">
                <span className="px-2.5 py-1 bg-[#E8F0FE] text-[#1A73E8] rounded font-bold border border-[#AECBFA]">
                  Status: Derived
                </span>
                <span className="px-2.5 py-1 bg-[#F8F9FA] text-[#202124] rounded font-medium border border-[#DADCE0]">
                  Confidence: High
                </span>
              </div>
            </div>
            <p className="text-[#3C4043] text-xs">
              <strong>Capability Mapping:</strong> Signals computed in Insights OS backend via deterministic rules operating on stored snapshot data.
            </p>
            <div className="bg-[#F8F9FA] p-3 rounded border border-[#DADCE0] text-[11px] text-[#5F6368]">
              Signals such as budget exhaustion risk, conversion zero-anomalies, ad policy disapprovals, and tracking tag inactive states map directly to GAQL resource fields (<code className="font-mono">campaign_budget.amount_micros</code>, <code className="font-mono">conversion_action.status</code>, <code className="font-mono">ad_group_ad.policy_summary</code>).
            </div>
          </div>

          {/* 3. Alert Engine */}
          <div className="p-4 hover:bg-[#F8F9FA] transition-colors space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-[#202124] text-sm">3. Alert Engine Primitives</span>
              <div className="flex gap-2">
                <span className="px-2.5 py-1 bg-[#FEF7E0] text-[#B06000] rounded font-bold border border-[#FDE293]">
                  Status: Partial
                </span>
                <span className="px-2.5 py-1 bg-[#F8F9FA] text-[#202124] rounded font-medium border border-[#DADCE0]">
                  Confidence: Medium
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px]">
              <div className="p-2 bg-[#E6F4EA] rounded border border-[#CEEAD6] text-[#137333]">
                <strong>Pacing, Billing, Policy, Budget Exhaustion:</strong> Status: Direct via <code className="font-mono">campaign_budget</code> & <code className="font-mono">ad_group_ad</code>. Confidence: High.
              </div>
              <div className="p-2 bg-[#FEF7E0] rounded border border-[#FDE293] text-[#B06000]">
                <strong>CPA, ROAS, Tracking Failure:</strong> Status: Derived. Requires 14-day attribution lag buffer to prevent false positives. Confidence: Medium.
              </div>
              <div className="p-2 bg-[#FEF7E0] rounded border border-[#FDE293] text-[#B06000]">
                <strong>Learning Mode:</strong> Status: Direct via <code className="font-mono">campaign.learning_status</code>. Confidence: High.
              </div>
              <div className="p-2 bg-[#FEF7E0] rounded border border-[#FDE293] text-[#B06000]">
                <strong>Impression Loss:</strong> Status: Partial (Search/Shopping only). Incompatible with Performance Max/Display. Confidence: Medium.
              </div>
            </div>
          </div>

          {/* 4. AI Diagnostic Brief */}
          <div className="p-4 hover:bg-[#F8F9FA] transition-colors space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-[#202124] text-sm">4. AI Diagnostic Brief Data Retrieval</span>
              <div className="flex gap-2">
                <span className="px-2.5 py-1 bg-[#F1F3F4] text-[#5F6368] rounded font-bold border border-[#DADCE0]">
                  Status: External Evidence Required
                </span>
                <span className="px-2.5 py-1 bg-[#F8F9FA] text-[#202124] rounded font-medium border border-[#DADCE0]">
                  Confidence: Medium
                </span>
              </div>
            </div>
            <p className="text-[#3C4043] text-xs">
              <strong>Capability Mapping:</strong> Quantitative metrics, change logs, and policy reasons are retrieved directly; external client context requires staff input.
            </p>
            <div className="bg-[#F8F9FA] p-3 rounded border border-[#DADCE0] text-[11px] space-y-1 text-[#5F6368]">
              <div><strong>Directly Retrieable:</strong> Historical spend, conversion trends, quality score breakdown, disapproved policy topics, change event user/timestamp.</div>
              <div><strong>External Evidence Required:</strong> Client's external business context (e.g. out-of-stock website items, offline promos, CRM lead quality, client budget edits). Operator intent must be recorded manually.</div>
            </div>
          </div>

          {/* 5. Recommended Actions */}
          <div className="p-4 hover:bg-[#F8F9FA] transition-colors space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-[#202124] text-sm">5. Recommended Actions (Read-Only Mirroring)</span>
              <div className="flex gap-2">
                <span className="px-2.5 py-1 bg-[#E6F4EA] text-[#137333] rounded font-bold border border-[#CEEAD6]">
                  Status: Direct
                </span>
                <span className="px-2.5 py-1 bg-[#F8F9FA] text-[#202124] rounded font-medium border border-[#DADCE0]">
                  Confidence: High
                </span>
              </div>
            </div>
            <p className="text-[#3C4043] text-xs">
              Google provides recommendation feeds via <code className="font-mono">recommendation</code> resource (budget recommendations, keyword suggestions, target CPA/ROAS tuning).
            </p>
            <div className="bg-[#FEF7E0] p-2.5 rounded border border-[#FDE293] text-[11px] text-[#B06000]">
              <strong>Constraint:</strong> Automated execution of recommendations via API is out of V1 scope. Reading and presenting recommendations for human review is evaluated as a Direct capability.
            </div>
          </div>

          {/* 6. Multi-Account Operations */}
          <div className="p-4 hover:bg-[#F8F9FA] transition-colors space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-[#202124] text-sm">6. Multi-Account Operations & MCC Scaling</span>
              <div className="flex gap-2">
                <span className="px-2.5 py-1 bg-[#E6F4EA] text-[#137333] rounded font-bold border border-[#CEEAD6]">
                  Status: Direct
                </span>
                <span className="px-2.5 py-1 bg-[#F8F9FA] text-[#202124] rounded font-medium border border-[#DADCE0]">
                  Confidence: High
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-[11px]">
              <div className="bg-[#F8F9FA] p-2.5 rounded border border-[#DADCE0]">
                <strong>OAuth Identity & Manager Header:</strong> Refresh token authorizes user identity; login-customer-id header specifies manager account context when required.
              </div>
              <div className="bg-[#F8F9FA] p-2.5 rounded border border-[#DADCE0]">
                <strong>API Quotas:</strong> Developer token rate limits depend on tier (Basic vs Standard) and API operation volume.
              </div>
              <div className="bg-[#F8F9FA] p-2.5 rounded border border-[#DADCE0]">
                <strong>Scalability (Portfolio Sync):</strong> Celery distributed workers with <code className="font-mono">searchStream</code> stream chunks efficiently across customer accounts.
              </div>
            </div>
          </div>

          {/* 7. Command Center */}
          <div className="p-4 hover:bg-[#F8F9FA] transition-colors space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-[#202124] text-sm">7. Continuous Command Center Operation</span>
              <div className="flex gap-2">
                <span className="px-2.5 py-1 bg-[#E8F0FE] text-[#1A73E8] rounded font-bold border border-[#AECBFA]">
                  Status: Derived
                </span>
                <span className="px-2.5 py-1 bg-[#F8F9FA] text-[#202124] rounded font-medium border border-[#DADCE0]">
                  Confidence: High
                </span>
              </div>
            </div>
            <p className="text-[#3C4043] text-xs">
              The Command Center operates continuously by serving data out of Insights OS PostgreSQL read replicas rather than making live API calls upon page loads.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Unsupported Items */}
      <div className="bg-white p-5 rounded-xl border border-[#DADCE0] shadow-xs space-y-3">
        <h3 className="text-sm font-bold text-[#C5221F] flex items-center gap-2 border-b border-[#DADCE0] pb-2">
          <XCircle className="w-4 h-4 text-[#C5221F]" />
          <span>3. Unsupported Items & Hard Limitations</span>
        </h3>
        <div className="space-y-2 text-xs">
          <div className="p-3 bg-[#FCE8E6] border border-[#FAD2CF] rounded-lg space-y-1">
            <span className="font-bold text-[#C5221F] block">🔴 Real-Time Webhooks / Push Event Streaming</span>
            <p className="text-[#A50E0E] text-[11px]">
              Google Ads API does NOT support Webhooks, Server-Sent Events, or WebSockets. All updates must be pulled via polled GAQL batch syncs.
            </p>
          </div>
          <div className="p-3 bg-[#FCE8E6] border border-[#FAD2CF] rounded-lg space-y-1">
            <span className="font-bold text-[#C5221F] block">🔴 Historical Change Events Beyond 30 Days in API</span>
            <p className="text-[#A50E0E] text-[11px]">
              The <code className="font-mono">change_event</code> resource enforces a strict 30-day lookback window. Querying older change dates throws an API error. Long-term change tracking requires immediate database snapshotting.
            </p>
          </div>
          <div className="p-3 bg-[#FCE8E6] border border-[#FAD2CF] rounded-lg space-y-1">
            <span className="font-bold text-[#C5221F] block">🔴 Search Terms & Keyword Views for Performance Max</span>
            <p className="text-[#A50E0E] text-[11px]">
              Performance Max campaigns do not have keywords or search term views in Google Ads API. Attempting to query <code className="font-mono">keyword_view</code> for PMax campaigns returns empty results or invalid query errors.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Constraints */}
      <div className="bg-white p-5 rounded-xl border border-[#DADCE0] shadow-xs space-y-3">
        <h3 className="text-sm font-bold text-[#B06000] flex items-center gap-2 border-b border-[#DADCE0] pb-2">
          <AlertTriangle className="w-4 h-4 text-[#B06000]" />
          <span>4. Platform Constraints & Operational Guardrails</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div className="p-3 bg-[#FEF7E0] border border-[#FDE293] rounded-lg space-y-1">
            <strong className="text-[#B06000] block">Conversion Attribution Restatement Window (14 Days)</strong>
            <p className="text-[#3C4043] text-[11px]">
              Conversions are assigned to the date of click, not conversion event date. A 14-day rolling re-fetch window is required to avoid reporting lower conversions than actual.
            </p>
          </div>
          <div className="p-3 bg-[#FEF7E0] border border-[#FDE293] rounded-lg space-y-1">
            <strong className="text-[#B06000] block">Variable Intra-Day Data Latencies</strong>
            <p className="text-[#3C4043] text-[11px]">
              Google Ads API metrics process according to intra-day reporting schedules. Same-day pacing checks must accommodate processing latencies.
            </p>
          </div>
          <div className="p-3 bg-[#FEF7E0] border border-[#FDE293] rounded-lg space-y-1">
            <strong className="text-[#B06000] block">Smart Bidding Learning Phase Sensitivity</strong>
            <p className="text-[#3C4043] text-[11px]">
              Frequent budget edits (&gt;20%) or tCPA changes reset Smart Bidding learning mode (<code className="font-mono">LEARNING</code> status for 7–14 days).
            </p>
          </div>
          <div className="p-3 bg-[#FEF7E0] border border-[#FDE293] rounded-lg space-y-1">
            <strong className="text-[#B06000] block">Search Term Privacy Thresholds</strong>
            <p className="text-[#3C4043] text-[11px]">
              Google redacts search queries that do not meet privacy volume thresholds. Search term reports account for ~70–85% of total search spend.
            </p>
          </div>
        </div>
      </div>

      {/* 5. Missing Opportunities */}
      <div className="bg-white p-5 rounded-xl border border-[#DADCE0] shadow-xs space-y-3">
        <h3 className="text-sm font-bold text-[#1A73E8] flex items-center gap-2 border-b border-[#DADCE0] pb-2">
          <Zap className="w-4 h-4 text-[#1A73E8]" />
          <span>5. Unutilized Google APIs & Opportunities</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div className="p-3 bg-[#E8F0FE] border border-[#AECBFA] rounded-lg space-y-1">
            <strong className="text-[#1A73E8] block">Google Ads API searchStream Endpoint</strong>
            <p className="text-[#3C4043] text-[11px]">
              High-performance HTTP/2 gRPC streaming endpoint that reduces memory footprint and HTTP overhead compared to standard paginated search queries.
            </p>
          </div>
          <div className="p-3 bg-[#E8F0FE] border border-[#AECBFA] rounded-lg space-y-1">
            <strong className="text-[#1A73E8] block">BatchJobService for Asynchronous Bulk Operations</strong>
            <p className="text-[#3C4043] text-[11px]">
              Enables offline execution of thousands of mutations without blocking web worker processes.
            </p>
          </div>
          <div className="p-3 bg-[#E8F0FE] border border-[#AECBFA] rounded-lg space-y-1">
            <strong className="text-[#1A73E8] block">Google Analytics 4 Data API Integration</strong>
            <p className="text-[#3C4043] text-[11px]">
              Combining GA4 engagement metrics (bounce rate, average session duration, key events) with Google Ads ad spend provides complete post-click diagnostic visibility.
            </p>
          </div>
          <div className="p-3 bg-[#E8F0FE] border border-[#AECBFA] rounded-lg space-y-1">
            <strong className="text-[#1A73E8] block">Custom Conversion Goals & Values</strong>
            <p className="text-[#3C4043] text-[11px]">
              Evaluating primary vs. secondary conversion goal settings prevents optimizing campaigns towards zero-value pageview triggers.
            </p>
          </div>
        </div>
      </div>

      {/* 6. Risks */}
      <div className="bg-white p-5 rounded-xl border border-[#DADCE0] shadow-xs space-y-3">
        <h3 className="text-sm font-bold text-[#C5221F] flex items-center gap-2 border-b border-[#DADCE0] pb-2">
          <ShieldCheck className="w-4 h-4 text-[#C5221F]" />
          <span>6. Operational & Enterprise Risks</span>
        </h3>
        <div className="space-y-2 text-xs">
          <div className="p-3 bg-[#F8F9FA] border border-[#DADCE0] rounded-lg flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-[#B06000] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#202124]">API Rate Limit Lockout (RESOURCE_EXHAUSTED):</strong> Concurrent unthrottled requests across 500+ client accounts can trigger temporary developer token bans.
            </div>
          </div>
          <div className="p-3 bg-[#F8F9FA] border border-[#DADCE0] rounded-lg flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-[#B06000] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#202124]">Silent Conversion Tracking Failure False Negatives:</strong> Relying on 24h conversion drops for low-volume accounts generates false alarms during weekends.
            </div>
          </div>
          <div className="p-3 bg-[#F8F9FA] border border-[#DADCE0] rounded-lg flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-[#B06000] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#202124]">Smart Bidding Reset Cascade:</strong> Allowing non-experts to execute frequent target CPA edits creates performance instability.
            </div>
          </div>
        </div>
      </div>

      {/* 7. Final Verdict */}
      <div className="bg-white p-6 rounded-xl border border-[#DADCE0] shadow-xs space-y-4">
        <h3 className="text-base font-bold text-[#202124] flex items-center gap-2 border-b border-[#DADCE0] pb-2">
          <Target className="w-5 h-5 text-[#137333]" />
          <span>7. Final Verdict & Google Recommendations</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 bg-[#E6F4EA] border border-[#CEEAD6] rounded-lg space-y-2">
            <span className="font-bold text-[#137333] text-sm block border-b border-[#CEEAD6] pb-1">
              A. What is Production-Ready (V1 Scope)
            </span>
            <ul className="list-disc list-inside text-[#137333] space-y-1 text-[11px]">
              <li>Deterministic Alert primitives (Pacing, Heartbeat, Policy, Disapprovals)</li>
              <li>Read-only Portfolio Health Overview & 30-day health heatmaps</li>
              <li>GAQL streaming pipeline with PostgreSQL delta ingestion</li>
              <li>Single Top-Level MCC OAuth Refresh Token architecture</li>
              <li>Read-only Optimization Recommendations feed mirror</li>
            </ul>
          </div>

          <div className="p-4 bg-[#FEF7E0] border border-[#FDE293] rounded-lg space-y-2">
            <span className="font-bold text-[#B06000] text-sm block border-b border-[#FDE293] pb-1">
              B. What Requires Redesign
            </span>
            <ul className="list-disc list-inside text-[#B06000] space-y-1 text-[11px]">
              <li>Real-time dashboard assumptions (shift to hourly/daily batch sync display)</li>
              <li>Conversion alerts (must integrate 14-day attribution restatement buffer)</li>
              <li>PMax keyword reports (replace with asset group rating reports)</li>
              <li>Shared budget pacing calculations (aggregate across linked campaigns)</li>
            </ul>
          </div>

          <div className="p-4 bg-[#FCE8E6] border border-[#FAD2CF] rounded-lg space-y-2">
            <span className="font-bold text-[#C5221F] text-sm block border-b border-[#FAD2CF] pb-1">
              C. What Should Be Removed from V1
            </span>
            <ul className="list-disc list-inside text-[#C5221F] space-y-1 text-[11px]">
              <li>Automated AI campaign write-backs / campaign creation wizards</li>
              <li>Real-time websocket polling scripts</li>
              <li>Direct 24-hour conversion zero-drop alarms without baseline checks</li>
              <li>Unbounded search term reports without cost thresholds</li>
            </ul>
          </div>

          <div className="p-4 bg-[#E8F0FE] border border-[#AECBFA] rounded-lg space-y-2">
            <span className="font-bold text-[#1A73E8] text-sm block border-b border-[#AECBFA] pb-1">
              D. What Google Recommends Instead
            </span>
            <ul className="list-disc list-inside text-[#1A73E8] space-y-1 text-[11px]">
              <li>Use <code className="font-mono">searchStream</code> over traditional paginated <code className="font-mono">search</code></li>
              <li>Store change events immediately into PostgreSQL to bypass 30d limit</li>
              <li>Maintain a 14-day rolling re-fetch window for conversion restatements</li>
              <li>Enforce Standard Access developer token for scaling &gt;50 client accounts</li>
              <li>Strict Human-in-the-Loop review for all bidding and budget changes</li>
            </ul>
          </div>
        </div>

        <div className="p-4 bg-[#F8F9FA] rounded-lg border border-[#DADCE0] flex items-center justify-between">
          <div>
            <div className="font-bold text-[#202124] text-sm">Overall Architectural Feasibility Verdict</div>
            <div className="text-xs text-[#5F6368]">Approved for implementation with specified data pipeline guardrails.</div>
          </div>
          <div className="px-4 py-2 bg-[#E6F4EA] text-[#137333] font-black text-lg rounded-lg border border-[#CEEAD6]">
            8.2 / 10 — FEASIBLE
          </div>
        </div>
      </div>
    </div>
  );
};
