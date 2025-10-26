import { overlappingRules } from '@/lib/mockData';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';

export default function OverlappingRules() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-foreground mb-2">Overlapping Rules</h1>
        <p className="text-muted-foreground">
          Review conflicting firewall rules that may cause issues
        </p>
      </div>

      <Alert className="mb-6 border-warning/50 bg-warning/10">
        <AlertTriangle className="h-4 w-4 text-warning" />
        <AlertDescription className="text-warning">
          {overlappingRules.length} overlapping rules detected. Review and resolve conflicts to ensure proper firewall behavior.
        </AlertDescription>
      </Alert>

      <div className="rounded-lg border bg-card shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Rule 1</TableHead>
              <TableHead>Rule 2</TableHead>
              <TableHead>Source</TableHead>
              <TableHead>Destination</TableHead>
              <TableHead>Service</TableHead>
              <TableHead>Conflict Type</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {overlappingRules.map((overlap) => (
              <TableRow key={overlap.id} className="hover:bg-muted/50">
                <TableCell className="font-medium">{overlap.rule1}</TableCell>
                <TableCell className="font-medium">{overlap.rule2}</TableCell>
                <TableCell className="font-mono text-sm">{overlap.source}</TableCell>
                <TableCell className="font-mono text-sm">{overlap.destination}</TableCell>
                <TableCell>{overlap.service}</TableCell>
                <TableCell className="max-w-xs">
                  <span className="text-sm text-destructive font-medium">
                    {overlap.conflictType}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
