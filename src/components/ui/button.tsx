import * as React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'ghost' | 'accent'
  size?: 'default' | 'sm' | 'lg'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'default', size = 'default', ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all'

    const sizes = {
      default: 'h-9 px-4 text-sm',
      sm: 'h-8 px-3 text-xs',
      lg: 'h-10 px-6 text-base'
    }

    const variants = {
      default: 'text-[#eaeaea] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0070f3]',
      ghost: 'border border-[#383838] text-[#eaeaea] hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0070f3]',
      accent: 'text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0070f3]'
    }

    const variantStyles = {
      default: {
        backgroundColor: '#444444',
        borderRadius: '7px',
        transition: 'background 0.15s cubic-bezier(0.4, 0, 1, 1), border 0.15s cubic-bezier(0.4, 0, 1, 1), color 0.15s cubic-bezier(0.4, 0, 1, 1)'
      },
      ghost: {
        borderRadius: '7px',
        transition: 'background 0.15s cubic-bezier(0.4, 0, 1, 1), border 0.15s cubic-bezier(0.4, 0, 1, 1), color 0.15s cubic-bezier(0.4, 0, 1, 1)'
      },
      accent: {
        backgroundColor: '#0070f3',
        borderRadius: '7px',
        transition: 'background 0.15s cubic-bezier(0.4, 0, 1, 1), border 0.15s cubic-bezier(0.4, 0, 1, 1), color 0.15s cubic-bezier(0.4, 0, 1, 1)'
      }
    }

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`}
        style={variantStyles[variant]}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
