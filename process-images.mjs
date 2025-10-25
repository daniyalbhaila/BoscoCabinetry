import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const ONGOING_DIR = path.join(__dirname, 'src/assets/Portfolio/Ongoing');

// Supported image extensions
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];

// Function to sanitize folder name for use in filename
function sanitizeName(name) {
  return name
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters except spaces and hyphens
    .replace(/\s+/g, '-')      // Replace spaces with hyphens
    .replace(/-+/g, '-')       // Replace multiple hyphens with single hyphen
    .trim();
}

// Function to get all image files recursively
async function getImageFiles(dir) {
  const images = [];

  async function scan(currentDir, relativePath = '') {
    const entries = await fs.readdir(currentDir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      const relPath = path.join(relativePath, entry.name);

      if (entry.isDirectory()) {
        await scan(fullPath, relPath);
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase();
        if (IMAGE_EXTENSIONS.includes(ext)) {
          images.push({
            fullPath,
            relativePath: relPath,
            fileName: entry.name,
            extension: ext
          });
        }
      }
    }
  }

  await scan(dir);
  return images;
}

// Function to process and rename images within each project folder
async function processImages() {
  try {
    console.log('Starting image processing...\n');

    // Get all project directories
    const projectDirs = await fs.readdir(ONGOING_DIR, { withFileTypes: true });
    const projects = projectDirs.filter(d => d.isDirectory());

    let totalProcessed = 0;

    for (const project of projects) {
      const projectPath = path.join(ONGOING_DIR, project.name);
      const projectName = sanitizeName(project.name);

      console.log(`\nProcessing project: ${project.name}`);
      console.log(`Sanitized name: ${projectName}`);

      // Get all images in this project (including subdirectories)
      const images = await getImageFiles(projectPath);

      if (images.length === 0) {
        console.log('  No images found');
        continue;
      }

      console.log(`  Found ${images.length} images`);

      // Sort images by path for consistent numbering
      images.sort((a, b) => a.relativePath.localeCompare(b.relativePath));

      // Process each image
      for (let i = 0; i < images.length; i++) {
        const img = images[i];
        const imageNumber = String(i + 1).padStart(3, '0');
        const newFileName = `${projectName}_${imageNumber}${img.extension}`;
        const newFilePath = path.join(projectPath, newFileName);

        try {
          // Read image metadata
          const metadata = await sharp(img.fullPath).metadata();
          const { width, height } = metadata;

          // Calculate crop dimensions (keep top 90%, remove bottom 10%)
          const newHeight = Math.floor(height * 0.9);

          // Process image: crop and save with new name
          await sharp(img.fullPath)
            .extract({ left: 0, top: 0, width: width, height: newHeight })
            .toFile(newFilePath + '.temp');

          // If the new name is different from the old name, remove old file
          if (img.fullPath !== newFilePath) {
            await fs.unlink(img.fullPath);
          } else {
            // If same name, just overwrite
            await fs.unlink(img.fullPath);
          }

          // Rename temp file to final name
          await fs.rename(newFilePath + '.temp', newFilePath);

          console.log(`  ✓ ${img.fileName} → ${newFileName} (cropped to ${newHeight}px from ${height}px)`);
          totalProcessed++;

        } catch (err) {
          console.error(`  ✗ Error processing ${img.fileName}:`, err.message);
        }
      }
    }

    console.log(`\n✓ Processing complete! ${totalProcessed} images renamed and cropped.`);

  } catch (error) {
    console.error('Error:', error);
  }
}

// Run the script
processImages();
