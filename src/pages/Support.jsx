import Question from "../components/Question";
import Fade from "../components/Fade";
import SuppImg from "../images/picture/suppImg.png";

const Support = () => {
  return (
    <section className="mt-[70px] sm:mt-[40px] lg:mt-[100px] xl:mt-[140px]">
      <div className="mb-[70px] grid grid-cols-5 items-start justify-between gap-[50px] sm:mb-[40px] sm:grid-cols-1 lg:mb-[100px] xl:mb-[140px]">
        <div className="col-span-2 sm:m-auto">
          <h2 className="mb-[10px] text-[34px] font-bold sm:text-[28px] lg:text-[38px] xl:mb-3 xl:text-[48px]">
            Welcome to our support page!
          </h2>
          <p className="mb-9 text-[14px] text-[#999999] sm:mb-[30px] lg:mb-10 lg:text-[16px] xl:mb-[50px] xl:text-[18px]">
            We're here to help you with any problems you may be having with our
            product.
          </p>
          <div className="h-[325px] w-full rounded-[4px] border-4 border-[#262626] bg-[url('./images/picture/suppImg.png')] bg-cover bg-center bg-no-repeat sm:ml-5 sm:h-[250px] xl:h-[500px]"></div>
        </div>
        <form
          action="#"
          className="col-span-3 flex grow flex-col gap-5 rounded-[10px] bg-[#0F0F0F] p-8 sm:p-6 lg:p-[40px] xl:gap-[50px] xl:rounded-xl xl:p-[50px]"
        >
          <div className="flex gap-5 sm:flex-col xl:gap-[50px]">
            <label
              htmlFor="firstname"
              className="grow text-[14px] font-semibold lg:text-[16px] xl:text-[18px]"
            >
              First Name
              <input
                type="text"
                id="firstname"
                required
                placeholder="Enter First Name"
                className="mt-3 block w-full  rounded-md border border-[#262626] bg-[#141414] p-4 text-[14px] xl:mt-4 xl:rounded-lg xl:p-5 xl:text-[18px]"
              />
            </label>
            <label
              htmlFor="lastname"
              className="grow text-[14px] font-semibold lg:text-[16px] xl:text-[18px]"
            >
              Last Name
              <input
                type="text"
                id="lastname"
                placeholder="Enter Last Name"
                required
                className="mt-3 block w-full  rounded-md border border-[#262626] bg-[#141414] p-4 text-[14px] xl:mt-4 xl:rounded-lg xl:p-5 xl:text-[18px]"
              />
            </label>
          </div>
          <div className="flex gap-5 sm:flex-col xl:gap-[50px]">
            <label
              htmlFor="mail"
              className="grow text-[14px] font-semibold lg:text-[16px] xl:text-[18px]"
            >
              Email
              <input
                type="email"
                id="mail"
                placeholder="Enter Your Email"
                required
                className="mt-3 block w-full rounded-md border border-[#262626] bg-[#141414] p-4 text-[14px] xl:mt-4 xl:rounded-lg xl:p-5 xl:text-[18px]"
              />
            </label>
            <div className="flex w-[48%] items-end gap-2 sm:w-full">
              <select
                name=""
                className="block h-[58px] rounded-md border border-[#262626] bg-[#141414] p-[6px] text-[16px] lg:p-[10px] xl:rounded-lg xl:p-3 xl:text-[20px]"
              >
                <option value="1">&#x1F1FA;&#x1F1FF;</option>
                <option value="2" selected>
                  &#x1F1EE;&#x1F1F3;
                </option>
                <option value="3">&#x1F1FA;&#x1F1F8;</option>
                <option value="4">&#x1F1F7;&#x1F1FA;</option>
                <option value="5">&#x1F1EF;&#x1F1F5;</option>
              </select>
              <label
                htmlFor="number"
                className="grow text-[14px] font-semibold lg:text-[16px] xl:text-[18px]"
              >
                Phone Number
                <input
                  type="text"
                  id="number"
                  required
                  placeholder="Enter Phone Number"
                  className="mt-3 block w-full rounded-md border border-[#262626] bg-[#141414] p-4 text-[14px] xl:mt-4 xl:rounded-lg xl:p-5 xl:text-[18px]"
                />
              </label>
            </div>
          </div>
          <label
            htmlFor="message"
            className="text-[14px] font-semibold lg:text-[16px] xl:text-[18px]"
          >
            Message
            <input
              type="text"
              id="message"
              required
              placeholder="Enter Your Message"
              className="mt-3 block h-[110px] w-full rounded-md border border-[#262626] bg-[#141414] p-4 text-[14px] placeholder:align-top lg:h-[129px] xl:mt-4 xl:h-[163px] xl:rounded-lg xl:p-5 xl:text-[18px]"
            />
          </label>
          <div className="item-center :gap-[50px] :gap-[50px] flex items-center justify-between sm:flex-col">
            <label
              htmlFor="checker"
              className="text-[14px] font-semibold text-[#999999] lg:text-[16px] xl:text-[18px]"
            >
              <input
                type="checkbox"
                id="checker"
                placeholder="Enter Your Message"
                className="mr-2"
                required
              />
              I agree with Terms of Use and Privacy Policy
            </label>
            <button className="h-[50px] rounded-md bg-[#E60000] px-5 py-[14px] text-[14px] font-semibold sm:mt-5 sm:w-full  xl:rounded-lg xl:px-[24px] xl:py-[18px] xl:text-[18px]">
              Send Message
            </button>
          </div>
        </form>
      </div>
      <Question />
      <Fade />
    </section>
  );
};

export default Support;
