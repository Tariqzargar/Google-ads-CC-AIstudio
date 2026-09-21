import React from 'react';
import { FEASIBILITY_DATA } from '../data/contractData';
import { CheckCircle2, AlertCircle, AlertTriangle, XCircle, Clock, Info } from 'lucide-react';

export const FeasibilityView: React.FC = () => {
  const getBadgeClass = (status: string) => {
    switch (status) {
      case 'Direct':
        return 'bg-[#E6F4EA] text-[#137333] border-[#CEEAD6]';
      case 'Derived':
        return 'bg-[#E8F0FE] text-[#1A73E8] border-[#AECBFA]';
      case 'Partial':
        return 'bg-[#FEF7E0] text-[#B06000] border-[#FDE293]';
      case 'External Evidence Required':
        return 'bg-[#F1F3F4] text-[#5F6368] border-[#DADCE0]';
      case 'Unavailable':
        return 'bg-[#FCE8E6] text-[#C5221F] border-[#FAD2CF]';
      default:
        return 'bg-[#F1F3F4] text-[#5F6368] border-[#DADCE0]';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Direct':
        return <CheckCircle2 className="w-4 h-4 text-[#1E8E3E] inline mr-1" />;
      case 'Derived':
        return <Info className="w-4 h-4 text-[#1A73E8] inline mr-1" />;
      case 'Partial':
        return <AlertTriangle className="w-4 h-4 text-[#B06000] inline mr-1" />;
      case 'External Evidence Required':
        return <Clock className="w-4 h-4 text-[#5F6368] inline mr-1" />;
      case 'Unavailable':
        return <XCircle className="w-4 h-4 text-[#C5221F] inline mr-1" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl border border-[#DADCE0] shadow-xs">
        <h2 className="text-xl font-bold text-[#202124] mb-2 flex items-center gap-2">
          <span>1. V1 Prototype Feasibility Audit</span>
        </h2>
        <p className="text-sm text-[#5F6368] leading-relaxed">
          Screen-by-screen audit of the Insights OS UX prototype evaluated against Google Ads API v25. V1 is strictly read-only and staff-facing. External delivery channels (Telegram) and mutation operations (Change Lab, Campaign Setup Wizard) belong in FUTURE ROADMAP — OUT OF V1.
        </p>

        <div className="mt-4 grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
          <div className="p-3 bg-[#E6F4EA] border border-[#CEEAD6] rounded-lg">
            <div className="text-lg font-extrabold text-[#137333]">4</div>
            <div className="text-xs text-[#137333] font-medium">Status: Direct</div>
          </div>
          <div className="p-3 bg-[#E8F0FE] border border-[#AECBFA] rounded-lg">
            <div className="text-lg font-extrabold text-[#1A73E8]">3</div>
            <div className="text-xs text-[#1A73E8] font-medium">Status: Derived</div>
          </div>
          <div className="p-3 bg-[#FEF7E0] border border-[#FDE293] rounded-lg">
            <div className="text-lg font-extrabold text-[#B06000]">0</div>
            <div className="text-xs text-[#B06000] font-medium">Status: Partial</div>
          </div>
          <div className="p-3 bg-[#F1F3F4] border border-[#DADCE0] rounded-lg">
            <div className="text-lg font-extrabold text-[#5F6368]">0</div>
            <div className="text-xs text-[#5F6368] font-medium">Status: Ext. Evidence</div>
          </div>
          <div className="p-3 bg-[#FCE8E6] border border-[#FAD2CF] rounded-lg">
            <div className="text-lg font-extrabold text-[#C5221F]">3</div>
            <div className="text-xs text-[#C5221F] font-medium">Status: Unavailable</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-[#DADCE0] shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#F8F9FA] border-b border-[#DADCE0] text-xs font-semibold text-[#5F6368] uppercase tracking-wider">
                <th className="p-4">Prototype Screen</th>
                <th className="p-4">Feature / Intent</th>
                <th className="p-4">Status & Confidence</th>
                <th className="p-4">Google Ads API Resource</th>
                <th className="p-4">Technical Reality & Implementation Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#DADCE0] text-xs text-[#202124]">
              {FEASIBILITY_DATA.map((item, index) => (
                <tr key={index} className="hover:bg-[#F8F9FA] transition-colors">
                  <td className="p-4 font-semibold text-[#202124] whitespace-nowrap">
                    {item.screen}
                  </td>
                  <td className="p-4 font-medium text-[#3C4043]">
                    {item.feature}
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    <div className="flex flex-col gap-1 items-start">
                      <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border ${getBadgeClass(item.status)}`}>
                        {getStatusIcon(item.status)}
                        Status: {item.status}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#F8F9FA] text-[#3C4043] border border-[#DADCE0]">
                        Confidence: {item.confidence}
                      </span>
                    </div>
                  </td>
                  <td className="p-4 font-mono text-[11px] text-[#1A73E8]">
                    {item.apiResource}
                  </td>
                  <td className="p-4 text-[#5F6368] leading-relaxed">
                    <div>{item.details}</div>
                    {item.caveat && (
                      <div className="mt-1 text-[#B06000] font-medium flex items-center gap-1 text-[11px]">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>Caveat: {item.caveat}</span>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
