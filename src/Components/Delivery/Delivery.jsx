import { AlarmClockCheck, Percent, LockKeyhole , TruckElectric } from "lucide-react";
const Delivery = () => {
    return (
        <div className="lg:container bg-white mx-auto shadow-md p-7 rounded-2xl">
            <div className="grid grid-cols-4">
                <div className="delivery_wrapper">
                    <div className="flex items-center gap-4">
                        <p><Percent size='3rem' /></p>
                        <div>
                            <h4 className="text-base text-[#272343] capitalize font-inter font-medium mb-2.5">40% Discount</h4>
                            <p className="text-sm text-[#9a9caa] font-inter font-normal">Weekly Shine Picks</p>
                        </div>
                    </div>
                </div>

                <div className="delivery_wrapper">
                    <div className="flex items-center gap-4">
                        <p><TruckElectric size='3rem' /></p>
                        <div>
                            <h4 className="text-base text-[#272343] capitalize font-inter font-medium mb-2.5">Delivery On Us</h4>
                            <p className="text-sm text-[#9a9caa] font-inter font-normal">Absolutely Free Delivery</p>
                        </div>
                    </div>
                </div>

                <div className="delivery_wrapper">
                    <div className="flex items-center gap-4">
                        <p><AlarmClockCheck size='3rem' /></p>
                        <div>
                            <h4 className="text-base text-[#272343] capitalize font-inter font-medium mb-2.5">Support That Shines 24/7</h4>
                            <p className="text-sm text-[#9a9caa] font-inter font-normal">Your Satisfaction, Our Sparkle</p>
                        </div>
                    </div>
                </div>


                <div className="delivery_wrapper">
                    <div className="flex items-center gap-4">
                        <p><LockKeyhole  size='3rem' /></p>
                        <div>
                            <h4 className="text-base text-[#272343] capitalize font-inter font-medium mb-2.5">Shop Safe with Us</h4>
                            <p className="text-sm text-[#9a9caa] font-inter font-normal">Your Data, Fully Secured</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Delivery;
