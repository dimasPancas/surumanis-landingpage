'use client'

import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'popular' | 'success' | 'warning'
}

export default function Badge({ children, variant = 'default' }: BadgeProps) {
  const variantStyles = {
    default: 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-200',
    popular: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400',
    success: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    warning: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400'
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variantStyles[variant]}`}
    >
      {children}
    </span>
  )
}