import Facebook from "../images/icon/footer/facebook.svg";
import Inter from "../images/icon/footer/inter.svg";
import Twitter from "../images/icon/footer/twitter.svg";

const Footer = () => {
  return (
    <div className="footer bg-[#0F0F0F] pb-4 pt-8 sm:pb-5 sm:pt-[50px] lg:pb-10 lg:pt-20 xl:pb-[50px] xl:pt-[100px]">
      <div className="container">
        <footer className=" items-left flex justify-between sm:mb-[50px] md:mb-16 lg:mb-20 xl:mb-[100px]">
          <div className="grid w-full grid-cols-3 gap-y-[30px] sm:grid-cols-2 lg:grid-cols-6 xl:grid-cols-6">
            <div>
              <h4 className="font-semibold sm:mb-4 sm:text-[16px] md:mb-[18px] lg:mb-5 lg:text-[18px] xl:mb-6 xl:text-[20px]">
                Home
              </h4>
              <ul>
                <li className="text-[14px] font-medium leading-loose text-[#999999] lg:text-[16px] xl:text-[18px]">
                  Categories
                </li>
                <li className="text-[14px] font-medium leading-loose text-[#999999] lg:text-[16px] xl:text-[18px]">
                  Devices
                </li>
                <li className="text-[14px] font-medium leading-loose text-[#999999] lg:text-[16px] xl:text-[18px]">
                  Pricing
                </li>
                <li className="text-[14px] font-medium leading-loose text-[#999999] lg:text-[16px] xl:text-[18px]">
                  FAQ
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold sm:mb-4 sm:text-[16px] md:mb-[18px] lg:mb-5 lg:text-[18px] xl:mb-6 xl:text-[20px]">
                Movies
              </h4>
              <ul>
                <li className="text-[14px] font-medium leading-loose text-[#999999] lg:text-[16px] xl:text-[18px]">
                  Gernes
                </li>
                <li className="text-[14px] font-medium leading-loose text-[#999999] lg:text-[16px] xl:text-[18px]">
                  Trending
                </li>
                <li className="text-[14px] font-medium leading-loose text-[#999999] lg:text-[16px] xl:text-[18px]">
                  New Release
                </li>
                <li className="text-[14px] font-medium leading-loose text-[#999999] lg:text-[16px] xl:text-[18px]">
                  Popular
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold sm:mb-4 sm:text-[16px] md:mb-[18px] lg:mb-5 lg:text-[18px] xl:mb-6 xl:text-[20px]">
                Shows
              </h4>
              <ul>
                <li className="text-[14px] font-medium leading-loose text-[#999999] lg:text-[16px] xl:text-[18px]">
                  Gernes
                </li>
                <li className="text-[14px] font-medium leading-loose text-[#999999] lg:text-[16px] xl:text-[18px]">
                  Trending
                </li>
                <li className="text-[14px] font-medium leading-loose text-[#999999] lg:text-[16px] xl:text-[18px]">
                  New Release
                </li>
                <li className="text-[14px] font-medium leading-loose text-[#999999] lg:text-[16px] xl:text-[18px]">
                  Popular
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold sm:mb-4 sm:text-[16px] md:mb-[18px] lg:mb-5 lg:text-[18px] xl:mb-6 xl:text-[20px]">
                Support
              </h4>
              <ul>
                <li className="text-[14px] font-medium leading-loose  text-[#999999] lg:text-[16px] xl:text-[18px]">
                  Contact Us
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold sm:mb-4 sm:text-[16px] md:mb-[18px] lg:mb-5 lg:text-[18px] xl:mb-6 xl:text-[20px]">
                Subscription
              </h4>
              <ul>
                <li className="text-[14px] font-medium leading-loose text-[#999999] lg:text-[16px] xl:text-[18px]">
                  Plans
                </li>
                <li className="text-[14px] font-medium leading-loose text-[#999999] lg:text-[16px] xl:text-[18px]">
                  Features
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold sm:mb-4 sm:text-[16px] md:mb-[18px] lg:mb-5 lg:text-[18px] xl:mb-6 xl:text-[20px]">
                Connect With Us
              </h4>
              <div className="flex gap-[10px]">
                <img
                  src={Facebook}
                  alt="messenger icon"
                  className="h-[44px] w-[44px] rounded-md bg-[#1A1A1A] p-3"
                />
                <img
                  src={Twitter}
                  alt="messenger icon"
                  className="h-[44px] w-[44px] rounded-md bg-[#1A1A1A] p-3"
                />
                <img
                  src={Inter}
                  alt="messenger icon"
                  className="h-[44px] w-[44px] rounded-md bg-[#1A1A1A] p-3"
                />
              </div>
            </div>
          </div>
        </footer>
        <div className="flex items-start justify-between border-t border-[#262626] py-5 text-[14px] sm:flex-col xl:p-6">
          <p className="text-[#999999] sm:mb-5">
            @2023 streamvib, All Rights Reserved
          </p>
          <div className="text-base flex gap-4 sm:gap-3">
            <p className="cursor-pointer border-r border-r-[#262626] pr-4  text-[14px] text-[#999999] sm:pr-3 sm:text-[12px]">
              Terms of Use
            </p>
            <p className="cursor-pointer border-r border-r-[#262626] pr-4  text-[14px] text-[#999999] sm:pr-3 sm:text-[12px]">
              Privacy Policy
            </p>
            <p className="cursor-pointer text-[14px] text-[#999999]  sm:text-[12px]">
              Cookie Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
