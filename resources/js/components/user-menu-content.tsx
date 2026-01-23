import {
    CreditCardIcon,
    Logout02Icon,
    NotificationSquareIcon,
    Settings01Icon,
    UserIcon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { Link, router } from '@inertiajs/react';

import {
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { UserInfo } from '@/components/user-info';
import { useMobileNavigation } from '@/hooks/use-mobile-navigation';
import { logout } from '@/routes';
import profile, { edit } from '@/routes/profile';
import { type User } from '@/types';

interface UserMenuContentProps {
    user: User;
}

export function UserMenuContent({ user }: UserMenuContentProps) {
    const cleanup = useMobileNavigation();

    const handleLogout = () => {
        cleanup();
        router.flushAll();
    };

    return (
        <>
            <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <UserInfo user={user} showEmail={true} />
                </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
                <DropdownMenuItem
                    render={
                        <Link
                            className="block w-full cursor-pointer"
                            href={edit()}
                            prefetch
                            onClick={cleanup}
                        >
                            <HugeiconsIcon
                                icon={Settings01Icon}
                                size={24}
                                strokeWidth={2}
                                className="mr-2"
                            />
                            Settings
                        </Link>
                    }
                >
                    Open
                </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
                <DropdownMenuItem
                    render={
                        <Link
                            className="block w-full cursor-pointer"
                            href={profile.update()}
                        >
                            <HugeiconsIcon
                                icon={UserIcon}
                                size={24}
                                strokeWidth={2}
                                className="mr-2"
                            />
                            Account
                        </Link>
                    }
                >
                    Open
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <HugeiconsIcon
                        icon={CreditCardIcon}
                        size={24}
                        strokeWidth={2}
                        className="mr-2"
                    />
                    Billing
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <HugeiconsIcon
                        icon={NotificationSquareIcon}
                        size={24}
                        strokeWidth={2}
                        className="mr-2"
                    />
                    Notifications
                </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem
                render={
                    <Link
                        className="block w-full cursor-pointer"
                        href={logout()}
                        as="button"
                        onClick={handleLogout}
                        data-test="logout-button"
                    >
                        <HugeiconsIcon
                            icon={Logout02Icon}
                            size={24}
                            strokeWidth={2}
                            className="mr-2"
                        />
                        Log out
                    </Link>
                }
            >
                Open
            </DropdownMenuItem>
        </>
    );
}
