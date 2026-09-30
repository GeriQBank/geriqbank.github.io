// The picture shown when a link to the site is shared on WhatsApp, Telegram or
// social media (800 x 420). It is stored as base64 text, split across five
// files in src/assets, so that it can be published like every other file.
import part1 from '../assets/og-image.b64?raw';
import part2 from '../assets/og-image-2.b64?raw';
import part3 from '../assets/og-image-3.b64?raw';
import part4 from '../assets/og-image-4.b64?raw';
import part5 from '../assets/og-image-5.b64?raw';

export function GET() {
  const encoded = [part1, part2, part3, part4, part5].join('').replace(/\s/g, '');
  return new Response(Buffer.from(encoded, 'base64'), { headers: { 'Content-Type': 'image/png' } });
}
