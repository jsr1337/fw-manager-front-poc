import { rulesWithHits } from '@/lib/mockData';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { TrendingUp } from 'lucide-react';

export default function RulesUsage() {
  const getHitsColor = (hits: number) => {
    if (hits > 50000) return 'text-success';
    if (hits > 10000) return 'text-primary';
    if (hits > 1000) return 'text-warning';
    return 'text-muted-foreground';
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-foreground mb-2">Rules Usage</h1>
        <p className="text-muted-foreground">
          Monitor firewall rule usage and hit counts
        </p>
      </div>

      <div className="rounded-lg border bg-card shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Source</TableHead>
              <TableHead>Destination</TableHead>
              <TableHead>Service</TableHead>
              <TableHead>Action</TableHead>
              <TableHead>Hits</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rulesWithHits.map((rule) => (
              <TableRow key={rule.id} className="hover:bg-muted/50">
                <TableCell className="font-mono text-sm">{rule.source}</TableCell>
                <TableCell className="font-mono text-sm">{rule.destination}</TableCell>
                <TableCell className="font-medium">{rule.service}</TableCell>
                <TableCell>
                  <Badge
                    variant={rule.action === 'allow' ? 'default' : 'destructive'}
                    className={
                      rule.action === 'allow'
                        ? 'bg-success text-success-foreground'
                        : ''
                    }
                  >
                    {rule.action}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <TrendingUp className={`h-4 w-4 ${getHitsColor(rule.hits || 0)}`} />
                    <span className={`font-mono font-semibold ${getHitsColor(rule.hits || 0)}`}>
                      {rule.hits?.toLocaleString()}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="max-w-md">{rule.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
