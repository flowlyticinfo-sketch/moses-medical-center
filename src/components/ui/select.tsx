import * as React from "react"

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  onValueChange?: (value: string) => void
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ children, onValueChange, onChange, ...props }, ref) => {
    return <select ref={ref} onChange={(e) => {
      onChange?.(e);
      onValueChange?.(e.target.value);
    }} {...props}>{children}</select>
  }
)
Select.displayName = "Select"

interface SelectTriggerProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children?: React.ReactNode
  onValueChange?: (value: string) => void
}

const SelectTrigger = React.forwardRef<HTMLSelectElement, SelectTriggerProps>(
  ({ className = '', children, onValueChange, onChange, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={`w-full px-3 py-2 text-sm cursor-pointer focus:outline-none transition-colors ${className}`}
        style={{
          height: '36px',
          borderRadius: '7px',
          borderColor: 'var(--border)',
          backgroundColor: 'var(--background)',
          color: 'var(--text-primary)',
          border: '1px solid var(--border)',
          transition: 'border-color 0.15s cubic-bezier(0.4, 0, 1, 1)',
          boxSizing: 'border-box'
        }}
        onChange={(e) => {
          onChange?.(e);
          onValueChange?.(e.target.value);
        }}
        onFocus={(e) => {
          e.currentTarget.style.boxShadow = '0 0 0 2px #0070f3';
          e.currentTarget.style.borderColor = '#0070f3';
        }}
        onBlur={(e) => {
          e.currentTarget.style.boxShadow = 'none';
          e.currentTarget.style.borderColor = 'var(--border)';
        }}
        {...props}
      >
        {children}
      </select>
    )
  }
)
SelectTrigger.displayName = "SelectTrigger"

const SelectValue = ({ placeholder }: { placeholder?: string }) => {
  return <option value="">{placeholder || 'Select an option'}</option>
}

interface SelectContentProps {
  children?: React.ReactNode
}

const SelectContent = ({ children }: SelectContentProps) => {
  return <>{children}</>
}
SelectContent.displayName = "SelectContent"

interface SelectItemProps extends React.OptionHTMLAttributes<HTMLOptionElement> {
  children?: React.ReactNode
}

const SelectItem = React.forwardRef<HTMLOptionElement, SelectItemProps>(
  ({ children, value, ...props }, ref) => {
    return (
      <option ref={ref} value={value} {...props}>
        {children}
      </option>
    )
  }
)
SelectItem.displayName = "SelectItem"

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem }
