import Tablet from "../images/icon/main/tablet.svg";
import Phone from "../images/icon/main/phone.svg";
import Laptop from "../images/icon/main/laptop.svg";
import Tv from "../images/icon/main/tv.svg";
import Gamepad from "../images/icon/main/gamepad.svg";
import Vr from "../images/icon/main/vr.svg";

const Devices = () => {
  return (
    <section className="mb-[100px] sm:mb-[80px] lg:mb-[120px] xl:mb-[150px]">
      <div className="mb-[50px] sm:mb-10 lg:mb-[60px] xl:mb-[80px]">
        <h2 className="text-[24px] font-bold sm:mb-2 sm:text-[20px] lg:mb-[10px] lg:text-[28px] xl:mb-[14px] xl:text-[38px]">
          We Provide you streaming experience across various devices.
        </h2>
        <p className="text-[14px] text-[#999999] lg:text-[16px] xl:text-[18px]">
          With StreamVibe, you can enjoy your favorite movies and TV shows
          anytime, anywhere.
          <span className="text-[#999999] sm:hidden">
            Our platform is designed to be compatible with a wide range of
            devices, ensuring that you never miss a moment of entertainment.
          </span>
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5 sm:grid-cols-1 md:grid-cols-2 xl:gap-[6]">
        <div className="rounded-[10px] border border-[#262626] bg-gradient-to-r from-[#0F0F0F] from-60% via-transparent to-[#530a0a80] p-7 sm:p-6 lg:p-10 xl:rounded-xl xl:p-[50px]">
          <div className="justify-left mb-[22px] flex items-center gap-[10px] sm:mb-5 lg:mb-6 xl:mb-[30px]">
            <img
              src={Phone}
              alt="phone icon"
              className="rounded-[10px] bg-[#1F1F1F] p-3 sm:rounded-lg sm:p-[10px] lg:rounded-[10px] lg:p-3 xl:rounded-xl xl:p-4"
            />
            <h4 className="text-[20px] font-semibold sm:text-[18px] xl:text-[24px]">
              Smartphones
            </h4>
          </div>
          <p className="text-[14px] text-[#999999] lg:text-[16px] xl:text-[18px]">
            StreamVibe is optimized for both Android and iOS smartphones.
            Download our app from the Google Play Store or the Apple App Store
          </p>
        </div>
        <div className="rounded-[10px] border border-[#262626] bg-gradient-to-r from-[#0F0F0F] from-60% via-transparent to-[#530a0a80] p-7 sm:p-6 lg:p-10 xl:rounded-xl xl:p-[50px]">
          <div className="justify-left mb-[22px] flex items-center gap-[10px] sm:mb-5 lg:mb-6 xl:mb-[30px]">
            <img
              src={Tablet}
              alt="tablet icon"
              className="rounded-[10px] bg-[#1F1F1F] p-3 sm:rounded-lg sm:p-[10px] lg:rounded-[10px] lg:p-3 xl:rounded-xl xl:p-4"
            />
            <h4 className="text-[20px] font-semibold sm:text-[18px] xl:text-[24px]">
              Tablet
            </h4>
          </div>
          <p className="text-[14px] text-[#999999] lg:text-[16px] xl:text-[18px]">
            StreamVibe is optimized for both Android and iOS smartphones.
            Download our app from the Google Play Store or the Apple App Store
          </p>
        </div>
        <div className="rounded-[10px] border border-[#262626] bg-gradient-to-r from-[#0F0F0F] from-60% via-transparent to-[#530a0a80] p-7 sm:p-6 lg:p-10 xl:rounded-xl xl:p-[50px]">
          <div className="justify-left mb-[22px] flex items-center gap-[10px] sm:mb-5 lg:mb-6 xl:mb-[30px]">
            <img
              src={Tv}
              alt="tv icon"
              className="rounded-[10px] bg-[#1F1F1F] p-3 sm:rounded-lg sm:p-[10px] lg:rounded-[10px] lg:p-3 xl:rounded-xl xl:p-4"
            />
            <h4 className="text-[20px] font-semibold sm:text-[18px] xl:text-[24px]">
              Smart Tv
            </h4>
          </div>
          <p className="text-[14px] text-[#999999] lg:text-[16px] xl:text-[18px]">
            StreamVibe is optimized for both Android and iOS smartphones.
            Download our app from the Google Play Store or the Apple App Store
          </p>
        </div>
        <div className="rounded-[10px] border border-[#262626] bg-gradient-to-r from-[#0F0F0F] from-60% via-transparent to-[#530a0a80] p-7 sm:p-6 lg:p-10 xl:rounded-xl xl:p-[50px]">
          <div className="justify-left mb-[22px] flex items-center gap-[10px] sm:mb-5 lg:mb-6 xl:mb-[30px]">
            <img
              src={Laptop}
              alt="laptop icon"
              className="rounded-[10px] bg-[#1F1F1F] p-3 sm:rounded-lg sm:p-[10px] lg:rounded-[10px] lg:p-3 xl:rounded-xl xl:p-4"
            />
            <h4 className="text-[20px] font-semibold sm:text-[18px] xl:text-[24px]">
              Laptops
            </h4>
          </div>
          <p className="text-[14px] text-[#999999] lg:text-[16px] xl:text-[18px]">
            StreamVibe is optimized for both Android and iOS smartphones.
            Download our app from the Google Play Store or the Apple App Store
          </p>
        </div>
        <div className="rounded-[10px] border border-[#262626] bg-gradient-to-r from-[#0F0F0F] from-60% via-transparent to-[#530a0a80] p-7 sm:p-6 lg:p-10 xl:rounded-xl xl:p-[50px]">
          <div className="justify-left mb-[22px] flex items-center gap-[10px] sm:mb-5 lg:mb-6 xl:mb-[30px]">
            <img
              src={Gamepad}
              alt="console icon"
              className="rounded-[10px] bg-[#1F1F1F] p-3 sm:rounded-lg sm:p-[10px] lg:rounded-[10px] lg:p-3 xl:rounded-xl xl:p-4"
            />
            <h4 className="text-[20px] font-semibold sm:text-[18px] xl:text-[24px]">
              Gaming Consoles
            </h4>
          </div>
          <p className="text-[14px] text-[#999999] lg:text-[16px] xl:text-[18px]">
            StreamVibe is optimized for both Android and iOS smartphones.
            Download our app from the Google Play Store or the Apple App Store
          </p>
        </div>
        <div className="rounded-[10px] border border-[#262626] bg-gradient-to-r from-[#0F0F0F] from-60% via-transparent to-[#530a0a80] p-7 sm:p-6 lg:p-10 xl:rounded-xl xl:p-[50px]">
          <div className="justify-left mb-[22px] flex items-center gap-[10px] sm:mb-5 lg:mb-6 xl:mb-[30px]">
            <img
              src={Vr}
              alt="vr icon"
              className="rounded-[10px] bg-[#1F1F1F] p-3 sm:rounded-lg sm:p-[10px] lg:rounded-[10px] lg:p-3 xl:rounded-xl xl:p-4"
            />
            <h4 className="text-[20px] font-semibold sm:text-[18px] xl:text-[24px]">
              VR Headsets
            </h4>
          </div>
          <p className="text-[14px] text-[#999999] lg:text-[16px] xl:text-[18px]">
            StreamVibe is optimized for both Android and iOS smartphones.
            Download our app from the Google Play Store or the Apple App Store
          </p>
        </div>
      </div>
    </section>
  );
};

export default Devices;
