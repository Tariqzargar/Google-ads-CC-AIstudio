import React from 'react';
import { SectionId } from '../types';
import { ShieldCheck, FileCode, AlertTriangle, Layers, Database, Cpu, CheckCircle2, Copy, Download, RefreshCw } from 'lucide-react';

interface HeaderProps {
  activeSection: SectionId;
  setActiveSection: (section: SectionId) => void;
  onExportMarkdown: () => void;
  copied: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  setActiveSection,
  onExportMarkdown,
  copied
}) => {
  const tabs: { id: SectionId; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'feasibility', label: '1. Feasibility Matrix', icon: CheckCircle2 },
    { id: 'resources', label: '2. Resource Inventory', icon: Database },
    { id: 'gaql', label: '3. GAQL Contract', icon: FileCode },
    { id: 'metrics', label: '4-5. Metrics & History', icon: Layers },
    { id: 'alerts', label: '8-9. Deterministic Alerts', icon: ShieldCheck },
    { id: 'oauth', label: '10-11. OAuth & Quotas', icon: RefreshCw },
    { id: 'traps', label: '12. API Traps', icon: AlertTriangle },
    { id: 'final', label: '13. Final V1 Scope', icon: Cpu },
  ];

  return (
    <header className="bg-white text-[#202124] border-b border-[#DADCE0] border-t-4 border-t-[#1A73E8] sticky top-0 z-50 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between py-3.5 gap-4">
          <div className="flex items-center space-x-3">
            <div className="bg-[#E8F0FE] text-[#1A73E8] font-bold px-2.5 py-1 rounded-md text-xs tracking-wider uppercase border border-[#AECBFA]">
              V1 CONTRACT
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight flex items-center gap-2 text-[#202124]">
                INSIGHTS OS <span className="text-[#1A73E8] text-sm font-semibold">— Google Ads Command Center</span>
              </h1>
              <p className="text-xs text-[#5F6368]">
                Senior Google Ads API Platform Review & Technical Specification
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="hidden sm:flex items-center text-xs bg-[#E6F4EA] border border-[#CEEAD6] px-3 py-1.5 rounded-lg text-[#137333] font-semibold gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1E8E3E] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1E8E3E]"></span>
              </span>
              <span>API v18 Validated</span>
            </div>

            <button
              onClick={onExportMarkdown}
              className="inline-flex items-center gap-1.5 bg-[#1A73E8] hover:bg-[#1557B0] text-white font-semibold text-xs px-3.5 py-2 rounded-lg transition-all shadow-xs active:scale-95"
            >
              {copied ? <CheckCircle2 className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied Contract!' : 'Export Full Spec'}</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex overflow-x-auto space-x-1 py-1 border-t border-[#DADCE0] scrollbar-none text-xs font-medium">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeSection === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveSection(tab.id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-[#E8F0FE] text-[#1A73E8] font-bold border-b-2 border-[#1A73E8]'
                    : 'text-[#5F6368] hover:text-[#202124] hover:bg-[#F8F9FA]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#1A73E8]' : 'text-[#5F6368]'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
