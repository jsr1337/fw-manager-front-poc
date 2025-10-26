import { useState } from 'react';
import { deviceNames, firewallRules } from '@/lib/mockData';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function DeviceSearch() {
  const [open, setOpen] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState('');

  return (
    <div className="p-8 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Search Device
        </h1>
        <p className="text-muted-foreground text-lg">
          Select a device to view its firewall rule base
        </p>
      </div>

      <div className="mb-6 glass-effect p-6 rounded-xl shadow-lg">
        <label className="block text-sm font-semibold mb-3 text-foreground">Device Name</label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[400px] justify-between"
            >
              {selectedDevice || "Select device..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[400px] p-0 bg-popover">
            <Command>
              <CommandInput placeholder="Search device..." />
              <CommandList>
                <CommandEmpty>No device found.</CommandEmpty>
                <CommandGroup>
                  {deviceNames.map((device) => (
                    <CommandItem
                      key={device}
                      value={device}
                      onSelect={(currentValue) => {
                        setSelectedDevice(currentValue === selectedDevice ? "" : currentValue);
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          selectedDevice === device ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {device}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      {selectedDevice && (
        <div className="rounded-xl border bg-card shadow-xl hover-lift overflow-hidden animate-fade-in">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 px-6 py-4 border-b">
            <h2 className="text-lg font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Firewall Rule Base - {selectedDevice}
            </h2>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Source</TableHead>
                <TableHead>Destination</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {firewallRules.map((rule) => (
                <TableRow key={rule.id}>
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
                  <TableCell className="max-w-md">{rule.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
