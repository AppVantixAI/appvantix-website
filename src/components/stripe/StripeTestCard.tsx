'use client'

import { useState } from 'react'
import { CheckoutButton } from '@/components/checkout/CheckoutButton'
import { CustomerPortalButton } from '@/components/subscription/CustomerPortalButton'
import { Button } from '@/components/Button'
import { products } from '@/stripe-config'

export function StripeTestCard() {
  const [selectedProduct, setSelectedProduct] = useState(products[0])

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4">Test Stripe Integration</h3>
      
      {/* Product Selection */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Product to Test:
        </label>
        <select
          value={selectedProduct.id}
          onChange={(e) => {
            const product = products.find(p => p.id === e.target.value)
            if (product) setSelectedProduct(product)
          }}
          className="w-full border border-gray-300 rounded-md px-3 py-2"
        >
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name} - ${product.price}
            </option>
          ))}
        </select>
      </div>

      {/* Product Details */}
      <div className="mb-4 p-3 bg-gray-50 rounded">
        <h4 className="font-medium">{selectedProduct.name}</h4>
        <p className="text-sm text-gray-600 mt-1">{selectedProduct.description}</p>
        <p className="text-lg font-bold mt-2">${selectedProduct.price}</p>
        <p className="text-xs text-gray-500">Mode: {selectedProduct.mode}</p>
      </div>

      {/* Test Buttons */}
      <div className="space-y-3">
        <CheckoutButton
          priceId={selectedProduct.priceId}
          mode={selectedProduct.mode}
          className="w-full bg-blue-600 text-white hover:bg-blue-700"
        >
          Test Checkout
        </CheckoutButton>

        <CustomerPortalButton className="w-full">
          <Button variant="outline" className="w-full">
            Test Customer Portal
          </Button>
        </CustomerPortalButton>
      </div>

      {/* Test Card Info */}
      <div className="mt-4 p-3 bg-blue-50 rounded text-xs">
        <p className="font-medium text-blue-800">Test Card Numbers:</p>
        <p className="text-blue-700">Success: 4242 4242 4242 4242</p>
        <p className="text-blue-700">Decline: 4000 0000 0000 0002</p>
        <p className="text-blue-700">Any future date, any CVC</p>
      </div>
    </div>
  )
}