/* eslint-disable react/prop-types */
import { DatePicker, Form } from 'antd';

const FormInput = ({ 
    label, 
    name, 
    className, 
    required, 
    isEmail, 
    initialValue, 
    placeholder, 
    rules = [], 
    inputProps, 
    textArea, 
    type, 
    onKeyPress, 
    readOnly, 
    onChange 
}) => {
    let initRules = [
        {
            required: required,
            message: `Please provide ${typeof label === 'string' && label?.toLowerCase() || 'a value'}`
        },
    ];
    
    if (isEmail) {
        initRules.push({ type: 'email', message: 'Please enter a valid email address' });
    }

    let input = (
        <input
            className={`form-input ${className}`}
            type={type}
            placeholder={placeholder}
            onKeyDown={onKeyPress}
            onChange={onChange}
            readOnly={readOnly}
            {...inputProps}
        />
    );

    if (textArea) {
        input = (
            <textarea 
                placeholder={placeholder} 
                onKeyDown={onKeyPress} 
                rows={4} 
                className="form-input w-full p-2 rounded-sm"
            />
        );
    }

    if (type === 'date') {
        input = <DatePicker />;
    }

    return (
        <Form.Item
            name={name}
            label={label}
            rules={[...initRules, ...rules]}
            className="mb-4"
            initialValue={initialValue || ''}
        >
            {input}
        </Form.Item>
    );
};

export default FormInput;

export const InputFormatViewer = ({ value, formatter }) => {
    return (
        <>
            {formatter ? formatter(value) : value}
        </>
    );
};

export const HiddenInput = ({ name, initialValue }) => {
    const BlankInput = ({ value }) => <input value={value || ''} onChange={() => {}} />;
    
    return (
        <Form.Item
            name={name}
            initialValue={initialValue || ''}
            hidden
        >
            <BlankInput />
        </Form.Item>
    );
};
