export type DatasetStatus = 'Healthy' | 'Processing' | 'Needs Review';
export type ExperimentStatus = 'Completed' | 'Running' | 'Queued';
export type ModelStatus = 'Active' | 'Deploying' | 'Draft';

export interface Dataset {
  id: string;
  name: string;
  fileType: string;
  rows: number;
  columns: number;
  size: string;
  createdAt: string;
  status: DatasetStatus;
  owner: string;
}

export interface DatasetDetail extends Dataset {
  missingValues: number;
  duplicates: number;
  memoryUsage: string;
  numericalFeatures: number;
  categoricalFeatures: number;
  dataPreview: Array<Record<string, string | number>>;
  statistics: Array<{ feature: string; mean: number; median: number; min: number; max: number; stdDev: number }>;
}

export interface Experiment {
  id: string;
  name: string;
  algorithm: string;
  dataset: string;
  accuracy: number;
  status: ExperimentStatus;
  date: string;
  type: 'Classification' | 'Regression' | 'Clustering';
}

export interface Model {
  id: string;
  name: string;
  algorithm: string;
  dataset: string;
  version: string;
  accuracy: number;
  status: ModelStatus;
  createdAt: string;
}

export interface PredictionResult {
  id: string;
  label: string;
  probability: number;
  model: string;
  timestamp: string;
}

export interface DashboardStats {
  datasets: number;
  experiments: number;
  models: number;
  predictions: number;
}

export interface ApiKey {
  id: string;
  name: string;
  createdAt: string;
  lastUsed: string;
  scopes: string[];
  status: 'Active' | 'Revoked';
}

export interface BillingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface ReportItem {
  id: string;
  title: string;
  type: 'Analysis' | 'ML' | 'Model' | 'Prediction';
  createdAt: string;
  size: string;
}
