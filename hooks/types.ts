export interface PortfolioItem {
  id: number
  title: string
  category: string
  image: string
  link: string
  description: string
  tech: string[]
}

export interface ServiceType {
  id: number
  title: string
  description: string
  icon: string
  price: string
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}