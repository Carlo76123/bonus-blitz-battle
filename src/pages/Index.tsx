import { CasinoComparison } from "@/components/CasinoComparison";
import casinoBackground from "@/assets/casino-slots-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${casinoBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto py-12 md:py-20">
        {/* Hero Section */}
        <header className="text-center mb-16 space-y-6">
          <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
            Confronto Bonus Casino
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto">
            Scopri i migliori bonus di benvenuto dei casino online
          </p>
          <div className="flex items-center justify-center gap-4 text-primary font-semibold">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary" />
            <span>Lottomatica vs Starcasino</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary" />
          </div>
        </header>
        
        {/* Comparison Cards */}
        <main>
          <CasinoComparison />
        </main>
        
        {/* Footer */}
        <footer className="mt-20 text-center text-sm text-muted-foreground space-y-2">
          <p className="font-semibold text-destructive">
            Il gioco è vietato ai minori di 18 anni e può causare dipendenza patologica
          </p>
          <p>Gioca responsabilmente | Consulta le probabilità di vincita su www.adm.gov.it</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
