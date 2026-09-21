export type SectionId = 
  | 'freeze'
  | 'gate_d_addendum'
  | 'architect_review'
  | 'gate_a'
  | 'gate_b'
  | 'gate_c'
  | 'foundation'
  | 'feasibility'
  | 'resources'
  | 'gaql'
  | 'metrics'
  | 'history'
  | 'recommendations'
  | 'alerts'
  | 'oauth'
  | 'traps'
  | 'final';

export type CapabilityStatus = 
  | 'Direct'
  | 'Derived'
  | 'Partial'
  | 'External Evidence Required'
  | 'Unavailable';

export type ConfidenceLevel = 'High' | 'Medium' | 'Low';

export interface FeasibilityItem {
  screen: string;
  feature: string;
  status: CapabilityStatus;
  confidence: ConfidenceLevel;
  apiResource: string;
  details: string;
  caveat?: string;
}

export interface ResourceInventoryItem {
  resourceName: string;
  identifiers: string;
  requiredFields: string[];
  mccImplications: string;
  campaignTypeLimitations: string;
  changesHistorically: string | boolean;
  recommendedSyncFrequency: string;
  recommendedStorageGrain: string;
  purpose: string;
}

export interface GaqlQuery {
  id: string;
  title: string;
  fromResource: string;
  purpose: string;
  query: string;
  segments: string[];
  datePredicates: string;
  incompatibilities: string[];
  paginationNotes: string;
  campaignTypeRestrictions: string;
}

export interface AlertPrimitive {
  id: string;
  name: string;
  category: 'Pacing' | 'Conversion Anomaly' | 'Tracking Risk' | 'Serving Interruption' | 'Policy Risk' | 'Account Risk' | 'Deterioration' | 'Search Waste';
  inputData: string[];
  condition: string;
  observationWindow: string;
  falsePositiveRisks: string[];
  clearanceCondition: string;
  reliability: 'High (Production Grade)' | 'Medium (Needs Guardrails)' | 'Low (Unreliable directly)';
  sampleScenario: string;
}

export interface ApiTrap {
  id: string;
  title: string;
  category: string;
  symptom: string;
  rootCause: string;
  correctImplementation: string;
  impactLevel: 'CRITICAL (Silent Corruption)' | 'HIGH (Inaccurate Metrics)' | 'MEDIUM (Performance/Rate Limit)';
}

export interface FinalContractCategory {
  tier: 'MUST INGEST (V1 Core)' | 'NICE TO HAVE (V1 Optional)' | 'FUTURE ROADMAP — OUT OF V1';
  color: string;
  items: {
    name: string;
    description: string;
    justification: string;
    resource: string;
  }[];
}
