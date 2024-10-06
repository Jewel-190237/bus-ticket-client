import { Link, useParams } from "react-router-dom";

const PaymentSuccess = () => {
    const { tran_id } = useParams()
    return (
        <div className="px-8 lg:px-0 mt-40 max-w-[1320px] mx-auto">
            <div className="bg-[#FF4E25] mx-auto max-w-[868px] px-5 md:px-[150px] lg:px-[250px] py-20 md:py-[100px] lg:py-[150px] rounded bg-opacity-10">
                <p className="auth-heading">Your Payment Successfully Done</p>
                <p className="mt-5 text-xl text-green-700 text-center">Your transaction ID: {tran_id}</p>
                <Link to='/'><button className="mt-10 button w-full">Continue</button></Link>
            </div>

        </div>
    );
};

export default PaymentSuccess;