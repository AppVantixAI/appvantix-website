# Salient

Salient is a [Tailwind Plus](https://tailwindcss.com/plus) site template built using [Tailwind CSS](https://tailwindcss.com) and [Next.js](https://nextjs.org).

## Stripe Integration

This app includes a complete Stripe integration for payments and subscriptions:

### Setup

1. **Environment Variables**: Copy `.env.local` and add your Stripe keys:
   ```bash
   STRIPE_SECRET_KEY=sk_test_...
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   STRIPE_WEBHOOK_SECRET=whsec_...
   ```

2. **Webhook Endpoint**: Set up a webhook in your Stripe Dashboard pointing to:
   ```
   https://your-domain.com/api/webhooks/stripe
   ```

3. **Products**: Update the product configurations in `src/stripe-config.ts` with your actual Stripe product and price IDs.

### Features

- ✅ Checkout sessions for one-time payments and subscriptions
- ✅ Customer portal for self-service billing management
- ✅ Webhook handling for real-time updates
- ✅ Database integration with Supabase
- ✅ Admin dashboard with revenue analytics
- ✅ Subscription management and status tracking

## Getting started

To get started with this template, first install the npm dependencies:

```bash
npm install
```

Next, run the development server:

```bash
npm run dev
```

Finally, open [https://appvantix.com](https://appvantix.com) in your browser to view the website.

## Customizing

You can start editing this template by modifying the files in the `/src` folder. The site will auto-update as you edit these files.

## License

This site template is a commercial product and is licensed under the [Tailwind Plus license](https://tailwindcss.com/plus/license).

## Learn more

To learn more about the technologies used in this site template, see the following resources:

- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation
- [Next.js](https://nextjs.org/docs) - the official Next.js documentation
- [Headless UI](https://headlessui.dev) - the official Headless UI documentation
