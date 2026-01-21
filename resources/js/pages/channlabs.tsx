import { ArrowRight01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { Head } from '@inertiajs/react';
import { toast } from 'sonner';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
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
            <div className="flex gap-3 p-3">
                <Card size="sm" className="w-full max-w-xs self-start">
                    <CardHeader>
                        <CardTitle>Card</CardTitle>
                        <CardDescription>
                            Weekly snapshots. No more manual exports.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="grid gap-2 py-2 text-sm">
                            <li className="flex gap-2">
                                <HugeiconsIcon
                                    icon={ArrowRight01Icon}
                                    size={20}
                                    strokeWidth={2}
                                    className="mt-0.5 size-4 shrink-0 text-muted-foreground"
                                />
                                <span>
                                    Choose a schedule (daily, or weekly).
                                </span>
                            </li>
                            <li className="flex gap-2">
                                <HugeiconsIcon
                                    icon={ArrowRight01Icon}
                                    size={20}
                                    strokeWidth={2}
                                    className="mt-0.5 size-4 shrink-0 text-muted-foreground"
                                />
                                <span>
                                    Send to channels or specific teammates.
                                </span>
                            </li>
                            <li className="flex gap-2">
                                <HugeiconsIcon
                                    icon={ArrowRight01Icon}
                                    size={20}
                                    strokeWidth={2}
                                    className="mt-0.5 size-4 shrink-0 text-muted-foreground"
                                />
                                <span>
                                    Include charts, tables, and key metrics.
                                </span>
                            </li>
                        </ul>
                    </CardContent>
                    <CardFooter className="flex-col gap-2">
                        <Button size="sm" className="w-full">
                            Set up scheduled reports
                        </Button>
                        <Button variant="outline" size="sm" className="w-full">
                            See what&apos;s new
                        </Button>
                    </CardFooter>
                </Card>
                <Card className="relative w-full max-w-sm pt-0">
                    <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                    <img
                        src="https://avatar.vercel.sh/shadcn1"
                        alt="Event cover"
                        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
                    />
                    <CardHeader>
                        <CardAction>
                            <Badge variant="secondary">Featured</Badge>
                        </CardAction>
                        <CardTitle>Design systems meetup</CardTitle>
                        <CardDescription>
                            A practical talk on component APIs, accessibility,
                            and shipping faster.
                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <Button className="w-full">View Event</Button>
                    </CardFooter>
                </Card>

                <Card size="sm" className="w-full max-w-xs self-start">
                    <CardHeader>
                        <CardTitle>Sonner</CardTitle>
                        <CardDescription>
                            Sonner is a toast notification library for React.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap justify-center gap-2">
                            <Button
                                variant="outline"
                                onClick={() =>
                                    toast('Event has been created', {
                                        position: 'top-left',
                                    })
                                }
                            >
                                Top Left
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() =>
                                    toast('Event has been created', {
                                        position: 'top-center',
                                    })
                                }
                            >
                                Top Center
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() =>
                                    toast('Event has been created', {
                                        position: 'top-right',
                                    })
                                }
                            >
                                Top Right
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() =>
                                    toast('Event has been created', {
                                        position: 'bottom-left',
                                    })
                                }
                            >
                                Bottom Left
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() =>
                                    toast('Event has been created', {
                                        position: 'bottom-center',
                                    })
                                }
                            >
                                Bottom Center
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() =>
                                    toast('Event has been created', {
                                        position: 'bottom-right',
                                    })
                                }
                            >
                                Bottom Right
                            </Button>
                            <Button
                                onClick={() =>
                                    toast('Event has been created', {
                                        description:
                                            'Monday, January 3rd at 6:00pm',
                                    })
                                }
                                variant="outline"
                                className="w-fit"
                            >
                                Show Toast
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <Card size="sm" className="w-full max-w-xs self-start">
                    <CardHeader>
                        <CardTitle>Select</CardTitle>
                        <CardDescription>
                            Select is a dropdown component for React.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap justify-center gap-2">
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Theme" />
                                </SelectTrigger>
                                <SelectContent alignItemWithTrigger={false}>
                                    <SelectGroup>
                                        <SelectLabel>Appearance</SelectLabel>
                                        <SelectItem value="light">
                                            Light
                                        </SelectItem>
                                        <SelectItem value="dark">
                                            Dark
                                        </SelectItem>
                                        <SelectItem value="system">
                                            System
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
