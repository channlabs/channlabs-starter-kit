import {
    Book03Icon,
    CheckmarkCircle02Icon,
    CodeIcon,
    DatabaseIcon,
    GithubIcon,
    LayersIcon,
    LockPasswordIcon,
    PackageIcon,
    Rocket01Icon,
    ShieldEnergyIcon,
    SourceCodeIcon,
    SparklesIcon,
    UserMultiple02Icon,
    ZapFreeIcons,
    SmartPhone01FreeIcons,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react';
import { Head, Link, usePage } from '@inertiajs/react';

import AppearanceToggle from '@/components/appearance';
import { Button } from '@/components/ui/button';
import { dashboard, login, register } from '@/routes';
import { SharedData } from '@/types';

export default function Welcome({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Premium Laravel React Boilerplate" />

            <div className="relative flex min-h-screen flex-col">
                {/* Background Effects */}
                <div className="pointer-events-none fixed top-0 left-1/2 z-0 h-full w-full -translate-x-1/2 overflow-hidden">
                    <div
                        className="absolute inset-0 opacity-[0.28] dark:opacity-[0.14]"
                        style={{
                            backgroundImage:
                                'repeating-linear-gradient(45deg, rgba(59,130,246,0.28) 0px, rgba(59,130,246,0.28) 1px, transparent 1px, transparent 12px)',
                            transform: 'scale(1.5)',
                            transformOrigin: 'center',
                        }}
                    />
                    <div className="absolute -top-[10%] left-[-10%] h-[40%] w-[40%] rounded-full bg-blue-500/10 blur-[120px]" />
                    <div className="absolute top-[20%] right-[-5%] h-[30%] w-[30%] rounded-full bg-purple-500/10 blur-[120px]" />
                    <div className="absolute top-[60%] left-[10%] h-[35%] w-[35%] rounded-full bg-blue-500/10 blur-[120px]" />
                </div>

                {/* Header */}
                <header className="sticky top-0 z-20 w-full bg-background/40 backdrop-blur-md transition-colors">
                    <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
                        <div className="flex items-center gap-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-blue-500 to-blue-600">
                                <HugeiconsIcon
                                    icon={ZapFreeIcons}
                                    size={24}
                                    strokeWidth={1.5}
                                    className="text-white"
                                />
                            </div>
                            <span className="font-mona text-xl font-bold tracking-tighter">
                                chann<span className="text-blue-500">labs_</span>
                            </span>
                        </div>

                        <nav className="flex items-center gap-2 sm:gap-4">
                            <AppearanceToggle />
                            {auth.user ? (
                                <Button asChild variant="outline">
                                    <Link href={dashboard()}>Dashboard</Link>
                                </Button>
                            ) : (
                                <>
                                    <Link
                                        href={login()}
                                        className="px-5 py-2 text-sm font-medium transition-colors hover:text-blue-500"
                                    >
                                        Log in
                                    </Link>
                                    {canRegister && (
                                        <Button
                                            asChild
                                            className="bg-blue-500 text-white transition-colors hover:bg-blue-600"
                                        >
                                            <Link href={register()}>
                                                Get Started
                                            </Link>
                                        </Button>
                                    )}
                                </>
                            )}
                        </nav>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 py-16 text-center lg:px-12 lg:py-24">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
                        <HugeiconsIcon
                            icon={SparklesIcon}
                            size={14}
                            strokeWidth={2}
                        />
                        Production-Ready Starter Kit
                    </div>

                    <h1 className="max-w-4xl font-mona text-5xl font-extrabold tracking-tighter sm:text-7xl">
                        Build SaaS Apps{' '}
                        <span className="text-blue-500">
                            10x Faster
                        </span>
                    </h1>

                    <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground ">
                        The ultimate Laravel + React starter kit with
                        authentication, multi-tenancy, licensing, and premium
                        UI components. Everything you need to launch your next
                        project.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                        <Button
                            asChild

                            className="bg-blue-500 text-white transition-colors hover:bg-blue-600"
                        >
                            <Link href={register()}>
                                <HugeiconsIcon
                                    icon={Rocket01Icon}
                                    size={18}
                                    strokeWidth={2}
                                    className="mr-2"
                                />
                                Start Building Now
                            </Link>
                        </Button>
                        <Button asChild variant="outline">
                            <a href="https://github.com/channlabs/channlabs-starter-kit">
                                <HugeiconsIcon
                                    icon={GithubIcon}
                                    size={18}
                                    strokeWidth={2}
                                    className="mr-2"
                                />
                                View on GitHub
                            </a>
                        </Button>
                    </div>

                </section>

                {/* Features Grid */}
                <section className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 lg:px-12">
                    <div className="mb-12 text-center">
                        <h2 className="font-mona text-3xl font-bold tracking-tighter sm:text-4xl">
                            Everything You Need
                        </h2>
                        <p className="mt-3 text-muted-foreground">
                            Packed with features to accelerate your development
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <FeatureCard
                            icon={ZapFreeIcons}
                            title="Lightning Fast"
                            description="Built with Vite and optimized for performance. SSR support included."
                        />
                        <FeatureCard
                            icon={LockPasswordIcon}
                            title="Authentication"
                            description="Complete auth system with Laravel Fortify. Login, register, 2FA ready."
                        />
                        <FeatureCard
                            icon={UserMultiple02Icon}
                            title="Multi-Tenancy"
                            description="Built-in team management and multi-tenant architecture."
                        />
                        <FeatureCard
                            icon={ShieldEnergyIcon}
                            title="License System"
                            description="Ready-to-use licensing and subscription management."
                        />
                        <FeatureCard
                            icon={SourceCodeIcon}
                            title="Clean Code"
                            description="Following SOLID principles and Laravel best practices."
                        />
                        <FeatureCard
                            icon={LayersIcon}
                            title="Premium UI"
                            description="50+ Shadcn UI components with dark mode support."
                        />
                    </div>
                </section>

                {/* Tech Stack */}
                <section className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 lg:px-12">
                    <div className="mb-12 text-center">
                        <h2 className="font-mona text-3xl font-bold tracking-tighter sm:text-4xl">
                            Modern Tech Stack
                        </h2>
                        <p className="mt-3 text-muted-foreground">
                            Built with the best tools in the ecosystem
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                        <TechCard
                            icon={CodeIcon}
                            name="Laravel 12"
                            description="Backend Framework"
                        />
                        <TechCard
                            icon={CodeIcon}
                            name="React 18"
                            description="UI Library"
                        />
                        <TechCard
                            icon={PackageIcon}
                            name="Inertia.js"
                            description="Modern Monolith"
                        />
                        <TechCard
                            icon={DatabaseIcon}
                            name="TypeScript"
                            description="Type Safety"
                        />
                    </div>
                </section>

                {/* What's Included */}
                <section className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 lg:px-12">
                    <div className="rounded-2xl border bg-muted-foreground/2 p-8 backdrop-blur lg:p-12">
                        <h2 className="mb-8 text-center font-mona text-3xl font-bold tracking-tighter sm:text-4xl">
                            What's Included
                        </h2>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <CheckItem text="Authentication & Authorization" />
                            <CheckItem text="Team Management System" />
                            <CheckItem text="License & Subscription Management" />
                            <CheckItem text="Dark Mode Support" />
                            <CheckItem text="Responsive Design" />
                            <CheckItem text="TypeScript Configuration" />
                            <CheckItem text="ESLint & Prettier Setup" />
                            <CheckItem text="Tailwind CSS v4" />
                            <CheckItem text="Shadcn UI Components" />
                            <CheckItem text="Hugeicons Integration" />
                            <CheckItem text="Database Migrations" />
                            <CheckItem text="API Routes & Controllers" />
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 text-center lg:px-12 lg:py-24">
                    <div className="rounded-2xl border border-blue-500/20 bg-linear-to-br from-blue-500/10 to-blue-700/10 p-12 backdrop-blur">
                        <h2 className="font-mona text-3xl font-bold tracking-tighter sm:text-5xl">
                            Ready to Build Something{' '}
                            <span className="text-blue-500">
                                Amazing?
                            </span>
                        </h2>
                        <p className="mt-4 text-muted-foreground">
                            Join developers who are building faster with
                            Channlabs Starter Kit
                        </p>
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                            <Button
                                asChild

                                className="bg-blue-500 text-white transition-colors hover:bg-blue-600"
                            >
                                <Link href={register()}>Get Started Free</Link>
                            </Button>
                            <Button asChild variant="outline">
                                <a href="#">
                                    <HugeiconsIcon
                                        icon={Book03Icon}
                                        size={18}
                                        strokeWidth={2}
                                        className="mr-2"
                                    />
                                    Read Documentation
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="relative z-10 border-t border-dashed bg-background px-6 py-4">
                    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
                        <p>
                            © 2026{' '}
                            <span className="font-mona font-bold tracking-tighter">
                                channlabs
                            </span>
                            . Built for professionals.
                        </p>
                        <div className="flex gap-6">
                            <a
                                href="https://github.com/channlabs/channlabs-starter-kit"
                                className="flex items-center gap-2 transition-colors hover:text-blue-500"
                            >
                                <HugeiconsIcon
                                    icon={GithubIcon}
                                    size={18}
                                    strokeWidth={1.5}
                                />
                                GitHub
                            </a>
                            <a
                                href="#"
                                className="flex items-center gap-2 transition-colors hover:text-blue-500"
                            >
                                <HugeiconsIcon
                                    icon={Book03Icon}
                                    size={18}
                                    strokeWidth={1.5}
                                />
                                Docs
                            </a>
                            <a
                                href="https://chann.id"
                                className="flex items-center gap-2 transition-colors hover:text-blue-500"
                            >
                                <HugeiconsIcon
                                    icon={SmartPhone01FreeIcons}
                                    size={18}
                                    strokeWidth={1.5}
                                />
                                Support
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}

function FeatureCard({
    icon,
    title,
    description,
}: {
    icon: IconSvgElement;
    title: string;
    description: string;
}) {
    return (
        <div className="group rounded-2xl border bg-muted-foreground/2 p-6 backdrop-blur transition-all hover:border-blue-500/50">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 transition-transform group-hover:scale-110">
                <HugeiconsIcon
                    icon={icon}
                    size={24}
                    strokeWidth={1.5}
                    className="text-blue-500"
                />
            </div>
            <h3 className="mb-2 font-mona text-lg font-bold tracking-tighter">
                {title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
                {description}
            </p>
        </div>
    );
}

function TechCard({
    icon,
    name,
    description,
}: {
    icon: IconSvgElement;
    name: string;
    description: string;
}) {
    return (
        <div className="rounded-2xl border bg-muted-foreground/2 p-6 text-center backdrop-blur transition-all hover:border-blue-500/50">
            <div className="mb-3 flex justify-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10">
                    <HugeiconsIcon
                        icon={icon}
                        size={20}
                        strokeWidth={1.5}
                        className="text-blue-500"
                    />
                </div>
            </div>
            <h4 className="font-mona  font-bold tracking-tighter">
                {name}
            </h4>
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        </div>
    );
}

function CheckItem({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-3">
            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/10">
                <HugeiconsIcon
                    icon={CheckmarkCircle02Icon}
                    size={16}
                    strokeWidth={2}
                    className="text-blue-500"
                />
            </div>
            <span className="text-sm">{text}</span>
        </div>
    );
}
