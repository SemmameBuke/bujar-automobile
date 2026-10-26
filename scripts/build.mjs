import { execFileSync } from 'node:child_process';
import { mkdirSync, copyFileSync, writeFileSync } from 'node:fs';

execFileSync(process.execPath, ['node_modules/vite/bin/vite.js', 'build', ...process.argv.slice(2)], { stdio: 'inherit' });
for (const route of ['terms', 'privacy', '404']) {
  mkdirSync(`dist/${route}`, { recursive: true });
  copyFileSync('dist/index.html', `dist/${route}/index.html`);
}
copyFileSync('dist/index.html', 'dist/404.html');
writeFileSync('dist/.nojekyll', '');
