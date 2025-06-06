import { ShoppingCart, Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./DarkToggle";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <header className="w-full px-4 py-3 border-b flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0 bg-background text-foreground relative z-50">
      <div className="flex items-center justify-between w-full sm:w-auto sm:mr-6">
        <a href="#" className="flex items-center gap-2">
          <img
            src="vortexshop_logo_trimmed_transparent.png"
            alt="Vórtex Shop"
            className="h-10 w-auto object-contain"
          />
          <span className="text-primary font-bold">VortexShop</span>
        </a>
        <button
          className="sm:hidden p-2"
          onClick={() => setIsOpen(true)}
          aria-label="Abrir menu"
        >
          <Menu className="h-6 w-6 text-primary" />
        </button>
      </div>

      <div className="hidden sm:flex flex-1 justify-center">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Buscar produtos..."
            className="w-full rounded-md border border-border bg-input px-10 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-0"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        </div>
      </div>

      <nav className="hidden sm:flex flex-row items-center gap-4">
        <Button variant="link" className="text-foreground text-primary cursor-pointer">Início</Button>
        <Button variant="link" className="text-foreground text-primary cursor-pointer">Produtos</Button>
        <Button variant="link" className="text-foreground text-primary cursor-pointer">Contato</Button>
        <ThemeToggle />
        <Button variant="ghost" size="icon" aria-label="Carrinho" className="cursor-pointer">
          <ShoppingCart className="h-5 w-5"/>
        </Button>
      </nav>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        />
      )}

      <aside
  className={`fixed top-0 right-0 h-full w-72 bg-background text-foreground z-50 transform transition-transform duration-300 ease-in-out
    ${isOpen ? "translate-x-0" : "translate-x-full"}
  `}
>
  <div className="flex justify-between items-center p-4 border-b border-border">
    <h2 className="text-lg font-bold text-primary">Menu</h2>
    <button
      onClick={() => setIsOpen(false)}
      aria-label="Fechar menu"
      className="p-2"
    >
      <X className="h-6 w-6 text-primary" />
    </button>
  </div>

  <nav className="flex flex-col gap-4 p-4 overflow-y-auto h-[calc(100%-56px)]">
    <Button variant="link" className="text-foreground cursor-pointer text-left" onClick={() => setIsOpen(false)}>
      Início
    </Button>
    <Button variant="link" className="text-foreground cursor-pointer text-left" onClick={() => setIsOpen(false)}>
      Produtos
    </Button>
    <Button variant="link" className="text-foreground cursor-pointer text-left" onClick={() => setIsOpen(false)}>
      Contato
    </Button>

    <div className="flex justify-center mt-4">
      <ThemeToggle />
    </div>

    <Button
      variant="ghost"
      size="icon"
      aria-label="Carrinho"
      className="cursor-pointer mt-auto self-start"
    >
      <ShoppingCart className="h-5 w-5"/>
    </Button>
  </nav>
</aside>

    </header>
  );
}