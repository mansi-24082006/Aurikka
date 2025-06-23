import SectionTitle from "../SectionTitle/SectionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { UserPen } from "lucide-react";

const Client = () => {

    const clientSays = [
        {
            id: 1,
            description: 'Absolutely stunning quality! 💎 The finish and shine exceeded my expectations. Felt like royalty wearing it.',
            name: '👑 Aanya R.',
            position: 'CEO, Company',
        },
        {
            id: 2,
            description: 'Loved the custom ring! 💖 Fast delivery and exactly what I imagined — elegant and personal.',
            name: '💍 Mehak K.',
            position: 'CEO, Company',
        },
        {
            id: 3,
            description: 'Unique and classy designs! ✨ Always get compliments. It’s my go-to jewelry store now.',
            name: '🌟 Rhea S.',
            position: 'CEO, Company',
        },
        {
            id: 4,
            description: 'Perfect gifting store! 💝 Got a necklace for my mom — she loved it! Great experience.',
            name: '🎁 Neha V.',
            position: 'CEO, Company',
        },
        {
            id: 5,
            description: "Smooth checkout and lovely packaging. 📦 Attention to detail makes shopping truly special!",
            name: '🛒 Isha M.',
            position: 'CEO, Company',
        },
    ]

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    return (
        <div className="lg:container mx-auto ">

            <SectionTitle title="Sparkling Reviews" mb='mb-11'></SectionTitle>

            <div className="slider-container w-full h-full">
                <Slider {...settings}>
                    {
                        clientSays?.map((client, index) => (
                            <div key={index} className="p-20 border-[2px] border-[#e1e1e3] rounded-lg">
                                <p className="text-2xl mb-4 text-[#1a1a1b] font-inter font-normal client_say_description">{client?.description}</p>
                                <div className="flex items-center">
                                    <h4><UserPen size='4rem' /></h4>
                                    <div>
                                        <h4 className="text-2xl text-[#272343] font-inter font-medium capitalize mb-12.0">{client?.name}</h4>
                                        <p className="text-base text-[#5e5d5d] font-inter capitalize font-normal">{client?.position}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>

        </div>
    );
};

export default Client;
