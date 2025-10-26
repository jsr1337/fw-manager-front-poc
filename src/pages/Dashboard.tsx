import { useState } from 'react';
import { deviceSyncData, DeviceSync } from '@/lib/mockData';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { DeviceDetailDialog } from '@/components/DeviceDetailDialog';
import { CheckCircle2, XCircle, AlertTriangle } from 'lucide-react';

export default function Dashboard() {
  const [selectedDevice, setSelectedDevice] = useState<DeviceSync | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDeviceClick = (device: DeviceSync) => {
    setSelectedDevice(device);
    setDialogOpen(true);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle2 className="h-5 w-5 text-success" />;
      case 'error':
        return <XCircle className="h-5 w-5 text-destructive" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-warning" />;
      default:
        return null;
    }
  };

  return (
    <div className="p-8 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Dashboard
        </h1>
        <p className="text-muted-foreground text-lg">
          Monitor firewall device synchronization status
        </p>
      </div>

      <div className="rounded-xl border bg-card shadow-xl hover-lift overflow-hidden">
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 px-6 py-4 border-b">
          <h2 className="text-lg font-semibold text-foreground">Device Sync Status</h2>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Device Name</TableHead>
              <TableHead>IP Address</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Sync</TableHead>
              <TableHead>Error Message</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {deviceSyncData.map((device) => (
              <TableRow
                key={device.id}
                className="cursor-pointer hover:bg-muted/50"
                onClick={() => handleDeviceClick(device)}
              >
                <TableCell className="font-medium">{device.name}</TableCell>
                <TableCell className="font-mono text-sm">{device.ipAddress}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(device.status)}
                    <Badge
                      variant={device.status === 'success' ? 'default' : 'destructive'}
                      className={
                        device.status === 'success'
                          ? 'bg-success text-success-foreground'
                          : device.status === 'warning'
                          ? 'bg-warning text-warning-foreground'
                          : ''
                      }
                    >
                      {device.status}
                    </Badge>
                  </div>
                </TableCell>
                <TableCell>{device.lastSync}</TableCell>
                <TableCell className="max-w-xs">
                  {device.errorMessage ? (
                    <span className="text-sm text-destructive">{device.errorMessage}</span>
                  ) : (
                    <span className="text-sm text-muted-foreground">No errors</span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <DeviceDetailDialog
        device={selectedDevice}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </div>
  );
}
