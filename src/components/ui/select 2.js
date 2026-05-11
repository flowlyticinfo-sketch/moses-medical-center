import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from "react";
const Select = React.forwardRef(({ children, onValueChange, onChange, ...props }, ref) => {
    return _jsx("select", { ref: ref, onChange: (e) => {
            onChange?.(e);
            onValueChange?.(e.target.value);
        }, ...props, children: children });
});
Select.displayName = "Select";
const SelectTrigger = React.forwardRef(({ className = '', children, onValueChange, onChange, ...props }, ref) => {
    return (_jsx("select", { ref: ref, className: `w-full px-3 py-2 text-sm cursor-pointer focus:outline-none transition-colors ${className}`, style: {
            height: '36px',
            borderRadius: '7px',
            borderColor: 'var(--border)',
            backgroundColor: 'var(--background)',
            color: 'var(--text-primary)',
            border: '1px solid var(--border)',
            transition: 'border-color 0.15s cubic-bezier(0.4, 0, 1, 1)',
            boxSizing: 'border-box'
        }, onChange: (e) => {
            onChange?.(e);
            onValueChange?.(e.target.value);
        }, onFocus: (e) => {
            e.currentTarget.style.boxShadow = '0 0 0 2px #0070f3';
            e.currentTarget.style.borderColor = '#0070f3';
        }, onBlur: (e) => {
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.borderColor = 'var(--border)';
        }, ...props, children: children }));
});
SelectTrigger.displayName = "SelectTrigger";
const SelectValue = ({ placeholder }) => {
    return _jsx("option", { value: "", children: placeholder || 'Select an option' });
};
const SelectContent = ({ children }) => {
    return _jsx(_Fragment, { children: children });
};
SelectContent.displayName = "SelectContent";
const SelectItem = React.forwardRef(({ children, value, ...props }, ref) => {
    return (_jsx("option", { ref: ref, value: value, ...props, children: children }));
});
SelectItem.displayName = "SelectItem";
export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem };
//# sourceMappingURL=select.js.map