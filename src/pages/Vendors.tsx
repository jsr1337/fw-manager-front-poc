import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import juniperLogo from '@/assets/juniper-logo.png';
import ciscoLogo from '@/assets/cisco-logo.png';
import checkpointLogo from '@/assets/checkpoint-logo.png';
import fortigateLogo from '@/assets/fortigate-logo.png';

const vendors = [
  {
    id: 'juniper',
    name: 'Juniper Networks',
    logo: juniperLogo,
  },
  {
    id: 'cisco',
    name: 'Cisco',
    logo: ciscoLogo,
  },
  {
    id: 'checkpoint',
    name: 'Check Point',
    logo: checkpointLogo,
  },
  {
    id: 'fortigate',
    name: 'FortiGate',
    logo: fortigateLogo,
  },
];

export default function Vendors() {
  return (
    <div className="p-8 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Firewall Vendors
        </h1>
        <p className="text-muted-foreground text-lg">
          Supported firewall vendors and platforms
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {vendors.map((vendor, index) => (
          <Card 
            key={vendor.id} 
            style={{ animationDelay: `${index * 0.1}s` }}
            className="hover-lift border-2 hover:border-primary/50 transition-all duration-300 overflow-hidden group animate-fade-in"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardHeader className="text-center pb-4 relative z-10">
              <div className="flex items-center justify-center h-32 mb-4 group-hover:scale-110 transition-transform duration-300">
                <img 
                  src={vendor.logo} 
                  alt={`${vendor.name} logo`}
                  className="max-h-full max-w-full object-contain drop-shadow-lg"
                />
              </div>
              <CardTitle className="text-xl font-bold">{vendor.name}</CardTitle>
            </CardHeader>
            <CardContent className="text-center relative z-10">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                <p className="text-sm text-primary font-medium">
                  ✓ Supported platform
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
