import { UserDetail } from "@/components/user-detail"

export default function Dashboard() {
  return (
    <main>
      <section className="container flex-col gap-4 pb-12 pt-4 text-center lg:items-center lg:gap-8 lg:py-20 lg:px-40">
          <div className="grid gap-4 grid-cols-12">
            <div className="col-span-6">
              <UserDetail />
            </div>
            <div className="col-span-6">
            </div>
          </div>
      </section>
    </main>
  )
}