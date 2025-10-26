import { DeviceSync } from '@/lib/mockData';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { AlertCircle, Clock } from 'lucide-react';

interface DeviceDetailDialogProps {
  device: DeviceSync | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const severityColors = {
  low: 'bg-blue-100 text-blue-700 border-blue-200',
  medium: 'bg-warning/10 text-warning border-warning/20',
  high: 'bg-destructive/10 text-destructive border-destructive/20',
  critical: 'bg-destructive text-destructive-foreground',
};

export function DeviceDetailDialog({ device, open, onOpenChange }: DeviceDetailDialogProps) {
  if (!device) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl">{device.name}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 pt-4">
          <div>
            <label className="text-sm font-medium text-muted-foreground">IP Address</label>
            <p className="text-base font-medium">{device.ipAddress}</p>
          </div>

          <div>
            <label className="text-sm font-medium text-muted-foreground">Last Sync</label>
            <div className="flex items-center gap-2 mt-1">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <p className="text-base">{device.lastSync}</p>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-muted-foreground">Status</label>
            <div className="mt-1">
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
                {device.status.toUpperCase()}
              </Badge>
            </div>
          </div>

          {device.errorMessage && (
            <>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Error Date</label>
                <p className="text-base">{device.errorDate}</p>
              </div>

              <div>
                <label className="text-sm font-medium text-muted-foreground">Severity</label>
                <div className="mt-1">
                  <Badge
                    variant="outline"
                    className={severityColors[device.errorSeverity || 'low']}
                  >
                    {device.errorSeverity?.toUpperCase()}
                  </Badge>
                </div>
              </div>

              <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-4">
                <div className="flex gap-3">
                  <AlertCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-destructive mb-1">Error Message</p>
                    <p className="text-sm text-foreground">{device.errorMessage}</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
