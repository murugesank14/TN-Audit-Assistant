
import React, { useState } from 'react';
import { AuditRecord } from '../types';
import { INSTITUTIONS, SCHEMES } from '../constants';
import { Plus } from './IconComponents';

interface NewAuditFormProps {
  addAuditRecord: (newAudit: Omit<AuditRecord, 'id' | 'date'>) => void;
}

const NewAuditForm: React.FC<NewAuditFormProps> = ({ addAuditRecord }) => {
  const [newAudit, setNewAudit] = useState<Omit<AuditRecord, 'id' | 'date'>>({
    institution: '',
    scheme: '',
    financialYear: '2024-25',
    amount: '',
    status: 'pending',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newAudit.institution && newAudit.scheme && newAudit.amount) {
      addAuditRecord(newAudit);
      setNewAudit({
        institution: '',
        scheme: '',
        financialYear: '2024-25',
        amount: '',
        status: 'pending',
        notes: ''
      });
    } else {
      alert("Please fill in Institution, Scheme, and Amount.");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Create New Audit Entry</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="institution">Institution Type</label>
            <select
              id="institution"
              value={newAudit.institution}
              onChange={(e) => setNewAudit({ ...newAudit, institution: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              required
            >
              <option value="">Select Institution</option>
              {INSTITUTIONS.map(inst => (
                <option key={inst.id} value={inst.id}>{inst.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="scheme">Scheme</label>
            <select
              id="scheme"
              value={newAudit.scheme}
              onChange={(e) => setNewAudit({ ...newAudit, scheme: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              required
            >
              <option value="">Select Scheme</option>
              {SCHEMES.map(scheme => (
                <option key={scheme.id} value={scheme.id}>{scheme.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="financialYear">Financial Year</label>
            <select
              id="financialYear"
              value={newAudit.financialYear}
              onChange={(e) => setNewAudit({ ...newAudit, financialYear: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            >
              <option value="2024-25">2024-25</option>
              <option value="2023-24">2023-24</option>
              <option value="2022-23">2022-23</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="amount">Amount (₹)</label>
            <input
              id="amount"
              type="number"
              value={newAudit.amount}
              onChange={(e) => setNewAudit({ ...newAudit, amount: e.target.value })}
              placeholder="Enter amount"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="notes">Notes</label>
          <textarea
            id="notes"
            value={newAudit.notes}
            onChange={(e) => setNewAudit({ ...newAudit, notes: e.target.value })}
            rows={4}
            placeholder="Add any additional notes or observations..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full md:w-auto px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center justify-center space-x-2 transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>Create Audit Entry</span>
        </button>
      </form>
    </div>
  );
};

export default NewAuditForm;
