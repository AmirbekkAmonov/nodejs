// Bu masalani ishlashish jarayonini unchali tushunmadim internetdan yig'dim malumotlarni.
// Xoto yoki To'g'riligiga ishinchim komil emas...





const fs = require('fs');
const path = require('path');

const sourceDirectory = './files';
const destinationDirectory = './files_copy';

fs.access(destinationDirectory, fs.constants.F_OK, (err) => {
    if (!err) {
        console.error('FS operation failed');
        return;
    }

    fs.mkdir(destinationDirectory, (err) => {
        if (err) {
            console.error('FS operation failed');
            return;
        }

        fs.readdir(sourceDirectory, (err, files) => {
            if (err) {
                console.error('FS operation failed');
                return;
            }

            files.forEach((file) => {
                const sourcePath = path.join(sourceDirectory, file);
                const destinationPath = path.join(destinationDirectory, file);

                fs.copyFile(sourcePath, destinationPath, (err) => {
                    if (err) {
                        console.error('FS operation failed');
                        return;
                    }
                });
            });

            console.log('Katalog nusxalash muvaffaqiyatli amalga oshirildi.');
        });
    });
});