import { ReactNode } from 'react'

type ButtonProps = {
  variant?: 'icon' | 'rounded'
  color?: 'red' | 'pink' | 'blue' | 'white'
  children: ReactNode
  onClick?: () => void
  className?: string
}

export default function Button({ variant = 'icon', color = 'white', children, onClick, className = '' }: ButtonProps) {
  const baseStyles = 'flex items-center justify-center'
  const variantStyles = {
    icon: 'text-current',
    rounded: 'w-10 h-10 rounded-full'
  }
  const colorStyles = {
    red: 'bg-red-600 text-white',
    pink: 'bg-pink-500 text-white',
    blue: 'bg-blue-500 text-white',
    white: 'bg-white text-gray-800'
  }

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${colorStyles[color]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}