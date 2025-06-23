import SectionTitle from "../SectionTitle/SectionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ShoppingCart } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Sparkle Solitaire Ring",
      status: "New",
      price: "$580",
      image: "/src/assets/features/product_1.png",
      currentPrice: "$499",
    },
    {
      title: "Royal Emerald Necklace",
      status: "Sales",
      price: "$950",
      image: "/src/assets/features/product_2.png",
    },
    {
      title: "Pearl Drop Earrings",
      status: "New",
      price: "$180",
      image: "/src/assets/features/product_3.png",
    },
    {
      title: "Classic Gold Bracelet",
      status: "Sales",
      price: "$320",
      image: "/src/assets/features/product_4.png",
      currentPrice: "$280",
    },
    {
      title: "Crystal Heart Pendant",
      status: "New",
      price: "$200",
      image: "/src/assets/features/product_5.png",
      currentPrice: "$170",
    },
    {
      title: "Engraved Couple Bands",
      status: "Sales",
      price: "$400",
      image: "/src/assets/features/product_6.png",
      currentPrice: "$350",
    },
    {
      title: "Silver Infinity Anklet",
      status: "New",
      price: "$150",
      image: "/src/assets/features/product_7.png",
      currentPrice: "$120",
    },
    {
      title: "Emerald Floral Brooch",
      status: "New",
      price: "$300",
      image: "/src/assets/features/product_8.png",
      currentPrice: "$260",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div>
      <div className="lg:container mx-auto ">
        <SectionTitle title="Treasure Highlights" mb="mb-11"></SectionTitle>

        <div className="slider-container features_slider w-full h-full">
          <Slider {...settings}>
            {features?.map((feature, index) => (
              <div key={index} className="p-4">
                <div className="feature_image mb-4 relative">
                  <img
                    className="w-full h-full object-cover"
                    src={feature?.image}
                    alt={feature?.title}
                  />
                  {feature?.status && (
                    <div className="absolute top-4 left-4 bg-[#007580] text-white px-2 py-1 rounded-lg">
                      <button className="text-sm font-inter font-normal">
                        {feature?.status}
                      </button>
                    </div>
                  )}
                </div>
                <div className="feature_content">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base text-[#007580] capitalize font-inter font-normal mb-4">
                      {feature?.title}
                    </h4>
                    <span className="bg-[#007580] h-[44px] w-[44px] rounded-lg flex items-center justify-center">
                      <ShoppingCart size="1.5rem" color="#fff" />
                    </span>
                  </div>
                  <p className="text-xl flex items-center gap-2 text-[#272343] font-semibold font-inter ">
                    {feature?.price}
                    {feature?.currentPrice && (
                      <span className="text-sm text-[#9a9caa] font-inter font-normal">
                        {feature?.currentPrice}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Features;
