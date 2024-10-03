import { Form, Input } from 'antd';
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
    const [form] = Form.useForm();
    const onFinish = (email) => {
        console.log({ email })
        form.resetFields();
    };
    return (
        <div>
            <div className='px-8 lg:px-0 mt-40 max-w-[1320px] mx-auto'>
                <div className='bg-[#FF4E25] mx-auto max-w-[868px] px-5 md:px-[150px] lg:px-[250px] py-20 md:py-[100px] lg:py-[150px] rounded bg-opacity-10'>
                    <p className='auth-heading'>Forgat Password</p>
                    <div className=''>
                        <p className=' text-center mt-3'>Please confirm your email address below and we will send you a verification code.</p>
                        <div className='login-form'>
                            <Form className=' mt-6 md:mt-8 lg:mt-12' onFinish={onFinish} form={form}>
                                <Form.Item
                                    label="Email: "
                                    name="email"
                                    rules={[{ required: true, message: 'Please input your Email!' }]}
                                >
                                    <Input
                                        placeholder="Input your Email"
                                        type="email"
                                        className="p-4"
                                    />
                                </Form.Item>
                                <Link to='/otp'><button type='submit' className='font-poppins w-full button py-4 mt-5 md:mt-6 lg:mt-8'>Continue</button></Link>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;