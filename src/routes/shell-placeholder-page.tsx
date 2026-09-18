import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { EmptyState } from '@/components/feedback/empty-state'
import { PageContainer } from '@/components/layout/page-container'
import { PageHeader } from '@/components/layout/page-header'
import { AppBreadcrumb } from '@/components/layout/app-breadcrumb'
import { ROUTES } from '@/constants/routes'

type ShellPlaceholderPageProps = {
  eyebrow: string
  title: string
  description: string
  crumbs: Array<{ label: string; href?: string }>
}

export function ShellPlaceholderPage({
  eyebrow,
  title,
  description,
  crumbs,
}: ShellPlaceholderPageProps) {
  return (
    <PageContainer>
      <div className="mb-6">
        <AppBreadcrumb items={crumbs} />
      </div>
      <PageHeader eyebrow={eyebrow} title={title} description={description} />
      <EmptyState
        title="Business modules are not implemented yet"
        description="This shell exists so later phases can add feature routes, navigation, and permissions without rebuilding the application layout."
        action={
          <Button asChild variant="outline">
            <Link to={ROUTES.home}>Back to foundation</Link>
          </Button>
        }
      />
    </PageContainer>
  )
}
