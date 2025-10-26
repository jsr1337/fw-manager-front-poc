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
    <div className="p-8 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Overlapping Rules
        </h1>
        <p className="text-muted-foreground text-lg">
          Review conflicting firewall rules that may cause issues
        </p>
      </div>

      <Alert className="mb-6 border-warning/50 bg-gradient-to-r from-warning/10 to-warning/5 shadow-lg animate-slide-in">
        <AlertTriangle className="h-5 w-5 text-warning animate-pulse" />
        <AlertDescription className="text-warning font-medium">
          {overlappingRules.length} overlapping rules detected. Review and resolve conflicts to ensure proper firewall behavior.
        </AlertDescription>
      </Alert>

      <div className="rounded-xl border bg-card shadow-xl hover-lift overflow-hidden">
        <div className="bg-gradient-to-r from-destructive/5 to-warning/5 px-6 py-4 border-b">
          <h2 className="text-lg font-semibold text-foreground">Rule Conflicts</h2>
        </div>
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
