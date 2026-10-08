import { Outlet, Navigate, Route, Routes } from 'react-router-dom';
import { AppShell } from './components/layout/AppShell';
import { LandingPage } from './pages/LandingPage';
import { AuthPage } from './pages/AuthPage';
import { DashboardPage } from './pages/DashboardPage';
import { DatasetsPage } from './pages/DatasetsPage';
import { DatasetDetailPage } from './pages/DatasetDetailPage';
import { AnalysisPage } from './pages/AnalysisPage';
import { VisualizationPage } from './pages/VisualizationPage';
import { ExperimentsPage } from './pages/ExperimentsPage';
import { ExperimentResultsPage } from './pages/ExperimentResultsPage';
import { ModelsPage } from './pages/ModelsPage';
import { PredictionPage } from './pages/PredictionPage';
import { ReportsPage } from './pages/ReportsPage';
import { APIPage } from './pages/APIPage';
import { BillingPage } from './pages/BillingPage';
import { SettingsPage } from './pages/SettingsPage';

const ProtectedLayout = () => (
  <AppShell>
    <Outlet />
  </AppShell>
);

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route element={<ProtectedLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/datasets" element={<DatasetsPage />} />
        <Route path="/datasets/:id" element={<DatasetDetailPage />} />
        <Route path="/analysis" element={<AnalysisPage />} />
        <Route path="/visualizations" element={<VisualizationPage />} />
        <Route path="/experiments" element={<ExperimentsPage />} />
        <Route path="/experiments/:id" element={<ExperimentResultsPage />} />
        <Route path="/models" element={<ModelsPage />} />
        <Route path="/predictions" element={<PredictionPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/api" element={<APIPage />} />
        <Route path="/billing" element={<BillingPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
