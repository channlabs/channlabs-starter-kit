/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { HugeiconsIcon } from '@hugeicons/react';
import { Link, usePage } from '@inertiajs/react';

import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';

const getUrlStr = (url: string | any): string => {
    if (typeof url === 'object' && url !== null && 'url' in url) {
        return String(url.url);
    }
    return String(url);
};

export function NavMenu({
    items,
    title,
}: {
    items: {
        title: string;
        url: any;
        icon: any;
    }[];
    title: string;
}) {
    const page = usePage();
    const currentUrl = page.url;

    return (
        <SidebarGroup>
            <SidebarGroupLabel>{title}</SidebarGroupLabel>
            <SidebarMenu>
                {items.map((item) => {
                    const itemUrl = getUrlStr(item.url);
                    const isActive =
                        currentUrl === itemUrl ||
                        currentUrl.startsWith(itemUrl + '/');

                    return (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild isActive={isActive}>
                                <Link href={itemUrl}>
                                    <HugeiconsIcon
                                        icon={item.icon}
                                        size={20}
                                        strokeWidth={2}
                                    />
                                    <span>{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    );
                })}
            </SidebarMenu>
        </SidebarGroup>
    );
}
