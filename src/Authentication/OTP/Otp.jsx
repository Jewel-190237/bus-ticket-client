import { Input } from "antd";

const Otp = () => {
    const onChange = (text) => {
        console.log('onChange:', text);
    };
    const sharedProps = {
        onChange,
    };
    return (
        <div className='px-8 lg:px-0 mt-40 max-w-[1320px] mx-auto'>
            <div className='bg-[#FF4E25] mx-auto max-w-[868px] px-5 md:px-[150px] lg:px-[250px] py-20 md:py-[100px] lg:py-[150px] rounded bg-opacity-10'>
                <p className='auth-heading'>OTP</p>
                <p className='mt-3 capitalize text-center'>please check your email address and input here otp which already sent your email</p>
                <div className="mx-auto flex justify-center mt-5">
                    <Input.OTP className="mx-auto" length={6} {...sharedProps} />
                </div>
                <button type='submit' className='font-poppins w-full button py-4 mt-5 md:mt-6 lg:mt-8'>Continue</button>
            </div>
        </div>
    );
};

export default Otp;

