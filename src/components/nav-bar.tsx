"use client"
import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";

export default function NavBar() {
    return (
        <nav className="w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto flex h-16 items-center">
        
        <Link 
        href="/"
        className="font-bold text-xl tracking-tight text-gray-900"
        >
        Wikimaster
        </Link>
        <NavigationMenu>
        <NavigationMenuList>
        <NavigationMenuItem>
        <Button asChild variant="ghost">
        
        </Button>
        </NavigationMenuItem>
        </NavigationMenuList>
        </NavigationMenu>
        </div>
        </nav>
    );
}