/* eslint-disable no-unused-vars */
import BusCard from "../Card/BusCard";
import BasicHeader from "../Shared-file/BasicHeader";
import { TbArmchair } from "react-icons/tb";
import { GiBusDoors } from "react-icons/gi";
import { LuChevronUpCircle } from "react-icons/lu";
import { useState } from "react";
import { Form, Input } from "antd";

const Service = () => {
    const [activeSeats, setActiveSeats] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [discount, setDiscount] = useState(0); // State for the discount amount
    const [form] = Form.useForm();
    const seatPrice = 900; // Fixed seat price

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleClick = (value) => {
        if (activeSeats.includes(value)) {
            setActiveSeats(activeSeats.filter(seat => seat !== value));
        } else {
            setActiveSeats([...activeSeats, value]);
        }
    };

    const applyDiscount = () => {
        const discountValue = parseFloat(inputValue);
        if (!isNaN(discountValue) && discountValue > 0) {
            setDiscount(discountValue);
        } else {
            setDiscount(0); // Reset discount if the input is invalid
        }
        setInputValue(''); // Clear the input field after applying
    };

    // Calculate total price based on selected seats
    const totalPrice = activeSeats.length * seatPrice;

    // Calculate grand total after applying the discount
    const grandTotal = totalPrice - discount;

    return (
        <div>
            <BasicHeader heading='Service' />
            <div className="mt-16 md:mt-32 bus-container">
                <BusCard heading='Bus No: A30562' description='The latest Koyra to Dhaka bus offers comfortable seating, air conditioning, and Wi-Fi, ensuring a smooth ride with daily departures for all travelers!' availableSea='45' route='Koyra - Dhaka' departureTime='9:00 AM' estimateTime='11 Hours' startingPoint='Koyra' ticketPrice='900' />
            </div>
            <div className="bus-container mt-10 md:mt-20 flex flex-col gap-10 md:flex-row">
                <div className="w-full md:w-[60%]">
                    <h3 className="ticket-header">Select your seat</h3>
                    <div className="flex items-center justify-between font-medium text-[16px] md:text-2xl py-5 border-dashed border-b border-black">
                        <div className="select-seat space-x-2 md:space-x-4">
                            <TbArmchair />
                            <p>Available</p>
                        </div>
                        <div className="select-seat !bg-primary !text-white space-x-2 md:space-x-4">
                            <TbArmchair />
                            <p>Selected</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between py-5">
                        <div className="seat"> <GiBusDoors className="seat-text !text-4xl" /></div>
                        <div className="seat"> <LuChevronUpCircle className="seat-text !text-4xl" /></div>
                    </div>
                    <div className="flex items-center justify-between mt-6 md:mt-10">
                        <div className="grid grid-cols-2 gap-3 md:gap-6">
                            <button onClick={() => handleClick('A1')} className={`seat seat-text ${activeSeats.includes('A1') ? '!bg-primary !text-white' : ''}`}> A1 </button>
                            <button onClick={() => handleClick('A2')} className={`seat seat-text ${activeSeats.includes('A2') ? '!bg-primary !text-white' : ''}`}> A2 </button>
                            <button onClick={() => handleClick('B1')} className={`seat seat-text ${activeSeats.includes('B1') ? '!bg-primary !text-white' : ''}`}> B1 </button>
                            <button onClick={() => handleClick('B2')} className={`seat seat-text ${activeSeats.includes('B2') ? '!bg-primary !text-white' : ''}`}> B2 </button>
                            <button onClick={() => handleClick('C1')} className={`seat seat-text ${activeSeats.includes('C1') ? '!bg-primary !text-white' : ''}`}> C1 </button>
                            <button onClick={() => handleClick('C2')} className={`seat seat-text ${activeSeats.includes('C2') ? '!bg-primary !text-white' : ''}`}> C2 </button>
                            <button onClick={() => handleClick('D1')} className={`seat seat-text ${activeSeats.includes('D1') ? '!bg-primary !text-white' : ''}`}> D1 </button>
                            <button onClick={() => handleClick('D2')} className={`seat seat-text ${activeSeats.includes('D2') ? '!bg-primary !text-white' : ''}`}> D2 </button>
                        </div>
                        <div className="grid grid-cols-2 gap-3 md:gap-6">
                            <button onClick={() => handleClick('A3')} className={`seat seat-text ${activeSeats.includes('A3') ? '!bg-primary !text-white' : ''}`}> A3 </button>
                            <button onClick={() => handleClick('A4')} className={`seat seat-text ${activeSeats.includes('A4') ? '!bg-primary !text-white' : ''}`}> A4 </button>
                            <button onClick={() => handleClick('B3')} className={`seat seat-text ${activeSeats.includes('B3') ? '!bg-primary !text-white' : ''}`}> B3 </button>
                            <button onClick={() => handleClick('B4')} className={`seat seat-text ${activeSeats.includes('B4') ? '!bg-primary !text-white' : ''}`}> B4 </button>
                            <button onClick={() => handleClick('C3')} className={`seat seat-text ${activeSeats.includes('C3') ? '!bg-primary !text-white' : ''}`}> C3 </button>
                            <button onClick={() => handleClick('C4')} className={`seat seat-text ${activeSeats.includes('C4') ? '!bg-primary !text-white' : ''}`}> C4 </button>
                            <button onClick={() => handleClick('D3')} className={`seat seat-text ${activeSeats.includes('D3') ? '!bg-primary !text-white' : ''}`}> D3 </button>
                            <button onClick={() => handleClick('D4')} className={`seat seat-text ${activeSeats.includes('D4') ? '!bg-primary !text-white' : ''}`}> D4 </button>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-[40%] border-none md:border-dashed border-primary border-l-[3px]">
                    <div className="px-0 md:px-10 ">
                        <h3 className="ticket-header">Selected Seats: <span className=" px-4 py-2 bg-primary text-white rounded-full">{activeSeats.length}</span></h3>
                        <div className="bg-[#F7F8F8] rounded-2xl mt-10 px-8">
                            <div className="py-6 flex items-center justify-between border-b border-dashed border-[#03071233]">
                                <p className="description !text-[#030712]">Seat</p>
                                <p className="description !text-[#030712] !text-right">Price</p>
                            </div>

                            {/* Dynamically Render Selected Seats */}
                            {activeSeats.map((seat, index) => (
                                <div key={seat} className={`py-6 flex items-center justify-between ${index === activeSeats.length - 1 ? 'border-b border-dashed border-[#03071233]' : ''}`}>
                                    <p className="description">{seat}</p>
                                    <p className="description !text-right">{seatPrice}</p>
                                </div>
                            ))}

                            {/* Total Price */}
                            <div className="py-6 flex items-center justify-between">
                                <p className="description !text-[#030712]">Total</p>
                                <p className="description !text-[#030712] !text-right">{totalPrice} BDT</p>
                            </div>

                            <div className="flex items-center">
                                <input
                                    className="w-full bg-white text-black p-4 border rounded-l-xl"
                                    placeholder="Enter Discount price"
                                    type="number"
                                    value={inputValue}
                                    onChange={handleChange}
                                />
                                <button
                                    className={`p-3 bg-primary text-white rounded-r-xl ${!inputValue ? 'opacity-40 cursor-not-allowed' : ''}`}
                                    onClick={applyDiscount} // Call the function on button click
                                    disabled={!inputValue}
                                >
                                    Apply
                                </button>
                            </div>

                            {/* Grand Total */}
                            <div className="py-6 flex items-center justify-between">
                                <p className="description !text-[#030712]">Grand Total</p>
                                <p className="description !text-[#030712] !text-right">{grandTotal >= 0 ? grandTotal : 0} BDT</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;


