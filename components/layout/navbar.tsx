"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { siteConfig } from "@/config/site"
import { settings } from "@/config/settings"
import { LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import React from "react"
import { deleteUser, isAuth } from "@/lib/auth"
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [session, setSession] = useState(false);
  const router = useRouter();

  useEffect(() => {
    checkSession();
  }, []);

  async function checkSession() {
    const isLoggedIn = await isAuth();
    setSession(isLoggedIn);
  }

  const onLogout = async () => {
    deleteUser();
    router.replace('/');
  }

  return (
    <header className="select-none">
      <nav className="mx-auto justify-between px-4 max-w-7xl">
        <div className="flex items-center justify-between py-3">
          <Link href="/">
            <h1 className="text-2xl font-bold duration-200 lg:hover:scale-[1.10]">
              {siteConfig.name}
            </h1>
          </Link>
          <div className="flex gap-1">
            {session && (
              <Button variant="outline" size="icon" onClick={ onLogout }>
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
  )
}
