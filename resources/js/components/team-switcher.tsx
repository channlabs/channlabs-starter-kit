/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { PlusSignIcon, UnfoldMoreIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import * as React from 'react';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from '@/components/ui/sidebar';

export function TeamSwitcher({
    teams,
}: {
    teams: {
        name: string;
        logo: any;
        plan: string;
    }[];
}) {
    const { isMobile } = useSidebar();
    const [activeTeam, setActiveTeam] = React.useState(teams[0]);

    if (!activeTeam) {
        return null;
    }

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger
                        render={
                            <SidebarMenuButton
                                size="lg"
                                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                            >
                                <div className="flex aspect-square size-8 items-center justify-center text-sidebar-primary">
                                    <HugeiconsIcon
                                        icon={activeTeam.logo}
                                        size={20}
                                        strokeWidth={1.5}
                                    />
                                </div>
                                <div className="leading-tighter grid flex-1 text-left text-sm">
                                    <span className="truncate font-mona font-bold tracking-tighter">
                                        {activeTeam.name}
                                    </span>
                                    <span className="truncate text-xs">
                                        {activeTeam.plan}
                                    </span>
                                </div>
                                <HugeiconsIcon
                                    icon={UnfoldMoreIcon}
                                    size={20}
                                    strokeWidth={2}
                                />
                            </SidebarMenuButton>
                        }
                    >
                        Open
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                        align="start"
                        side={isMobile ? 'bottom' : 'right'}
                        sideOffset={4}
                    >
                        <DropdownMenuGroup>
                            <DropdownMenuLabel className="text-xs text-muted-foreground">
                                Teams
                            </DropdownMenuLabel>
                            {teams.map((team, index) => (
                                <DropdownMenuItem
                                    key={team.name}
                                    onClick={() => setActiveTeam(team)}
                                    className="gap-2 p-2"
                                >
                                    <div className="flex size-7 items-center justify-center rounded-sm border">
                                        <HugeiconsIcon
                                            icon={team.logo}
                                            strokeWidth={2}
                                        />
                                    </div>
                                    {team.name}
                                    <DropdownMenuShortcut>
                                        ⌘{index + 1}
                                    </DropdownMenuShortcut>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="gap-2 p-2">
                            <div className="flex size-6 items-center justify-center rounded-md border bg-transparent">
                                <HugeiconsIcon
                                    icon={PlusSignIcon}
                                    size={20}
                                    strokeWidth={2}
                                />
                            </div>
                            <div className="font-medium text-muted-foreground">
                                Add team
                            </div>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    );
}
