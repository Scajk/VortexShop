import { ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./DarkToggle";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full px-4 py-3 border-b flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0 bg-background text-foreground">
      <div className="flex items-center justify-between w-full sm:w-auto">
        <a href="/" className="flex items-center gap-2">
          <img
            src="/Logo-cropped.png"
            alt="Vórtex Shop"
            className="h-10 w-auto object-contain"
          />
        </a>
        <span className="text-primary">VortexShop</span>

        <button
          className="sm:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
        >
          <Menu className="h-6 w-6 text-primary" />
        </button>
      </div>

      <nav
        className={`flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 transition-all duration-300 ${
          isOpen ? "flex" : "hidden sm:flex"
        }`}
      >
        <Button variant="link" className="text-foreground text-primary">Início</Button>
        <Button variant="link" className="text-foreground text-primary">Produtos</Button>
        <Button variant="link" className="text-foreground text-primary">Contato</Button>
        <ThemeToggle />
        <Button variant="ghost" size="icon" aria-label="Carrinho">
          <ShoppingCart className="h-5 w-5 text-primary"/>
        </Button>
      </nav>
    </header>
  );
}
