<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Str;

class SetupProject extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'starter:setup';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->showBanner();

        $defaultName = Str::of(basename(getcwd()))
            ->replace(['-', '_'], ' ')
            ->title()
            ->toString();

        $this->line('');
        $this->info('⚙️  Initializing project configuration...');
        $this->line('');

        $projectName = $this->ask(
            '🚀 Enter project name',
            $defaultName
        );

        if ($projectName === '') {
            $this->error('Project name cannot be empty.');
            return Command::FAILURE;
        }

        $defaultDb = Str::slug($projectName, '_');

        $dbName = trim($this->ask('🗄️  Database name', $defaultDb));

        if ($dbName === '') {
            $this->error('Database name cannot be empty.');
            return Command::FAILURE;
        }

        $this->line('');
        $this->info('📝 Writing configuration...');
        $this->simulateProgress();

        $envPath = base_path('.env');

        if (!file_exists($envPath)) {
            $this->error('.env file not found');
            return Command::FAILURE;
        }

        $env = file_get_contents($envPath);

        $env = preg_replace('/APP_NAME=.*/', 'APP_NAME="'.$projectName.'"', $env);
        $env = preg_replace('/DB_DATABASE=.*/', 'DB_DATABASE='.$dbName, $env);

        file_put_contents($envPath, $env);

        $this->line('');
        $this->info("✅ Project configured successfully!");
        $this->line("   🏷️  APP_NAME = <comment>{$projectName}</comment>");
        $this->line("   ☁️  DB_DATABASE = <comment>{$dbName}</comment>");

        $this->line('');
        $this->info('🎉 Setup completed. Happy coding!');
        $this->line('');

        return Command::SUCCESS;
    }

    protected function showBanner()
    {
        $this->line('');
        $this->line('<fg=cyan>╔══════════════════════════════════════════════╗</>');
        $this->line('<fg=cyan>║                                              ║</>');
        $this->line('<fg=cyan>║       CHANNLABS. STARTER KIT INSTALLER       ║</>');
        $this->line('<fg=cyan>║    Laravel • Inertia • React • SaaS Ready    ║</>');
        $this->line('<fg=cyan>║                                              ║</>');
        $this->line('<fg=cyan>╚══════════════════════════════════════════════╝</>');
    }

    protected function simulateProgress()
    {
        $bar = $this->output->createProgressBar(20);
        $bar->start();

        for ($i = 0; $i < 20; $i++) {
            usleep(50000); // 0.05 detik
            $bar->advance();
        }

        $bar->finish();
        $this->line('');
    }
}
