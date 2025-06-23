import { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { ShoppingCart } from "lucide-react";

const Product = () => {
  const [active, setActive] = useState({
    id: 0,
    product: "all",
  });

  const productTitle = [
    { id: 0, title: "all", product: "all" },
    { id: 1, title: "newest", product: "newest" },
    { id: 2, title: "trending", product: "trending" },
    { id: 3, title: "best seller", product: "best_seller" },
  ];

  const products = [
    {
      title: "Sparkle Solitaire Ring",
      status: "New",
      price: "$580",
      image: "/src/assets/features/product_1.png",
      currentPrice: "$499",
      product: "newest",
    },
    {
      title: "Royal Emerald Necklace",
      status: "Sales",
      price: "$950",
      image: "/src/assets/features/product_2.png",
      product: "best_seller",
    },
    {
      title: "Pearl Drop Earrings",
      status: "New",
      price: "$180",
      image: "/src/assets/features/product_3.png",
      product: "trending",
    },
    {
      title: "Classic Gold Bracelet",
      status: "Sales",
      price: "$320",
      image: "/src/assets/features/product_4.png",
      currentPrice: "$280",
      product: "best_seller",
    },
    {
      title: "Crystal Heart Pendant",
      status: "New",
      price: "$200",
      image: "/src/assets/features/product_5.png",
      currentPrice: "$170",
      product: "newest",
    },
    {
      title: "Engraved Couple Bands",
      status: "Sales",
      price: "$400",
      image: "/src/assets/features/product_6.png",
      currentPrice: "$350",
      product: "trending",
    },
    {
      title: "Silver Infinity Anklet",
      status: "New",
      price: "$150",
      image: "/src/assets/features/product_7.png",
      currentPrice: "$120",
      product: "newest",
    },
    {
      title: "Emerald Floral Brooch",
      status: "New",
      price: "$300",
      image: "/src/assets/features/product_8.png",
      currentPrice: "$260",
      product: "trending",
    },
  ];

  // ✅ Fixed filter logic
  const productFilter =
    active.product === "all"
      ? products
      : products.filter((product) => product.product === active.product);

  return (
    <div className="lg:container mx-auto">
      <div className="flex flex-col items-center justify-center">
        <SectionTitle
          title={"💎 Sparkling Selections"}
          textAlign={"center"}
          mb={"mb-5"}
        />

        <div className="flex items-center justify-center gap-6 mb-11">
          {productTitle.map((title) => (
            <button
              key={title.id}
              onClick={() =>
                setActive({
                  id: title.id,
                  product: title.product,
                })
              }
              className={`text-base font-black uppercase font-inter cursor-pointer transition-all duration-200 ${
                active.id === title.id
                  ? "text-[#272343] underline"
                  : "text-[#9a9caa]"
              }`}
            >
              {title.title}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productFilter.map((product, index) => (
          <div key={index} className="p-4">
  <div className="feature_image mb-4 relative h-[300px] w-full overflow-hidden rounded-lg bg-[#f4f4f4]">
    <img
      className="w-full h-[400px] object-cover rounded-lg transition-transform duration-300 hover:scale-105"
      src={product.image}
      alt={product.title}
    />
    {product.status && (
      <div className="absolute top-4 left-4 bg-[#007580] text-white px-2 py-1 rounded-lg shadow">
        <span className="text-sm font-inter font-normal">
          {product.status}
        </span>
      </div>
    )}
  </div>
  <div className="feature_content">
    <div className="flex items-center justify-between">
      <h4 className="text-base text-[#007580] capitalize font-inter font-normal mb-4">
        {product.title}
      </h4>
      <span className="bg-[#007580] h-[44px] w-[44px] rounded-lg flex items-center justify-center">
        <ShoppingCart size="1.5rem" color="#fff" />
      </span>
    </div>
    <p className="text-xl flex items-center gap-2 text-[#272343] font-semibold font-inter">
      {product.price}
      {product.currentPrice && (
        <span className="text-sm text-[#9a9caa] font-inter font-normal line-through">
          {product.currentPrice}
        </span>
      )}
    </p>
  </div>
</div>

        ))}
      </div>
    </div>
  );
};

export default Product;
