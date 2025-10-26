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
        <Card className="mb-4 w-80 p-5 shadow-2xl border-2 border-primary/20 glass-effect animate-fade-in">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-bold text-foreground flex items-center gap-2">
              <span className="text-2xl">🤖</span>
              AI Assistant
            </h3>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 hover:bg-destructive/10 hover:text-destructive"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <p className="mb-5 text-sm text-muted-foreground">
            How can I help you today?
          </p>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="outline" 
                className="w-full justify-between hover:bg-primary/5 hover:border-primary/50 transition-all"
              >
                Prompt examples
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-72 bg-popover shadow-xl border-2" align="start">
              {promptExamples.map((example, index) => (
                <DropdownMenuItem
                  key={index}
                  onClick={() => handlePromptClick(example.route)}
                  className="cursor-pointer hover:bg-primary/10 py-3"
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
        className="h-16 w-16 rounded-full shadow-glow-lg gradient-primary hover:scale-110 transition-all duration-300 border-2 border-white/20"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageCircle className="h-6 w-6 text-white animate-float" />
        )}
      </Button>
    </div>
  );
}
