import React from 'react';
import { Layers, Clock, TrendingUp, Search, AlertOctagon, RefreshCw, BarChart2, ShieldCheck } from 'lucide-react';

export const MetricsView: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl border border-[#DADCE0] shadow-xs">
        <h2 className="text-xl font-bold text-[#202124] mb-1 flex items-center gap-2">
          <Layers className="w-5 h-5 text-[#1A73E8]" />
          <span>4-5. Metrics Contract & Historical Truth Reconciliation</span>
        </h2>
        <p className="text-sm text-[#5F6368]">
          Source mapping for core metrics, budget pacing, search impression share, conversion health, and the 14-day rolling window strategy for conversion lag reconciliation.
        </p>
      </div>

      {/* Metrics Breakdown Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Core Performance Metrics */}
        <div className="bg-white p-5 rounded-xl border border-[#DADCE0] shadow-xs space-y-3">
          <h3 className="font-bold text-[#202124] text-sm flex items-center gap-2 border-b border-[#DADCE0] pb-2">
            <TrendingUp className="w-4 h-4 text-[#1A73E8]" />
            <span>1. Core Performance Metrics</span>
          </h3>
          <ul className="text-xs space-y-2 text-[#202124]">
            <li className="bg-[#F8F9FA] p-2.5 rounded border border-[#DADCE0]">
              <span className="font-bold text-[#202124] block">Cost / Spend:</span>
              <code className="text-[#1A73E8] bg-[#E8F0FE] px-1 font-mono text-[11px] border border-[#AECBFA]">metrics.cost_micros</code>
              <p className="text-[#5F6368] text-[11px] mt-0.5">Must be divided by 1,000,000.0. Represents gross media spend before agency markups.</p>
            </li>
            <li className="bg-[#F8F9FA] p-2.5 rounded border border-[#DADCE0]">
              <span className="font-bold text-[#202124] block">Impressions & Clicks:</span>
              <code className="text-[#1A73E8] bg-[#E8F0FE] px-1 font-mono text-[11px] border border-[#AECBFA]">metrics.impressions, metrics.clicks</code>
              <p className="text-[#5F6368] text-[11px] mt-0.5">CTR derived in Django: <code className="font-mono">clicks / impressions</code>.</p>
            </li>
            <li className="bg-[#F8F9FA] p-2.5 rounded border border-[#DADCE0]">
              <span className="font-bold text-[#202124] block">Primary Conversions & Value:</span>
              <code className="text-[#1A73E8] bg-[#E8F0FE] px-1 font-mono text-[11px] border border-[#AECBFA]">metrics.conversions, metrics.conversions_value</code>
              <p className="text-[#5F6368] text-[11px] mt-0.5">Includes only actions marked <code className="font-mono">include_in_conversions_metric = true</code>.</p>
            </li>
          </ul>
        </div>

        {/* Budget & Pacing Metrics */}
        <div className="bg-white p-5 rounded-xl border border-[#DADCE0] shadow-xs space-y-3">
          <h3 className="font-bold text-[#202124] text-sm flex items-center gap-2 border-b border-[#DADCE0] pb-2">
            <BarChart2 className="w-4 h-4 text-[#1A73E8]" />
            <span>2. Budget & Pacing Metrics</span>
          </h3>
          <ul className="text-xs space-y-2 text-[#202124]">
            <li className="bg-[#F8F9FA] p-2.5 rounded border border-[#DADCE0]">
              <span className="font-bold text-[#202124] block">Daily Budget Cap:</span>
              <code className="text-[#1A73E8] bg-[#E8F0FE] px-1 font-mono text-[11px] border border-[#AECBFA]">campaign_budget.amount_micros</code>
              <p className="text-[#5F6368] text-[11px] mt-0.5">Shared budgets track via <code className="font-mono">campaign_budget.is_explicitly_shared</code>.</p>
            </li>
            <li className="bg-[#F8F9FA] p-2.5 rounded border border-[#DADCE0]">
              <span className="font-bold text-[#202124] block">Monthly Target & Pacing Exposure:</span>
              <span className="text-[#3C4043] text-[11px] block mt-0.5">
                Formula: <code className="font-mono bg-[#E8EAED] px-1">Run_Rate = MTD_Cost + (Yesterday_Cost * Remaining_Days_In_Month)</code>
              </span>
              <p className="text-[#5F6368] text-[11px] mt-0.5">Variance = Run_Rate - Target_Monthly_Budget. Evaluated daily in Django background worker.</p>
            </li>
          </ul>
        </div>

        {/* Search Impression Share & Waste */}
        <div className="bg-white p-5 rounded-xl border border-[#DADCE0] shadow-xs space-y-3">
          <h3 className="font-bold text-[#202124] text-sm flex items-center gap-2 border-b border-[#DADCE0] pb-2">
            <Search className="w-4 h-4 text-[#B06000]" />
            <span>3. Search Impression Share & Competitive Signals</span>
          </h3>
          <ul className="text-xs space-y-2 text-[#202124]">
            <li className="bg-[#F8F9FA] p-2.5 rounded border border-[#DADCE0]">
              <span className="font-bold text-[#202124] block">Search Impression Share (IS):</span>
              <code className="text-[#B06000] bg-[#FEF7E0] px-1 font-mono text-[11px] border border-[#FDE293]">metrics.search_impression_share</code>
              <p className="text-[#5F6368] text-[11px] mt-0.5">Returned as double ratio (e.g. 0.65 = 65%). Null if search volume too low.</p>
            </li>
            <li className="bg-[#F8F9FA] p-2.5 rounded border border-[#DADCE0]">
              <span className="font-bold text-[#202124] block">Lost IS (Budget) vs Lost IS (Rank):</span>
              <code className="text-[#B06000] bg-[#FEF7E0] px-1 font-mono text-[11px] border border-[#FDE293]">metrics.search_budget_lost_impression_share, metrics.search_rank_lost_impression_share</code>
              <p className="text-[#5F6368] text-[11px] mt-0.5">Differentiates budget capping issues from bidding/quality score weakness.</p>
            </li>
          </ul>
        </div>

        {/* Conversions & Tracking Health */}
        <div className="bg-white p-5 rounded-xl border border-[#DADCE0] shadow-xs space-y-3">
          <h3 className="font-bold text-[#202124] text-sm flex items-center gap-2 border-b border-[#DADCE0] pb-2">
            <ShieldCheck className="w-4 h-4 text-[#1A73E8]" />
            <span>4. Conversions & Tracking Health</span>
          </h3>
          <ul className="text-xs space-y-2 text-[#202124]">
            <li className="bg-[#F8F9FA] p-2.5 rounded border border-[#DADCE0]">
              <span className="font-bold text-[#202124] block">Primary vs Secondary Actions:</span>
              <code className="text-[#1A73E8] bg-[#E8F0FE] px-1 font-mono text-[11px] border border-[#AECBFA]">conversion_action.primary_for_action_canonical</code>
              <p className="text-[#5F6368] text-[11px] mt-0.5">Must segregate primary lead actions from secondary pageview clicks.</p>
            </li>
            <li className="bg-[#F8F9FA] p-2.5 rounded border border-[#DADCE0]">
              <span className="font-bold text-[#202124] block">Conversion Heartbeat:</span>
              <span className="text-[#3C4043] text-[11px] block mt-0.5">
                Timestamp of most recent conversion per conversion action ID.
              </span>
              <p className="text-[#5F6368] text-[11px] mt-0.5">If &gt;48 hours with spend &gt;$100/day, trigger <strong className="text-[#C5221F]">Tracking Risk Alert</strong>.</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Section 5: Historical Truth & Attribution Strategy */}
      <div className="bg-[#202124] text-white p-6 rounded-xl border border-[#3C4043] space-y-4 shadow-sm">
        <div className="flex items-center gap-3 border-b border-[#3C4043] pb-3">
          <div className="p-2 bg-[#1A73E8]/20 text-[#8AB4F8] rounded-lg">
            <RefreshCw className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">
              5. Historical Truth & Attribution Reconciliation Strategy
            </h3>
            <p className="text-xs text-[#9AA0A6]">
              Solving conversion lag, window shifts, and database snapshotting in Django + PostgreSQL.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="bg-[#2D2F31] p-4 rounded-lg border border-[#3C4043] space-y-2">
            <span className="text-[#81C995] font-bold block uppercase tracking-wider text-[10px]">
              1. Conversion Lag Reality
            </span>
            <p className="text-[#E8EAED] leading-relaxed">
              Google Ads assigns conversions back to the <strong>date of the ad click</strong>, not the date of conversion. A purchase on Wednesday from a Monday click updates Monday's historical metric.
            </p>
          </div>

          <div className="bg-[#2D2F31] p-4 rounded-lg border border-[#3C4043] space-y-2">
            <span className="text-[#8AB4F8] font-bold block uppercase tracking-wider text-[10px]">
              2. 14-Day Rolling Re-Fetch Window
            </span>
            <p className="text-[#E8EAED] leading-relaxed">
              During the nightly Django sync, query metrics for <code className="text-[#81C995] font-mono">DURING LAST_14_DAYS</code> and upsert rows in PostgreSQL. This ensures late-arriving conversions restate historical rows accurately.
            </p>
          </div>

          <div className="bg-[#2D2F31] p-4 rounded-lg border border-[#3C4043] space-y-2">
            <span className="text-[#FDE293] font-bold block uppercase tracking-wider text-[10px]">
              3. Data Retention Grains
            </span>
            <p className="text-[#E8EAED] leading-relaxed">
              <strong>Daily Grain:</strong> Retain daily campaign metrics indefinitely in PostgreSQL.<br />
              <strong>Search Term Grain:</strong> Retain 90 days of high-granularity search query rows.<br />
              <strong>Change Log:</strong> Snapshot change_event permanently before 30d API purge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
