const path = require('path');
const fs = require('fs');

const currentWorkingDirectory = process.cwd();
console.log('Joriy ishchi katalogning absolyut yo\'li:', currentWorkingDirectory);

const docsDirectory = path.join(currentWorkingDirectory, 'docs');
if (!fs.existsSync(docsDirectory)) {
    fs.mkdirSync(docsDirectory);
    console.log('docs katalogi yaratildi.');
} else {
    console.log('docs katalogi allaqachon mavjud.');
}
const readmePath = path.join(docsDirectory, 'readme.md');
console.log('readme.md faylning nisbiy yo\'li:', readmePath);