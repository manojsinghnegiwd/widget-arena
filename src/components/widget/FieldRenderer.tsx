import { FC } from "react";
import { InputType, WidgetField } from "../../typings/widget";
import KeyValuePairInput from "./Fields/KeyValuePairInput";
import MultipleInput from "./Fields/MultipleInput";

// Interface for the FieldRenderer component props
interface FieldRendererProps {
    field: WidgetField;
    value: any;
    onChange: any;
    [key: string]: any
}

// A component that renders a field based on the field type
const FieldRenderer: FC<FieldRendererProps> = ({ field, value, onChange, ...props }) => {
    switch (field.type) {
        case InputType.TEXT:
            return (
                <input type="text" value={value} onChange={e => onChange(e.target.value)} {...props} />
            );
        case InputType.TEXTAREA:
            return (
                <textarea value={value} onChange={e => onChange(e.target.value)} {...props} />
            );
        case InputType.DATE:
            return (
                <input type="date" value={value} onChange={e => onChange(e.target.value)} {...props} />
            );
        case InputType.MULTIPLE_INPUT:
            return (
                <MultipleInput value={value} onChange={onChange} {...props} />
            );
        case InputType.KEY_VALUE_PAIR:
            return (
                <KeyValuePairInput value={value} onChange={onChange} {...props} />
            )
        default:
            return null;
    }
}

export default FieldRenderer;