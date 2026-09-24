// src/App.tsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { RihaeeProvider } from './context/RihaeeContext';
import Sidebar from './components/Sidebar';
import TopNavbar from './components/TopNavbar';
import DocumentModal from './components/DocumentModal';
import ToastContainer from './components/ToastContainer';

// Page Imports
import Dashboard from './pages/Dashboard';
import PriorityQueue from './pages/PriorityQueue';
import Undertrials from './pages/Undertrials';
import PrisonerDetail from './pages/PrisonerDetail';
import Monitor from './pages/Monitor';
import EligibilityCalculator from './pages/EligibilityCalculator';
import CaseIntelligence from './pages/CaseIntelligence';
import ReviewWorkflow from './pages/ReviewWorkflow';
import Documents from './pages/Documents';
import Alerts from './pages/Alerts';
import Analytics from './pages/Analytics';
import AuditTrail from './pages/AuditTrail';
import Settings from './pages/Settings';
import AccessControl from './pages/AccessControl';
import ReviewQueue from './pages/ReviewQueue';

export default function App() {
  return (
    <RihaeeProvider>
      <div className="flex min-h-screen bg-gray-50 text-gray-900 font-sans antialiased">
        {/* Left Fixed Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0">
          <TopNavbar />

          <main className="flex-1 p-5 sm:p-6 md:p-8 max-w-7xl w-full mx-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/priority-queue" element={<PriorityQueue />} />
              <Route path="/review-queue" element={<ReviewQueue />} />
              <Route path="/undertrials" element={<Undertrials />} />
              <Route path="/undertrials/:id" element={<PrisonerDetail />} />
              <Route path="/monitor" element={<Monitor />} />
              <Route path="/calculator" element={<EligibilityCalculator />} />
              <Route path="/case-intelligence" element={<CaseIntelligence />} />
              <Route path="/case-intelligence/:id" element={<CaseIntelligence />} />
              <Route path="/review-workflow" element={<ReviewWorkflow />} />
              <Route path="/review-workflow/:id" element={<ReviewWorkflow />} />
              <Route path="/documents" element={<Documents />} />
              <Route path="/alerts" element={<Alerts />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/audit-trail" element={<AuditTrail />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/access-control" element={<AccessControl />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          {/* Legal Compliance Footer */}
          <footer className="bg-white border-t border-gray-200 py-3.5 px-6 text-center text-[11px] text-gray-500">
            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
              <span>
                <strong>Rihaee v2.4 (Enterprise)</strong> &bull; BNSS Section 479 Decision-Support System
              </span>
              <span className="text-gray-400">
                Administrative screening prototype. Does not grant bail or replace judicial discretion.
              </span>
            </div>
          </footer>
        </div>

        {/* Global Modals & Notifications */}
        <DocumentModal />
        <ToastContainer />
      </div>
    </RihaeeProvider>
  );
}
