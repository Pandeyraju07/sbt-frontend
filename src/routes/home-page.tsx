import { Link } from 'react-router-dom'
import { ArrowRightIcon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ROUTES } from '@/constants/routes'

const shells = [
  {
    title: 'Auth layout',
    description: 'Centered identity shell for login and registration routes.',
    href: ROUTES.login,
    label: 'Open /login',
  },
  {
    title: 'Seller layout',
    description: 'Operational shell with configurable sidebar for seller work.',
    href: ROUTES.seller.root,
    label: 'Open /seller',
  },
  {
    title: 'Admin layout',
    description: 'Control-plane shell reserved for platform administration.',
    href: ROUTES.admin.root,
    label: 'Open /admin',
  },
  {
    title: 'Buyer layout',
    description: 'Buyer-facing shell reserved for the marketplace experience.',
    href: ROUTES.buyer.root,
    label: 'Open /buyer',
  },
]

export function HomePage() {
  return (
    <div className="bg-background min-h-svh">
      <header className="border-border bg-card border-b">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2.5">
            <span className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-lg text-sm font-semibold">
              S
            </span>
            <span>
              <span className="block text-sm font-semibold tracking-tight">SBT</span>
              <span className="text-muted-foreground block text-[11px]">
                Sell Buy Trust
              </span>
            </span>
          </div>
          <Badge variant="secondary">Phase 1 · Foundation</Badge>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <p className="text-label text-muted-foreground">Frontend foundation</p>
        <h1 className="text-display text-foreground mt-2 max-w-3xl">
          A production-grade starting point for the SBT marketplace.
        </h1>
        <p className="text-body text-muted-foreground mt-4 max-w-2xl">
          Design tokens, application shells, routing, API client architecture, and quality
          tooling are in place. Seller, buyer, catalog, inventory, and admin business
          modules are intentionally not implemented yet.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <Link to={ROUTES.seller.root}>
              View seller shell
              <ArrowRightIcon data-icon="inline-end" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to={ROUTES.login}>View auth layout</Link>
          </Button>
        </div>

        <section className="mt-14 grid gap-4 md:grid-cols-2">
          {shells.map((shell) => (
            <Card key={shell.href} className="shadow-xs">
              <CardHeader>
                <CardTitle className="text-h4">{shell.title}</CardTitle>
                <CardDescription>{shell.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" size="sm">
                  <Link to={shell.href}>{shell.label}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </section>
      </main>
    </div>
  )
}
