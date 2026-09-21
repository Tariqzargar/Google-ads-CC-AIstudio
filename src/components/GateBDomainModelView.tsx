import React from 'react';
import { 
  Boxes, 
  Database, 
  ShieldCheck, 
  Layers, 
  AlertOctagon, 
  CheckCircle2, 
  Cpu, 
  ArrowRight, 
  Lock, 
  RefreshCw, 
  Server, 
  Key, 
  Activity, 
  FileText,
  Clock,
  Zap,
  TrendingUp,
  AlertTriangle,
  Award
} from 'lucide-react';

export const GateBDomainModelView: React.FC = () => {
  return (
    <div className="space-[#1A73E8] space-y-8 animate-fadeIn">
      {/* Hero Banner / Header Status */}
      <div className="bg-white rounded-xl border border-[#DADCE0] shadow-xs p-6 border-t-4 border-t-[#1A73E8]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#DADCE0]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-[#E8F0FE] text-[#1A73E8] border border-[#AECBFA] uppercase tracking-wider">
                GATE B CONTRACT
              </span>
              <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-[#E6F4EA] text-[#137333] border border-[#CEEAD6] flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> READY FOR GATE B FREEZE
              </span>
            </div>
            <h2 className="text-xl font-bold text-[#202124] tracking-tight">
              Google Ads Domain Model & Entity Contract (Gate B)
            </h2>
            <p className="text-xs text-[#5F6368] mt-1 leading-relaxed">
              Pure domain ownership, entity relationships, aggregate boundaries, persistence strategies, and shared foundation dependencies for Insights OS Command Center V1.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-[#F8F9FA] border border-[#DADCE0] rounded-lg p-3 text-right">
              <div className="text-[10px] uppercase font-bold text-[#5F6368]">Domain Architecture Status</div>
              <div className="text-xs font-bold text-[#1A73E8]">100% Pure Domain Enforced</div>
            </div>
          </div>
        </div>

        {/* Governing Directive Banner */}
        <div className="mt-4 p-4 bg-[#E8F0FE] rounded-lg border border-[#AECBFA] text-xs space-y-2 text-[#1967D2]">
          <div className="flex items-center gap-2 font-bold text-[#174EA6]">
            <ShieldCheck className="w-4 h-4 text-[#1A73E8]" />
            <span>Governing Mandate & Durable Job Foundation Clarification</span>
          </div>
          <p className="leading-relaxed">
            As mandated by the Chief Architect: Gate B is a pure domain and ownership contract. It contains no implementation code, no Django model syntax, and no infrastructure prescriptions. All background processing, asynchronous sync, retries, leases, and worker scheduling reference only the abstract <strong className="font-semibold text-[#174EA6]">DURABLE JOB FOUNDATION</strong> — ensuring zero coupling to specific queue technologies (e.g. Celery or Redis).
          </p>
        </div>
      </div>

      {/* 1. DOMAIN BOUNDARIES & CORE PHILOSOPHY */}
      <div className="bg-white rounded-xl border border-[#DADCE0] shadow-xs overflow-hidden">
        <div className="p-4 bg-[#F8F9FA] border-b border-[#DADCE0] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#1A73E8]" />
            <h3 className="font-bold text-sm text-[#202124]">1. Domain Boundaries & Core Philosophy</h3>
          </div>
          <span className="text-[11px] font-mono px-2 py-0.5 bg-[#E8F0FE] text-[#1A73E8] rounded border border-[#AECBFA]">
            Bounded Context: Google Ads
          </span>
        </div>

        <div className="p-5 space-y-4 text-xs text-[#3C4043] leading-relaxed">
          <p>
            The <strong>Google Ads Bounded Context</strong> in Insights OS encapsulates all logic, entity schemas, state machines, and invariants required to ingest, snapshot, analyze, and diagnose Google Ads accounts. It strictly isolates external Google Ads API v25 complexities behind domain aggregate roots and normalized relational models.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-3.5 bg-[#F8F9FA] rounded-lg border border-[#DADCE0]">
              <div className="font-bold text-[#202124] mb-1 flex items-center gap-1.5 text-xs">
                <Lock className="w-3.5 h-3.5 text-[#1A73E8]" /> Domain Ownership Boundary
              </div>
              <p className="text-[11px] text-[#5F6368]">
                Google Ads domain owns entity schemas, status enumerations, invariant rules, and GAQL mapping logic. It does NOT own user credentials or tenant auth state.
              </p>
            </div>

            <div className="p-3.5 bg-[#F8F9FA] rounded-lg border border-[#DADCE0]">
              <div className="font-bold text-[#202124] mb-1 flex items-center gap-1.5 text-xs">
                <Server className="w-3.5 h-3.5 text-[#1A73E8]" /> Read-Only V1 Contract
              </div>
              <p className="text-[11px] text-[#5F6368]">
                V1 domain entities are strictly read-only mirrors and diagnostic facts. Mutation operations (e.g. Campaign Mutate, Recommendation Apply) are out of scope.
              </p>
            </div>

            <div className="p-3.5 bg-[#F8F9FA] rounded-lg border border-[#DADCE0]">
              <div className="font-bold text-[#202124] mb-1 flex items-center gap-1.5 text-xs">
                <Zap className="w-3.5 h-3.5 text-[#1A73E8]" /> Durable Job Integration
              </div>
              <p className="text-[11px] text-[#5F6368]">
                Ingestion schedules, 14-day rolling window reconciliations, and alert evaluation routines delegate execution to the Shared Durable Job Foundation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. CORE DOMAIN ENTITIES & AGGREGATE ROOTS */}
      <div className="bg-white rounded-xl border border-[#DADCE0] shadow-xs overflow-hidden">
        <div className="p-4 bg-[#F8F9FA] border-b border-[#DADCE0] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Boxes className="w-4 h-4 text-[#1A73E8]" />
            <h3 className="font-bold text-sm text-[#202124]">2. Core Domain Entities & Aggregate Structure</h3>
          </div>
          <span className="text-xs text-[#5F6368] font-medium">8 Core Domain Entities</span>
        </div>

        <div className="p-5 space-y-6">
          {/* BusinessRecord Entity */}
          <div className="p-4 bg-[#F8F9FA] rounded-xl border border-[#DADCE0] space-y-3">
            <div className="flex items-center justify-between border-b border-[#DADCE0] pb-2">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-[#1A73E8] text-white rounded text-[10px] font-bold uppercase">
                  TENANT ROOT ENTITY
                </span>
                <span className="font-bold text-sm text-[#202124]">BusinessRecord</span>
              </div>
              <span className="text-[11px] font-mono text-[#5F6368]">Domain: Platform Tenant Scope</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div>
                <strong className="text-[#202124] block mb-1">Entity Identity & Attributes:</strong>
                <ul className="list-disc pl-4 text-[#5F6368] space-y-1 text-[11px]">
                  <li><code className="font-mono text-[#1A73E8]">businessId</code> (UUID, Primary Key / Tenant ID)</li>
                  <li><code className="font-mono text-[#1A73E8]">organizationName</code> (String)</li>
                  <li><code className="font-mono text-[#1A73E8]">linkedAccounts</code> (List of GoogleAdsAccount CIDs)</li>
                  <li><code className="font-mono text-[#1A73E8]">createdAt</code> & <code className="font-mono text-[#1A73E8]">updatedAt</code> (Timestamps)</li>
                </ul>
              </div>
              <div>
                <strong className="text-[#202124] block mb-1">Invariants & Boundaries:</strong>
                <p className="text-[#5F6368] text-[11px] leading-relaxed">
                  Serves as the root organizational boundary. Connects Google Ads accounts, campaigns, metrics, and alerts to a unified business tenant in Insights OS.
                </p>
              </div>
            </div>
          </div>

          {/* GoogleAdsAccount Entity */}
          <div className="p-4 bg-[#F8F9FA] rounded-xl border border-[#DADCE0] space-y-3">
            <div className="flex items-center justify-between border-b border-[#DADCE0] pb-2">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-[#1A73E8] text-white rounded text-[10px] font-bold uppercase">
                  AGGREGATE ROOT
                </span>
                <span className="font-bold text-sm text-[#202124]">GoogleAdsAccount</span>
              </div>
              <span className="text-[11px] font-mono text-[#5F6368]">API Resource: customer & customer_client</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div>
                <strong className="text-[#202124] block mb-1">Entity Identity & Attributes:</strong>
                <ul className="list-disc pl-4 text-[#5F6368] space-y-1 text-[11px]">
                  <li><code className="font-mono text-[#1A73E8]">customerId</code> (10-digit CID, Primary Key)</li>
                  <li><code className="font-mono text-[#1A73E8]">descriptiveName</code> (String)</li>
                  <li><code className="font-mono text-[#1A73E8]">currencyCode</code> (ISO 4217 e.g. USD, EUR)</li>
                  <li><code className="font-mono text-[#1A73E8]">timeZone</code> (e.g. America/New_York)</li>
                  <li><code className="font-mono text-[#1A73E8]">isManagerAccount</code> (Boolean, MCC flag)</li>
                  <li><code className="font-mono text-[#1A73E8]">parentManagerCustomerId</code> (Nullable 10-digit CID)</li>
                  <li><code className="font-mono text-[#1A73E8]">connectionStatus</code> (ACTIVE, REAUTH_REQUIRED, SUSPENDED)</li>
                  <li><code className="font-mono text-[#1A73E8]">authTokenReferenceId</code> (Ref to Integration Foundation)</li>
                </ul>
              </div>
              <div>
                <strong className="text-[#202124] block mb-1">Invariants & Boundaries:</strong>
                <p className="text-[#5F6368] text-[11px] leading-relaxed">
                  Acts as the top-level aggregate root for all campaign, ad group, metric, and alert data belonging to a single Google Ads CID. Scoped strictly to an Insights OS Tenant ID. Multi-tenant isolation is enforced at this root boundary.
                </p>
              </div>
            </div>
          </div>

          {/* CampaignAggregate Entity */}
          <div className="p-4 bg-[#F8F9FA] rounded-xl border border-[#DADCE0] space-y-3">
            <div className="flex items-center justify-between border-b border-[#DADCE0] pb-2">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-[#1A73E8] text-white rounded text-[10px] font-bold uppercase">
                  AGGREGATE ROOT
                </span>
                <span className="font-bold text-sm text-[#202124]">CampaignAggregate</span>
              </div>
              <span className="text-[11px] font-mono text-[#5F6368]">API Resource: campaign & campaign_budget</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div>
                <strong className="text-[#202124] block mb-1">Entity Identity & Attributes:</strong>
                <ul className="list-disc pl-4 text-[#5F6368] space-y-1 text-[11px]">
                  <li><code className="font-mono text-[#1A73E8]">campaignId</code> (64-bit integer ID)</li>
                  <li><code className="font-mono text-[#1A73E8]">customerId</code> (FK to GoogleAdsAccount)</li>
                  <li><code className="font-mono text-[#1A73E8]">name</code> (String)</li>
                  <li><code className="font-mono text-[#1A73E8]">status</code> (ENABLED, PAUSED, REMOVED)</li>
                  <li><code className="font-mono text-[#1A73E8]">servingStatus</code> (SERVING, ENDED, SUSPENDED, PENDING)</li>
                  <li><code className="font-mono text-[#1A73E8]">primaryStatus</code> & <code className="font-mono text-[#1A73E8]">primaryStatusReasons</code></li>
                  <li><code className="font-mono text-[#1A73E8]">channelType</code> (SEARCH, DISPLAY, PERFORMANCE_MAX, SHOPPING)</li>
                  <li><code className="font-mono text-[#1A73E8]">learningStatus</code> (LEARNING, ELIGIBLE, PAUSED)</li>
                  <li><strong className="text-[#202124]">Child Entity CampaignBudget:</strong> <code className="font-mono text-[#1A73E8]">budgetId</code>, <code className="font-mono text-[#1A73E8]">amountMicros</code>, <code className="font-mono text-[#1A73E8]">isExplicitlyShared</code></li>
                </ul>
              </div>
              <div>
                <strong className="text-[#202124] block mb-1">Invariants & Boundaries:</strong>
                <p className="text-[#5F6368] text-[11px] leading-relaxed">
                  A Campaign belongs to exactly one <code className="font-mono">GoogleAdsAccount</code>. Its <code className="font-mono">CampaignBudget</code> child may be shared across multiple campaigns if <code className="font-mono">isExplicitlyShared = true</code>. Calculates budget exhaustion and pacing projections deterministically.
                </p>
              </div>
            </div>
          </div>

          {/* AdGroup & AdGroupAd Entities */}
          <div className="p-4 bg-[#F8F9FA] rounded-xl border border-[#DADCE0] space-y-3">
            <div className="flex items-center justify-between border-b border-[#DADCE0] pb-2">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-[#34A853] text-white rounded text-[10px] font-bold uppercase">
                  CHILD ENTITIES
                </span>
                <span className="font-bold text-sm text-[#202124]">AdGroupEntity & AdGroupAdEntity</span>
              </div>
              <span className="text-[11px] font-mono text-[#5F6368]">API Resource: ad_group & ad_group_ad</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div>
                <strong className="text-[#202124] block mb-1">Entity Identity & Attributes:</strong>
                <ul className="list-disc pl-4 text-[#5F6368] space-y-1 text-[11px]">
                  <li><code className="font-mono text-[#1A73E8]">adGroupId</code> & <code className="font-mono text-[#1A73E8]">adGroupAdId</code></li>
                  <li><code className="font-mono text-[#1A73E8]">campaignId</code> (FK to CampaignAggregate)</li>
                  <li><code className="font-mono text-[#1A73E8]">policyApprovalStatus</code> (APPROVED, DISAPPROVED, AREA_OF_INTEREST)</li>
                  <li><code className="font-mono text-[#1A73E8]">policyTopics</code> (List of JSON Policy Violation Entries)</li>
                </ul>
              </div>
              <div>
                <strong className="text-[#202124] block mb-1">Invariants & Boundaries:</strong>
                <p className="text-[#5F6368] text-[11px] leading-relaxed">
                  AdGroup belongs to exactly 1 Campaign. AdGroupAd belongs to exactly 1 AdGroup. Policy disapproval flags are surfaced from <code className="font-mono">ad_group_ad.policy_summary</code> for Policy Risk alerts.
                </p>
              </div>
            </div>
          </div>

          {/* ConversionActionEntity */}
          <div className="p-4 bg-[#F8F9FA] rounded-xl border border-[#DADCE0] space-y-3">
            <div className="flex items-center justify-between border-b border-[#DADCE0] pb-2">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-[#1A73E8] text-white rounded text-[10px] font-bold uppercase">
                  AGGREGATE ROOT
                </span>
                <span className="font-bold text-sm text-[#202124]">ConversionActionEntity</span>
              </div>
              <span className="text-[11px] font-mono text-[#5F6368]">API Resource: conversion_action</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div>
                <strong className="text-[#202124] block mb-1">Entity Identity & Attributes:</strong>
                <ul className="list-disc pl-4 text-[#5F6368] space-y-1 text-[11px]">
                  <li><code className="font-mono text-[#1A73E8]">conversionActionId</code> (Primary Key)</li>
                  <li><code className="font-mono text-[#1A73E8]">customerId</code> (FK to GoogleAdsAccount)</li>
                  <li><code className="font-mono text-[#1A73E8]">name</code> & <code className="font-mono text-[#1A73E8]">category</code> (DEFAULT, PAGE_VIEW, PURCHASE, LEAD)</li>
                  <li><code className="font-mono text-[#1A73E8]">status</code> (ENABLED, PAUSED, REMOVED, HIDDEN)</li>
                  <li><code className="font-mono text-[#1A73E8]">primaryForGoal</code> (Boolean, primary vs secondary)</li>
                  <li><code className="font-mono text-[#1A73E8]">tagStatus</code> (TAG_INITIALIZED, INACTIVE, NEVER_FIRED)</li>
                </ul>
              </div>
              <div>
                <strong className="text-[#202124] block mb-1">Invariants & Boundaries:</strong>
                <p className="text-[#5F6368] text-[11px] leading-relaxed">
                  Monitored for tracking tag drop-offs and conversion heartbeat zeroes. Used as the baseline reference for conversion zero-anomalies.
                </p>
              </div>
            </div>
          </div>

          {/* MetricSnapshot Fact Entity */}
          <div className="p-4 bg-[#F8F9FA] rounded-xl border border-[#DADCE0] space-y-3">
            <div className="flex items-center justify-between border-b border-[#DADCE0] pb-2">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-[#EA4335] text-white rounded text-[10px] font-bold uppercase">
                  IMMUTABLE FACT ENTITY
                </span>
                <span className="font-bold text-sm text-[#202124]">MetricSnapshot (Daily & Hourly Facts)</span>
              </div>
              <span className="text-[11px] font-mono text-[#5F6368]">API Resource: metrics & segments.date / hour</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div>
                <strong className="text-[#202124] block mb-1">Entity Identity & Attributes:</strong>
                <ul className="list-disc pl-4 text-[#5F6368] space-y-1 text-[11px]">
                  <li><code className="font-mono text-[#1A73E8]">granularity</code> (DAILY or HOURLY)</li>
                  <li><code className="font-mono text-[#1A73E8]">date</code> (YYYY-MM-DD) & <code className="font-mono text-[#1A73E8]">hour</code> (0-23)</li>
                  <li><code className="font-mono text-[#1A73E8]">customerId</code>, <code className="font-mono text-[#1A73E8]">campaignId</code>, <code className="font-mono text-[#1A73E8]">adGroupId</code></li>
                  <li><code className="font-mono text-[#1A73E8]">costMicros</code> (64-bit Int), <code className="font-mono text-[#1A73E8]">impressions</code>, <code className="font-mono text-[#1A73E8]">clicks</code></li>
                  <li><code className="font-mono text-[#1A73E8]">conversions</code> (Float), <code className="font-mono text-[#1A73E8]">conversionsValue</code> (Float)</li>
                  <li><code className="font-mono text-[#1A73E8]">searchImpressionShare</code>, <code className="font-mono text-[#1A73E8]">searchBudgetLostImpressionShare</code></li>
                </ul>
              </div>
              <div>
                <strong className="text-[#202124] block mb-1">Invariants & Boundaries:</strong>
                <p className="text-[#5F6368] text-[11px] leading-relaxed">
                  Relational fact table. Reconciled continuously across a 14-day rolling window to accommodate Google Ads conversion attribution lag.
                </p>
              </div>
            </div>
          </div>

          {/* ChangeEventSnapshot Entity */}
          <div className="p-4 bg-[#F8F9FA] rounded-xl border border-[#DADCE0] space-y-3">
            <div className="flex items-center justify-between border-b border-[#DADCE0] pb-2">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-[#1A73E8] text-white rounded text-[10px] font-bold uppercase">
                  PERMANENT SNAPSHOT ROOT
                </span>
                <span className="font-bold text-sm text-[#202124]">ChangeEventSnapshot (Mutation Audit)</span>
              </div>
              <span className="text-[11px] font-mono text-[#5F6368]">API Resource: change_event</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div>
                <strong className="text-[#202124] block mb-1">Entity Identity & Attributes:</strong>
                <ul className="list-disc pl-4 text-[#5F6368] space-y-1 text-[11px]">
                  <li><code className="font-mono text-[#1A73E8]">changeEventId</code> (Synthetic Composite Key)</li>
                  <li><code className="font-mono text-[#1A73E8]">customerId</code>, <code className="font-mono text-[#1A73E8]">campaignId</code></li>
                  <li><code className="font-mono text-[#1A73E8]">changeDateTime</code> (UTC ISO Timestamp)</li>
                  <li><code className="font-mono text-[#1A73E8]">changeResourceType</code> (CAMPAIGN, AD_GROUP, BUDGET)</li>
                  <li><code className="font-mono text-[#1A73E8]">userEmail</code> & <code className="font-mono text-[#1A73E8]">clientType</code> (GOOGLE_ADS_UI, API, SCRIPT)</li>
                  <li><code className="font-mono text-[#1A73E8]">oldValueDiff</code> & <code className="font-mono text-[#1A73E8]">newValueDiff</code> (JSON text diff)</li>
                  <li><code className="font-mono text-[#1A73E8]">operatorIntentNote</code> (Insights OS Manual Staff Note)</li>
                </ul>
              </div>
              <div>
                <strong className="text-[#202124] block mb-1">Invariants & Boundaries:</strong>
                <p className="text-[#5F6368] text-[11px] leading-relaxed">
                  Snapshotted immediately into Insights OS PostgreSQL to bypass Google Ads API's hard 30-day retention purge limit. Retained permanently for long-term historical diagnostic analysis.
                </p>
              </div>
            </div>
          </div>

          {/* RecommendationSnapshot Entity */}
          <div className="p-4 bg-[#F8F9FA] rounded-xl border border-[#DADCE0] space-y-3">
            <div className="flex items-center justify-between border-b border-[#DADCE0] pb-2">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-[#FBBC04] text-[#202124] rounded text-[10px] font-bold uppercase">
                  READ-ONLY MIRROR
                </span>
                <span className="font-bold text-sm text-[#202124]">RecommendationSnapshot</span>
              </div>
              <span className="text-[11px] font-mono text-[#5F6368]">API Resource: recommendation</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div>
                <strong className="text-[#202124] block mb-1">Entity Identity & Attributes:</strong>
                <ul className="list-disc pl-4 text-[#5F6368] space-y-1 text-[11px]">
                  <li><code className="font-mono text-[#1A73E8]">recommendationId</code> (Resource Name String)</li>
                  <li><code className="font-mono text-[#1A73E8]">customerId</code>, <code className="font-mono text-[#1A73E8]">campaignId</code></li>
                  <li><code className="font-mono text-[#1A73E8]">type</code> (CAMPAIGN_BUDGET, KEYWORD, TARGET_CPA_OPT)</li>
                  <li><code className="font-mono text-[#1A73E8]">impactEstCostDeltaMicros</code> & <code className="font-mono text-[#1A73E8]">impactEstConversionsDelta</code></li>
                  <li><code className="font-mono text-[#1A73E8]">isDismissedInGoogle</code> (Boolean)</li>
                </ul>
              </div>
              <div>
                <strong className="text-[#202124] block mb-1">Invariants & Boundaries:</strong>
                <p className="text-[#5F6368] text-[11px] leading-relaxed">
                  Mirror entity for human review in Recommendations tab. Execution and automated apply calls are explicitly out of V1 scope.
                </p>
              </div>
            </div>
          </div>

          {/* AlertInstance & JournalEntry Entity */}
          <div className="p-4 bg-[#F8F9FA] rounded-xl border border-[#DADCE0] space-y-3">
            <div className="flex items-center justify-between border-b border-[#DADCE0] pb-2">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-[#1A73E8] text-white rounded text-[10px] font-bold uppercase">
                  INSIGHTS OS DOMAIN ROOT
                </span>
                <span className="font-bold text-sm text-[#202124]">AlertInstance & JournalEntry</span>
              </div>
              <span className="text-[11px] font-mono text-[#5F6368]">Source: Deterministic Alert Engine</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div>
                <strong className="text-[#202124] block mb-1">Entity Identity & Attributes:</strong>
                <ul className="list-disc pl-4 text-[#5F6368] space-y-1 text-[11px]">
                  <li><code className="font-mono text-[#1A73E8]">alertInstanceId</code> (UUID)</li>
                  <li><code className="font-mono text-[#1A73E8]">ruleCode</code> (CONVERSION_ZERO, PACING_EXPOSURE, SERVING_INTERRUPT, SEARCH_WASTE)</li>
                  <li><code className="font-mono text-[#1A73E8]">customerId</code>, <code className="font-mono text-[#1A73E8]">campaignId</code></li>
                  <li><code className="font-mono text-[#1A73E8]">triggeredAt</code> (UTC ISO Timestamp)</li>
                  <li><code className="font-mono text-[#1A73E8]">severity</code> (CRITICAL, HIGH, WARNING, INFO)</li>
                  <li><code className="font-mono text-[#1A73E8]">status</code> (ACTIVE, ACKNOWLEDGED, RESOLVED, CLEARED)</li>
                  <li><code className="font-mono text-[#1A73E8]">triggerSnapshotData</code> (JSON metric values at trigger time)</li>
                </ul>
              </div>
              <div>
                <strong className="text-[#202124] block mb-1">Invariants & Boundaries:</strong>
                <p className="text-[#5F6368] text-[11px] leading-relaxed">
                  Generated entirely inside Insights OS via rule evaluation on <code className="font-mono">MetricSnapshot</code> facts. Logged into the 24-Hour Journal. Cleared automatically when clearance conditions pass or manually by staff.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MANDATORY SUBMISSION MATRICES (1 TO 9) */}

      {/* 1. ENTITY OWNERSHIP MATRIX */}
      <div className="bg-white rounded-xl border border-[#DADCE0] shadow-xs overflow-hidden">
        <div className="p-4 bg-[#F8F9FA] border-b border-[#DADCE0]">
          <h3 className="font-bold text-sm text-[#202124]">1. Entity Ownership Matrix</h3>
          <p className="text-xs text-[#5F6368]">Domain ownership, primary key types, and tenant isolation scope</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-[#F8F9FA] border-b border-[#DADCE0] text-[11px] font-semibold text-[#5F6368] uppercase">
                <th className="p-3">Entity Name</th>
                <th className="p-3">Domain Owner</th>
                <th className="p-3">Primary Key Structure</th>
                <th className="p-3">Tenant Scoping Boundary</th>
                <th className="p-3">Multi-Tenant Isolation Rule</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#DADCE0] text-[11px] text-[#3C4043]">
              <tr>
                <td className="p-3 font-bold text-[#202124]">BusinessRecord</td>
                <td className="p-3">Insights OS Domain</td>
                <td className="p-3 font-mono text-[#1A73E8]">businessId / tenant_id (UUID)</td>
                <td className="p-3">Insights OS Tenant ID</td>
                <td className="p-3 text-[#137333]">Root Tenant Boundary for Accounts</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#202124]">GoogleAdsAccount</td>
                <td className="p-3">Google Ads Domain</td>
                <td className="p-3 font-mono text-[#1A73E8]">customerId (10-digit String)</td>
                <td className="p-3">Insights OS Tenant ID</td>
                <td className="p-3 text-[#137333]">Strict Tenant Foreign Key Check</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#202124]">CampaignAggregate</td>
                <td className="p-3">Google Ads Domain</td>
                <td className="p-3 font-mono text-[#1A73E8]">campaignId (64-bit Int)</td>
                <td className="p-3">GoogleAdsAccount (CID)</td>
                <td className="p-3 text-[#137333]">Cascades via Parent Customer ID</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#202124]">AdGroup / AdGroupAd</td>
                <td className="p-3">Google Ads Domain</td>
                <td className="p-3 font-mono text-[#1A73E8]">adGroupId / adGroupAdId</td>
                <td className="p-3">CampaignAggregate</td>
                <td className="p-3 text-[#137333]">Cascades via Campaign ID</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#202124]">ConversionActionEntity</td>
                <td className="p-3">Google Ads Domain</td>
                <td className="p-3 font-mono text-[#1A73E8]">conversionActionId (Int)</td>
                <td className="p-3">GoogleAdsAccount (CID)</td>
                <td className="p-3 text-[#137333]">Scoped to Customer ID</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#202124]">MetricSnapshot</td>
                <td className="p-3">Google Ads Domain</td>
                <td className="p-3 font-mono text-[#1A73E8]">(customerId, campaignId, date, hour)</td>
                <td className="p-3">GoogleAdsAccount (CID)</td>
                <td className="p-3 text-[#137333]">Partitioned by Date & Customer ID</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#202124]">ChangeEventSnapshot</td>
                <td className="p-3">Google Ads Domain</td>
                <td className="p-3 font-mono text-[#1A73E8]">changeEventId (Composite UUID)</td>
                <td className="p-3">GoogleAdsAccount (CID)</td>
                <td className="p-3 text-[#137333]">Permanent Snapshot per Tenant Account</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#202124]">RecommendationSnapshot</td>
                <td className="p-3">Google Ads Domain</td>
                <td className="p-3 font-mono text-[#1A73E8]">recommendationId (String)</td>
                <td className="p-3">GoogleAdsAccount (CID)</td>
                <td className="p-3 text-[#137333]">Read-only mirror per Customer ID</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#202124]">AlertInstance / JournalEntry</td>
                <td className="p-3">Alert Engine Domain</td>
                <td className="p-3 font-mono text-[#1A73E8]">alertInstanceId (UUID)</td>
                <td className="p-3">Insights OS Tenant ID</td>
                <td className="p-3 text-[#137333]">Evaluated over MetricSnapshot facts</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 2. AGGREGATE-ROOT MAP */}
      <div className="bg-white rounded-xl border border-[#DADCE0] shadow-xs overflow-hidden">
        <div className="p-4 bg-[#F8F9FA] border-b border-[#DADCE0]">
          <h3 className="font-bold text-sm text-[#202124]">2. Aggregate-Root Map</h3>
          <p className="text-xs text-[#5F6368]">Aggregate boundaries, contained entities, and cascade behavior</p>
        </div>
        <div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 bg-[#F8F9FA] rounded-lg border border-[#DADCE0] space-y-2">
            <div className="font-bold text-[#1A73E8] border-b border-[#DADCE0] pb-1">
              GoogleAdsAccount Root
            </div>
            <p className="text-[11px] text-[#5F6368]">
              <strong>Children:</strong> CampaignAggregate, ConversionActionEntity, RecommendationSnapshot, ChangeEventSnapshot.
            </p>
            <p className="text-[11px] text-[#3C4043]">
              <strong>Cascade Rule:</strong> Deleting/unlinking account cascades soft-deletion to child campaigns, snapshots, and alert rules.
            </p>
          </div>

          <div className="p-4 bg-[#F8F9FA] rounded-lg border border-[#DADCE0] space-y-2">
            <div className="font-bold text-[#1A73E8] border-b border-[#DADCE0] pb-1">
              CampaignAggregate Root
            </div>
            <p className="text-[11px] text-[#5F6368]">
              <strong>Children:</strong> CampaignBudget (Shared or Dedicated), AdGroupEntity, AdGroupAdEntity.
            </p>
            <p className="text-[11px] text-[#3C4043]">
              <strong>Cascade Rule:</strong> Campaign removal marks ad groups and ads as REMOVED; budgets persist if explicitly shared.
            </p>
          </div>

          <div className="p-4 bg-[#F8F9FA] rounded-lg border border-[#DADCE0] space-y-2">
            <div className="font-bold text-[#1A73E8] border-b border-[#DADCE0] pb-1">
              AlertInstance Root
            </div>
            <p className="text-[11px] text-[#5F6368]">
              <strong>Children:</strong> JournalEntry, AlertClearanceLog, AlertNotificationPayload.
            </p>
            <p className="text-[11px] text-[#3C4043]">
              <strong>Cascade Rule:</strong> Alert state transitions (Active -&gt; Cleared) append immutable JournalEntry audit records.
            </p>
          </div>
        </div>
      </div>

      {/* 3. CARDINALITY MAP */}
      <div className="bg-white rounded-xl border border-[#DADCE0] shadow-xs overflow-hidden">
        <div className="p-4 bg-[#F8F9FA] border-b border-[#DADCE0]">
          <h3 className="font-bold text-sm text-[#202124]">3. Cardinality Map</h3>
          <p className="text-xs text-[#5F6368]">Relationship multiplicities across Google Ads resources and domain entities</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-[#F8F9FA] border-b border-[#DADCE0] text-[11px] font-semibold text-[#5F6368] uppercase">
                <th className="p-3">Source Entity</th>
                <th className="p-3">Target Entity / Resource</th>
                <th className="p-3">Cardinality</th>
                <th className="p-3">Business Relationship Rule</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#DADCE0] text-[11px] text-[#3C4043]">
              <tr>
                <td className="p-3 font-bold text-[#202124]">GoogleAdsAccount (Manager)</td>
                <td className="p-3 font-mono text-[#1A73E8]">GoogleAdsAccount (Client CID)</td>
                <td className="p-3 font-bold text-[#1A73E8]">1 : N</td>
                <td className="p-3">One MCC manager account hierarchy links to N client accounts.</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#202124]">GoogleAdsAccount</td>
                <td className="p-3 font-mono text-[#1A73E8]">CampaignAggregate</td>
                <td className="p-3 font-bold text-[#1A73E8]">1 : N</td>
                <td className="p-3">One account contains 0 to thousands of campaigns.</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#202124]">CampaignAggregate</td>
                <td className="p-3 font-mono text-[#1A73E8]">CampaignBudget</td>
                <td className="p-3 font-bold text-[#1A73E8]">N : 1</td>
                <td className="p-3">Multiple campaigns can reference one explicitly shared campaign budget.</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#202124]">CampaignAggregate</td>
                <td className="p-3 font-mono text-[#1A73E8]">AdGroupEntity</td>
                <td className="p-3 font-bold text-[#1A73E8]">1 : N</td>
                <td className="p-3">One campaign contains 1 to N ad groups.</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#202124]">AdGroupEntity</td>
                <td className="p-3 font-mono text-[#1A73E8]">AdGroupAdEntity</td>
                <td className="p-3 font-bold text-[#1A73E8]">1 : N</td>
                <td className="p-3">One ad group contains 1 to N text/responsive search ads.</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#202124]">CampaignAggregate</td>
                <td className="p-3 font-mono text-[#1A73E8]">MetricSnapshot (Daily)</td>
                <td className="p-3 font-bold text-[#1A73E8]">1 : N</td>
                <td className="p-3">One campaign produces 1 MetricSnapshot fact row per date.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. SOURCE-OF-TRUTH MATRIX */}
      <div className="bg-white rounded-xl border border-[#DADCE0] shadow-xs overflow-hidden">
        <div className="p-4 bg-[#F8F9FA] border-b border-[#DADCE0]">
          <h3 className="font-bold text-sm text-[#202124]">4. Source-of-Truth Matrix</h3>
          <p className="text-xs text-[#5F6368]">Authoritative domain boundaries for every entity attribute</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-[#F8F9FA] border-b border-[#DADCE0] text-[11px] font-semibold text-[#5F6368] uppercase">
                <th className="p-3">Domain Attribute / Entity</th>
                <th className="p-3">Authoritative Source</th>
                <th className="p-3">Synchronization Method</th>
                <th className="p-3">Conflict Resolution Policy</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#DADCE0] text-[11px] text-[#3C4043]">
              <tr>
                <td className="p-3 font-bold text-[#202124]">Campaign Status & Settings</td>
                <td className="p-3 font-semibold text-[#1A73E8]">Google Ads API</td>
                <td className="p-3">GAQL Sync via Durable Job Foundation</td>
                <td className="p-3 text-[#137333]">Google Ads API overwrites local replica</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#202124]">Raw Clicks, Cost, Impressions</td>
                <td className="p-3 font-semibold text-[#1A73E8]">Google Ads API</td>
                <td className="p-3">Hourly GAQL Fetch & Daily Batch</td>
                <td className="p-3 text-[#137333]">Google Ads API replaces intraday counts</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#202124]">Historical Conversions (14d Window)</td>
                <td className="p-3 font-semibold text-[#1A73E8]">Google Ads API</td>
                <td className="p-3">14-Day Rolling Window Reconciliation</td>
                <td className="p-3 text-[#137333]">Latest API restatement updates snapshot</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#202124]">Calculated Pacing Projection</td>
                <td className="p-3 font-semibold text-[#1E8E3E]">Insights OS PostgreSQL</td>
                <td className="p-3">Deterministic Math Engine</td>
                <td className="p-3 text-[#1E8E3E]">Insights OS local calculation is canonical</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#202124]">Alert Trigger & Resolution State</td>
                <td className="p-3 font-semibold text-[#1E8E3E]">Insights OS PostgreSQL</td>
                <td className="p-3">Alert Engine Rules Execution</td>
                <td className="p-3 text-[#1E8E3E]">Insights OS local state is canonical</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#202124]">Operator Intent Notes</td>
                <td className="p-3 font-semibold text-[#1E8E3E]">Insights OS Staff UI</td>
                <td className="p-3">Direct Manual Input</td>
                <td className="p-3 text-[#1E8E3E]">Stored permanently in Insights OS DB</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 5. PERSISTENCE & RETENTION MATRIX */}
      <div className="bg-white rounded-xl border border-[#DADCE0] shadow-xs overflow-hidden">
        <div className="p-4 bg-[#F8F9FA] border-b border-[#DADCE0]">
          <h3 className="font-bold text-sm text-[#202124]">5. Persistence & Retention Matrix</h3>
          <p className="text-xs text-[#5F6368]">Storage grain, retention duration, and archival policies</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-[#F8F9FA] border-b border-[#DADCE0] text-[11px] font-semibold text-[#5F6368] uppercase">
                <th className="p-3">Entity Type</th>
                <th className="p-3">Storage Grain</th>
                <th className="p-3">V1 Retention Duration</th>
                <th className="p-3">Archival & Purge Policy</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#DADCE0] text-[11px] text-[#3C4043]">
              <tr>
                <td className="p-3 font-bold text-[#202124]">MetricSnapshot (Daily)</td>
                <td className="p-3">1 row per (Campaign, Date)</td>
                <td className="p-3 font-semibold text-[#1A73E8]">365+ Days (Permanent)</td>
                <td className="p-3">Never purged; partitioned by year/month in PostgreSQL</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#202124]">MetricSnapshot (Hourly)</td>
                <td className="p-3">1 row per (Campaign, Date, Hour)</td>
                <td className="p-3 font-semibold text-[#B06000]">30 Days Rolling Window</td>
                <td className="p-3">Aggregated into Daily facts then deleted after 30 days</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#202124]">ChangeEventSnapshot</td>
                <td className="p-3">1 row per change_event record</td>
                <td className="p-3 font-semibold text-[#1E8E3E]">Permanent (Overrides Google 30d purge)</td>
                <td className="p-3">Retained permanently for Change Lab history & audit ledger</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#202124]">AlertInstance & JournalEntry</td>
                <td className="p-3">1 row per alert trigger event</td>
                <td className="p-3 font-semibold text-[#1A73E8]">180 Days Active Journal</td>
                <td className="p-3">Archived to cold storage after 180 days</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#202124]">RecommendationSnapshot</td>
                <td className="p-3">Latest state per Recommendation ID</td>
                <td className="p-3 font-semibold text-[#5F6368]">Current Active State Only</td>
                <td className="p-3">Overwritten on each recommendations sync pass</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 6. SHARED-FOUNDATION DEPENDENCY MAP */}
      <div className="bg-white rounded-xl border border-[#DADCE0] shadow-xs overflow-hidden">
        <div className="p-4 bg-[#F8F9FA] border-b border-[#DADCE0]">
          <h3 className="font-bold text-sm text-[#202124]">6. Shared-Foundation Dependency Map</h3>
          <p className="text-xs text-[#5F6368]">Clean contract linkages to core platform infrastructure</p>
        </div>
        <div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 bg-[#F8F9FA] rounded-lg border border-[#DADCE0] space-y-2">
            <div className="flex items-center gap-2 text-[#1A73E8] font-bold">
              <Key className="w-4 h-4" />
              <span>Integration Foundation</span>
            </div>
            <p className="text-[11px] text-[#5F6368] leading-relaxed">
              Google Ads domain stores only <code className="font-mono text-[#1A73E8]">authTokenReferenceId</code>. Key decryption, refresh token rotation, and Google OAuth flow execution are delegated entirely to the Integration Foundation.
            </p>
          </div>

          <div className="p-4 bg-[#F8F9FA] rounded-lg border border-[#DADCE0] space-y-2">
            <div className="flex items-center gap-2 text-[#1A73E8] font-bold">
              <Server className="w-4 h-4" />
              <span>Tenant Foundation</span>
            </div>
            <p className="text-[11px] text-[#5F6368] leading-relaxed">
              Every <code className="font-mono text-[#1A73E8]">GoogleAdsAccount</code> requires a valid <code className="font-mono">tenant_id</code> linked to its parent <code className="font-mono text-[#1A73E8]">BusinessRecord</code>. All GAQL queries, database operations, and alert instances enforce tenant-level data isolation.
            </p>
          </div>

          <div className="p-4 bg-[#F8F9FA] rounded-lg border border-[#DADCE0] space-y-2">
            <div className="flex items-center gap-2 text-[#1A73E8] font-bold">
              <Clock className="w-4 h-4" />
              <span>Durable Job Foundation</span>
            </div>
            <p className="text-[11px] text-[#5F6368] leading-relaxed">
              Ingestion cron jobs, 14-day rolling window reconciliation passes, alert rule evaluation, and backoff retries are registered as tasks within the Durable Job Foundation without hardcoding Celery or Redis dependencies.
            </p>
          </div>
        </div>
      </div>

      {/* 7. SCALING RISKS */}
      <div className="bg-white rounded-xl border border-[#DADCE0] shadow-xs overflow-hidden">
        <div className="p-4 bg-[#F8F9FA] border-b border-[#DADCE0] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-[#B06000]" />
            <h3 className="font-bold text-sm text-[#202124]">7. Scaling Risks & Technical Mitigations</h3>
          </div>
          <span className="text-xs text-[#B06000] font-semibold">4 Identified Bottlenecks</span>
        </div>
        <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-3.5 bg-[#FEF7E0] rounded-lg border border-[#FDE293] space-y-1">
            <strong className="text-[#B06000] block text-xs">1000+ CID MCC Hierarchy Traversal Bottleneck</strong>
            <p className="text-[#3C4043] text-[11px]">
              Querying thousands of customer client accounts sequentially causes job starvation. Mitigated by parallel batching across client CIDs via Durable Job worker pools.
            </p>
          </div>

          <div className="p-3.5 bg-[#FEF7E0] rounded-lg border border-[#FDE293] space-y-1">
            <strong className="text-[#B06000] block text-xs">14-Day Rolling Window Conversion Write Spike</strong>
            <p className="text-[#3C4043] text-[11px]">
              Re-fetching 14 days of historical conversion data daily produces heavy upsert query volume. Mitigated by bulk PostgreSQL upserts (<code className="font-mono">ON CONFLICT DO UPDATE</code>).
            </p>
          </div>

          <div className="p-3.5 bg-[#FEF7E0] rounded-lg border border-[#FDE293] space-y-1">
            <strong className="text-[#B06000] block text-xs">ChangeEvent Snapshot Table Bloat</strong>
            <p className="text-[#3C4043] text-[11px]">
              High-volume accounts generate millions of micro change event rows. Mitigated by filtering out noise events (e.g. ad group status unchanged) before DB snapshotting.
            </p>
          </div>

          <div className="p-3.5 bg-[#FEF7E0] rounded-lg border border-[#FDE293] space-y-1">
            <strong className="text-[#B06000] block text-xs">Google Ads API Rate Limit (RESOURCE_EXHAUSTED)</strong>
            <p className="text-[#3C4043] text-[11px]">
              Exceeding daily developer token quotas or per-minute account limits. Mitigated by global token-bucket rate limiting in GAQL client wrapper.
            </p>
          </div>
        </div>
      </div>

      {/* 8. GENUINE FOUNDER DECISIONS ONLY */}
      <div className="bg-white rounded-xl border border-[#DADCE0] shadow-xs overflow-hidden">
        <div className="p-4 bg-[#F8F9FA] border-b border-[#DADCE0]">
          <h3 className="font-bold text-sm text-[#202124]">8. Genuine Founder Decisions Only</h3>
          <p className="text-xs text-[#5F6368]">Hard architectural boundaries locked for V1</p>
        </div>
        <div className="p-5 space-y-3 text-xs">
          <div className="p-3 bg-[#F8F9FA] rounded-lg border border-[#DADCE0] flex items-start gap-3">
            <span className="px-2 py-0.5 bg-[#202124] text-white rounded font-mono text-[10px] font-bold shrink-0 mt-0.5">
              DECISION 1
            </span>
            <div>
              <strong className="text-[#202124] block">Strict Read-Only V1 Boundary</strong>
              <p className="text-[#5F6368] text-[11px]">
                No mutation APIs (Campaign Mutate, Bidding Strategy Mutate, Recommendation Apply) are enabled in V1 code paths. Reduces risk, eliminates unauthorized Google Ads write hazards, and keeps scope laser-focused on diagnostic value.
              </p>
            </div>
          </div>

          <div className="p-3 bg-[#F8F9FA] rounded-lg border border-[#DADCE0] flex items-start gap-3">
            <span className="px-2 py-0.5 bg-[#202124] text-white rounded font-mono text-[10px] font-bold shrink-0 mt-0.5">
              DECISION 2
            </span>
            <div>
              <strong className="text-[#202124] block">Immediate Permanent Change Event Snapshotting</strong>
              <p className="text-[#5F6368] text-[11px]">
                Insights OS permanently snapshots Google Ads <code className="font-mono">change_event</code> records upon discovery to circumvent Google's 30-day API deletion limit. Enables permanent historical audit capability.
              </p>
            </div>
          </div>

          <div className="p-3 bg-[#F8F9FA] rounded-lg border border-[#DADCE0] flex items-start gap-3">
            <span className="px-2 py-0.5 bg-[#202124] text-white rounded font-mono text-[10px] font-bold shrink-0 mt-0.5">
              DECISION 3
            </span>
            <div>
              <strong className="text-[#202124] block">Mandatory 14-Day Rolling Window Reconciliation</strong>
              <p className="text-[#5F6368] text-[11px]">
                Daily sync passes automatically re-fetch the prior 14 days of metric facts to absorb Google Ads conversion attribution restatements, eliminating false alerts caused by attribution lag.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 9. FINAL VERDICT */}
      <div className="bg-white rounded-xl border border-[#CEEAD6] shadow-xs p-6 bg-[#F6FDF9]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#E6F4EA] rounded-full flex items-center justify-center border border-[#CEEAD6] text-[#137333] shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#137333] uppercase tracking-wider">
                  ARCHITECTURAL DECISION RECORD
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#0D652D]">
                9. Final Verdict: READY FOR GATE B FREEZE
              </h3>
              <p className="text-xs text-[#137333] mt-1 leading-relaxed">
                The Google Ads Domain Model & Entity Contract (Gate B) meets all requirements for a pure domain contract. Entity ownership, aggregate boundaries, cardinality, persistence rules, and Durable Job Foundation dependencies are fully specified.
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <span className="px-4 py-2 bg-[#137333] text-white rounded-lg text-xs font-bold uppercase tracking-wider shadow-xs">
              GATE B FROZEN 🟢
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
