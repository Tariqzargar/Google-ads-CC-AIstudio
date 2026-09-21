import React from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Settings, 
  Bell, 
  Lock, 
  Cpu, 
  Layers, 
  Sliders, 
  AlertTriangle,
  FileCheck,
  CheckSquare
} from 'lucide-react';

export const GateDAddendumView: React.FC = () => {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Banner */}
      <div className="bg-white rounded-xl border border-[#DADCE0] shadow-xs p-6 border-t-4 border-t-[#1A73E8]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#DADCE0]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-[#E8F0FE] text-[#1A73E8] border border-[#AECBFA] uppercase tracking-wider flex items-center gap-1">
                <FileCheck className="w-3.5 h-3.5 text-[#1A73E8]" /> CONTROLLED AMENDMENT
              </span>
              <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-[#E6F4EA] text-[#137333] border border-[#CEEAD6]">
                GATES A, B & C UNCHANGED
              </span>
            </div>
            <h2 className="text-xl font-bold text-[#202124] tracking-tight">
              Gate D Addendum D-01 — Operational Profile & Configurable Alert Policy
            </h2>
            <p className="text-xs text-[#5F6368] mt-1 leading-relaxed">
              Implementation-contract amendment incorporating founder-approved operational capabilities (per-account preferences and configurable alert policies) without altering the frozen domain architecture.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-[#E6F4EA] border border-[#CEEAD6] rounded-lg p-3 text-right">
              <div className="text-[10px] uppercase font-bold text-[#137333]">Status</div>
              <div className="text-xs font-bold text-[#137333]">🟢 ADDENDUM D-01 ACCEPTED</div>
            </div>
          </div>
        </div>

        {/* Executive Overview Pill */}
        <div className="mt-4 p-3 bg-[#F8F9FA] rounded-lg border border-[#DADCE0] text-xs text-[#3C4043] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#1E8E3E]" />
            <span className="font-semibold text-[#202124]">Implementation Contract Scope:</span>
            <span>Insights OS operational concerns only. Zero changes to Google Ads domain entities or frozen architecture.</span>
          </div>
          <span className="font-mono text-[11px] text-[#1A73E8] font-bold">D-01 Specification</span>
        </div>
      </div>

      {/* 1. Google Ads Operational Profile */}
      <div className="bg-white rounded-xl border border-[#DADCE0] shadow-xs overflow-hidden">
        <div className="p-4 bg-[#F8F9FA] border-b border-[#DADCE0] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sliders className="w-4 h-4 text-[#1A73E8]" />
            <h3 className="font-bold text-sm text-[#202124]">1. Google Ads Operational Profile Ownership</h3>
          </div>
          <span className="text-xs font-mono text-[#174EA6] bg-[#E8F0FE] px-2.5 py-0.5 rounded border border-[#AECBFA]">
            Insights OS Operational Concern
          </span>
        </div>

        <div className="p-6 space-y-4 text-xs text-[#3C4043]">
          <p className="leading-relaxed">
            The <strong className="text-[#202124]">Operational Profile</strong> represents how Insights OS operates a linked Google Ads account. It is owned entirely by Insights OS and is explicitly separated from the Google Ads domain entity (<code className="font-mono text-[#1A73E8]">GoogleAdsAccount</code>).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-[#F8F9FA] rounded-xl border border-[#DADCE0] space-y-2">
              <div className="flex items-center gap-2 text-[#1A73E8] font-bold">
                <Settings className="w-4 h-4" />
                <span>Operational Preferences Scope</span>
              </div>
              <ul className="list-disc pl-5 space-y-1.5 text-[11px] text-[#5F6368]">
                <li><strong className="text-[#202124]">Show on Command Centre:</strong> Toggle account visibility on operational dashboards.</li>
                <li><strong className="text-[#202124]">Dashboard Metric Selection:</strong> Custom primary metric overlays for agency staff views.</li>
                <li><strong className="text-[#202124]">Monitoring Enabled:</strong> Master operational switch for automated ingestion & evaluation.</li>
                <li><strong className="text-[#202124]">Notification Channel Preferences:</strong> Account-level dispatch targets and routing rules.</li>
                <li><strong className="text-[#202124]">Internal Presentation Preferences:</strong> Future staff UI layout and custom tags.</li>
              </ul>
            </div>

            <div className="p-4 bg-[#F8F9FA] rounded-xl border border-[#DADCE0] space-y-2">
              <div className="flex items-center gap-2 text-[#1E8E3E] font-bold">
                <Lock className="w-4 h-4" />
                <span>Governance & Immutability Invariants</span>
              </div>
              <ul className="list-disc pl-5 space-y-1.5 text-[11px] text-[#5F6368]">
                <li>Managed exclusively by authorized <strong className="text-[#202124]">Insights OS staff</strong>.</li>
                <li>Google Ads API background synchronization <strong className="text-[#EA4335]">must NEVER overwrite</strong> operational profile values.</li>
                <li>Strictly operational configuration — entirely separate from synchronized Google Ads data.</li>
                <li>Does <strong className="text-[#202124]">NOT</strong> modify <code className="font-mono text-[#1A73E8]">GoogleAdsAccount</code> structure or domain behavior.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Configurable Alert Policy */}
      <div className="bg-white rounded-xl border border-[#DADCE0] shadow-xs overflow-hidden">
        <div className="p-4 bg-[#F8F9FA] border-b border-[#DADCE0] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell className="w-4 h-4 text-[#1A73E8]" />
            <h3 className="font-bold text-sm text-[#202124]">2. Configurable Alert Policy Ownership & Decision Logic</h3>
          </div>
          <span className="text-xs font-mono text-[#174EA6] bg-[#E8F0FE] px-2.5 py-0.5 rounded border border-[#AECBFA]">
            Alert Decision Logic Layer
          </span>
        </div>

        <div className="p-6 space-y-4 text-xs text-[#3C4043]">
          <p className="leading-relaxed">
            The <strong className="text-[#202124]">Alert Engine</strong> architecture remains completely unchanged. Only the alert decision logic is configurable via the <strong className="text-[#1A73E8]">Configurable Alert Policy</strong> layer, which evaluates immutable <code className="font-mono text-[#1A73E8]">MetricSnapshot</code> facts without modifying application architecture.
          </p>

          <div className="p-4 bg-[#F8F9FA] rounded-xl border border-[#DADCE0] space-y-3">
            <strong className="font-bold text-sm text-[#202124] block">Alert Policy Classification Matrix</strong>
            <p className="text-[11px] text-[#5F6368]">
              The policy layer determines alert creation, severity, category, suppression, and escalation by evaluating single thresholds or combinations of metrics. Alert categories are strictly separated to prevent misclassification.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-[11px]">
              {[
                { cat: 'Performance Degradation', desc: 'CTR / CVR drop, CPA spike over rolling baseline.', color: '#1A73E8' },
                { cat: 'Budget Pacing', desc: 'Over-spending or severe under-pacing against target budget.', color: '#137333' },
                { cat: 'Conversion Anomalies', desc: 'Sudden zero-conversion drop or unexpected volume spike.', color: '#B06000' },
                { cat: 'Policy Violations', desc: 'Ad group or ad level disapproval or policy topic flags.', color: '#C5221F' },
                { cat: 'Billing Issues', desc: 'Account payment failure or credit limit warning.', color: '#A142F4' },
                { cat: 'Tracking Issues', desc: 'Conversion action zero heartbeat or tag breakage.', color: '#174EA6' }
              ].map((item, idx) => (
                <div key={idx} className="p-3 bg-white rounded border border-[#DADCE0] space-y-1">
                  <div className="font-bold" style={{ color: item.color }}>{item.cat}</div>
                  <p className="text-[#5F6368] text-[10px]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 bg-[#FEF7E0] border border-[#FEEFC3] rounded-xl text-[#B06000] space-y-1">
            <strong className="font-bold text-xs flex items-center gap-1.5 text-[#B06000]">
              <AlertTriangle className="w-4 h-4 text-[#B06000]" /> Explicit Category Guardrail
            </strong>
            <p className="text-[11px] leading-relaxed">
              The architecture must <strong>NOT</strong> classify "low budget" as "poor performance." Alert category is determined entirely by configured policy. Performance is one category; Budget pacing is another; Tracking health is another; Billing is another. The Alert Engine simply executes the active policy against immutable facts.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Interaction with Existing Alert Engine */}
      <div className="bg-white rounded-xl border border-[#DADCE0] shadow-xs overflow-hidden">
        <div className="p-4 bg-[#F8F9FA] border-b border-[#DADCE0] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-[#1A73E8]" />
            <h3 className="font-bold text-sm text-[#202124]">3. Interaction with Existing Alert Engine</h3>
          </div>
          <span className="text-xs font-mono text-[#137333] bg-[#E6F4EA] px-2.5 py-0.5 rounded border border-[#CEEAD6]">
            Deterministic Fact Evaluation
          </span>
        </div>

        <div className="p-6 space-y-4 text-xs text-[#3C4043] leading-relaxed">
          <div className="p-4 bg-[#F8F9FA] rounded-xl border border-[#DADCE0] space-y-2">
            <ul className="list-disc pl-5 space-y-2 text-[11px] text-[#5F6368]">
              <li>
                <strong className="text-[#202124]">Immutable Fact Consumption:</strong> The Alert Engine reads frozen <code className="font-mono text-[#1A73E8]">MetricSnapshot</code> facts without mutating underlying domain data.
              </li>
              <li>
                <strong className="text-[#202124]">Zero Entity Modification:</strong> Does <strong className="text-[#202124]">NOT</strong> modify <code className="font-mono text-[#1A73E8]">GoogleAdsAccount</code>, duplicate Google Ads data, or change aggregate ownership boundaries.
              </li>
              <li>
                <strong className="text-[#202124]">Zero Structural Change:</strong> Configurable policies are executed by the existing Alert Engine workflow without introducing new rule engines, database schemas, or technology dependencies.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 4. Confirmation of Gates A, B, and C */}
      <div className="bg-white rounded-xl border border-[#DADCE0] shadow-xs overflow-hidden">
        <div className="p-4 bg-[#F8F9FA] border-b border-[#DADCE0] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckSquare className="w-4 h-4 text-[#1E8E3E]" />
            <h3 className="font-bold text-sm text-[#202124]">4. Confirmation that Gates A, B, and C Remain Unchanged</h3>
          </div>
          <span className="text-xs font-mono text-[#137333] bg-[#E6F4EA] px-2.5 py-0.5 rounded border border-[#CEEAD6]">
            Architectural Integrity Preserved
          </span>
        </div>

        <div className="p-6 space-y-4 text-xs text-[#3C4043]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-[11px]">
            {[
              'Gate A (Architecture Contract) UNCHANGED',
              'Gate B (Domain Model Contract) UNCHANGED',
              'Gate C (App Services & Workflows) UNCHANGED',
              'Domain Entities & Aggregate Boundaries UNCHANGED',
              'Ownership Matrices & Shared Foundations UNCHANGED',
              'Workflows & State Machines UNCHANGED',
              'Google Ads Entities & BusinessRecord UNCHANGED',
              'Integration & Durable Job Foundations UNCHANGED',
              'V1 Scope & Diagnostic Focus UNCHANGED'
            ].map((item, idx) => (
              <div key={idx} className="p-2.5 bg-[#F8F9FA] rounded border border-[#DADCE0] flex items-center gap-2 font-medium text-[#202124]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1E8E3E] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Confirmation of Architectural Boundaries */}
      <div className="bg-white rounded-xl border border-[#DADCE0] shadow-xs overflow-hidden">
        <div className="p-4 bg-[#F8F9FA] border-b border-[#DADCE0] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#1A73E8]" />
            <h3 className="font-bold text-sm text-[#202124]">5. Confirmation that No Architectural Boundaries Were Modified</h3>
          </div>
          <span className="text-xs font-mono text-[#137333] bg-[#E6F4EA] px-2.5 py-0.5 rounded border border-[#CEEAD6]">
            Zero Technology / Code Changes
          </span>
        </div>

        <div className="p-6 space-y-3 text-xs text-[#3C4043] leading-relaxed">
          <p className="text-[#5F6368]">
            This addendum is strictly an implementation-contract requirement specification. The following explicit constraints are confirmed:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-[11px] text-[#5F6368]">
            <li>Zero new architecture gates or redesigns introduced.</li>
            <li>Zero implementation code, Django models, ORMs, or database schemas prescribed.</li>
            <li>Zero API endpoints or database migrations generated.</li>
            <li>Zero rule engine implementation or technology stack constraints imposed.</li>
          </ul>
        </div>
      </div>

      {/* Final Verdict Box */}
      <div className="p-6 bg-[#E6F4EA] rounded-xl border-2 border-[#1E8E3E] text-center space-y-3 shadow-xs">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1E8E3E] text-white font-bold rounded-full text-xs uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4" /> OFFICIAL ADDENDUM VERDICT
        </div>
        <h3 className="text-lg font-bold text-[#137333] tracking-tight">
          🟢 Gate D Addendum D-01 Accepted — No Architectural Changes Required
        </h3>
        <p className="text-xs text-[#3C4043] max-w-2xl mx-auto leading-relaxed">
          The operational profile and configurable alert policy requirements are formally incorporated as implementation-contract amendments. Gates A, B, and C remain 100% frozen and unchanged.
        </p>
      </div>
    </div>
  );
};
