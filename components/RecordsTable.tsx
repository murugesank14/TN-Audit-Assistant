
import React from 'react';
import { AuditRecord } from '../types';
import { INSTITUTIONS, SCHEMES } from '../constants';
import { FileText } from './IconComponents';

interface RecordsTableProps {
  auditRecords: AuditRecord[];
  updateAuditStatus: (id: number, status: 'pending' | 'in_progress' | 'completed') => void;
}

const getStatusColor = (status: 'pending' | 'in_progress' | 'completed') => {
  switch (status) {
    case 'completed': return 'bg-green-100 text-green-800';
    case 'in_progress': return 'bg-blue-100 text-blue-800';
    case 'pending': return 'bg-yellow-100 text-yellow-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const RecordsTable: React.FC<RecordsTableProps> = ({ auditRecords, updateAuditStatus }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Audit Records</h2>
      {auditRecords.length === 0 ? (
        <div className="text-center py-12">
          <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">No audit records yet. Create your first audit entry.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-max">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Institution</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Scheme</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">FY</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {auditRecords.map(record => (
                <tr key={record.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 text-sm text-gray-600 whitespace-nowrap">{record.date}</td>
                  <td className="px-4 py-3 text-sm text-gray-800 font-medium max-w-xs truncate">{INSTITUTIONS.find(i => i.id === record.institution)?.name}</td>
                  <td className="px-4 py-3 text-sm text-gray-800 font-medium max-w-xs truncate">{SCHEMES.find(s => s.id === record.scheme)?.name}</td>
                  <td className="px-4 py-3 text-sm text-gray-600 whitespace-nowrap">{record.financialYear}</td>
                  <td className="px-4 py-3 text-sm text-gray-600 whitespace-nowrap">₹{Number(record.amount).toLocaleString('en-IN')}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full capitalize ${getStatusColor(record.status)}`}>
                      {record.status.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <select
                      value={record.status}
                      onChange={(e) => updateAuditStatus(record.id, e.target.value as 'pending' | 'in_progress' | 'completed')}
                      className="text-xs border border-gray-300 rounded px-2 py-1 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option value="pending">Pending</option>
                      <option value="in_progress">In Progress</option>
                      <option value="completed">Completed</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default RecordsTable;
