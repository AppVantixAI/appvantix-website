import React from 'react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { CheckoutButton } from '@/components/checkout/CheckoutButton'
import { products } from '@/stripe-config'

function SwirlyDoodle(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 281 40"
      preserveAspectRatio="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"
      />
    </svg>
  )
}

function CheckIcon({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      aria-hidden="true"
      className={clsx(
        'h-6 w-6 flex-none fill-current stroke-current',
        className,
      )}
      {...props}
    >
      <path
        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
        strokeWidth={0}
      />
      <circle
        cx={12}
        cy={12}
        r={8.25}
        fill="none"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Plan({
  name,
  price,
  description,
  priceId,
  mode,
  features,
  featured = false,
}: {
  name: string
  price: string
  description: string
  priceId: string
  mode: 'payment' | 'subscription'
  features: Array<string>
  featured?: boolean
}) {
  return (
    <section
      className={clsx(
        'flex flex-col rounded-3xl px-6 sm:px-8 bg-white shadow-xl',
        featured 
          ? 'order-first py-8 lg:order-none ring-2 ring-orange-400 shadow-2xl transform scale-105' 
          : 'py-8 shadow-lg hover:shadow-xl transition-shadow duration-300',
      )}
    >
      <h3 className="mt-5 font-display text-lg font-semibold text-slate-900">{name}</h3>
      <p
        className={clsx(
          'mt-2 text-base',
          'text-slate-600 leading-relaxed',
        )}
      >
        {description}
      </p>
      <p className="order-first font-display text-5xl font-bold tracking-tight text-slate-900">
        {price}
      </p>
      <ul
        role="list"
        className={clsx(
          'order-last mt-10 flex flex-col gap-y-3 text-sm text-slate-700',
        )}
      >
        {features.map((feature) => (
          <li key={feature} className="flex">
            <CheckIcon className="text-green-500 flex-shrink-0" />
            <span className="ml-4">{feature}</span>
          </li>
        ))}
      </ul>
      <CheckoutButton
        priceId={priceId}
        mode={mode}
        className={clsx(
          'mt-8 w-full py-3 px-6 rounded-lg font-semibold text-base transition-all duration-200',
          featured 
            ? 'bg-orange-600 text-white hover:bg-orange-700 hover:shadow-lg transform hover:scale-105' 
            : 'bg-orange-600 text-white hover:bg-orange-700 hover:shadow-md'
        )}
      >
        Get started
      </CheckoutButton>
    </section>
  )
}

export function Pricing() {
  // Filter products for the main pricing display
  const mainProducts = products.filter(product => 
    product.name.includes('BoltBridge') || product.name.includes('Website Management')
  )

  return (
    <section
      id="pricing"
      aria-label="Pricing"
      className="bg-gradient-to-r from-orange-600 to-red-600 py-20 sm:py-32"
    >
      <Container>
        <div className="md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            <span className="relative whitespace-nowrap">
              <SwirlyDoodle className="absolute top-1/2 left-0 h-[1em] w-full fill-white/30" />
              <span className="relative text-white">AI-powered solutions,</span>
            </span>{' '}
            <span className="text-white">for every business.</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600"></p>
          <p className="mt-4 text-lg text-orange-100">
            From individual productivity tools to enterprise AI solutions, we have the right package for your needs.
          </p>
        </div>
        <div className="-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8">
          {mainProducts.slice(0, 3).map((product, index) => (
            <Plan
              key={product.id}
              name={product.name}
              price={product.price === 0 ? 'Free' : `$${product.price}`}
              description={product.description.split('•')[0].trim()}
              priceId={product.priceId}
              mode={product.mode}
              features={product.description.split('•').slice(1).map(f => f.trim()).filter(Boolean)}
              featured={index === 1}
            />
          ))}
        </div>
        
        {/* Additional products section */}
        <div className="mt-16">
          <h3 className="text-center font-display text-2xl tracking-tight text-white mb-8">
            Additional Services
          </h3>
          <div className="grid max-w-4xl mx-auto grid-cols-1 gap-6 md:grid-cols-2">
            {products.filter(p => !p.name.includes('BoltBridge') && !p.name.includes('Website Management')).map((product) => (
              <div key={product.id} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="font-display text-lg text-slate-900 mb-2">{product.name}</h4>
                <p className="text-slate-600 text-sm mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl text-slate-900">
                    ${product.price}
                  </span>
                  <CheckoutButton
                    priceId={product.priceId}
                    mode={product.mode}
                    className="bg-orange-600 text-white hover:bg-orange-700 px-4 py-2 rounded-lg font-semibold transition-all duration-200 hover:shadow-md"
                  >
                    {product.mode === 'subscription' ? 'Subscribe' : 'Purchase'}
                  </CheckoutButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}