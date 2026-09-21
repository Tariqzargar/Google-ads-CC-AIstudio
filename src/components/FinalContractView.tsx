import React from 'react';
import { FINAL_CONTRACT_CATEGORIES } from '../data/contractData';
import { Cpu, CheckCircle2, Star, Clock, AlertCircle } from 'lucide-react';

export const FinalContractView: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl border border-[#DADCE0] shadow-xs">
        <h2 className="text-xl font-bold text-[#202124] mb-1 flex items-center gap-2">
          <Cpu className="w-5 h-5 text-[#1A73E8]" />
          <span>13. Final V1 Google Ads Platform Contract</span>
        </h2>
        <p className="text-sm text-[#5F6368]">
          Definitive boundary categorization for Insights OS V1 implementation. Direct translation for the Chief Architect and backend engineering team.
        </p>
      </div>

      <div className="space-y-6">
        {FINAL_CONTRACT_CATEGORIES.map((cat, idx) => {
          const isMust = cat.tier.includes('MUST');
          const isNice = cat.tier.includes('NICE');
          const isDefer = cat.tier.includes('FUTURE') || cat.tier.includes('DEFER');

          return (
            <div
              key={idx}
              className={`rounded-xl border shadow-xs overflow-hidden bg-white ${
                isMust
                  ? 'border-[#CEEAD6]'
                  : isNice
                  ? 'border-[#FDE293]'
                  : 'border-[#DADCE0]'
              }`}
            >
              <div
                className={`p-4 border-b font-bold text-sm flex items-center gap-2 ${
                  isMust
                    ? 'bg-[#137333] text-white border-[#0F5C28]'
                    : isNice
                    ? 'bg-[#B06000] text-white border-[#8C4C00]'
                    : 'bg-[#5F6368] text-white border-[#3C4043]'
                }`}
              >
                {isMust && <CheckCircle2 className="w-4 h-4 text-[#A8DAB5]" />}
                {isNice && <Star className="w-4 h-4 text-[#FDE293]" />}
                {isDefer && <Clock className="w-4 h-4 text-[#E8EAED]" />}
                <span>{cat.tier}</span>
              </div>

              <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="p-4 bg-[#F8F9FA] rounded-lg border border-[#DADCE0] text-xs space-y-2 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="font-bold text-[#202124] text-xs">{item.name}</span>
                        <code className="text-[10px] bg-[#E8EAED] text-[#202124] px-1 py-0.5 rounded font-mono border border-[#DADCE0]">
                          {item.resource}
                        </code>
                      </div>
                      <p className="text-[#5F6368] leading-relaxed">{item.description}</p>
                    </div>

                    <div className="pt-2 border-t border-[#DADCE0] text-[#5F6368] text-[11px]">
                      <strong className="text-[#202124]">Rationale:</strong> {item.justification}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
