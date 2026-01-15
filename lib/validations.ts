import { z } from 'zod';

export const searchQuerySchema = z.object({
  query: z.string().min(1, 'Search query is required').max(200, 'Query too long'),
});

export const asinSchema = z.object({
  asin: z.string().regex(/^[A-Z0-9]{10}$/, 'Invalid ASIN format'),
});

export const affiliateLinkSchema = z.object({
  affiliateLink: z.string().min(1, 'Please enter your affiliate link'),
});

export const generateReviewSchema = z.object({
  keyword: z.string().min(1, 'Keyword is required'),
  asin: z.string().min(1, 'Product ASIN is required'),
  productData: z.object({
    title: z.string(),
    price: z.string().optional().nullable(),
    rating: z.number().optional().nullable(),
    reviews_count: z.number().optional().nullable(),
    image: z.string().optional().nullable(), // Product image URL
  }),
  reviews: z.array(
    z.object({
      text: z.string(),
      rating: z.number().optional().nullable(),
    })
  ).optional().default([]),
  affiliateLink: z.string().min(1, 'Affiliate link is required'),
});

export const generatePostSchema = z.object({
  productTitle: z.string().min(1),
  keyword: z.string().min(1),
  pageUrl: z.string().url(),
});

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const signupSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

export type SearchQuery = z.infer<typeof searchQuerySchema>;
export type AsinQuery = z.infer<typeof asinSchema>;
export type AffiliateLink = z.infer<typeof affiliateLinkSchema>;
export type GenerateReviewInput = z.infer<typeof generateReviewSchema>;
export type GeneratePostInput = z.infer<typeof generatePostSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type SignupInput = z.infer<typeof signupSchema>;

