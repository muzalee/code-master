import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { heroHeader } from "@/config/contents"

export default function Dashboard() {
  return (
    <main>
       <section className="container flex flex-col gap-4 pb-12 pt-4 text-center lg:items-center lg:gap-8 lg:py-20">
        <div className="flex flex-1 flex-col items-center gap-4 text-center lg:gap-8">
          <div className="space-y-4">
            <h1 className="text-2xl font-bold lg:text-3xl">
              {heroHeader.header}
            </h1>
            <h2 className="text-lg font-light text-muted-foreground lg:text-xl">
              {heroHeader.subheader}
            </h2>
          </div>
          <Link
            href="/assessment"
            className={`w-[10rem] ${cn(buttonVariants({ size: "lg" }))}`}
          >
            New Assessment
          </Link>
        </div>
      </section>
    </main>
  )
}
