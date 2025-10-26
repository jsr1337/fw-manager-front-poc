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
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-foreground mb-2">Firewall Vendors</h1>
        <p className="text-muted-foreground">
          Supported firewall vendors and platforms
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {vendors.map((vendor) => (
          <Card key={vendor.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center pb-4">
              <div className="flex items-center justify-center h-32 mb-4">
                <img 
                  src={vendor.logo} 
                  alt={`${vendor.name} logo`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <CardTitle className="text-xl">{vendor.name}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground">
                Supported platform
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
