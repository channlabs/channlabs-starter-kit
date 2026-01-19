import { Moon01Icon, Sun02Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { HTMLAttributes } from 'react';

import { Button } from '@/components/ui/button';
import { useAppearance } from '@/hooks/use-appearance';

export default function AppearanceToggle({
    className = '',
    ...props
}: HTMLAttributes<HTMLDivElement>) {
    const { appearance, updateAppearance } = useAppearance();

    const toggleAppearance = () => {
        if (appearance === 'dark' || appearance === 'system') {
            updateAppearance('light');
        } else {
            updateAppearance('dark');
        }
    };

    const isDark = appearance === 'dark' || appearance === 'system';

    return (
        <div className={className} {...props}>
            <Button
                variant="ghost"
                size="icon-sm"
                onClick={toggleAppearance}
                className="h-9 w-9 rounded-md"
            >
                {isDark ? (
                    <HugeiconsIcon
                        icon={Sun02Icon}
                        size={20}
                        strokeWidth={1.5}
                    />
                ) : (
                    <HugeiconsIcon
                        icon={Moon01Icon}
                        size={20}
                        strokeWidth={1.5}
                    />
                )}
                <span className="sr-only">Toggle theme</span>
            </Button>
        </div>
    );
}
