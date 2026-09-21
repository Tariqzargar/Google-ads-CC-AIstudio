import React from 'react';
import { Key, Shield, Clock, RefreshCw, Server, Lock, Database, CheckCircle2, AlertCircle, FileCode2, Layers } from 'lucide-react';

export const FoundationView: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Title Card */}
      <div className="bg-white p-6 rounded-xl border border-[#DADCE0] shadow-xs border-l-4 border-l-[#1A73E8]">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-[#E8F0FE] text-[#1A73E8] border border-[#AECBFA] uppercase tracking-wider">
                Insights OS Core Infrastructure
              </span>
              <span className="text-xs text-[#5F6368] font-mono">Platform Foundation Contracts & SLAs</span>
            </div>
            <h2 className="text-xl font-bold text-[#202124] flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#1A73E8]" />
              <span>Foundation Ownership, Security & Reconciliation Contracts</span>
            </h2>
            <p className="text-sm text-[#5F6368] mt-1">
              Explicit architectural specifications for multi-tenant isolation, OAuth credential storage, mutation audit trails, Celery idempotency locks, metric freshness tracking, and 14-day attribution reconciliation.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-[#E6F4EA] px-3 py-1.5 rounded-lg border border-[#CEEAD6] text-xs font-bold text-[#137333]">
            <CheckCircle2 className="w-4 h-4 text-[#137333]" />
            <span>Platform Service Specification V1</span>
          </div>
        </div>
      </div>

      {/* Foundation Ownership Matrix */}
      <div className="bg-white p-6 rounded-xl border border-[#DADCE0] shadow-xs space-y-4">
        <h3 className="text-base font-bold text-[#202124] flex items-center gap-2 border-b border-[#DADCE0] pb-2">
          <Layers className="w-5 h-5 text-[#1A73E8]" />
          <span>Insights OS Foundation Ownership Mapping</span>
        </h3>
        <p className="text-xs text-[#3C4043] leading-relaxed">
          Explicit service boundaries map platform domain models to core Insights OS foundation services:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          <div className="p-3 bg-[#F8F9FA] rounded-lg border border-[#DADCE0]">
            <strong className="text-[#202124] block">Business Identity</strong>
            <span className="text-[#5F6368] text-[11px]">Relationships / BusinessRecord</span>
          </div>
          <div className="p-3 bg-[#F8F9FA] rounded-lg border border-[#DADCE0]">
            <strong className="text-[#202124] block">OAuth & Credentials</strong>
            <span className="text-[#5F6368] text-[11px]">Integration Foundation</span>
          </div>
          <div className="p-3 bg-[#F8F9FA] rounded-lg border border-[#DADCE0]">
            <strong className="text-[#202124] block">Jobs, Retries & Locks</strong>
            <span className="text-[#5F6368] text-[11px]">Durable Job Foundation</span>
          </div>
          <div className="p-3 bg-[#F8F9FA] rounded-lg border border-[#DADCE0]">
            <strong className="text-[#202124] block">Operator Task Queue</strong>
            <span className="text-[#5F6368] text-[11px]">Work Management</span>
          </div>
          <div className="p-3 bg-[#F8F9FA] rounded-lg border border-[#DADCE0]">
            <strong className="text-[#202124] block">Alert Delivery</strong>
            <span className="text-[#5F6368] text-[11px]">Notifications Foundation</span>
          </div>
          <div className="p-3 bg-[#F8F9FA] rounded-lg border border-[#DADCE0]">
            <strong className="text-[#202124] block">Operational Audit Log</strong>
            <span className="text-[#5F6368] text-[11px]">Audit Engine</span>
          </div>
          <div className="p-3 bg-[#F8F9FA] rounded-lg border border-[#DADCE0]">
            <strong className="text-[#202124] block">AI Provenance & Briefs</strong>
            <span className="text-[#5F6368] text-[11px]">AI / Approval Foundation</span>
          </div>
          <div className="p-3 bg-[#F8F9FA] rounded-lg border border-[#DADCE0]">
            <strong className="text-[#202124] block">Metrics & Analytics</strong>
            <span className="text-[#5F6368] text-[11px]">Reporting Engine</span>
          </div>
        </div>
      </div>

      {/* 1. Tenant Context & Multi-Tenant Isolation */}
      <div className="bg-white p-6 rounded-xl border border-[#DADCE0] shadow-xs space-y-4">
        <h3 className="text-base font-bold text-[#202124] flex items-center gap-2 border-b border-[#DADCE0] pb-2">
          <Shield className="w-5 h-5 text-[#1A73E8]" />
          <span>1. Tenant Context & Multi-Tenant Isolation Contract</span>
        </h3>
        <p className="text-xs text-[#3C4043] leading-relaxed">
          To prevent cross-tenant data leakages across agency accounts, all PostgreSQL tables and Redis cache keys MUST incorporate a mandatory <code className="font-mono bg-[#F8F9FA] px-1 py-0.5 rounded text-[#1A73E8]">tenant_id</code> foreign key constraint with Row-Level Security (RLS) policies.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 bg-[#F8F9FA] rounded-lg border border-[#DADCE0] space-y-2">
            <span className="font-bold text-[#202124] block text-sm">Tenant Boundaries</span>
            <ul className="list-disc list-inside text-[#5F6368] space-y-1 text-[11px]">
              <li><strong>Database RLS:</strong> Every SQL query enforced via <code className="font-mono">WHERE tenant_id = current_setting('app.current_tenant_id')</code>.</li>
              <li><strong>MCC Authorization Mapping:</strong> Single agency top-level Manager CID maps to 1 Tenant ID; child CIDs inherit tenant context.</li>
              <li><strong>API Token Scope:</strong> Developer Tokens and OAuth Refresh Tokens stored encrypted per tenant namespace.</li>
            </ul>
          </div>
          <div className="p-4 bg-[#F8F9FA] rounded-lg border border-[#DADCE0] space-y-2">
            <span className="font-bold text-[#202124] block text-sm">Storage & Queue Isolation</span>
            <ul className="list-disc list-inside text-[#5F6368] space-y-1 text-[11px]">
              <li><strong>Celery Task Routing:</strong> Separate Redis queue key prefixes (<code className="font-mono">celery:tenant_{'{tenant_id}'}:*</code>).</li>
              <li><strong>Audit Traceability:</strong> All DB mutations record <code className="font-mono">tenant_id</code>, <code className="font-mono">user_id</code>, and originating IP.</li>
              <li><strong>No Cross-Tenant Aggregation:</strong> Cross-account benchmarking performed only on anonymized, cohort-aggregated data.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 2. Credential Store & OAuth Token Management */}
      <div className="bg-white p-6 rounded-xl border border-[#DADCE0] shadow-xs space-y-4">
        <h3 className="text-base font-bold text-[#202124] flex items-center gap-2 border-b border-[#DADCE0] pb-2">
          <Key className="w-5 h-5 text-[#137333]" />
          <span>2. Credential Store & OAuth Management Contract</span>
        </h3>
        <p className="text-xs text-[#3C4043] leading-relaxed">
          Google Ads API credentials require rigorous cryptographic security. Client Secrets and Refresh Tokens MUST never be stored in plain text or exposed to frontend React components.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div className="p-3 bg-[#E6F4EA] border border-[#CEEAD6] rounded-lg space-y-1">
            <strong className="text-[#137333] block">AES-256-GCM Encryption</strong>
            <p className="text-[#3C4043] text-[11px]">
              OAuth Refresh Tokens encrypted at rest using envelope encryption backed by Google Cloud KMS or HashiCorp Vault.
            </p>
          </div>
          <div className="p-3 bg-[#E6F4EA] border border-[#CEEAD6] rounded-lg space-y-1">
            <strong className="text-[#137333] block">Header Injection (login-customer-id)</strong>
            <p className="text-[#3C4043] text-[11px]">
              Server pipeline automatically injects <code className="font-mono">login-customer-id: {'{MCC_CID}'}</code> into Google Ads gRPC/HTTP clients.
            </p>
          </div>
          <div className="p-3 bg-[#E6F4EA] border border-[#CEEAD6] rounded-lg space-y-1">
            <strong className="text-[#137333] block">Token Auto-Refresh Lifecycle</strong>
            <p className="text-[#3C4043] text-[11px]">
              Access tokens refreshed 5 minutes prior to 3600s expiration; failed refreshes trigger Slack/Email admin re-auth alerts.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Idempotency, Freshness, & Reconciliation */}
      <div className="bg-white p-6 rounded-xl border border-[#DADCE0] shadow-xs space-y-4">
        <h3 className="text-base font-bold text-[#202124] flex items-center gap-2 border-b border-[#DADCE0] pb-2">
          <RefreshCw className="w-5 h-5 text-[#B06000]" />
          <span>3. Idempotency, Metric Freshness & Attribution Reconciliation</span>
        </h3>

        <div className="space-y-3 text-xs">
          {/* Idempotency */}
          <div className="p-4 bg-[#FEF7E0] border border-[#FDE293] rounded-lg space-y-2">
            <div className="font-bold text-[#B06000] text-sm flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#B06000]" />
              <span>A. Idempotency & Concurrency Locks</span>
            </div>
            <p className="text-[#3C4043] text-[11px]">
              <strong>Redis Distributed Locks:</strong> Celery sync jobs use unique ownership UUID tokens with key <code className="font-mono">lock:sync:{'{tenant_id}'}:{'{customer_id}'}:{'{date}'}</code>, lease watchdog renewal, and atomic Lua script release.
            </p>
            <p className="text-[#3C4043] text-[11px]">
              <strong>UPSERT Primary Keys & Side-Effect Idempotency:</strong> Database writes use <code className="font-mono">INSERT INTO campaign_daily_metrics ... ON CONFLICT (tenant_id, customer_id, campaign_id, date) DO UPDATE</code> for row idempotency. Side-effects (such as notification delivery) use explicit idempotency keys.
            </p>
          </div>

          {/* Freshness SLAs */}
          <div className="p-4 bg-[#F8F9FA] border border-[#DADCE0] rounded-lg space-y-2">
            <div className="font-bold text-[#202124] text-sm flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#1A73E8]" />
              <span>B. Data Freshness & Processing SLAs</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-[11px]">
              <div className="p-2 bg-white rounded border border-[#DADCE0]">
                <strong>Intra-Day Metrics:</strong> Variable intra-day processing schedules per Google Ads reporting schedules.
              </div>
              <div className="p-2 bg-white rounded border border-[#DADCE0]">
                <strong>Daily EOD Reconciliation:</strong> Daily reconciliation using each customer account's configured Google Ads timezone.
              </div>
              <div className="p-2 bg-white rounded border border-[#DADCE0]">
                <strong>Change Event Sync:</strong> Polled periodically; snapshotted to local DB before 30d API purge.
              </div>
            </div>
          </div>

          {/* 14-Day Attribution Reconciliation Buffer */}
          <div className="p-4 bg-[#E8F0FE] border border-[#AECBFA] rounded-lg space-y-2">
            <div className="font-bold text-[#1A73E8] text-sm flex items-center gap-2">
              <Database className="w-4 h-4 text-[#1A73E8]" />
              <span>C. Configurable Attribution Restatement Buffer</span>
            </div>
            <p className="text-[#3C4043] text-[11px] leading-relaxed">
              Google Ads assigns conversions to the date of original ad click, resulting in retroactive metric restatements for up to 14 days. To maintain consistent reporting:
            </p>
            <ul className="list-disc list-inside text-[#3C4043] text-[11px] space-y-1">
              <li>Every nightly batch sync re-fetches performance metrics for <code className="font-mono">CURRENT_DATE - 14</code> through <code className="font-mono">CURRENT_DATE - 1</code>.</li>
              <li>Reconciliation service detects conversion value deltas and writes audit adjustment records.</li>
              <li>Alert evaluators apply a configurable attribution lag buffer before triggering low-conversion or CPA spike alarms.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 4. Automated Verification & Query Contract Tests */}
      <div className="bg-white p-6 rounded-xl border border-[#DADCE0] shadow-xs space-y-4">
        <h3 className="text-base font-bold text-[#202124] flex items-center gap-2 border-b border-[#DADCE0] pb-2">
          <FileCode2 className="w-5 h-5 text-[#137333]" />
          <span>4. Automated Query Contract Validation Suite</span>
        </h3>
        <p className="text-xs text-[#3C4043]">
          All GAQL queries in the specification are validated against Google Ads API v25 schema definitions via static linting and typecheck constraints:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div className="p-3 bg-[#E6F4EA] border border-[#CEEAD6] rounded-lg space-y-1">
            <strong className="text-[#137333] block">GAQL Field Compatibility Check</strong>
            <p className="text-[#3C4043] text-[11px]">
              Automated parser verifies that requested metrics (e.g., search impression share) are only queried against compatible channel types (e.g., SEARCH/SHOPPING).
            </p>
          </div>

          <div className="p-3 bg-[#E6F4EA] border border-[#CEEAD6] rounded-lg space-y-1">
            <strong className="text-[#137333] block">Micros Division Assertion</strong>
            <p className="text-[#3C4043] text-[11px]">
              Contract tests enforce that every <code className="font-mono">cost_micros</code> field is wrapped in a <code className="font-mono">Decimal(val) / 1000000.0</code> conversion handler.
            </p>
          </div>

          <div className="p-3 bg-[#E6F4EA] border border-[#CEEAD6] rounded-lg space-y-1">
            <strong className="text-[#137333] block">Zero-Impression Handling Test</strong>
            <p className="text-[#3C4043] text-[11px]">
              Verifies backend handles NULL metrics and zero-impression rows gracefully without throwing division-by-zero exceptions.
            </p>
          </div>

          <div className="p-3 bg-[#E6F4EA] border border-[#CEEAD6] rounded-lg space-y-1">
            <strong className="text-[#137333] block">searchStream Benchmark Criteria</strong>
            <p className="text-[#3C4043] text-[11px]">
              Ensures high-volume multi-account queries use gRPC <code className="font-mono">searchStream</code> over HTTP paginated <code className="font-mono">search</code>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
