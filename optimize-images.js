const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcDir = '/home/osbrai/.openclaw/workspace/projects/sistema-natural-nextjs/public/images';
const destDir = '/home/osbrai/.openclaw/workspace/projects/sistema-natural-nextjs/public/images';

async function processImages() {
  const files = fs.readdirSync(srcDir);
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (['.png', '.jpg', '.jpeg'].includes(ext)) {
      const inputPath = path.join(srcDir, file);
      const fileName = path.basename(file, ext);
      const outputPath = path.join(destDir, `${fileName}.webp`);
      
      console.log(`Processing ${file}...`);
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);
      
      console.log(`Saved to ${outputPath}`);
      // fs.unlinkSync(inputPath); // Keep originals for now
    }
  }
}

processImages().catch(console.error);
