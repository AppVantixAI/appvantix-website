// Authentication types
export interface User {
  id: number
  email: string
  name?: string
  role: 'user' | 'admin'
  createdAt: string
  updatedAt?: string
}

export interface AuthResponse {
  success: boolean
  user?: User
  token?: string
  message?: string
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterData {
  email: string
  password: string
  name?: string
}
