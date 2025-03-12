import { DataTable } from '@/components/modules/Todos/datatable';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem as BreadcrumbItemUI, BreadcrumbLink, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { HomeIcon, ListIcon } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Home',
        href: '/',
    },
    {
        title: 'Pokemons',
        href: '/pokemons',
    },
];

export default function TodosPage() {
    return (
        <>
            <Head title="Pokemons" />
            <div className="flex min-h-screen flex-col">
                {/* Header */}
                <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                    <div className="container flex h-14 items-center">
                        <div className="mr-4 flex">
                            <h1 className="text-xl font-semibold">Pokemon Manager</h1>
                        </div>
                    </div>
                </header>

                <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
                    {/* Sidebar */}
                    <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
                        <div className="h-full py-6 pr-6 lg:py-8">
                            <nav className="flex flex-col space-y-2">
                                <a href="/dashboard" className="flex items-center gap-2 rounded-md px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground">
                                    <HomeIcon className="h-4 w-4" />
                                    Dashboard
                                </a>
                                <a href="/pokemons" className="flex items-center gap-2 rounded-md bg-accent px-3 py-2 text-accent-foreground">
                                    <ListIcon className="h-4 w-4" />
                                    Pokemons
                                </a>
                            </nav>
                        </div>
                    </aside>

                    {/* Main content */}
                    <main className="flex w-full flex-col overflow-hidden">
                        <div className="flex-1 space-y-4 p-8 pt-6">
                            {/* Breadcrumb */}
                            <Breadcrumb>
                                <BreadcrumbList>
                                    {breadcrumbs.map((crumb, index) => (
                                        <div key={index} className="flex items-center">
                                            {index > 0 && <BreadcrumbSeparator />}
                                            <BreadcrumbItemUI>
                                                {index === breadcrumbs.length - 1 ? (
                                                    <span>{crumb.title}</span>
                                                ) : (
                                                    <BreadcrumbLink href={crumb.href}>{crumb.title}</BreadcrumbLink>
                                                )}
                                            </BreadcrumbItemUI>
                                        </div>
                                    ))}
                                </BreadcrumbList>
                            </Breadcrumb>

                            {/* Page title */}
                            <div className="flex items-center justify-between">
                                <h2 className="text-3xl font-bold tracking-tight">Pokemon List</h2>
                            </div>

                            {/* Data table card */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>All Pokemons</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <DataTable />
                                </CardContent>
                            </Card>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}