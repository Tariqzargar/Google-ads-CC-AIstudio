# Insights OS — Google Ads Command Center V1 Platform Contract Specification

Production-grade architectural contract, GAQL query inventory, alert primitives, and technical specifications for the Google Ads Command Center (Insights OS V1).

## Overview

Insights OS Google Ads Command Center is a management-by-exception platform designed for digital marketing agencies managing Google Ads client accounts under single or nested Manager (MCC) hierarchies.

This specification documents the Google Ads API v25 integration patterns, resource mappings, deterministic alert evaluators, multi-tenant security boundaries, Redis distributed concurrency controls, and configurable attribution reconciliation algorithms.

---

## Architecture & Foundation Ownership

1. **Management by Exception**: Eliminates routine manual campaign checking by evaluating incoming metrics against deterministic alert primitives (pacing, conversion heartbeat, policy disapprovals, search waste).
2. **Read-Only V1 Scope**: Enforces read-only data ingestion and presentation in V1 to ensure zero operational mutation risks.
3. **Identity & OAuth Credentials**: OAuth Refresh Tokens authorize a user or service account identity. When querying managed customer accounts, `login-customer-id` specifies the authorized manager account in the hierarchy. Target client IDs are supplied via the `customer_id` request parameter or REST resource path (`customers/{customer_id}/googleAds:search`).
4. **Foundation Ownership Mapping**:
   - **Business Identity**: Relationships / Business Record
   - **OAuth / Provider Credentials**: Integration Foundation
   - **Jobs, Retries & Distributed Leases**: Durable Job Foundation
   - **Operator Task Queue**: Work Management
   - **Alert Delivery**: Notifications Foundation
   - **Operational Audit Log**: Audit Engine
   - **AI Provenance & Diagnostic Approvals**: AI / Approval Foundation
   - **Metrics & Reporting Data**: Reporting Engine
5. **Multi-Tenant Security & Isolation**:
   - PostgreSQL Row-Level Security (RLS) protects database records by `tenant_id`.
   - Redis cache keys and Celery task queues use isolated tenant namespace prefixes (`tenant:{tenant_id}:*`).
   - Redis distributed locks require unique ownership tokens (UUIDs), lease time renewals (watchdog timers), and atomic Lua script releases.
6. **Delta Sync & Attribution Reconciliation**:
   - GAQL `change_event` queries enforce a mandatory `LIMIT 10000` and use timestamp-based cursor continuation pagination.
   - Nightly ingestion re-fetches a configurable attribution lookback window (e.g., 14 days) to capture retroactive conversion restatements using each Google Ads account's native timezone.

---

## Technical Contract Structure

- **Product Architect Review**: Enterprise feasibility matrix, performance latency considerations, and Google Ads API v25 compatibility assertions.
- **Gate A Governance Review**: 10-gate evidence-based assessment with conditional findings covering business value, safety, cognitive load, auditability, and scalability.
- **Platform Foundation Contracts**: Technical specifications for Tenant Context, Credentials, Audit Trails, Redis Locks, Metric Freshness, and Attribution Restatement.
- **GAQL Query Inventory**: Verified queries targeting Google Ads API v25 covering account discovery, daily campaign metrics, search impression share, conversion action health, search term waste, change event delta syncs (`LIMIT 10000`), and recommendations.
- **Deterministic Alert Primitives**: Mathematical formulas, false-positive risks, and clearance thresholds for pacing, conversion anomalies, serving interruptions, search waste, and policy disapprovals.
- **Critical API Traps**: Solutions for currency micros conversion, zero-impression handling, attribution restatements, Performance Max query restrictions, and manager header context.

---

## Development & Verification Commands

```bash
# Install dependencies & generate lockfile
npm install

# Run Vite dev server on port 3000
npm run dev

# Run TypeScript typecheck / static contract linting
npm run lint

# Build production bundle
npm run build
```

---

## License & Compliance

Google Ads API v25 Compliant &bull; Insights OS Enterprise Specifications.
