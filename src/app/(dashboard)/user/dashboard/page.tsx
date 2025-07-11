'use client'

import Link from 'next/link'
import { Button } from '@/components/Button'

const quickActions = [
  {
    title: 'Schedule Clarity Call',
    description: 'Book your next consultation',
    href: '/user/clarity-calls',
    icon: '📅',
    color: 'bg-blue-50 text-blue-700',
  },
  {
    title: 'New Prototype',
    description: 'Start a risk-free prototype',
    href: '/user/prototyping',
    icon: '🧪',
    color: 'bg-purple-50 text-purple-700',
  },
  {
    title: 'Run Tools',
    description: 'Automate your tasks',
    href: '/user/tools',
    icon: '⚡',
    color: 'bg-green-50 text-green-700',
  },
  {
    title: 'Continue Learning',
    description: 'Resume your course',
    href: '/user/learn',
    icon: '📚',
    color: 'bg-indigo-50 text-indigo-700',
  },
]

const recentActivity = [
  { type: 'call', description: 'Clarity call completed', time: '2 hours ago' },
  { type: 'prototype', description: 'E-commerce prototype approved', time: '1 day ago' },
  { type: 'tool', description: 'Daily Clarity ran successfully', time: '1 day ago' },
  { type: 'course', description: 'Completed Module 2', time: '3 days ago' },
]

const stats = [
  { label: 'Time Saved', value: '47 hours', change: '+12%' },
  { label: 'Tasks Automated', value: '236', change: '+18%' },
  { label: 'Active Projects', value: '4', change: '0%' },
  { label: 'Course Progress', value: '45%', change: '+5%' },
]

export default function UserDashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Welcome back!</h1>
        <p className="mt-2 text-gray-600">
          Here's your AppVantix journey at a glance.
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <p className="text-sm font-medium text-gray-600">{stat.label}</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
            <p className={`text-sm mt-1 ${
              stat.change.startsWith('+') ? 'text-green-600' : 'text-gray-600'
            }`}>
              {stat.change} this month
            </p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action) => (
            <Link
              key={action.title}
              href={action.href}
              className="group relative rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow"
            >
              <div className={`w-12 h-12 rounded-lg ${action.color} flex items-center justify-center text-2xl mb-3`}>
                {action.icon}
              </div>
              <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                {action.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{action.description}</p>
              <span className="absolute top-4 right-4 text-gray-400 group-hover:text-orange-600 transition-colors">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white shadow-sm rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  activity.type === 'call' ? 'bg-blue-100 text-blue-600' :
                  activity.type === 'prototype' ? 'bg-purple-100 text-purple-600' :
                  activity.type === 'tool' ? 'bg-green-100 text-green-600' :
                  'bg-indigo-100 text-indigo-600'
                }`}>
                  {activity.type === 'call' ? '📅' :
                   activity.type === 'prototype' ? '🧪' :
                   activity.type === 'tool' ? '⚡' : '📚'}
                </div>
                <div className="flex-1">
                  <p className="text-gray-900">{activity.description}</p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-white shadow-sm rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Recommended Next Steps</h2>
          <div className="space-y-3">
            <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
              <p className="font-medium text-orange-900">Schedule Weekly Check-in</p>
              <p className="text-sm text-orange-700 mt-1">Keep momentum with regular clarity calls</p>
              <Button size="sm" color="orange" className="mt-2">
                Schedule Now
              </Button>
            </div>
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="font-medium text-blue-900">Complete Module 3</p>
              <p className="text-sm text-blue-700 mt-1">You're 40% through Rapid Prototyping</p>
              <Button size="sm" variant="outline" className="mt-2">
                Continue Learning
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Value Reminder */}
      <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-6 border border-orange-200">
        <h3 className="text-lg font-semibold text-orange-900 mb-2">
          Your AppVantix Impact
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          <div>
            <p className="text-2xl font-bold text-orange-800">12</p>
            <p className="text-sm text-orange-700">Problems Solved</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-orange-800">4</p>
            <p className="text-sm text-orange-700">Prototypes Created</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-orange-800">47h</p>
            <p className="text-sm text-orange-700">Time Recovered</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-orange-800">3x</p>
            <p className="text-sm text-orange-700">Productivity Gain</p>
          </div>
        </div>
      </div>
    </div>
  )
}
