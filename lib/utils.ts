import { type ClassValue, clsx } from 'clsx';

// Simple class name merger (no twMerge dependency)
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

// Generate a URL-friendly slug
export function generateSlug(title: string): string {
  const base = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 40);
  
  const random = Math.random().toString(36).substring(2, 8);
  return `${base}-${random}`;
}

// Format currency
export function formatCurrency(amount: number | string): string {
  if (typeof amount === 'string') {
    return amount;
  }
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

// Format date
export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date));
}

// Format relative time
export function formatRelativeTime(date: string | Date): string {
  const now = new Date();
  const then = new Date(date);
  const diffMs = now.getTime() - then.getTime();
  const diffSecs = Math.floor(diffMs / 1000);
  const diffMins = Math.floor(diffSecs / 60);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffSecs < 60) return 'just now';
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  return formatDate(date);
}

// Truncate text
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trim() + '...';
}

// Generate random earnings for demo
export function generateRandomEarning(): string {
  const amounts = [47, 97, 147, 197, 247, 297, 347, 497, 697, 997];
  const cents = Math.floor(Math.random() * 100);
  const dollars = amounts[Math.floor(Math.random() * amounts.length)];
  return `$${dollars}.${cents.toString().padStart(2, '0')}`;
}

// Random names for proof
export const proofNames = [
  'Sarah M.', 'Mike T.', 'Jessica L.', 'David R.', 'Amanda K.',
  'Chris P.', 'Emily W.', 'Jason B.', 'Rachel H.', 'Brian S.',
  'Nicole F.', 'Kevin D.', 'Ashley G.', 'Matt C.', 'Lauren E.',
];

// Random products for proof
export const proofProducts = [
  'Kitchen Gadget', 'Fitness Tracker', 'Wireless Earbuds', 'Smart Watch',
  'Air Fryer', 'Coffee Maker', 'Yoga Mat', 'Blender', 'Massage Gun',
  'Ring Light', 'Standing Desk', 'Water Bottle', 'Power Bank', 'LED Lights',
];

// Get random item from array
export function getRandomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Copy to clipboard
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

// Simple rate limiter (per-user, in-memory)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

export function checkRateLimit(
  userId: string,
  limit: number = 10,
  windowMs: number = 60000
): { allowed: boolean; remaining: number; resetIn: number } {
  const now = Date.now();
  const key = userId;
  const entry = rateLimitMap.get(key);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: limit - 1, resetIn: windowMs };
  }

  if (entry.count >= limit) {
    return { allowed: false, remaining: 0, resetIn: entry.resetAt - now };
  }

  entry.count++;
  return { allowed: true, remaining: limit - entry.count, resetIn: entry.resetAt - now };
}

