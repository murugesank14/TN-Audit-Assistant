
import React from 'react';
import { AUDIT_CHECKLIST } from '../constants';
import { Check, FileText, Users } from './IconComponents';

const ChecklistSection: React.FC<{ title: string; items: string[]; icon: React.ReactNode }> = ({ title, items, icon }) => (
  <div>
    <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
      {icon}
      {title}
    </h3>
    <div className="space-y-2">
      {items.map((item, idx) => (
        <label key={idx} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded cursor-pointer">
          <input type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
          <span className="text-sm text-gray-700">{item}</span>
        </label>
      ))}
    </div>
  </div>
);


const Checklist: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Audit Checklist</h2>
      <div className="space-y-6">
        <ChecklistSection
          title="General Audit Items"
          items={AUDIT_CHECKLIST.general}
          icon={<Check className="w-5 h-5 mr-2 text-green-600" />}
        />
        <ChecklistSection
          title="Scheme-Specific Verification"
          items={AUDIT_CHECKLIST.scheme_specific}
          icon={<FileText className="w-5 h-5 mr-2 text-blue-600" />}
        />
        <ChecklistSection
          title="Staff Establishment Audit"
          items={AUDIT_CHECKLIST.staff}
          icon={<Users className="w-5 h-5 mr-2 text-purple-600" />}
        />
      </div>
    </div>
  );
};

export default Checklist;
