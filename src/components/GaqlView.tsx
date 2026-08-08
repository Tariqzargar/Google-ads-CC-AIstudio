import React, { useState } from 'react';
import { GAQL_QUERIES } from '../data/contractData';
import { FileCode, Copy, Check, Play, AlertCircle, Info, Filter } from 'lucide-react';

export const GaqlView: React.FC = () => {
  const [selectedQueryId, setSelectedQueryId] = useState(GAQL_QUERIES[0].id);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [startDate, setStartDate] = useState('2026-02-01');
  const [endDate, setEndDate] = useState('2026-02-28');

  const selectedQuery = GAQL_QUERIES.find((q) => q.id === selectedQueryId) || GAQL_QUERIES[0];

  const getFormattedQuery = (rawQuery: string) => {
    return rawQuery
      .replace('{START_DATE}', startDate)
      .replace('{END_DATE}', endDate)
      .replace('{LAST_SYNC_TIMESTAMP}', `${startDate} 00:00:00`);
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl border border-[#DADCE0] shadow-xs">
        <h2 className="text-xl font-bold text-[#202124] mb-1 flex items-center gap-2">
          <FileCode className="w-5 h-5 text-[#1A73E8]" />
          <span>3. Production GAQL Query Contract</span>
        </h2>
        <p className="text-sm text-[#5F6368]">
          Validated Google Ads Query Language (GAQL) queries designed for high-performance syncs via <code className="text-[#1A73E8] bg-[#E8F0FE] px-1.5 py-0.5 rounded font-mono border border-[#AECBFA]">GoogleAdsService.SearchStream</code>.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left selector */}
        <div className="lg:col-span-4 space-y-2">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-[#5F6368] mb-2 px-1">
            Query Inventory ({GAQL_QUERIES.length})
          </h3>
          {GAQL_QUERIES.map((q) => {
            const isSelected = q.id === selectedQueryId;
            return (
              <button
                key={q.id}
                onClick={() => setSelectedQueryId(q.id)}
                className={`w-full text-left p-3 rounded-lg border transition-all text-xs flex flex-col gap-1 ${
                  isSelected
                    ? 'bg-[#1A73E8] text-white border-[#1557B0] shadow-xs font-semibold'
                    : 'bg-white text-[#202124] border-[#DADCE0] hover:border-[#1A73E8] hover:bg-[#F8F9FA]'
                }`}
              >
                <div className="font-bold">{q.title}</div>
                <div className={`text-[11px] line-clamp-1 ${isSelected ? 'text-[#D2E3FC]' : 'text-[#5F6368]'}`}>
                  FROM {q.fromResource}
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Query Inspector */}
        <div className="lg:col-span-8 space-y-4">
          <div className="bg-white rounded-xl border border-[#DADCE0] p-5 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#DADCE0] pb-3">
              <div>
                <h3 className="text-base font-bold text-[#202124] flex items-center gap-2">
                  <span>{selectedQuery.title}</span>
                </h3>
                <p className="text-xs text-[#5F6368] mt-0.5">{selectedQuery.purpose}</p>
              </div>

              <button
                onClick={() => handleCopy(selectedQuery.id, getFormattedQuery(selectedQuery.query))}
                className="self-start sm:self-auto inline-flex items-center gap-1.5 bg-[#1A73E8] hover:bg-[#1557B0] text-white font-medium text-xs px-3.5 py-1.5 rounded-md transition-all shadow-xs"
              >
                {copiedId === selectedQuery.id ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy GAQL</span>
                  </>
                )}
              </button>
            </div>

            {/* Interactive Date Parameter Controls */}
            {selectedQuery.query.includes('{START_DATE}') && (
              <div className="mt-3 p-3 bg-[#F8F9FA] rounded-lg border border-[#DADCE0] flex flex-wrap items-center gap-4 text-xs">
                <span className="text-[#1A73E8] font-semibold flex items-center gap-1">
                  <Filter className="w-3.5 h-3.5" />
                  Test Parameters:
                </span>
                <div className="flex items-center gap-2">
                  <label className="text-[#5F6368] text-[11px]">Start Date:</label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="bg-white border border-[#DADCE0] rounded px-2 py-1 text-[#202124] text-xs font-mono outline-none focus:border-[#1A73E8]"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <label className="text-[#5F6368] text-[11px]">End Date:</label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="bg-white border border-[#DADCE0] rounded px-2 py-1 text-[#202124] text-xs font-mono outline-none focus:border-[#1A73E8]"
                  />
                </div>
              </div>
            )}

            {/* Syntax Highlighted GAQL Code */}
            <div className="mt-4 bg-[#202124] p-4 rounded-lg font-mono text-xs text-[#81C995] border border-[#3C4043] overflow-x-auto leading-relaxed shadow-inner">
              <pre>{getFormattedQuery(selectedQuery.query)}</pre>
            </div>

            {/* Query Metadata */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-[#F8F9FA] p-3 rounded-lg border border-[#DADCE0]">
                <span className="text-[#5F6368] text-[10px] uppercase font-bold block mb-1">
                  Required Segments
                </span>
                <div className="text-[#202124] font-mono text-[11px]">
                  {selectedQuery.segments.join(', ')}
                </div>
              </div>

              <div className="bg-[#F8F9FA] p-3 rounded-lg border border-[#DADCE0]">
                <span className="text-[#5F6368] text-[10px] uppercase font-bold block mb-1">
                  Channel / Campaign Limits
                </span>
                <div className="text-[#202124] text-[11px]">
                  {selectedQuery.campaignTypeRestrictions}
                </div>
              </div>
            </div>

            {/* Caveats & Pagination Notes */}
            <div className="mt-3 p-3 bg-[#FEF7E0] border border-[#FDE293] rounded-lg text-[#B06000] text-xs space-y-1">
              <div className="font-semibold flex items-center gap-1.5 text-[#B06000]">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>Incompatibilities & Execution Guards</span>
              </div>
              <ul className="list-disc list-inside text-[11px] text-[#B06000]/90 space-y-0.5">
                {selectedQuery.incompatibilities.map((inc, i) => (
                  <li key={i}>{inc}</li>
                ))}
                <li>Streaming Strategy: {selectedQuery.paginationNotes}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
