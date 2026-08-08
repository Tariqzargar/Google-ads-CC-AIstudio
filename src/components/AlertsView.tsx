import React, { useState } from 'react';
import { ALERT_PRIMITIVES } from '../data/contractData';
import { ShieldCheck, AlertTriangle, Play, CheckCircle2, Sliders, RefreshCw, Activity } from 'lucide-react';

export const AlertsView: React.FC = () => {
  // Interactive Simulator State
  const [dailySpend, setDailySpend] = useState<number>(350);
  const [mtdSpend, setMtdSpend] = useState<number>(8500);
  const [monthlyBudget, setMonthlyBudget] = useState<number>(7000);
  const [dayOfMonth, setDayOfMonth] = useState<number>(18);
  const [daysInMonth, setDaysInMonth] = useState<number>(28);
  const [conversions48h, setConversions48h] = useState<number>(0);
  const [baselineConvAvg, setBaselineConvAvg] = useState<number>(8);
  const [disapprovedAds, setDisapprovedAds] = useState<number>(2);

  // Evaluate Alerts Deterministically
  const runRate = mtdSpend + (dailySpend * (daysInMonth - dayOfMonth));
  const pacingVariance = runRate - monthlyBudget;
  const pacingPct = ((pacingVariance / monthlyBudget) * 100).toFixed(1);

  const isPacingOverspend = pacingVariance > 0 && (runRate > monthlyBudget * 1.15) && dayOfMonth >= 5;
  const isHeartbeatFailed = dailySpend > 100 && conversions48h === 0 && baselineConvAvg >= 5;
  const isPolicyAlert = disapprovedAds > 0;

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl border border-[#DADCE0] shadow-xs">
        <h2 className="text-xl font-bold text-[#202124] mb-1 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-[#1A73E8]" />
          <span>8-9. Deterministic Alert Primitives & Health Signal Map</span>
        </h2>
        <p className="text-sm text-[#5F6368]">
          Mathematical, non-AI deterministic alert rules. Alerts are computed locally in Django from Google Ads API sync data with strict observation windows and clearance criteria.
        </p>
      </div>

      {/* Interactive Alert Simulator Box */}
      <div className="bg-white text-[#202124] p-6 rounded-xl border border-[#DADCE0] shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-[#DADCE0] pb-3">
          <div className="flex items-center gap-2">
            <Sliders className="w-5 h-5 text-[#1A73E8]" />
            <h3 className="font-bold text-base text-[#202124]">Interactive Alert Evaluator Simulator</h3>
          </div>
          <span className="text-xs bg-[#E8F0FE] text-[#1A73E8] font-mono px-2.5 py-1 rounded border border-[#AECBFA] font-semibold">
            Real-time Logic Test
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="space-y-2 bg-[#F8F9FA] p-3.5 rounded-lg border border-[#DADCE0]">
            <label className="font-semibold text-[#202124] block">Daily Spend Rate ($):</label>
            <input
              type="number"
              value={dailySpend}
              onChange={(e) => setDailySpend(Number(e.target.value))}
              className="w-full bg-white border border-[#DADCE0] rounded px-2.5 py-1.5 text-[#202124] font-mono outline-none focus:border-[#1A73E8]"
            />

            <label className="font-semibold text-[#202124] block pt-1">MTD Cumulative Spend ($):</label>
            <input
              type="number"
              value={mtdSpend}
              onChange={(e) => setMtdSpend(Number(e.target.value))}
              className="w-full bg-white border border-[#DADCE0] rounded px-2.5 py-1.5 text-[#202124] font-mono outline-none focus:border-[#1A73E8]"
            />

            <label className="font-semibold text-[#202124] block pt-1">Monthly Target Budget ($):</label>
            <input
              type="number"
              value={monthlyBudget}
              onChange={(e) => setMonthlyBudget(Number(e.target.value))}
              className="w-full bg-white border border-[#DADCE0] rounded px-2.5 py-1.5 text-[#202124] font-mono outline-none focus:border-[#1A73E8]"
            />
          </div>

          <div className="space-y-2 bg-[#F8F9FA] p-3.5 rounded-lg border border-[#DADCE0]">
            <label className="font-semibold text-[#202124] block">Conversions (Last 48h):</label>
            <input
              type="number"
              value={conversions48h}
              onChange={(e) => setConversions48h(Number(e.target.value))}
              className="w-full bg-white border border-[#DADCE0] rounded px-2.5 py-1.5 text-[#202124] font-mono outline-none focus:border-[#1A73E8]"
            />

            <label className="font-semibold text-[#202124] block pt-1">14-Day Baseline Avg Conv/Day:</label>
            <input
              type="number"
              value={baselineConvAvg}
              onChange={(e) => setBaselineConvAvg(Number(e.target.value))}
              className="w-full bg-white border border-[#DADCE0] rounded px-2.5 py-1.5 text-[#202124] font-mono outline-none focus:border-[#1A73E8]"
            />

            <label className="font-semibold text-[#202124] block pt-1">Disapproved Ads Count:</label>
            <input
              type="number"
              value={disapprovedAds}
              onChange={(e) => setDisapprovedAds(Number(e.target.value))}
              className="w-full bg-white border border-[#DADCE0] rounded px-2.5 py-1.5 text-[#202124] font-mono outline-none focus:border-[#1A73E8]"
            />
          </div>

          <div className="bg-[#F8F9FA] p-4 rounded-lg border border-[#DADCE0] space-y-3">
            <span className="font-bold uppercase tracking-wider text-[11px] text-[#1A73E8] block border-b border-[#DADCE0] pb-1">
              Simulated Evaluator Results
            </span>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-center font-mono">
                <span className="text-[#5F6368]">Projected Run Rate:</span>
                <span className="font-bold text-[#1A73E8]">${runRate.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center font-mono">
                <span className="text-[#5F6368]">Pacing Variance:</span>
                <span className={`font-bold ${pacingVariance > 0 ? 'text-[#B06000]' : 'text-[#137333]'}`}>
                  {pacingVariance > 0 ? `+$${pacingVariance.toLocaleString()}` : `-$${Math.abs(pacingVariance).toLocaleString()}`} ({pacingPct}%)
                </span>
              </div>

              <div className="pt-2 border-t border-[#DADCE0] space-y-1.5">
                <div className={`p-2 rounded text-[11px] flex items-center gap-1.5 font-semibold ${isPacingOverspend ? 'bg-[#FEF7E0] text-[#B06000] border border-[#FDE293]' : 'bg-[#E6F4EA] text-[#137333]'}`}>
                  {isPacingOverspend ? <AlertTriangle className="w-3.5 h-3.5 text-[#B06000] shrink-0" /> : <CheckCircle2 className="w-3.5 h-3.5 text-[#137333] shrink-0" />}
                  <span>Pacing Alert: {isPacingOverspend ? 'FIRING (Overspend Risk!)' : 'Normal'}</span>
                </div>

                <div className={`p-2 rounded text-[11px] flex items-center gap-1.5 font-semibold ${isHeartbeatFailed ? 'bg-[#FCE8E6] text-[#C5221F] border border-[#FAD2CF]' : 'bg-[#E6F4EA] text-[#137333]'}`}>
                  {isHeartbeatFailed ? <AlertTriangle className="w-3.5 h-3.5 text-[#C5221F] shrink-0" /> : <CheckCircle2 className="w-3.5 h-3.5 text-[#137333] shrink-0" />}
                  <span>Tracking Alert: {isHeartbeatFailed ? 'FIRING (Zero Conversion Anomaly!)' : 'Normal'}</span>
                </div>

                <div className={`p-2 rounded text-[11px] flex items-center gap-1.5 font-semibold ${isPolicyAlert ? 'bg-[#FCE8E6] text-[#C5221F] border border-[#FAD2CF]' : 'bg-[#E6F4EA] text-[#137333]'}`}>
                  {isPolicyAlert ? <AlertTriangle className="w-3.5 h-3.5 text-[#C5221F] shrink-0" /> : <CheckCircle2 className="w-3.5 h-3.5 text-[#137333] shrink-0" />}
                  <span>Policy Alert: {isPolicyAlert ? `FIRING (${disapprovedAds} Disapproved Ads)` : 'Normal'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alert Primitives Catalog Table */}
      <div className="bg-white rounded-xl border border-[#DADCE0] shadow-xs overflow-hidden">
        <div className="p-4 bg-[#F8F9FA] border-b border-[#DADCE0] font-bold text-xs text-[#5F6368] uppercase tracking-wider">
          Production Alert Primitives Specification ({ALERT_PRIMITIVES.length})
        </div>

        <div className="divide-y divide-[#DADCE0] text-xs">
          {ALERT_PRIMITIVES.map((alert) => (
            <div key={alert.id} className="p-5 hover:bg-[#F8F9FA] transition-colors space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#202124] text-white font-mono">
                    {alert.category}
                  </span>
                  <h4 className="font-bold text-sm text-[#202124]">{alert.name}</h4>
                </div>

                <span className="text-[11px] px-2.5 py-1 rounded bg-[#E6F4EA] text-[#137333] border border-[#CEEAD6] font-semibold self-start sm:self-auto">
                  {alert.reliability}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 bg-[#F8F9FA] p-3 rounded-lg border border-[#DADCE0] text-[#202124]">
                <div>
                  <span className="text-[#5F6368] text-[10px] uppercase font-bold block mb-0.5">
                    Trigger Condition
                  </span>
                  <p className="font-mono text-[11px] text-[#202124]">{alert.condition}</p>
                </div>

                <div>
                  <span className="text-[#5F6368] text-[10px] uppercase font-bold block mb-0.5">
                    Observation Window & Clearance
                  </span>
                  <p className="text-[#3C4043]">
                    <strong>Window:</strong> {alert.observationWindow}<br />
                    <strong>Clearance:</strong> {alert.clearanceCondition}
                  </p>
                </div>

                <div>
                  <span className="text-[#5F6368] text-[10px] uppercase font-bold block mb-0.5">
                    False Positive Risk & Guards
                  </span>
                  <ul className="list-disc list-inside text-[#5F6368] text-[11px] space-y-0.5">
                    {alert.falsePositiveRisks.map((fp, i) => (
                      <li key={i}>{fp}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="text-[#5F6368] text-[11px]">
                <strong className="text-[#202124]">Sample Scenario:</strong> {alert.sampleScenario}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
