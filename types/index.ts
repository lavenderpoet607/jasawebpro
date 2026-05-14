import { ReactNode } from "react"

export interface ServiceType {
  id: number
  title: string
  description: string
  icon: string
  price: string
}

export interface PortfolioItem {
  description: ReactNode
  tech: any
  id: number
  title: string
  category: string
  image: string
  link: string
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}