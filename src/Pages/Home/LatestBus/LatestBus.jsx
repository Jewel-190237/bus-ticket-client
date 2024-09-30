import BasicHeader from "../../Shared-file/SectionHeader";
import BusCard from "../../Card/BusCard";

const LatestBus = () => {
    return (
        <section className="bus-container">
            <BasicHeader
                heading="Latest Bus Service"
                description="The latest Koyra to Dhaka bus offers comfortable seating, air conditioning, and Wi-Fi, ensuring a smooth ride with daily departures for all travelers!"
            />
            <div className="mt-16 md:mt-32">
                <BusCard heading='Latest Bus Service' description='The latest Koyra to Dhaka bus offers comfortable seating, air conditioning, and Wi-Fi, ensuring a smooth ride with daily departures for all travelers!' availableSea='45' route='Koyra - Dhaka' departureTime='9:00 AM' estimateTime='11 Hours' startingPoint='Koyra' ticketPrice ='900' />
            </div>
        </section>
    );
};

export default LatestBus;