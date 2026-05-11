import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
const Textarea = React.forwardRef(({ className = '', ...props }, ref) => {
    return (_jsx("textarea", { ref: ref, className: `w-full px-3 py-2 text-sm font-sans resize-none focus:outline-none transition-colors ${className}`, style: {
            borderRadius: '7px',
            borderColor: 'var(--border)',
            backgroundColor: 'var(--background)',
            color: 'var(--text-primary)',
            border: '1px solid var(--border)',
            transition: 'border-color 0.15s cubic-bezier(0.4, 0, 1, 1)',
            boxSizing: 'border-box',
            minHeight: '80px'
        }, onFocus: (e) => {
            e.currentTarget.style.boxShadow = '0 0 0 2px #0070f3';
            e.currentTarget.style.borderColor = '#0070f3';
        }, onBlur: (e) => {
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.borderColor = 'var(--border)';
        }, placeholder: "...", ...props }));
});
Textarea.displayName = "Textarea";
export { Textarea };
//# sourceMappingURL=textarea.js.map