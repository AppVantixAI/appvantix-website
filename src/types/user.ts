// User-related types
export interface UserProfile {
  id: number
  email: string
  name: string
  avatar?: string
  bio?: string
  preferences?: UserPreferences
  createdAt: string
  updatedAt: string
}

export interface UserPreferences {
  theme: 'light' | 'dark'
  notifications: {
    email: boolean
    push: boolean
    marketing: boolean
  }
  language: string
}

export interface Project {
  id: number
  name: string
  description?: string
  status: 'active' | 'completed' | 'archived'
  userId: number
  createdAt: string
  updatedAt: string
}

export interface UserStats {
  totalProjects: number
  activeProjects: number
  completedProjects: number
  lastActivity: string
}
