import { writeFile } from 'node:fs/promises';

const [, , portfolioUrlArg] = process.argv;

if (!portfolioUrlArg) {
  console.error('Usage: node scripts/generate-portfolio-qr.mjs <portfolio-url>');
  process.exit(1);
}

let normalizedUrl;
try {
  normalizedUrl = new URL(portfolioUrlArg).toString();
} catch {
  console.error('Invalid URL. Example: https://your-portfolio.com');
  process.exit(1);
}

const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=1200x1200&format=png&margin=20&data=${encodeURIComponent(normalizedUrl)}`;

const response = await fetch(qrApiUrl);
if (!response.ok) {
  console.error(`Failed to generate QR image. HTTP ${response.status}`);
  process.exit(1);
}

const arrayBuffer = await response.arrayBuffer();
await writeFile('public/linkedin/portfolio-qr.png', new Uint8Array(arrayBuffer));

console.log('QR generated successfully: public/linkedin/portfolio-qr.png');
console.log(`QR target URL: ${normalizedUrl}`);
