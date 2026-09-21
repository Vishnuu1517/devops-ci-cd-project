const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const outputDirectory = path.join(projectRoot, 'dist');
const filesToCopy = [
    'index.html',
    'dashboard.html',
    'dashboard.js',
    'style.css',
];

fs.rmSync(outputDirectory, { recursive: true, force: true });
fs.mkdirSync(outputDirectory, { recursive: true });

for (const fileName of filesToCopy) {
    fs.copyFileSync(
        path.join(projectRoot, fileName),
        path.join(outputDirectory, fileName),
    );
}

console.log(`Built ${filesToCopy.length} files into dist/`);
