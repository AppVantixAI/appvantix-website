import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'What makes AppVantix different from other AI companies?',
      answer:
        'We focus on enhancing human capabilities rather than replacing them. Our AI solutions save time while keeping humans at the center of decision-making.',
    },
    {
      question: 'Do you offer custom AI app development?',
      answer: 'Yes, we create tailored AI applications designed specifically for your business needs, from concept to deployment with ongoing support.',
    },
    {
      question: 'What platforms do your apps support?',
      answer:
        'We develop for iOS, Android, macOS, and web platforms. All apps are optimized for their respective app stores and online distribution.',
    },
  ],
  [
    {
      question: 'How do your SaaS solutions integrate with existing workflows?',
      answer:
        'Our SaaS platforms are designed to seamlessly integrate with your current tools and processes, enhancing productivity without disrupting established workflows.',
    },
    {
      question: 'What kind of AI consultation services do you provide?',
      answer:
        'We offer strategic guidance on implementing AI solutions, helping you identify opportunities where AI can enhance your operations while maintaining your human-centered approach.',
    },
    {
      question: 'How quickly can you deliver a custom AI solution?',
      answer:
        'Timeline depends on complexity, but most custom apps take 2-4 months from concept to deployment. We provide regular updates throughout the development process.',
    },
  ],
  [
    {
      question: 'Do you provide ongoing support after deployment?',
      answer:
        'Absolutely. We offer ongoing maintenance, updates, and optimization services to ensure your AI solutions continue to deliver value as your business grows.',
    },
    {
      question: 'Can I try your apps before purchasing?',
      answer: 'Yes, most of our apps offer free trials or demo versions. Contact us to discuss which solutions would be best for your specific needs.',
    },
    {
      question: 'How do you ensure AI solutions truly enhance rather than replace human work?',
      answer:
        'We design every solution with human oversight in mind, creating AI that assists decision-making, automates repetitive tasks, and provides insights while preserving human judgment and creativity.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Have questions about our AI solutions? Here are answers to the most common inquiries from our clients.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg/7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}