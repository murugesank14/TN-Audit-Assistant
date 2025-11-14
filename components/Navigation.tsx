
import React from 'react';
import { Tab } from '../types';

interface NavigationProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (isOpen: boolean) => void;
}

const TABS: { id: Tab; label: string }[] = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'new_audit', label: 'New Audit' },
  { id: 'checklist', label: 'Checklist' },
  { id: 'records', label: 'Records' },
  { id: 'reports', label: 'Reports' },
];

const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab, mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <nav className={`bg-white shadow-md ${mobileMenuOpen ? 'block' : 'hidden'} md:block sticky top-[76px] md:top-[84px] z-10`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:space-x-1 py-2">
          {TABS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => {
                setActiveTab(id);
                setMobileMenuOpen(false);
              }}
              className={`px-4 py-3 text-sm font-medium capitalize transition-colors w-full text-left md:text-center ${
                activeTab === id
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              } rounded-lg mb-1 md:mb-0`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
