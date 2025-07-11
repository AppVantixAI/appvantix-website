export interface Product {
  id: string
  priceId: string
  name: string
  description: string
  mode: 'payment' | 'subscription'
  price?: number
}

export const products: Product[] = [
  {
    id: 'prod_Sb2YMSzawWaAZK',
    priceId: 'price_1RfqTE2McnaoasvfxrOmGuOm',
    name: 'BoltBridge Premium',
    description: 'Enterprise-grade, all-inclusive workspace with no limits and the best AI models.• Unlimited participants & meeting duration, HD video• Premium AI models, unlimited Bolt-lets & transcripts• Advanced analytics, custom integrations, dedicated support',
    mode: 'subscription',
    price: 25.00
  },
  {
    id: 'prod_Sb2XUpOqAcSn1i',
    priceId: 'price_1RfqSi2McnaoasvfehoZ6VZ2',
    name: 'BoltBridge Free',
    description: 'Core white-boarding—ideal for personal use or very small teams.• Basic canvas tools & AI assist• Up to 3 boards, 5 participants, 60-min calls• Standard support',
    mode: 'subscription',
    price: 0.00
  },
  {
    id: 'prod_Sb2XUT4brU7zxT',
    priceId: 'price_1RfqS72McnaoasvfZAxU0e11',
    name: 'BoltBridge Pro',
    description: 'Scales collaboration for growing teams that need richer AI and branding control.• Unlimited boards, 25 participants, 3-hour meetings• Advanced AI assistance, meeting recordings• Custom branding, 10 Bolt-lets, priority support',
    mode: 'subscription',
    price: 15.00
  },
  {
    id: 'prod_S9fsMnc73cws5l',
    priceId: 'price_1RFMWZ2Mcnaoasvf7pvluQNf',
    name: 'Clipboard Privacy Manager Pro',
    description: 'Advanced clipboard privacy protection with enterprise-grade security features.',
    mode: 'payment',
    price: 9.99
  },
  {
    id: 'prod_RW132c629gyipt',
    priceId: 'price_1Qcz1P2McnaoasvfcgqL4M7w',
    name: 'Professional Plan - (Website Management)',
    description: 'Weekly Updates & Proactive Monitoring, 2 Blog Articles (800–1,200 words) + 1 AI Podcast Episode, Quarterly SEO Reviews & Competitor Analysis, Same-Day Email & Chat Support.For questions, contact us at support@appvantix.com . We appreciate your trust in AppVantix!',
    mode: 'subscription',
    price: 750.00
  },
  {
    id: 'prod_RW12EHpsug1gay',
    priceId: 'price_1Qcz0d2McnaoasvfoQa6cw4z',
    name: 'Starter Plan - (Website Management)',
    description: 'Monthly Updates & Bug Fixes, 1 AI-Generated Blog Article (500–800 words), Basic Analytics Reporting, 48-Hour Email Support.For questions, contact us at support@appvantix.com . We appreciate your trust in AppVantix!',
    mode: 'subscription',
    price: 250.00
  },
  {
    id: 'prod_RW0yk7QleY8tUZ',
    priceId: 'price_1Qcyx12Mcnaoasvfjz5RZ7bx',
    name: 'Growth Plan - (Website Management)',
    description: 'Thank you for subscribing to the Growth Plan with AppVantix. This $475/month subscription includes Monthly Updates, Priority Error Handling, 1 AI Generated Blog Article (700–1,000 words), Detailed Analytics & SEO Recommendations, and 24-Hour Email Support. For questions, contact us at support@appvantix.com . We appreciate your trust in AppVantix!',
    mode: 'subscription',
    price: 475.00
  }
]

export function getProductByPriceId(priceId: string): Product | undefined {
  return products.find(product => product.priceId === priceId)
}

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id)
}