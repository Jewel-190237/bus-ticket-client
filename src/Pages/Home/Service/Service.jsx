import ServiceCard from '../../Card/ServiceCard';
import BasicHeader from '../../Shared-file/BasicHeader';
import card1 from '../../../assets/service/card1.png';
import card2 from '../../../assets/service/card2.png';
const serviceData = [
    {
        _id: 1,
        restTime: '11 Hours',
        availableSeat: 30,
        image: card1
    },
    {
        _id: 2,
        restTime: '6 Hours',
        availableSeat: 40,
        image: card2
    },
];

const Service = () => {
    return (
        <section className='max-w-[1320px] mx-auto px-8 md:px-2 lg:px-0'>
            <BasicHeader
                heading="BRTC Service"
                description="BRTC Paribahan delivers reliable bus services with a focus on comfort and safety, ensuring seamless travel to your destinations"
            />
            <div className='flex flex-col md:flex-row mt-24 w-full gap-10'>
                {
                    serviceData.map((service) => (
                        <ServiceCard key={service._id} restTime={service.restTime} availableSeat={service.availableSeat} img={service.image} />
                    ))
                }
            </div>
        </section>
    );
};

export default Service;
