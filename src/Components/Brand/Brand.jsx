
const Brand = () => {

  const brands = [
      {
          id: 1,
          image: "/src/assets/brands/brand_1.jpg"
      },
      {
          id: 2,
          image: "/src/assets/brands/brand_2.png"
      },
      {
          id: 3,
          image: "/src/assets/brands/brand_3.png"
      },
      {
          id: 4,
          image: "/src/assets/brands/brand_4.jpg"
      },
      {
          id: 5,
          image: "/src/assets/brands/brand_5.jpg"
      },
      {
          id: 6,
          image: "/src/assets/brands/brand_6.jpg"
      }, 
      {
          id: 7,
          image: "/src/assets/brands/brand_7.png"
      },

  ]

  return (
      <div className="lg:container mx-auto">
          <div className="grid grid-cols-7 items-center justify-center gap-5">
              {
                  brands?.map((brand) => (
                      <div key={brand?.id} className="brand_item">
                          <img className="w-auto h-auto" src={brand?.image} alt="brand" />
                      </div>
                  ))
              }
          </div>
      </div>
  );
};

export default Brand;
