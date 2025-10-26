import { useState } from 'react';
import { MessageCircle, X, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const promptExamples = [
  { text: 'Show me device sync status', route: '/' },
  { text: 'Search for a firewall device', route: '/search' },
  { text: 'Check overlapping rules', route: '/overlapping' },
  { text: 'View rules usage statistics', route: '/usage' },
  { text: 'Browse firewall vendors', route: '/vendors' },
];

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handlePromptClick = (route: string) => {
    navigate(route);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <Card className="mb-4 w-80 p-4 shadow-lg">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="font-semibold text-foreground">AI Assistant</h3>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <p className="mb-4 text-sm text-muted-foreground">
            How can I help you today?
          </p>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                Prompt examples
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-72 bg-popover" align="start">
              {promptExamples.map((example, index) => (
                <DropdownMenuItem
                  key={index}
                  onClick={() => handlePromptClick(example.route)}
                  className="cursor-pointer"
                >
                  {example.text}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </Card>
      )}

      <Button
        size="icon"
        className="h-14 w-14 rounded-full shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </Button>
    </div>
  );
}
