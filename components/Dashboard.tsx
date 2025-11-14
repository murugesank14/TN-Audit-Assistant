
import React from 'react';
import { AuditRecord } from '../types';
import { INSTITUTIONS, SCHEMES } from '../constants';
import { FileText, Check, AlertCircle, Building2 } from './IconComponents';

interface DashboardProps {
  auditRecords: AuditRecord[];
}

const Dashboard: React.FC<DashboardProps> = ({ auditRecords }) => {
  const completedCount = auditRecords.filter(r => r.status === 'completed').length;
  const pendingCount = auditRecords.filter(r => r.status === 'pending').length;

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Audit Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg p-4 shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Total Audits</p>
                <p className="text-3xl font-bold">{auditRecords.length}</p>
              </div>
              <FileText className="w-12 h-12 opacity-80" />
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg p-4 shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Completed</p>
                <p className="text-3xl font-bold">{completedCount}</p>
              </div>
              <Check className="w-12 h-12 opacity-80" />
            </div>
          </div>
          <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white rounded-lg p-4 shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Pending</p>
                <p className="text-3xl font-bold">{pendingCount}</p>
              </div>
              <AlertCircle className="w-12 h-12 opacity-80" />
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg p-4 shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Institutions</p>
                <p className="text-3xl font-bold">{INSTITUTIONS.length}</p>
              </div>
              <Building2 className="w-12 h-12 opacity-80" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Supported Institutions</h3>
          <div className="space-y-2 max-h-96 overflow-y-auto pr-2">
            {INSTITUTIONS.map(inst => (
              <div key={inst.id} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <inst.icon className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                <span className="text-sm">{inst.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Available Schemes</h3>
          <div className="space-y-2 max-h-96 overflow-y-auto pr-2">
            {SCHEMES.map(scheme => (
              <div key={scheme.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <span className="text-sm font-medium">{scheme.name}</span>
                <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">{scheme.category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
