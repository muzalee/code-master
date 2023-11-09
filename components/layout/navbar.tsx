"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { siteConfig } from "@/config/site"
import { settings } from "@/config/settings"
import { LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import React from "react"
 
interface NavbarProps {
  children: React.ReactNode;
}

export default function Navbar({ children }: NavbarProps) {
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
 
  useEffect(() => {
    let storage = localStorage.getItem('user');
    if (storage) {
      setUser(JSON.parse(storage));   
    }
    setLoading(false);
  }, []);

  return (
    <>
      <header className="select-none">
        <nav className="mx-auto justify-between px-4 max-w-7xl">
          <div className="flex items-center justify-between py-3">
            <Link href="/">
              <h1 className="text-2xl font-bold duration-200 lg:hover:scale-[1.10]">
                {siteConfig.name}
              </h1>
            </Link>
            <div className="flex gap-1">
              {user != null && (
                <Button variant="outline" size="icon">
                  <LogOut className="h-4 w-4" />
                </Button>
              )}
              {settings.themeToggleEnabled && (
                <ModeToggle />
              )}
            </div>
          </div>
        </nav>
      </header>
      {!isLoading && (
        <>{children}</>
      )}
    </>
  )
}
