#!/usr/bin/env node

/**
 * Simple bundle analyzer for Astro build
 * Analyzes the dist folder and reports file sizes
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, '../dist');

function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function analyzeDirectory(dir, prefix = '') {
    const files = fs.readdirSync(dir);
    let totalSize = 0;
    const results = [];

    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            const subAnalysis = analyzeDirectory(filePath, prefix + file + '/');
            results.push(...subAnalysis.files);
            totalSize += subAnalysis.totalSize;
        } else {
            const fileData = {
                name: prefix + file,
                size: stat.size,
                type: path.extname(file).substring(1) || 'no-ext'
            };
            results.push(fileData);
            totalSize += stat.size;
        }
    }

    return { files: results, totalSize };
}

function main() {
    if (!fs.existsSync(distPath)) {
        console.error('❌ dist folder not found. Run "npm run build" first.');
        process.exit(1);
    }

    console.log('🔍 Analyzing bundle sizes...\n');

    const analysis = analyzeDirectory(distPath);

    // Group by file type
    const byType = {};
    analysis.files.forEach(file => {
        if (!byType[file.type]) {
            byType[file.type] = { files: [], totalSize: 0 };
        }
        byType[file.type].files.push(file);
        byType[file.type].totalSize += file.size;
    });

    // Sort files by size (largest first)
    analysis.files.sort((a, b) => b.size - a.size);

    console.log('📊 File Type Summary:');
    console.log(''.padEnd(40, '='));
    Object.entries(byType).forEach(([type, data]) => {
        console.log(`${type.padEnd(10)} | ${data.files.length.toString().padStart(5)} files | ${formatBytes(data.totalSize).padStart(10)}`);
    });

    console.log('\n🗂️  Largest Files:');
    console.log(''.padEnd(60, '='));
    analysis.files.slice(0, 10).forEach(file => {
        console.log(`${file.name.padEnd(45)} | ${formatBytes(file.size).padStart(10)}`);
    });

    console.log(`\n📈 Total Bundle Size: ${formatBytes(analysis.totalSize)}`);

    // Performance recommendations
    console.log('\n💡 Performance Recommendations:');
    console.log(''.padEnd(40, '='));

    const largeJS = analysis.files.filter(f => f.type === 'js' && f.size > 100000);
    if (largeJS.length > 0) {
        console.log('⚠️  Large JavaScript files detected:');
        largeJS.forEach(file => {
            console.log(`   - ${file.name} (${formatBytes(file.size)})`);
        });
    }

    const images = analysis.files.filter(f => ['jpg', 'jpeg', 'png', 'webp', 'gif'].includes(f.type));
    if (images.length > 0) {
        const totalImageSize = images.reduce((sum, img) => sum + img.size, 0);
        console.log(`📸 Images: ${images.length} files, ${formatBytes(totalImageSize)} total`);
    }

    console.log('\n✅ Analysis complete!');
}

main();