import React from 'react';
import { RefreshCw, Key, Server, Cpu, Shield, AlertCircle, Layers } from 'lucide-react';

export const OAuthScaleView: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl border border-[#DADCE0] shadow-xs">
        <h2 className="text-xl font-bold text-[#202124] mb-1 flex items-center gap-2">
          <RefreshCw className="w-5 h-5 text-[#1A73E8]" />
          <span>10-11. OAuth, MCC Setup & Agency Scale Synchronization</span>
        </h2>
        <p className="text-sm text-[#5F6368]">
          Architecture for single agency MCC refresh token authorization, developer token rate limits, and synchronization scaling strategies for managing 50 to 500 Google Ads client accounts.
        </p>
      </div>

      {/* Section 10: OAuth & MCC Architecture */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-5 rounded-xl border border-[#DADCE0] shadow-xs space-y-3">
          <h3 className="font-bold text-[#202124] text-sm flex items-center gap-2 border-b border-[#DADCE0] pb-2">
            <Key className="w-4 h-4 text-[#1A73E8]" />
            <span>10. Agency Credentials & OAuth Setup</span>
          </h3>

          <div className="space-y-3 text-xs text-[#202124]">
            <div className="bg-[#E8F0FE] p-3 rounded-lg border border-[#AECBFA] space-y-1">
              <span className="font-bold text-[#1A73E8] block">Google Identity & Manager Authorization Model</span>
              <p className="text-[#1A73E8] text-[11px] leading-relaxed font-medium">
                OAuth Refresh Tokens authorize a Google identity (user or service account). When making requests on behalf of managed child accounts, <code className="font-mono">login-customer-id</code> specifies the authorized manager account in the hierarchy. The target client account ID is supplied via the <code className="font-mono">customer_id</code> RPC argument or REST endpoint path (<code className="font-mono">customers/&#123;customer_id&#125;/googleAds:search</code>).
              </p>
            </div>

            <div className="bg-[#F8F9FA] p-3 rounded-lg border border-[#DADCE0] space-y-2">
              <span className="font-bold text-[#202124] block">Required Request Headers & Parameters:</span>
              <div className="bg-[#202124] text-[#81C995] p-2.5 rounded font-mono text-[11px] space-y-1 border border-[#3C4043]">
                <div>developer-token: "YOUR_DEVELOPER_TOKEN"</div>
                <div>login-customer-id: "AUTHORIZED_MANAGER_CID"</div>
                <div>Authorization: "Bearer ACCESSTOKEN..."</div>
                <div className="text-[#9AA0A6]">// Target CID supplied via customer_id parameter/path</div>
              </div>
            </div>

            <div className="bg-[#F8F9FA] p-3 rounded-lg border border-[#DADCE0]">
              <span className="font-bold text-[#202124] block">Developer Token Tiers</span>
              <ul className="list-disc list-inside text-[#5F6368] text-[11px] mt-1 space-y-1">
                <li><strong>Basic Access:</strong> 15,000 operations/day (Adequate for V1 testing &lt;15 accounts).</li>
                <li><strong>Standard Access:</strong> Unlimited operations (Required for production with &gt;50 accounts). Must apply in Google Ads Manager console.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 11: Scale Sync Architecture */}
        <div className="bg-white p-5 rounded-xl border border-[#DADCE0] shadow-xs space-y-3">
          <h3 className="font-bold text-[#202124] text-sm flex items-center gap-2 border-b border-[#DADCE0] pb-2">
            <Cpu className="w-4 h-4 text-[#1A73E8]" />
            <span>11. Quotas & Synchronization at Scale</span>
          </h3>

          <div className="space-y-3 text-xs text-[#202124]">
            <div className="bg-[#E8F0FE] p-3 rounded-lg border border-[#AECBFA] space-y-1">
              <span className="font-bold text-[#1A73E8] block">Sync Scaling Matrix (50 vs 100 vs 500 Accounts)</span>
              <p className="text-[#1A73E8] text-[11px] font-medium">
                Google Ads API enforces rate limits on concurrent requests per customer ID. Syncs must be queued asynchronously via Celery in Django.
              </p>
            </div>

            <div className="space-y-2 text-[11px]">
              <div className="p-2.5 bg-[#F8F9FA] border border-[#DADCE0] rounded">
                <strong className="text-[#202124]">50 Accounts:</strong>
                <span className="text-[#5F6368] block mt-0.5">Batch execution via parallel background workers. Sync duration varies according to account campaign volume and metric payload sizes.</span>
              </div>

              <div className="p-2.5 bg-[#F8F9FA] border border-[#DADCE0] rounded">
                <strong className="text-[#202124]">100 Accounts:</strong>
                <span className="text-[#5F6368] block mt-0.5">Queue-managed workers with automated exponential backoff and randomized jitter on <code className="font-mono">RESOURCE_EXHAUSTED (429)</code> HTTP responses.</span>
              </div>

              <div className="p-2.5 bg-[#F8F9FA] border border-[#DADCE0] rounded">
                <strong className="text-[#202124]">500 Accounts:</strong>
                <span className="text-[#5F6368] block mt-0.5">Distributed Celery worker queues with dynamic customer-level rate limiting and stream chunking. Standard Access developer token required.</span>
              </div>
            </div>

            <div className="p-3 bg-[#FEF7E0] border border-[#FDE293] rounded-lg text-[#B06000] text-[11px]">
              <strong>Rate Limit Mitigation Strategy:</strong> On <code className="font-mono">RESOURCE_EXHAUSTED (429)</code>, pause worker for <code className="font-mono">retry_after_seconds</code> + jitter, then retry up to 5 times.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
