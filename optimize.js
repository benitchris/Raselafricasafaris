import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_DIR = path.join(__dirname, 'src', 'assets');
const SRC_DIR = path.join(__dirname, 'src');

async function processImages() {
    const files = fs.readdirSync(ASSETS_DIR);
    for (const file of files) {
        if (file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.jpeg')) {
            const ext = path.extname(file);
            const baseName = path.basename(file, ext);
            console.log(`Processing ${file}...`);
            await sharp(path.join(ASSETS_DIR, file))
                .resize({ width: 1200, withoutEnlargement: true }) // Also resize large images to a max width
                .webp({ quality: 75 })
                .toFile(path.join(ASSETS_DIR, `${baseName}.webp`));
            
            fs.unlinkSync(path.join(ASSETS_DIR, file));
        }
    }
}

function updateReferences(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            updateReferences(fullPath);
        } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.css') || fullPath.endsWith('.js')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            const originalContent = content;
            // Simple replace, careful not to replace something that shouldn't be
            content = content.replace(/\.jpg/g, '.webp');
            content = content.replace(/\.png/g, '.webp');
            content = content.replace(/\.jpeg/g, '.webp');
            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated references in ${file}`);
            }
        }
    }
}

async function run() {
    console.log('Optimizing images and generating .webp versions...');
    await processImages();
    console.log('Updating code references...');
    updateReferences(SRC_DIR);
    console.log('Done!');
}

run();
