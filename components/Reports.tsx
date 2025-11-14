
import React from 'react';
import { Download, FileText, Building2, AlertCircle } from './IconComponents';

const ReportCard: React.FC<{ title: string; description: string; icon: React.ReactNode; buttonText: string, buttonColor: string }> = ({ title, description, icon, buttonText, buttonColor }) => (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-indigo-500 hover:shadow-md cursor-pointer transition-all flex flex-col items-start">
        {icon}
        <h3 className="text-lg font-bold mb-2 mt-4">{title}</h3>
        <p className="text-sm text-gray-600 mb-4 flex-grow">{description}</p>
        <button className={`px-4 py-2 text-white rounded-lg text-sm ${buttonColor} hover:opacity-90 transition-opacity`}>
            {buttonText}
        </button>
    </div>
);

const Reports: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Generate Reports</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ReportCard 
            title="Annual Audit Report" 
            description="Comprehensive report for the financial year"
            icon={<Download className="w-12 h-12 text-indigo-600" />}
            buttonText="Generate Report"
            buttonColor="bg-indigo-600"
        />
        <ReportCard 
            title="Scheme-wise Summary" 
            description="Detailed breakdown by scheme"
            icon={<FileText className="w-12 h-12 text-green-600" />}
            buttonText="Generate Summary"
            buttonColor="bg-green-600"
        />
        <ReportCard 
            title="Institution-wise Report" 
            description="Audit status by institution type"
            icon={<Building2 className="w-12 h-12 text-blue-600" />}
            buttonText="Generate Report"
            buttonColor="bg-blue-600"
        />
        <ReportCard 
            title="Compliance Report" 
            description="Checklist compliance summary"
            icon={<AlertCircle className="w-12 h-12 text-orange-500" />}
            buttonText="Generate Report"
            buttonColor="bg-orange-500"
        />
      </div>
    </div>
  );
};

export default Reports;
