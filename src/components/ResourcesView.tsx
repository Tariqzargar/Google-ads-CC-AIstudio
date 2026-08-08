import React, { useState } from 'react';
import { RESOURCE_INVENTORY } from '../data/contractData';
import { Database, Search, Clock, Shield, Tag } from 'lucide-react';

export const ResourcesView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredResources = RESOURCE_INVENTORY.filter(
    (r) =>
      r.resourceName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.purpose.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl border border-[#DADCE0] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-[#202124] mb-1 flex items-center gap-2">
            <Database className="w-5 h-5 text-[#1A73E8]" />
            <span>2. Exact Google Ads Resource Inventory</span>
          </h2>
          <p className="text-sm text-[#5F6368]">
            Comprehensive catalog of every Google Ads API resource required for Insights OS V1, including schema keys, update mechanics, and MCC implications.
          </p>
        </div>

        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3 top-3 text-[#5F6368]" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search resource or field..."
            className="w-full pl-9 pr-4 py-2 border border-[#DADCE0] rounded-lg text-xs focus:ring-2 focus:ring-[#1A73E8] focus:border-[#1A73E8] outline-none text-[#202124]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filteredResources.map((res, i) => (
          <div key={i} className="bg-white rounded-xl border border-[#DADCE0] shadow-xs p-5 hover:border-[#1A73E8] transition-all">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 border-b border-[#DADCE0] pb-3">
              <div>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#E8F0FE] text-[#1A73E8] border border-[#AECBFA] font-mono mr-2">
                  GAQL RESOURCE
                </span>
                <span className="text-base font-bold text-[#202124] font-mono">
                  {res.resourceName}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 text-xs">
                <span className="inline-flex items-center gap-1 bg-[#F1F3F4] text-[#3C4043] px-2.5 py-1 rounded-md font-medium border border-[#DADCE0]">
                  <Clock className="w-3.5 h-3.5 text-[#5F6368]" />
                  Sync: {res.recommendedSyncFrequency}
                </span>
                <span className="inline-flex items-center gap-1 bg-[#F6F8FC] text-[#1A73E8] px-2.5 py-1 rounded-md font-medium border border-[#D2E3FC]">
                  <Tag className="w-3.5 h-3.5 text-[#1A73E8]" />
                  Grain: {res.recommendedStorageGrain}
                </span>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
              <div>
                <span className="text-[#5F6368] font-medium block uppercase tracking-wider text-[10px] mb-1">
                  Purpose in V1
                </span>
                <p className="text-[#202124] font-medium">{res.purpose}</p>
              </div>

              <div>
                <span className="text-[#5F6368] font-medium block uppercase tracking-wider text-[10px] mb-1">
                  Identifiers
                </span>
                <code className="bg-[#F1F3F4] text-[#202124] px-1.5 py-0.5 rounded font-mono text-[11px] border border-[#DADCE0]">
                  {res.identifiers}
                </code>
              </div>

              <div>
                <span className="text-[#5F6368] font-medium block uppercase tracking-wider text-[10px] mb-1">
                  Campaign Type Limits
                </span>
                <p className="text-[#3C4043]">{res.campaignTypeLimitations}</p>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-[#DADCE0] grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-[#5F6368] font-medium block uppercase tracking-wider text-[10px] mb-1">
                  MCC Hierarchy & Permissions
                </span>
                <p className="text-[#5F6368] leading-relaxed">{res.mccImplications}</p>
              </div>

              <div>
                <span className="text-[#5F6368] font-medium block uppercase tracking-wider text-[10px] mb-1">
                  Required Fields ({res.requiredFields.length})
                </span>
                <div className="flex flex-wrap gap-1 mt-1 max-h-20 overflow-y-auto p-1 bg-[#F8F9FA] rounded border border-[#DADCE0] font-mono text-[10px]">
                  {res.requiredFields.map((field, idx) => (
                    <span key={idx} className="bg-white px-1.5 py-0.5 rounded border border-[#DADCE0] text-[#3C4043]">
                      {field}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
