import { Form, Input } from 'antd';

const ResetPassword = () => {
    const [form] = Form.useForm();
    const onFinish = (email) => {
        console.log({ email })
        form.resetFields();
    };
    return (
        <div className='px-8 lg:px-0 mt-40 max-w-[1320px] mx-auto'>
            <div className='bg-[#FF4E25] mx-auto max-w-[868px] px-5 md:px-[150px] lg:px-[250px] py-20 md:py-[100px] lg:py-[150px] rounded bg-opacity-10'>
                <p className='auth-heading'>Reset Password</p>
                <p className='mt-3 capitalize text-center'>Please input a new password and try to remind it</p>
                <div className="mx-auto flex justify-center mt-5">
                    <Form className=' mt-6 md:mt-8 lg:mt-12' onFinish={onFinish} form={form}>
                        <Form.Item
                            label="Reset Password: "
                            name="New Password"
                            rules={[{ required: true, message: 'Please input your Email!' }]}
                        >
                            <Input
                                placeholder="Input your Email"
                                type="email"
                                className="p-4"
                            />
                        </Form.Item>
                        <button type='submit' className='font-poppins w-full button py-4 mt-5 md:mt-6 lg:mt-8'>Continue</button>
                    </Form>
                </div>
                <button type='submit' className='font-poppins w-full button py-4 mt-5 md:mt-6 lg:mt-8'>Continue</button>
            </div>
        </div>
    );
};

export default ResetPassword;

