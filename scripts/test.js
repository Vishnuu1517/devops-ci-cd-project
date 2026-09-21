const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const requiredFiles = [
    'index.html',
    'dashboard.html',
    'dashboard.js',
    'style.css',
    'package.json',
];

for (const fileName of requiredFiles) {
    const filePath = path.join(projectRoot, fileName);

    if (!fs.existsSync(filePath)) {
        throw new Error(`Required file is missing: ${fileName}`);
    }
}

console.log('All required project files are present.');
