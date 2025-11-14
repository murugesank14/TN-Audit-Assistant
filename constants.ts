
import { Institution, Scheme, AuditChecklist } from './types';
import { Building2, Library, BookOpen, Users, Sprout } from './components/IconComponents';

export const INSTITUTIONS: Institution[] = [
  { id: 'village_panchayat', name: 'Village Panchayat', icon: Building2 },
  { id: 'panchayat_union', name: 'Panchayat Union', icon: Building2 },
  { id: 'district_panchayat', name: 'District Panchayat', icon: Building2 },
  { id: 'town_panchayat', name: 'Town Panchayat', icon: Building2 },
  { id: 'municipality', name: 'Municipality', icon: Building2 },
  { id: 'corporation', name: 'Corporation', icon: Building2 },
  { id: 'library_authority', name: 'Local Library Authority', icon: Library },
  { id: 'aided_institution', name: 'Government Aided Institution', icon: BookOpen },
  { id: 'university_teaching', name: 'University - Teaching Staff', icon: Users },
  { id: 'university_nonteaching', name: 'University - Non-Teaching Staff', icon: Users },
  { id: 'nss', name: 'NSS (National Service Scheme)', icon: Users },
  { id: 'agri_market', name: 'Agricultural Market Committee', icon: Sprout },
  { id: 'agri_depot', name: 'Agricultural Depot', icon: Sprout },
  { id: 'agri_college', name: 'Agricultural College', icon: Sprout },
  { id: 'agri_university', name: 'Agricultural University', icon: Sprout }
];

export const SCHEMES: Scheme[] = [
  { id: 'mgnrega', name: 'MGNREGA', category: 'Employment' },
  { id: 'pmay', name: 'Pradhan Mantri Awas Yojana', category: 'Housing' },
  { id: 'ujjwala', name: 'Ujjwala Yojana', category: 'LPG' },
  { id: 'swachh_bharat', name: 'Swachh Bharat Mission', category: 'Sanitation' },
  { id: 'amrut', name: 'AMRUT', category: 'Urban Infrastructure' },
  { id: 'smart_city', name: 'Smart Cities Mission', category: 'Urban Development' },
  { id: 'mid_day_meal', name: 'Mid-Day Meal Scheme', category: 'Education' },
  { id: 'sarva_shiksha', name: 'Sarva Shiksha Abhiyan', category: 'Education' },
  { id: 'national_health', name: 'National Health Mission', category: 'Health' },
  { id: 'ayushman', name: 'Ayushman Bharat', category: 'Health' },
  { id: 'kisan_samman', name: 'PM-KISAN', category: 'Agriculture' },
  { id: 'soil_health', name: 'Soil Health Card Scheme', category: 'Agriculture' },
  { id: 'library_dev', name: 'Library Development Scheme', category: 'Education' },
  { id: 'tn_pension', name: 'TN Old Age Pension', category: 'Social Welfare' },
  { id: 'amma_unavagam', name: 'Amma Unavagam', category: 'Food Security' }
];

export const AUDIT_CHECKLIST: AuditChecklist = {
  general: [
    'Annual accounts prepared as per format',
    'Opening balance verification',
    'Receipt and payment account prepared',
    'Income and expenditure account prepared',
    'Balance sheet prepared',
    'All vouchers properly numbered and filed',
    'Bank reconciliation statement prepared',
    'Fixed assets register maintained',
    'Cash book properly maintained',
    'Closing balance verified'
  ],
  scheme_specific: [
    'Scheme guidelines compliance check',
    'Beneficiary list verification',
    'Fund utilization certificate obtained',
    'Progress reports submitted on time',
    'Physical verification of assets created',
    'Photo documentation available',
    'Geotagging completed (if applicable)',
    'Quality control reports',
    'Labour muster rolls (for MGNREGA)',
    'Convergence with other schemes documented'
  ],
  staff: [
    'Salary register maintained',
    'PF deductions and deposits verified',
    'Leave records maintained',
    'Attendance register checked',
    'Increment orders on file',
    'GPF accounts reconciled',
    'Service books updated',
    'Pension contribution verified'
  ]
};
