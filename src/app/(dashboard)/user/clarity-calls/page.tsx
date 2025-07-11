'use client'

import { useState } from 'react'
import { Button } from '@/components/Button'

export default function ClarityCallsPage() {
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [painPoints, setPainPoints] = useState('')

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM'
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Clarity Call Scheduling</h1>
        <p className="mt-2 text-gray-600">
          Book a consultation to translate your problems into clear, actionable solutions.
        </p>
      </div>

      <div className="bg-white shadow-sm rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Schedule Your Call</h2>
        
        <div className="space-y-6">
          {/* Date Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Date
            </label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500"
              min={new Date().toISOString().split('T')[0]}
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
                  onClick={() => setSelectedTime(time)}
                  className={`px-4 py-2 text-sm rounded-md border ${
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
              What keeps you up at night?
            </label>
            <textarea
              value={painPoints}
              onChange={(e) => setPainPoints(e.target.value)}
              rows={4}
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500"
              placeholder="Describe your main challenges or pain points..."
            />
          </div>

          <Button
            color="orange"
            className="w-full"
            disabled={!selectedDate || !selectedTime || !painPoints}
          >
            Schedule Call
          </Button>
        </div>
      </div>

      {/* Upcoming Calls */}
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Upcoming Calls</h2>
        <p className="text-gray-600">No scheduled calls yet.</p>
      </div>
    </div>
  )
}
