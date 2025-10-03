import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const bonusDetails = {
  lottomatica: {
    name: "Lottomatica",
    bonus: "1000€",
    description: "Bonus di Benvenuto",
    features: [
      "Fino a 1000€ di bonus",
      "100% sul primo deposito",
      "Slot e giochi da tavolo",
      "Requisiti di scommessa 35x",
      "Bonus attivo per 30 giorni"
    ],
    color: "from-[hsl(45,100%,55%)] to-[hsl(35,100%,45%)]"
  },
  goldbet: {
    name: "Goldbet",
    bonus: "2000€",
    description: "Bonus di Benvenuto",
    features: [
      "Fino a 2000€ di bonus",
      "100% sul primo deposito",
      "Ampia selezione di slot",
      "Requisiti di scommessa 30x",
      "Bonus attivo per 60 giorni"
    ],
    color: "from-[hsl(0,85%,60%)] to-[hsl(15,85%,50%)]"
  }
};

export const CasinoComparison = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto px-4">
      {Object.entries(bonusDetails).map(([key, casino]) => (
        <Card 
          key={key}
          className="relative overflow-hidden border-2 border-border/50 bg-gradient-to-b from-card/95 to-background/95 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${casino.color}`} />
          
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {casino.name}
            </CardTitle>
            <p className="text-muted-foreground mt-2">{casino.description}</p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="text-center py-6 rounded-xl bg-gradient-to-br from-muted/50 to-background/50 border border-border/30">
              <div className={`text-6xl font-black bg-gradient-to-r ${casino.color} bg-clip-text text-transparent`}>
                {casino.bonus}
              </div>
              <p className="text-sm text-muted-foreground mt-2">Bonus Massimo</p>
            </div>
            
            <ul className="space-y-3">
              {casino.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              variant="casino" 
              size="lg" 
              className="w-full text-lg"
            >
              Richiedi Bonus
            </Button>
            
            <p className="text-xs text-center text-muted-foreground">
              18+ | Gioca responsabilmente | Si applicano T&C
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
