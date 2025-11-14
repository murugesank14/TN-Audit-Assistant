
import React, { useState } from 'react';
import { Tab, AuditRecord } from './types';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import NewAuditForm from './components/NewAuditForm';
import Checklist from './components/Checklist';
import RecordsTable from './components/RecordsTable';
import Reports from './components/Reports';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [auditRecords, setAuditRecords] = useState<AuditRecord[]>([]);

  const addAuditRecord = (newAudit: Omit<AuditRecord, 'id' | 'date'>) => {
    setAuditRecords(prevRecords => [
      ...prevRecords,
      { ...newAudit, id: Date.now(), date: new Date().toLocaleDateString() }
    ]);
    setActiveTab('records'); // Switch to records tab after adding
  };

  const updateAuditStatus = (id: number, status: 'pending' | 'in_progress' | 'completed') => {
    setAuditRecords(prevRecords =>
      prevRecords.map(record =>
        record.id === id ? { ...record, status } : record
      )
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard auditRecords={auditRecords} />;
      case 'new_audit':
        return <NewAuditForm addAuditRecord={addAuditRecord} />;
      case 'checklist':
        return <Checklist />;
      case 'records':
        return <RecordsTable auditRecords={auditRecords} updateAuditStatus={updateAuditStatus} />;
      case 'reports':
        return <Reports />;
      default:
        return <Dashboard auditRecords={auditRecords} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <Navigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <main className="container mx-auto px-4 py-6 flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
