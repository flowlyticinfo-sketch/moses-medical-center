import * as React from "react";
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    onValueChange?: (value: string) => void;
}
declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLSelectElement>>;
interface SelectTriggerProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    children?: React.ReactNode;
    onValueChange?: (value: string) => void;
}
declare const SelectTrigger: React.ForwardRefExoticComponent<SelectTriggerProps & React.RefAttributes<HTMLSelectElement>>;
declare const SelectValue: ({ placeholder }: {
    placeholder?: string;
}) => import("react/jsx-runtime").JSX.Element;
interface SelectContentProps {
    children?: React.ReactNode;
}
declare const SelectContent: {
    ({ children }: SelectContentProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
interface SelectItemProps extends React.OptionHTMLAttributes<HTMLOptionElement> {
    children?: React.ReactNode;
}
declare const SelectItem: React.ForwardRefExoticComponent<SelectItemProps & React.RefAttributes<HTMLOptionElement>>;
export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem };
//# sourceMappingURL=select.d.ts.map