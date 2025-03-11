import {DataTable} from '@/components/modules/Todos/datatable';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Pokemons',
        href: '/pokemons',
    },
];

export default function TodosPage() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Todos" />
            <DataTable />
        </AppLayout>
    );
}
