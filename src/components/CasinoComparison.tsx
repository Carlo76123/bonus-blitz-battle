import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const bonusDetails = {
  lottomatica: {
    name: "Lottomatica",
    bonus: "12000€",
    description: "Play Bonus con CIE",
    features: [
      "Fino a 12000€ di Play bonus con CIE",
      "100% sul primo deposito",
      "Slot fornitore Inspired",
      "Requisiti di gioco 25x",
      "Bonus attivo per 3 giorni"
    ],
    color: "from-[hsl(45,100%,55%)] to-[hsl(35,100%,45%)]",
    link: "https://media.lottomaticapartners.it/redirect.aspx?pid=14021&bid=1509"
  },
  startcasino: {
    name: "Startcasino",
    bonus: "2050€",
    description: "Bonus con CIE",
    features: [
      "Fino a 2050€ di bonus con CIE",
      "50% di Bonus Cashback",
      "Bonus Cashback su Crazy Time",
      "150 Free Spin su Even Bigger Bonus",
      "Nessun altro requisito di gioco"
    ],
    color: "from-[hsl(280,85%,60%)] to-[hsl(260,85%,50%)]",
    link: "https://affly.eu/5hxd4"
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
              asChild
            >
              <a href={casino.link} target="_blank" rel="noopener noreferrer">
                Richiedi Bonus
              </a>
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
