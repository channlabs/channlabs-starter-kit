'use client';

import {
    CheckCircle2,
    Info,
    Loader2,
    OctagonX,
    TriangleAlert,
} from 'lucide-react';
import { Toaster as Sonner, type ToasterProps } from 'sonner';

import { useAppearance } from '@/hooks/use-appearance';

const Toaster = ({ ...props }: ToasterProps) => {
    const { resolvedAppearance } = useAppearance();

    return (
        <Sonner
            theme={resolvedAppearance as ToasterProps['theme']}
            className="toaster group font-sans!"
            icons={{
                success: <CheckCircle2 className="size-4" />,
                info: <Info className="size-4" />,
                warning: <TriangleAlert className="size-4" />,
                error: <OctagonX className="size-4" />,
                loading: <Loader2 className="size-4 animate-spin" />,
            }}
            style={
                {
                    '--normal-bg': 'var(--popover)',
                    '--normal-text': 'var(--popover-foreground)',
                    '--normal-border': 'var(--border)',
                    '--border-radius': 'var(--radius)',
                } as React.CSSProperties
            }
            toastOptions={{
                classNames: {
                    toast: 'cn-toast',
                    description: 'text-muted-foreground',
                    actionButton: 'bg-primary text-primary-foreground',
                    cancelButton: 'bg-muted text-muted-foreground',
                },
            }}
            {...props}
        />
    );
};

export { Toaster };

