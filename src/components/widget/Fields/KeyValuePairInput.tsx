import { FC, useState } from "react";

// Interface for the KeyValuePairInput component props
interface KeyValuePairInputProps {
    value: any;
    onChange: any;
    [key: string]: any
}

// A component that renders an editable list of key-value pairs
const KeyValuePairInput: FC<KeyValuePairInputProps> = ({ value, onChange, ...props }) => {
    const [values, setValues] = useState<{[key: string]: string}>(value || {});

    // This function is called when a key is changed
    // It updates the key-value pair at the given index
    const handleKeyChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const newValues = [...Object.keys(values).map(key => ({key, value: values[key]}))];
        newValues[index].key = e.target.value;
        setValues(newValues.reduce((acc, {key, value}) => ({...acc, [key]: value}), {}));
        onChange(newValues);
    }

    // This function is called when a value is changed
    // It updates the key-value pair at the given index
    const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const newValues = [...Object.keys(values).map(key => ({key, value: values[key]}))];
        newValues[index].value = e.target.value;
        setValues(newValues.reduce((acc, {key, value}) => ({...acc, [key]: value}), {}));
        onChange(newValues);
    }

    const handleAddNew = () => {
        setValues({...values, ...{[`key${Object.keys(values).length + 1}`]: `value${Object.keys(values).length + 1}`}});
    };

    const handleDelete = (key: string) => {
        const newValues = {...values};
        delete newValues[key];
        setValues(newValues);
        onChange(newValues);
    };

    return (
        <div>
            {
                Object.keys(values).map((key: string, index) => {
                    const currentValue = values[key];

                    return (
                        <div key={index}>
                            <input type="text" value={key} onChange={e => handleKeyChange(e, index)} {...props} />
                            <input type="text" value={currentValue} onChange={e => handleValueChange(e, index)} {...props} />
                            <button onClick={() => handleDelete(key)}>Delete</button>
                        </div>
                    )
                })
            }
            <button onClick={handleAddNew}>Add new</button>
        </div>
    )
}

export default KeyValuePairInput;

