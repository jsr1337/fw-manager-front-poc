export interface DeviceSync {
  id: string;
  name: string;
  ipAddress: string;
  status: 'success' | 'error' | 'warning';
  lastSync: string;
  errorMessage?: string;
  errorSeverity?: 'low' | 'medium' | 'high' | 'critical';
  errorDate?: string;
}

export interface FirewallRule {
  id: string;
  source: string;
  destination: string;
  service: string;
  action: 'allow' | 'deny';
  description: string;
  hits?: number;
}

export interface OverlappingRule {
  id: string;
  rule1: string;
  rule2: string;
  source: string;
  destination: string;
  service: string;
  conflictType: string;
}

export interface Vendor {
  id: string;
  name: string;
  logo: string;
}

export const deviceSyncData: DeviceSync[] = [
  {
    id: '1',
    name: 'FW-Primary-01',
    ipAddress: '192.168.1.10',
    status: 'success',
    lastSync: '2025-01-15 10:30:00',
  },
  {
    id: '2',
    name: 'FW-Backup-01',
    ipAddress: '192.168.1.11',
    status: 'success',
    lastSync: '2025-01-15 10:28:00',
  },
  {
    id: '3',
    name: 'FW-DMZ-01',
    ipAddress: '10.0.10.5',
    status: 'error',
    lastSync: '2025-01-15 09:15:00',
    errorMessage: 'Connection timeout - unable to reach device',
    errorSeverity: 'high',
    errorDate: '2025-01-15 09:15:23',
  },
  {
    id: '4',
    name: 'FW-Branch-01',
    ipAddress: '172.16.20.1',
    status: 'warning',
    lastSync: '2025-01-15 10:25:00',
    errorMessage: 'Partial sync - some rules could not be retrieved',
    errorSeverity: 'medium',
    errorDate: '2025-01-15 10:25:45',
  },
  {
    id: '5',
    name: 'FW-DataCenter-01',
    ipAddress: '10.10.1.1',
    status: 'success',
    lastSync: '2025-01-15 10:32:00',
  },
  {
    id: '6',
    name: 'FW-Edge-01',
    ipAddress: '203.0.113.10',
    status: 'error',
    lastSync: '2025-01-15 08:45:00',
    errorMessage: 'Authentication failed - invalid credentials',
    errorSeverity: 'critical',
    errorDate: '2025-01-15 08:45:12',
  },
];

export const firewallRules: FirewallRule[] = [
  {
    id: 'rule-1',
    source: '192.168.1.0/24',
    destination: '10.0.0.0/8',
    service: 'HTTPS (443)',
    action: 'allow',
    description: 'Allow internal network to access private cloud services',
  },
  {
    id: 'rule-2',
    source: '172.16.0.0/16',
    destination: '192.168.100.5',
    service: 'SSH (22)',
    action: 'allow',
    description: 'Admin access to management server',
  },
  {
    id: 'rule-3',
    source: 'any',
    destination: '192.168.1.100',
    service: 'HTTP (80)',
    action: 'deny',
    description: 'Block external HTTP access to internal web server',
  },
  {
    id: 'rule-4',
    source: '10.20.0.0/16',
    destination: '192.168.50.0/24',
    service: 'RDP (3389)',
    action: 'allow',
    description: 'Remote desktop access for support team',
  },
  {
    id: 'rule-5',
    source: '192.168.2.0/24',
    destination: 'any',
    service: 'DNS (53)',
    action: 'allow',
    description: 'DNS queries from corporate network',
  },
];

export const rulesWithHits: FirewallRule[] = firewallRules.map((rule, index) => ({
  ...rule,
  hits: [15234, 8921, 45, 3201, 92345][index],
}));

export const overlappingRules: OverlappingRule[] = [
  {
    id: 'overlap-1',
    rule1: 'Rule #10',
    rule2: 'Rule #45',
    source: '192.168.1.0/24',
    destination: '10.0.0.0/8',
    service: 'Any',
    conflictType: 'Shadowed rule - Rule #10 never matched',
  },
  {
    id: 'overlap-2',
    rule1: 'Rule #23',
    rule2: 'Rule #67',
    source: 'any',
    destination: '172.16.0.0/12',
    service: 'HTTP/HTTPS',
    conflictType: 'Redundant - Both rules have same effect',
  },
  {
    id: 'overlap-3',
    rule1: 'Rule #5',
    rule2: 'Rule #89',
    source: '10.10.0.0/16',
    destination: '192.168.0.0/16',
    service: 'SSH',
    conflictType: 'Conflicting actions - Allow vs Deny',
  },
];

export const vendors: Vendor[] = [
  {
    id: 'juniper',
    name: 'Juniper Networks',
    logo: '🌲',
  },
  {
    id: 'cisco',
    name: 'Cisco',
    logo: '🔷',
  },
  {
    id: 'checkpoint',
    name: 'Check Point',
    logo: '✓',
  },
  {
    id: 'fortigate',
    name: 'FortiGate',
    logo: '🔐',
  },
];

export const deviceNames = deviceSyncData.map(d => d.name);
