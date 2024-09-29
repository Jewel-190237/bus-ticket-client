/* eslint-disable react/prop-types */
import { Form, Select } from "antd";

const FormSelect = ({ 
    label, 
    layoutStyle, 
    name, 
    required, 
    initialValue, 
    placeholder, 
    className, 
    readOnly, 
    onChange, 
    rules = [], 
    search, 
    options, 
    mode 
}) => {
    let initRules = [
        {
            required: required,
            message: `Please provide ${typeof label === 'string' && label?.toLowerCase() || 'a value'}`
        },
    ];

    return (
        <Form.Item
            name={name}
            label={<label className='!text-main text-p1 mb-2'>{label}</label>}
            rules={[...initRules, ...rules]}
            className={`mb-4 ${className} ${label ? '' : 'selectLabel'}`}
            initialValue={initialValue}
            layout={layoutStyle}
        >
            <Select
                mode={mode}
                disabled={readOnly}
                onChange={onChange}
                placeholder={placeholder}
                showSearch={search}
                className="form-select focus:border-primary focus:outline-primary focus:ring-0 hover:border-primary"
                bordered={false}
            >
                {options?.map((option, index) => (
                    <Select.Option
                        key={index}
                        value={option?.value || option?._id}
                    >
                        {option?.label || option?.name}
                    </Select.Option>
                ))}
            </Select>
        </Form.Item>
    );
};

export default FormSelect;
