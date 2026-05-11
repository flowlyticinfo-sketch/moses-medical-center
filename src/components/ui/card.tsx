import * as React from "react"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`border ${className}`}
        style={{
          borderRadius: '7px',
          borderColor: '#383838',
          backgroundColor: '#000000',
          border: '1px solid #383838',
          padding: '24px'
        }}
        {...props}
      />
    )
  }
)
Card.displayName = "Card"

export { Card }
