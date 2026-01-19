import { Head } from '@inertiajs/react';

import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { channlabs } from '@/routes';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: channlabs().url,
    },
];

export default function Channlabs() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Chann Labs Starter Kit" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                Hi, Chann Labs Creative Studio.
            </div>
        </AppLayout>
    );
}
