import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directoryPath = path.join(__dirname, 'public', 'assets');

async function processImages() {
  try {
    const files = fs.readdirSync(directoryPath);
    let count = 0;

    for (const file of files) {
      if (!file.match(/\.(png|jpe?g)$/i)) continue;

      const filePath = path.join(directoryPath, file);
      const stats = fs.statSync(filePath);
      
      // If image is larger than 100KB, optimize it
      if (stats.size > 100 * 1024) {
        console.log(`Optimizing ${file} (${(stats.size/1024/1024).toFixed(2)} MB)...`);
        
        const tempPath = filePath + '.tmp';
        let s = sharp(filePath);
        const metadata = await s.metadata();
        
        // Resize down if too big to max 1200px width/height
        if (metadata.width > 1200 || metadata.height > 1200) {
            s = s.resize({ width: 1200, height: 1200, fit: 'inside', withoutEnlargement: true });
        }
        
        // Output format matching extension
        if (file.toLowerCase().endsWith('.png')) {
            s = s.png({ quality: 80, compressionLevel: 8 });
        } else {
            s = s.jpeg({ quality: 80, progressive: true });
        }

        await s.toFile(tempPath);
        
        // Overwrite original
        fs.unlinkSync(filePath);
        fs.renameSync(tempPath, filePath);
        
        console.log(`✅ Optimized ${file}`);
        count++;
      }
    }
    console.log(`Finished optimization. Total optimized: ${count} images.`);
  } catch (err) {
    console.error('Error:', err);
  }
}

processImages();
