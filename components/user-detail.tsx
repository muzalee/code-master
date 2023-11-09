'use client'

import { User } from "@/lib/models/user"
import { useEffect, useState } from "react"
import { getUser } from "@/lib/auth"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";

export function UserDetail() {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        loadUser();
    }, [])

    async function loadUser() {
        const u = await getUser();
        setUser(u);
        setLoading(false);
    }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome back!</CardTitle>
        <CardDescription>Nice to see you again</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="/avatar.png" />
            <AvatarFallback>AV</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium leading-none text-left">{ user?.name }</p>
            <p className="text-sm text-muted-foreground text-left">{ user?.email }</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}