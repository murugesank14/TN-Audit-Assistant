
import React from 'react';

export type Tab = 'dashboard' | 'new_audit' | 'checklist' | 'records' | 'reports';

export interface Institution {
  id: string;
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface Scheme {
  id: string;
  name: string;
  category: string;
}

export interface AuditRecord {
  id: number;
  date: string;
  institution: string;
  scheme: string;
  financialYear: string;
  amount: string;
  status: 'pending' | 'in_progress' | 'completed';
  notes: string;
}

export interface AuditChecklist {
  general: string[];
  scheme_specific: string[];
  staff: string[];
}
