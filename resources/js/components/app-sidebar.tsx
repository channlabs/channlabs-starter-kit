import {
    AiProgrammingIcon,
    GithubIcon,
    Layout06Icon,
    Settings03Icon,
} from '@hugeicons/core-free-icons';

import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import { edit as appearance } from '@/routes/appearance';
import { edit as profile } from '@/routes/profile';
import { show } from '@/routes/two-factor';
import { edit as password } from '@/routes/user-password';

import { NavUser } from './nav-user';
import { TeamSwitcher } from './team-switcher';

const teams = [
    {
        name: 'Chann Labs.',
        logo: AiProgrammingIcon,
        plan: 'v1.0.0',
        href: dashboard(),
    },
];

const platformNavItems = [
    {
        title: 'Dashboard',
        url: dashboard(),
        icon: Layout06Icon,
        items: [
            {
                title: 'Overview',
                url: dashboard(),
            },
        ],
    },
];

const settingsNavItems = [
    {
        title: 'Settings',
        url: '#',
        icon: Settings03Icon,
        items: [
            {
                title: 'Profile',
                url: profile(),
            },
            {
                title: 'Password',
                url: password(),
            },
            {
                title: 'Two-Factor Auth',
                url: show(),
            },
            {
                title: 'Appearance',
                url: appearance(),
            },
        ],
    },
];

const footerNavItems = [
    {
        title: 'Helga Chandra E. Adhitia',
        href: 'https://chann.id',
        icon: AiProgrammingIcon,
    },
    {
        title: 'GitHub Chann Labs.',
        href: 'https://github.com/channlabs',
        icon: GithubIcon,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="sidebar">
            <SidebarHeader>
                <TeamSwitcher teams={teams} />
            </SidebarHeader>

            <SidebarContent>
                <NavMain title="Platform" items={platformNavItems} />
                <NavMain title="Settings" items={settingsNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
