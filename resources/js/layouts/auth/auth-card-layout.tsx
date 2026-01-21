import { Link } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';

import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { home } from '@/routes';

export default function AuthCardLayout({
    children,
    title,
    description,
}: PropsWithChildren<{
    name?: string;
    title?: string;
    description?: string;
}>) {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
            <div className="flex w-full max-w-sm flex-col gap-6">
                <Link
                    href={home()}
                    className="self-center font-mona text-2xl font-bold tracking-tighter"
                >
                    channlabs.
                </Link>

                <div className="flex flex-col gap-6">
                    {children}
                </div>
            </div>
        </div>
    );
}
