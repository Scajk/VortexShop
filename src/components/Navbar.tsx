import { ShoppingCart, Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./DarkToggle";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full px-4 py-3 border-b flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0 bg-background text-foreground">
      
      <div className="flex items-center justify-between w-full sm:w-auto sm:mr-6">
        <a href="/" className="flex items-center gap-2">
          <img
            src="vortexshop_logo_trimmed_transparent.png"
            alt="Vórtex Shop"
            className="h-10 w-auto object-contain"
          />
          <span className="text-primary font-bold">VortexShop</span>
        </a>
        <button
          className="sm:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
        >
          <Menu className="h-6 w-6 text-primary" />
        </button>
      </div>

      <div className="flex flex-1 justify-center">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Buscar produtos..."
            className="w-full rounded-md border border-border bg-input px-10 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-0"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        </div>
      </div>
      <nav
        className={`flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 transition-all duration-300 ${
          isOpen ? "flex" : "hidden sm:flex"
        }`}
      >
        <Button variant="link" className="text-foreground text-primary cursor-pointer">Início</Button>
        <Button variant="link" className="text-foreground text-primary cursor-pointer">Produtos</Button>
        <Button variant="link" className="text-foreground text-primary cursor-pointer">Contato</Button>
        <ThemeToggle />
        <Button variant="ghost" size="icon" aria-label="Carrinho" className="cursor-pointer">
          <ShoppingCart className="h-5 w-5"/>
        </Button>
      </nav>
    </header>
  );
}