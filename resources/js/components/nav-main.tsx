/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { ChevronRight } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { usePage } from '@inertiajs/react';

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from '@/components/ui/sidebar';

// Helper to extract URL string from string or RouteDefinition object
const getUrlStr = (url: string | any): string => {
    if (typeof url === 'object' && url !== null && 'url' in url) {
        return String(url.url);
    }
    return String(url);
};

export function NavMain({
    title,
    items,
}: {
    title: string;
    items: {
        title: string;
        url: string | unknown;
        icon?: any;
        isActive?: boolean;
        items?: {
            title: string;
            url: string | unknown;
        }[];
    }[];
}) {
    const page = usePage();
    const currentUrl = page.url;

    return (
        <SidebarGroup>
            <SidebarGroupLabel>{title}</SidebarGroupLabel>
            <SidebarMenu>
                {items.map((item) => {
                    const itemUrl = getUrlStr(item.url);

                    const isItemActive =
                        currentUrl === itemUrl ||
                        currentUrl.startsWith(itemUrl + '/') ||
                        item.items?.some((subItem) => {
                            const subItemUrl = getUrlStr(subItem.url);
                            return (
                                currentUrl === subItemUrl ||
                                currentUrl.startsWith(subItemUrl + '/')
                            );
                        }) ||
                        false;

                    return (
                        <Collapsible
                            key={item.title}
                            asChild
                            defaultOpen={item.isActive || isItemActive}
                            className="group/collapsible"
                        >
                            <SidebarMenuItem>
                                <CollapsibleTrigger asChild>
                                    <SidebarMenuButton tooltip={item.title}>
                                        {item.icon && (
                                            <HugeiconsIcon
                                                icon={item.icon}
                                                size={20}
                                                strokeWidth={2}
                                            />
                                        )}
                                        <span>{item.title}</span>
                                        <HugeiconsIcon
                                            icon={ChevronRight}
                                            size={20}
                                            strokeWidth={2}
                                            className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                                        />
                                    </SidebarMenuButton>
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                    <SidebarMenuSub>
                                        {item.items?.map((subItem) => {
                                            const subItemUrl = getUrlStr(
                                                subItem.url,
                                            );
                                            const isSubItemActive =
                                                currentUrl === subItemUrl ||
                                                currentUrl.startsWith(
                                                    subItemUrl + '/',
                                                );

                                            return (
                                                <SidebarMenuSubItem
                                                    key={subItem.title}
                                                >
                                                    <SidebarMenuSubButton
                                                        asChild
                                                        isActive={
                                                            isSubItemActive
                                                        }
                                                    >
                                                        <a href={subItemUrl}>
                                                            <span>
                                                                {subItem.title}
                                                            </span>
                                                        </a>
                                                    </SidebarMenuSubButton>
                                                </SidebarMenuSubItem>
                                            );
                                        })}
                                    </SidebarMenuSub>
                                </CollapsibleContent>
                            </SidebarMenuItem>
                        </Collapsible>
                    );
                })}
            </SidebarMenu>
        </SidebarGroup>
    );
}
