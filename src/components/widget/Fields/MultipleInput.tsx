import { FC, useState } from "react";

// Interface for the MultipleInput component props
interface MultipleInputProps {
    value: any;
    onChange: any;
    [key: string]: any
}

// A component which renders an editable list of fields
const MultipleInput: FC<MultipleInputProps> = ({ value, onChange, ...props }) => {
    const [values, setValues] = useState<any[]>(value || []);

    const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const newValues = [...values];
        newValues[index] = e.target.value;
        setValues(newValues);
        onChange(newValues);
    };

    const handleAddNew = () => {
        setValues([...values, '']);
    };

    const handleDelete = (index: number) => {
        const newValues = [...values];
        newValues.splice(index, 1);
        setValues(newValues);
        onChange(newValues);
    };

    return (
        <div>
            {
                values.map((value, index) => {
                    return (
                        <div key={index}>
                            <input type="text" value={value} onChange={e => handleValueChange(e, index)} {...props} />
                            <button onClick={() => handleDelete(index)}>Delete</button>
                        </div>
                    )
                })
            }
            <button onClick={handleAddNew}>Add new</button>
        </div>
    )
}

export default MultipleInput;
