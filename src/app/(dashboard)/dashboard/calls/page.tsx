'use client'

import { useState } from 'react'

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM'
]

const upcomingCalls = [
  {
    id: 1,
    title: 'Problem Discovery Call',
    date: 'July 15, 2025',
    time: '2:00 PM',
    status: 'confirmed'
  }
]

export default function ClarityCallsPage() {
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [painPoints, setPainPoints] = useState('')
  const [keepsUpAtNight, setKeepsUpAtNight] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log({ selectedDate, selectedTime, painPoints, keepsUpAtNight })
  }

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Clarity Call Scheduling</h1>
        <p className="mt-2 text-gray-600">
          Transform your problems into clear solutions through guided consultations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Scheduling Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Schedule Your Call</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Date Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              {/* Time Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Time (15-30 min slots)
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`px-3 py-2 text-sm rounded-md border transition-colors ${
                        selectedTime === time
                          ? 'bg-orange-500 text-white border-orange-500'
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Pain Points */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What are your main pain points?
                </label>
                <textarea
                  value={painPoints}
                  onChange={(e) => setPainPoints(e.target.value)}
                  rows={3}
                  placeholder="Describe the challenges you're facing..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              {/* What Keeps You Up At Night */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What keeps you up at night?
                </label>
                <textarea
                  value={keepsUpAtNight}
                  onChange={(e) => setKeepsUpAtNight(e.target.value)}
                  rows={3}
                  placeholder="What worries or concerns are weighing on your mind..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                disabled={!selectedDate || !selectedTime}
                className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Schedule Clarity Call
              </button>
            </form>
          </div>
        </div>

        {/* Upcoming Calls & Information */}
        <div className="space-y-6">
          {/* Upcoming Calls */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Calls</h3>
            {upcomingCalls.length > 0 ? (
              <div className="space-y-3">
                {upcomingCalls.map((call) => (
                  <div key={call.id} className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900">{call.title}</h4>
                    <p className="text-sm text-gray-600">{call.date} at {call.time}</p>
                    <span className="inline-block mt-2 px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                      {call.status}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-sm">No upcoming calls scheduled.</p>
            )}
          </div>

          {/* What to Expect */}
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">What to Expect</h3>
            <ul className="space-y-2 text-sm text-blue-800">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Problem translation and clarification
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Solution pathway identification
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Next steps and action plan
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Automated follow-up with prep questions
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}