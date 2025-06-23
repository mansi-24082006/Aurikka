import { Gem, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import "./Footer.css"
import { Link } from "react-router";
const Footer = () => {
  return (
    <footer>
      <div className="footer_top mx-h-[343px] w-full border-t border-b border-[#e1e3e5] pt-[80px] pb-[60px]">
        <div className="lg:container mx-auto">
          <div className="grid grid-cols-4">
            <div>
              {/* logo wrapper  */}
              <div className="logo_wrapper mb-7">
                <Link
                  to="/"
                  className="text-3xl text-[#f5b11d] font-inter font-medium capitalize flex items-center gap-2"
                >
                  <Gem size="2rem" color="#029fae" /> Aurikaa
                </Link>
              </div>

              <p className="text-base text-[#272343] font-inter font-normal mb-4 max-w-[350px]">
                Luxury you can wear, beauty you can feel. Because you deserve to
                shine every day. 🌟
              </p>

              <div className="footer_social flex items-center gap-3">
                <Link className="p-3 rounded-full border-[#007580] inline-block border-[1px]">
                  <Facebook size="1.5rem" color="#007580" />
                </Link>

                <Link className="p-3 inline-block">
                  <Twitter size="1.5rem" color="#007580" />
                </Link>

                <Link className="p-3 inline-block">
                  <Instagram size="1.5rem" color="#007580" />
                </Link>

                <Link className="p-3 inline-block">
                  <Youtube size="1.5rem" color="#007580" />
                </Link>
              </div>
            </div>

            <div className="footer_wrapper">
              <h3 className="text-xl text-[#5b5b5c] font-inter font-medium uppercase">
                category
              </h3>
              <ul className="space-y-2 mt-4">
                <li>
                  <Link className="text-base text-[#272343] font-inter font-normal capitalize">
                    Diamond Rings
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-[#272343] font-inter font-normal capitalize">
                    Gold Necklaces
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-[#272343] font-inter font-normal capitalize">
                    Pearl Earrings
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-[#272343] font-inter font-normal capitalize">
                    Silver Bracelets
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer_wrapper">
              <h3 className="text-xl text-[#5b5b5c] font-inter font-medium uppercase">
                support
              </h3>
              <ul className="space-y-2 mt-4">
                <li>
                  <Link className="text-base text-[#272343] font-inter font-normal capitalize">
                    help & support
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-[#272343] font-inter font-normal capitalize">
                    tearms & condition
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-[#272343] font-inter font-normal capitalize">
                    privacy policy
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-[#272343] font-inter font-normal capitalize">
                    help
                  </Link>
                </li>
              </ul>
            </div>

            <div className="newsletter">
              <h3 className="text-xl text-[#5b5b5c] font-inter font-medium uppercase">
                Jewel Journal
              </h3>
              <form
                action="#"
                className="max-w-[424px] w-full flex items-center gap-2"
              >
                <input
                  type="email"
                  placeholder="Your Email.."
                  className="max-w-[285px] w-full h-[46px] border-[#474849] border-[1px] rounded-lg pl-2"
                />
                <button
                  type="submit"
                  className="text-base text-black font-bold capitalize w-[130px] h-[50px] bg-[#cf9007] rounded-lg cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="navbar_bottom_right">
        <p className="text-sm text-[#636270] font-inter font-normal capitalize">
          contact:{" "}
          <a
            href="tel:+916352722836"
            className="text-[#272343] hover:underline"
          >
            +91-6352722836
          </a>
        </p>
      </div>
      <div className="footer_bottom w-full h-[75px] flex items-center justify-center ">
        <div className="lg:container mx-auto">
          <div className="text-center py-4">
            <p className="text-base text-[#0c0d0e] font-normal font-inter">
              © 2025 Ecommerce — Designed & Developed by{" "}
              <span className="text-[#d38818]">Dimple</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
