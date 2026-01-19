import type { InertiaLinkProps } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';

import { resolveUrl } from '@/lib/utils';

export function useActiveUrl() {
    const page = usePage();
    const currentUrlPath = new URL(page.url, window?.location.origin).pathname;

    function urlIsActive(
        urlToCheck: NonNullable<InertiaLinkProps['href']>,
        currentUrl?: string,
    ) {
        const urlToCompare = currentUrl ?? currentUrlPath;
        return resolveUrl(urlToCheck) === urlToCompare;
    }

    return {
        currentUrl: currentUrlPath,
        urlIsActive,
    };
}
