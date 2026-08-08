import React from 'react';
import { API_TRAPS } from '../data/contractData';
import { AlertTriangle, ShieldAlert, CheckCircle2, XCircle, FileWarning } from 'lucide-react';

export const TrapsView: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl border border-[#DADCE0] shadow-xs">
        <h2 className="text-xl font-bold text-[#202124] mb-1 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-[#B06000]" />
          <span>12. Google Ads API Traps, Silent Failures & Pitfalls</span>
        </h2>
        <p className="text-sm text-[#5F6368]">
          Critical platform realities and common implementation traps that cause metric corruption, false alerts, or app failure if ignored by backend developers.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {API_TRAPS.map((trap) => (
          <div
            key={trap.id}
            className="bg-white rounded-xl border border-[#DADCE0] shadow-xs p-5 space-y-3 hover:border-[#1A73E8] transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#DADCE0] pb-3">
              <div className="flex items-center gap-2">
                <span className="p-1 bg-[#FEF7E0] text-[#B06000] rounded border border-[#FDE293]">
                  <ShieldAlert className="w-4 h-4" />
                </span>
                <h3 className="font-bold text-base text-[#202124]">{trap.title}</h3>
              </div>

              <span
                className={`text-[11px] font-bold px-2.5 py-1 rounded border self-start sm:self-auto ${
                  trap.impactLevel.includes('CRITICAL')
                    ? 'bg-[#FCE8E6] text-[#C5221F] border-[#FAD2CF]'
                    : 'bg-[#FEF7E0] text-[#B06000] border-[#FDE293]'
                }`}
              >
                {trap.impactLevel}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-[#FCE8E6]/60 p-3.5 rounded-lg border border-[#FAD2CF] space-y-1">
                <span className="font-bold text-[#C5221F] flex items-center gap-1 text-[11px] uppercase tracking-wider">
                  <XCircle className="w-3.5 h-3.5 text-[#C5221F]" />
                  Symptom & Root Cause
                </span>
                <p className="font-semibold text-[#C5221F]">{trap.symptom}</p>
                <p className="text-[#A50E0E] text-[11px] leading-relaxed pt-1">{trap.rootCause}</p>
              </div>

              <div className="bg-[#E6F4EA]/60 p-3.5 rounded-lg border border-[#CEEAD6] space-y-1">
                <span className="font-bold text-[#137333] flex items-center gap-1 text-[11px] uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#137333]" />
                  Mandatory Fix / Correct Implementation
                </span>
                <p className="text-[#137333] text-[11px] leading-relaxed font-mono bg-white p-2 rounded border border-[#CEEAD6] mt-1">
                  {trap.correctImplementation}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
