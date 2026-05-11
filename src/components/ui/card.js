import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
const Card = React.forwardRef(({ className = '', ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: `border ${className}`, style: {
            borderRadius: '7px',
            borderColor: '#383838',
            backgroundColor: '#000000',
            border: '1px solid #383838',
            padding: '24px'
        }, ...props }));
});
Card.displayName = "Card";
export { Card };
//# sourceMappingURL=card.js.map