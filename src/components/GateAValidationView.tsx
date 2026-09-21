import React from 'react';
import { CheckCircle2, ShieldCheck, AlertTriangle, Cpu, Layers, UserCheck, Eye, Trash2, HelpCircle, FileCheck, Server, Lock, Activity, Award } from 'lucide-react';

export const GateAValidationView: React.FC = () => {
  const gates = [
    {
      gate: 'Gate 1 — Business Value',
      status: 'CONDITIONAL PASS',
      color: 'amber',
      icon: CheckCircle2,
      summary: 'Addresses agency friction: budget overspend risk, tracking failures, and missed policy disapprovals.',
      findings: 'High focus on risk mitigation. Subject to live agency workflow feedback.',
      action: 'Validate alert utility with real agency user groups.'
    },
    {
      gate: 'Gate 2 — Human-in-the-Loop',
      status: 'CONDITIONAL PASS',
      color: 'amber',
      icon: UserCheck,
      summary: 'Zero autonomous AI campaign mutations. Diagnostic briefs present evidence for human decision.',
      findings: 'Read-only boundary enforced in specification. Middleware guards must be verified.',
      action: 'Enforce strict backend read-only API middleware.'
    },
    {
      gate: 'Gate 3 — Management by Exception',
      status: 'CONDITIONAL PASS',
      color: 'amber',
      icon: Eye,
      summary: 'Presents actionable exceptions via Priority Queue and Deterministic Alert Evaluators.',
      findings: 'Exceptions prioritized to prevent alert fatigue.',
      action: 'Enforce exception filtering in default Command Center dashboard.'
    },
    {
      gate: 'Gate 4 — Cognitive Load',
      status: 'CONDITIONAL PASS',
      color: 'amber',
      icon: Layers,
      summary: 'Single-page tabbed navigation keeps context switches minimal.',
      findings: 'Multiple sub-metrics in alerts can clutter mobile views.',
      action: 'Consolidate alert card metrics to primary trigger condition and clearance threshold.'
    },
    {
      gate: 'Gate 5 — Noise Elimination',
      status: 'CONDITIONAL PASS',
      color: 'amber',
      icon: Trash2,
      summary: 'Removed raw impression counters, unaggregated search terms, and real-time socket spinners.',
      findings: 'Dashboard focuses on pacing variance, conversion heartbeat, and policy statuses.',
      action: 'Audit dashboard view to ensure no unaggregated vanity metrics remain.'
    },
    {
      gate: 'Gate 6 — Explainability',
      status: 'CONDITIONAL PASS',
      color: 'amber',
      icon: HelpCircle,
      summary: 'Alerts and AI diagnostic briefs state WHY, supporting GAQL evidence, and expected clearance criteria.',
      findings: 'Every alert primitive details false-positive risks and exact mathematical conditions.',
      action: 'Display clearance criteria explicitly on firing alerts.'
    },
    {
      gate: 'Gate 7 — Auditability',
      status: 'CONDITIONAL PASS',
      color: 'amber',
      icon: FileCheck,
      summary: 'Google Ads change_event logs are snapshotted daily into local PostgreSQL to bypass the 30-day API limit.',
      findings: 'Provides change event persistence; snapshot worker must be tested under load.',
      action: 'Run automated tests verifying snapshot worker execution before 30-day API purge.'
    },
    {
      gate: 'Gate 8 — Platform Independence',
      status: 'CONDITIONAL PASS',
      color: 'amber',
      icon: Server,
      summary: 'Command Center communicates via Google Ads API v25 endpoints and local PostgreSQL models.',
      findings: 'Domain service abstraction isolates API transport layer.',
      action: 'Maintain domain service abstraction layer.'
    },
    {
      gate: 'Gate 9 — Operational Safety',
      status: 'CONDITIONAL PASS',
      color: 'amber',
      icon: Lock,
      summary: 'Read-only V1 boundary prevents overspend, duplicate mutations, or race conditions.',
      findings: 'Eliminates direct API mutation risk during initial platform deployment.',
      action: 'Include automated tests for mutation guard middleware.'
    },
    {
      gate: 'Gate 10 — Scalability',
      status: 'CONDITIONAL PASS',
      color: 'amber',
      icon: Activity,
      summary: 'Celery worker queue with searchStream streams data for multi-account portfolios.',
      findings: 'Requires real load testing to verify behavior under rate limits.',
      action: 'Deploy account-level rate limiter for RESOURCE_EXHAUSTED 429 backoff testing.'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Title Header */}
      <div className="bg-white p-6 rounded-xl border border-[#DADCE0] shadow-xs border-l-4 border-l-[#137333]">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-[#E6F4EA] text-[#137333] border border-[#CEEAD6] uppercase tracking-wider">
                Architecture Validation Board
              </span>
              <span className="text-xs text-[#5F6368] font-mono">Formal Gate Review</span>
            </div>
            <h2 className="text-xl font-bold text-[#202124] flex items-center gap-2">
              <Award className="w-5 h-5 text-[#137333]" />
              <span>Gate A Validation — Google Ads Command Center</span>
            </h2>
            <p className="text-sm text-[#5F6368] mt-1">
              Formal Architecture Governance Board review evaluating business value, safety, cognitive load, auditability, and Insights OS platform integration.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-[#F8F9FA] p-3 rounded-lg border border-[#DADCE0]">
            <div className="text-right">
              <div className="text-xs text-[#5F6368] font-medium">Gate Assessment</div>
              <div className="text-sm font-bold text-[#B06000]">CONDITIONAL FINDINGS</div>
            </div>
          </div>
        </div>
      </div>

      {/* 1. Executive Assessment */}
      <div className="bg-white p-6 rounded-xl border border-[#DADCE0] shadow-xs space-y-3">
        <h3 className="text-base font-bold text-[#202124] flex items-center gap-2 border-b border-[#DADCE0] pb-2">
          <ShieldCheck className="w-5 h-5 text-[#B06000]" />
          <span>1. Executive Assessment</span>
        </h3>
        <div className="p-4 bg-[#FEF7E0] border border-[#FDE293] rounded-lg text-xs space-y-2">
          <p className="font-semibold text-[#B06000]">
            The Governance Board has completed an evidence-based Gate A evaluation of the Google Ads Command Center specification.
          </p>
          <p className="text-[#B06000] leading-relaxed">
            The specification defines read-only boundary constraints and local PostgreSQL data snapshotting for Google Ads API v25. All findings are conditional pending real test execution for snapshot worker jobs under rate-limit conditions and multi-tenant isolation verification.
          </p>
        </div>
      </div>

      {/* 2. Gate-by-Gate Results */}
      <div className="bg-white rounded-xl border border-[#DADCE0] shadow-xs overflow-hidden">
        <div className="p-4 bg-[#F8F9FA] border-b border-[#DADCE0]">
          <h3 className="font-bold text-sm text-[#202124]">2. Gate-by-Gate Review Results</h3>
          <p className="text-xs text-[#5F6368]">Evaluation of the 10 mandatory architecture gates</p>
        </div>

        <div className="divide-y divide-[#DADCE0] text-xs">
          {gates.map((g, idx) => {
            const IconComponent = g.icon;
            const isPass = g.status === 'PASS';
            return (
              <div key={idx} className="p-4 hover:bg-[#F8F9FA] transition-colors space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-bold text-sm text-[#202124]">
                    <IconComponent className={`w-4 h-4 ${isPass ? 'text-[#137333]' : 'text-[#B06000]'}`} />
                    <span>{g.gate}</span>
                  </div>
                  <span className={`px-2.5 py-0.5 rounded text-[11px] font-bold border ${
                    isPass ? 'bg-[#E6F4EA] text-[#137333] border-[#CEEAD6]' : 'bg-[#FEF7E0] text-[#B06000] border-[#FDE293]'
                  }`}>
                    {g.status}
                  </span>
                </div>
                <p className="text-[#202124] text-xs font-medium">{g.summary}</p>
                <div className="bg-[#F8F9FA] p-2.5 rounded border border-[#DADCE0] text-[11px] text-[#5F6368] space-y-1">
                  <div><strong>Findings:</strong> {g.findings}</div>
                  <div><strong>Governance Action:</strong> {g.action}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Cross-Architecture Integration Review */}
      <div className="bg-white p-6 rounded-xl border border-[#DADCE0] shadow-xs space-y-4">
        <h3 className="text-base font-bold text-[#202124] flex items-center gap-2 border-b border-[#DADCE0] pb-2">
          <Cpu className="w-5 h-5 text-[#1A73E8]" />
          <span>3. Insights OS Cross-Architecture Review</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div className="p-3 bg-[#F8F9FA] rounded-lg border border-[#DADCE0] space-y-1">
            <strong className="text-[#202124] block">Relationships & Accounts Integration</strong>
            <p className="text-[#5F6368] text-[11px]">
              Mapped cleanly: <code className="font-mono">customer_client.client_customer</code> pairs directly with Insights OS Account IDs.
            </p>
          </div>

          <div className="p-3 bg-[#F8F9FA] rounded-lg border border-[#DADCE0] space-y-1">
            <strong className="text-[#202124] block">Work Management & Priority Queue</strong>
            <p className="text-[#5F6368] text-[11px]">
              Firing alerts automatically populate the operator Work Management task queue without manual entry.
            </p>
          </div>

          <div className="p-3 bg-[#F8F9FA] rounded-lg border border-[#DADCE0] space-y-1">
            <strong className="text-[#202124] block">Notifications Engine Integration</strong>
            <p className="text-[#5F6368] text-[11px]">
              Alert primitives log in-app notifications into Insights OS Journal; external push channels (Telegram/Slack) are moved to FUTURE ROADMAP — OUT OF V1.
            </p>
          </div>

          <div className="p-3 bg-[#F8F9FA] rounded-lg border border-[#DADCE0] space-y-1">
            <strong className="text-[#202124] block">Audit & AI Foundation</strong>
            <p className="text-[#5F6368] text-[11px]">
              Change event logs feeds AI Diagnostic Brief generator with deterministic grounding context.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Critical Issues & Recommended Improvements */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-5 rounded-xl border border-[#DADCE0] shadow-xs space-y-3">
          <h3 className="font-bold text-sm text-[#C5221F] flex items-center gap-2 border-b border-[#DADCE0] pb-2">
            <AlertTriangle className="w-4 h-4 text-[#C5221F]" />
            <span>4. Critical Issues (Pre-Implementation)</span>
          </h3>
          <ul className="list-disc list-inside text-xs text-[#5F6368] space-y-2">
            <li>
              <strong className="text-[#202124]">Conversion Restatement Buffer:</strong> Nightly sync pipeline MUST maintain a 14-day rolling re-fetch window to capture attribution restatements.
            </li>
            <li>
              <strong className="text-[#202124]">Rate Limit Jitter Guard:</strong> Celery worker tasks must implement exponential backoff with randomized jitter on HTTP 429 response codes.
            </li>
            <li>
              <strong className="text-[#202124]">PMax Query Routing:</strong> Query router must check <code className="font-mono">advertising_channel_type</code> before attempting keyword/SQR queries.
            </li>
          </ul>
        </div>

        <div className="bg-white p-5 rounded-xl border border-[#DADCE0] shadow-xs space-y-3">
          <h3 className="font-bold text-sm text-[#137333] flex items-center gap-2 border-b border-[#DADCE0] pb-2">
            <CheckCircle2 className="w-4 h-4 text-[#137333]" />
            <span>5. Recommended Improvements</span>
          </h3>
          <ul className="list-disc list-inside text-xs text-[#5F6368] space-y-2">
            <li>
              <strong className="text-[#202124]">Adopt searchStream API:</strong> Standardize on <code className="font-mono">GoogleAdsService.SearchStream</code> for streaming bulk metric ingestion without pagination overhead.
            </li>
            <li>
              <strong className="text-[#202124]">Auto-Purge Stale Recommendations:</strong> Purge <code className="font-mono">recommendation</code> records from PostgreSQL when no longer returned by API.
            </li>
            <li>
              <strong className="text-[#202124]">Operator Intent Prompting:</strong> When local changes are detected, prompt operators in UI to record qualitative context.
            </li>
          </ul>
        </div>
      </div>

      {/* 5. Decision Summary */}
      <div className="bg-[#FEF7E0] p-6 rounded-xl border border-[#FDE293] flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-[#B06000] uppercase tracking-wider block mb-1">
            Governance Decision & Review Findings
          </span>
          <h3 className="text-lg font-bold text-[#B06000]">
            CONDITIONAL PASS — SUBJECT TO EVIDENCE VERIFICATION
          </h3>
          <p className="text-xs text-[#B06000] mt-1">
            The Google Ads Command Center V1 specification is assigned conditional status. Full validation requires live integration testing, database snapshot worker execution, and automated contract tests.
          </p>
        </div>
        <div className="shrink-0 px-5 py-3 bg-[#B06000] text-white font-bold rounded-lg text-xs uppercase tracking-wider text-center shadow-xs">
          STATUS: CONDITIONAL FINDINGS
        </div>
      </div>
    </div>
  );
};
