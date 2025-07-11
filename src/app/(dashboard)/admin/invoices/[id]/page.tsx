'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import {
  Dialog,
  DialogPanel,
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import {
  Bars3Icon,
  CalendarDaysIcon,
  CreditCardIcon,
  EllipsisVerticalIcon,
  FaceFrownIcon,
  FaceSmileIcon,
  FireIcon,
  HandThumbUpIcon,
  HeartIcon,
  PaperClipIcon,
  UserCircleIcon,
  XMarkIcon as XMarkIconMini,
} from '@heroicons/react/20/solid'
import { BellIcon, XMarkIcon as XMarkIconOutline } from '@heroicons/react/24/outline'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

// This would be fetched from your API based on the invoice ID
const invoice = {
  id: 'in_1234567890',
  number: '#00011',
  status: 'paid',
  customer: {
    name: 'Tuple, Inc',
    email: 'billing@tuple.com',
    address: '886 Walter Street\nNew York, NY 12345',
    logoUrl: 'https://tailwindcss.com/plus-assets/img/logos/48x48/tuple.svg',
  },
  company: {
    name: 'Acme, Inc.',
    address: '7363 Cynthia Pass\nToronto, ON N3Y 4H8',
  },
  subTotal: '$8,800.00',
  tax: '$1,760.00',
  total: '$10,560.00',
  amount: '$10,560.00',
  issuedDate: '2023-01-23',
  dueDate: '2023-01-31',
  paidDate: '2023-01-24',
  paymentMethod: 'MasterCard',
  items: [
    {
      id: 1,
      title: 'Pro Subscription',
      description: 'Monthly subscription to Pro plan with advanced features.',
      hours: '1.0',
      rate: '$99.00',
      price: '$99.00',
    },
    {
      id: 2,
      title: 'Custom Integration',
      description: 'API integration setup and configuration.',
      hours: '40.0',
      rate: '$150.00',
      price: '$6,000.00',
    },
    {
      id: 3,
      title: 'Premium Support',
      description: 'Priority technical support package.',
      hours: '12.0',
      rate: '$120.00',
      price: '$1,440.00',
    },
    {
      id: 4,
      title: 'Training Session',
      description: 'Team training and onboarding session.',
      hours: '8.0',
      rate: '$200.00',
      price: '$1,600.00',
    },
  ],
}

const activity = [
  { id: 1, type: 'created', person: { name: 'System' }, date: '7d ago', dateTime: '2023-01-23T10:32' },
  { id: 2, type: 'sent', person: { name: 'Admin' }, date: '6d ago', dateTime: '2023-01-23T11:24' },
  {
    id: 3,
    type: 'commented',
    person: {
      name: 'Chelsea Hagon',
      imageUrl: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    comment: 'Customer confirmed payment will be processed by end of week.',
    date: '3d ago',
    dateTime: '2023-01-23T15:56',
  },
  { id: 4, type: 'viewed', person: { name: 'Alex Curren' }, date: '2d ago', dateTime: '2023-01-24T09:12' },
  { id: 5, type: 'paid', person: { name: 'Alex Curren' }, date: '1d ago', dateTime: '2023-01-24T09:20' },
]

const moods = [
  { name: 'Urgent', value: 'urgent', icon: FireIcon, iconColor: 'text-white', bgColor: 'bg-red-500' },
  { name: 'Important', value: 'important', icon: HeartIcon, iconColor: 'text-white', bgColor: 'bg-pink-400' },
  { name: 'Positive', value: 'positive', icon: FaceSmileIcon, iconColor: 'text-white', bgColor: 'bg-green-400' },
  { name: 'Concern', value: 'concern', icon: FaceFrownIcon, iconColor: 'text-white', bgColor: 'bg-yellow-400' },
  { name: 'Approved', value: 'approved', icon: HandThumbUpIcon, iconColor: 'text-white', bgColor: 'bg-blue-500' },
  { name: 'Neutral', value: null, icon: XMarkIconMini, iconColor: 'text-gray-400', bgColor: 'bg-transparent' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function InvoiceDetail() {
  const params = useParams()
  const invoiceId = params.id
  const [selected, setSelected] = useState(moods[5])

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'paid':
        return 'rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-600 ring-1 ring-green-600/20 ring-inset'
      case 'pending':
        return 'rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-600 ring-1 ring-yellow-600/20 ring-inset'
      case 'overdue':
        return 'rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-600 ring-1 ring-red-600/20 ring-inset'
      default:
        return 'rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-600/20 ring-inset'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <header className="relative isolate pt-6">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-2xl items-center justify-between gap-x-8 lg:mx-0 lg:max-w-none">
              <div className="flex items-center gap-x-6">
                <img
                  alt={invoice.customer.name}
                  src={invoice.customer.logoUrl}
                  className="size-16 flex-none rounded-full ring-1 ring-gray-900/10"
                />
                <h1>
                  <div className="text-sm/6 text-gray-500">
                    Invoice <span className="text-gray-700">{invoice.number}</span>
                  </div>
                  <div className="mt-1 text-base font-semibold text-gray-900">{invoice.customer.name}</div>
                </h1>
              </div>
              <div className="flex items-center gap-x-4 sm:gap-x-6">
                <button type="button" className="hidden text-sm/6 font-semibold text-gray-900 sm:block">
                  Copy URL
                </button>
                <button type="button" className="hidden text-sm/6 font-semibold text-gray-900 sm:block">
                  Download PDF
                </button>
                <button
                  type="button"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500"
                >
                  Send Reminder
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 grid-rows-1 items-start gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* Invoice summary */}
            <div className="lg:col-start-3 lg:row-end-1">
              <h2 className="sr-only">Summary</h2>
              <div className="rounded-lg bg-white shadow-sm ring-1 ring-gray-900/5">
                <dl className="flex flex-wrap">
                  <div className="flex-auto pt-6 pl-6">
                    <dt className="text-sm/6 font-semibold text-gray-900">Amount</dt>
                    <dd className="mt-1 text-base font-semibold text-gray-900">{invoice.amount}</dd>
                  </div>
                  <div className="flex-none self-end px-6 pt-4">
                    <dt className="sr-only">Status</dt>
                    <dd className={getStatusBadge(invoice.status)}>
                      {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                    </dd>
                  </div>
                  <div className="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-6 pt-6">
                    <dt className="flex-none">
                      <span className="sr-only">Customer</span>
                      <UserCircleIcon aria-hidden="true" className="h-6 w-5 text-gray-400" />
                    </dt>
                    <dd className="text-sm/6 font-medium text-gray-900">{invoice.customer.name}</dd>
                  </div>
                  <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                    <dt className="flex-none">
                      <span className="sr-only">Due date</span>
                      <CalendarDaysIcon aria-hidden="true" className="h-6 w-5 text-gray-400" />
                    </dt>
                    <dd className="text-sm/6 text-gray-500">
                      <time dateTime={invoice.dueDate}>
                        {new Date(invoice.dueDate).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </time>
                    </dd>
                  </div>
                  {invoice.status === 'paid' && (
                    <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                      <dt className="flex-none">
                        <span className="sr-only">Payment method</span>
                        <CreditCardIcon aria-hidden="true" className="h-6 w-5 text-gray-400" />
                      </dt>
                      <dd className="text-sm/6 text-gray-500">Paid with {invoice.paymentMethod}</dd>
                    </div>
                  )}
                </dl>
                <div className="mt-6 border-t border-gray-900/5 px-6 py-6">
                  <button className="text-sm/6 font-semibold text-gray-900 hover:text-gray-700">
                    View in Stripe <span aria-hidden="true">&rarr;</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Invoice Details */}
            <div className="-mx-4 px-4 py-8 shadow-sm ring-1 ring-gray-900/5 sm:mx-0 sm:rounded-lg sm:px-8 sm:pb-14 lg:col-span-2 lg:row-span-2 lg:row-end-2 xl:px-16 xl:pt-16 xl:pb-20 bg-white">
              <h2 className="text-base font-semibold text-gray-900">Invoice Details</h2>
              <dl className="mt-6 grid grid-cols-1 text-sm/6 sm:grid-cols-2">
                <div className="sm:pr-4">
                  <dt className="inline text-gray-500">Issued on</dt>{' '}
                  <dd className="inline text-gray-700">
                    <time dateTime={invoice.issuedDate}>
                      {new Date(invoice.issuedDate).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </time>
                  </dd>
                </div>
                <div className="mt-2 sm:mt-0 sm:pl-4">
                  <dt className="inline text-gray-500">Due on</dt>{' '}
                  <dd className="inline text-gray-700">
                    <time dateTime={invoice.dueDate}>
                      {new Date(invoice.dueDate).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </time>
                  </dd>
                </div>
                <div className="mt-6 border-t border-gray-900/5 pt-6 sm:pr-4">
                  <dt className="font-semibold text-gray-900">From</dt>
                  <dd className="mt-2 text-gray-500">
                    <span className="font-medium text-gray-900">{invoice.company.name}</span>
                    <br />
                    {invoice.company.address.split('\n').map((line, index) => (
                      <span key={index}>
                        {line}
                        {index < invoice.company.address.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </dd>
                </div>
                <div className="mt-8 sm:mt-6 sm:border-t sm:border-gray-900/5 sm:pt-6 sm:pl-4">
                  <dt className="font-semibold text-gray-900">To</dt>
                  <dd className="mt-2 text-gray-500">
                    <span className="font-medium text-gray-900">{invoice.customer.name}</span>
                    <br />
                    {invoice.customer.address.split('\n').map((line, index) => (
                      <span key={index}>
                        {line}
                        {index < invoice.customer.address.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
              
              <table className="mt-16 w-full text-left text-sm/6 whitespace-nowrap">
                <colgroup>
                  <col className="w-full" />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <thead className="border-b border-gray-200 text-gray-900">
                  <tr>
                    <th scope="col" className="px-0 py-3 font-semibold">
                      Services
                    </th>
                    <th scope="col" className="hidden py-3 pr-0 pl-8 text-right font-semibold sm:table-cell">
                      Hours
                    </th>
                    <th scope="col" className="hidden py-3 pr-0 pl-8 text-right font-semibold sm:table-cell">
                      Rate
                    </th>
                    <th scope="col" className="py-3 pr-0 pl-8 text-right font-semibold">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {invoice.items.map((item) => (
                    <tr key={item.id} className="border-b border-gray-100">
                      <td className="max-w-0 px-0 py-5 align-top">
                        <div className="truncate font-medium text-gray-900">{item.title}</div>
                        <div className="truncate text-gray-500">{item.description}</div>
                      </td>
                      <td className="hidden py-5 pr-0 pl-8 text-right align-top text-gray-700 tabular-nums sm:table-cell">
                        {item.hours}
                      </td>
                      <td className="hidden py-5 pr-0 pl-8 text-right align-top text-gray-700 tabular-nums sm:table-cell">
                        {item.rate}
                      </td>
                      <td className="py-5 pr-0 pl-8 text-right align-top text-gray-700 tabular-nums">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th scope="row" className="px-0 pt-6 pb-0 font-normal text-gray-700 sm:hidden">
                      Subtotal
                    </th>
                    <th
                      scope="row"
                      colSpan={3}
                      className="hidden px-0 pt-6 pb-0 text-right font-normal text-gray-700 sm:table-cell"
                    >
                      Subtotal
                    </th>
                    <td className="pt-6 pr-0 pb-0 pl-8 text-right text-gray-900 tabular-nums">{invoice.subTotal}</td>
                  </tr>
                  <tr>
                    <th scope="row" className="pt-4 font-normal text-gray-700 sm:hidden">
                      Tax
                    </th>
                    <th
                      scope="row"
                      colSpan={3}
                      className="hidden pt-4 text-right font-normal text-gray-700 sm:table-cell"
                    >
                      Tax
                    </th>
                    <td className="pt-4 pr-0 pb-0 pl-8 text-right text-gray-900 tabular-nums">{invoice.tax}</td>
                  </tr>
                  <tr>
                    <th scope="row" className="pt-4 font-semibold text-gray-900 sm:hidden">
                      Total
                    </th>
                    <th
                      scope="row"
                      colSpan={3}
                      className="hidden pt-4 text-right font-semibold text-gray-900 sm:table-cell"
                    >
                      Total
                    </th>
                    <td className="pt-4 pr-0 pb-0 pl-8 text-right font-semibold text-gray-900 tabular-nums">
                      {invoice.total}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="lg:col-start-3">
              {/* Activity feed */}
              <h2 className="text-sm/6 font-semibold text-gray-900">Activity</h2>
              <ul role="list" className="mt-6 space-y-6">
                {activity.map((activityItem, activityItemIdx) => (
                  <li key={activityItem.id} className="relative flex gap-x-4">
                    <div
                      className={classNames(
                        activityItemIdx === activity.length - 1 ? 'h-6' : '-bottom-6',
                        'absolute top-0 left-0 flex w-6 justify-center',
                      )}
                    >
                      <div className="w-px bg-gray-200" />
                    </div>
                    {activityItem.type === 'commented' ? (
                      <>
                        <img
                          alt=""
                          src={activityItem.person.imageUrl}
                          className="relative mt-3 size-6 flex-none rounded-full bg-gray-50"
                        />
                        <div className="flex-auto rounded-md p-3 ring-1 ring-gray-200 ring-inset bg-white">
                          <div className="flex justify-between gap-x-4">
                            <div className="py-0.5 text-xs/5 text-gray-500">
                              <span className="font-medium text-gray-900">{activityItem.person.name}</span> commented
                            </div>
                            <time dateTime={activityItem.dateTime} className="flex-none py-0.5 text-xs/5 text-gray-500">
                              {activityItem.date}
                            </time>
                          </div>
                          <p className="text-sm/6 text-gray-500">{activityItem.comment}</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="relative flex size-6 flex-none items-center justify-center bg-white">
                          {activityItem.type === 'paid' ? (
                            <CheckCircleIcon aria-hidden="true" className="size-6 text-indigo-600" />
                          ) : (
                            <div className="size-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300" />
                          )}
                        </div>
                        <p className="flex-auto py-0.5 text-xs/5 text-gray-500">
                          <span className="font-medium text-gray-900">{activityItem.person.name}</span>{' '}
                          {activityItem.type} the invoice.
                        </p>
                        <time dateTime={activityItem.dateTime} className="flex-none py-0.5 text-xs/5 text-gray-500">
                          {activityItem.date}
                        </time>
                      </>
                    )}
                  </li>
                ))}
              </ul>

              {/* New comment form */}
              <div className="mt-6 flex gap-x-3">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="size-6 flex-none rounded-full bg-gray-50"
                />
                <form action="#" className="relative flex-auto">
                  <div className="overflow-hidden rounded-lg pb-12 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600 bg-white">
                    <label htmlFor="comment" className="sr-only">
                      Add your comment
                    </label>
                    <textarea
                      id="comment"
                      name="comment"
                      rows={2}
                      placeholder="Add a note about this invoice..."
                      className="block w-full resize-none bg-transparent px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                      defaultValue={''}
                    />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pr-2 pl-3">
                    <div className="flex items-center space-x-5">
                      <div className="flex items-center">
                        <button
                          type="button"
                          className="-m-2.5 flex size-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                        >
                          <PaperClipIcon aria-hidden="true" className="size-5" />
                          <span className="sr-only">Attach a file</span>
                        </button>
                      </div>
                      <div className="flex items-center">
                        <Listbox value={selected} onChange={setSelected}>
                          <Label className="sr-only">Priority level</Label>
                          <div className="relative">
                            <ListboxButton className="relative -m-2.5 flex size-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500">
                              <span className="flex items-center justify-center">
                                {selected.value === null ? (
                                  <span>
                                    <FaceSmileIcon aria-hidden="true" className="size-5 shrink-0" />
                                    <span className="sr-only">Add priority</span>
                                  </span>
                                ) : (
                                  <span>
                                    <span
                                      className={classNames(
                                        selected.bgColor,
                                        'flex size-8 items-center justify-center rounded-full',
                                      )}
                                    >
                                      <selected.icon aria-hidden="true" className="size-5 shrink-0 text-white" />
                                    </span>
                                    <span className="sr-only">{selected.name}</span>
                                  </span>
                                )}
                              </span>
                            </ListboxButton>

                            <ListboxOptions
                              transition
                              className="absolute bottom-10 z-10 -ml-6 w-60 rounded-lg bg-white py-3 text-base shadow-lg ring-1 ring-black/5 focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:ml-auto sm:w-64 sm:text-sm"
                            >
                              {moods.map((mood) => (
                                <ListboxOption
                                  key={mood.value}
                                  value={mood}
                                  className="relative cursor-default bg-white px-3 py-2 select-none data-focus:bg-gray-100"
                                >
                                  <div className="flex items-center">
                                    <div
                                      className={classNames(
                                        mood.bgColor,
                                        'flex size-8 items-center justify-center rounded-full',
                                      )}
                                    >
                                      <mood.icon
                                        aria-hidden="true"
                                        className={classNames(mood.iconColor, 'size-5 shrink-0')}
                                      />
                                    </div>
                                    <span className="ml-3 block truncate font-medium">{mood.name}</span>
                                  </div>
                                </ListboxOption>
                              ))}
                            </ListboxOptions>
                          </div>
                        </Listbox>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
                    >
                      Comment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
