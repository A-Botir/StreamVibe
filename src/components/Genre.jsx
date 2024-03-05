import Left from "../images/icon/hero/left_arrow.svg";
import Right from "../images/icon/hero/right_arrow.svg";

const Genre = () => {
  return (
    <section className="mb-90px sm:mb-[50px] lg:mb-[120px] xl:mb-[150px]">
      <div className="mb-12 flex items-center justify-between sm:mb-10 lg:mb-[60px]  xl:mb-[80px]">
        <div>
          <h2 className="text-[24px] font-bold sm:mb-2 sm:text-[24px] lg:mb-[10px] lg:text-[28px] xl:mb-[14px] xl:text-[38px]">
            Explore our wide variety of categories
          </h2>
          <p className="text-[14px] text-[#999999] lg:text-[16px] xl:text-[18px]">
            Whether you're looking for a comedy to make you laugh, a drama to
            make you think, or a documentary to learn something new
          </p>
        </div>
        <div className="flex items-center gap-[10px] rounded-lg bg-[#0F0F0F] p-[10px] sm:hidden sm:p-0 lg:gap-3 lg:rounded-[10px] lg:p-3 xl:gap-4 xl:rounded-xl xl:p-4">
          <button className="h-[40px] w-[40px] rounded-md bg-[#1A1A1A] p-2 lg:h-[44px] lg:w-[44px] lg:rounded-md lg:p-[10px] xl:h-14 xl:w-14 xl:rounded-lg xl:p-[14px]">
            <img src={Left} alt="left icon" />
          </button>
          <div className="h-[2px] w-[81px] bg-[#333333] bg-[#E60000]"></div>
          <button className="h-[40px] w-[40px] rounded-md bg-[#1A1A1A] p-2 lg:h-[44px] lg:w-[44px] lg:rounded-md lg:p-[10px] xl:h-14 xl:w-14 xl:rounded-lg xl:p-[14px]">
            <img src={Right} alt="right icon" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:gap-[30px]">
        <div className="rounded-[10px] bg-[#262626] p-[30px] sm:p-5 lg:p-6 xl:rounded-xl xl:p-[30px]">
          <div className="grid grid-cols-2 gap-[5px]">
            <img
              src=""
              alt="card img"
              className="h-[80px] w-[75px] rounded-md sm:h-[67px] sm:w-[66px] lg:h-[102px] lg:w-[93px] xl:h-[123px] xl:w-[115px] xl:rounded-[10px]"
            />
            <img
              src=""
              alt="card img"
              className="h-[80px] w-[75px] rounded-md sm:h-[67px] sm:w-[66px] lg:h-[102px] lg:w-[93px] xl:h-[123px] xl:w-[115px] xl:rounded-[10px]"
            />
            <img
              src=""
              alt="card img"
              className="h-[80px] w-[75px] rounded-md sm:h-[67px] sm:w-[66px] lg:h-[102px] lg:w-[93px] xl:h-[123px] xl:w-[115px] xl:rounded-[10px]"
            />
            <img
              src=""
              alt="card img"
              className="h-[80px] w-[75px] rounded-md sm:h-[67px] sm:w-[66px] lg:h-[102px] lg:w-[93px] xl:h-[123px] xl:w-[115px] xl:rounded-[10px]"
            />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[14px] font-semibold lg:text-[16px] xl:text-[18px]">
              Action
            </p>
            <button className="h-[22px] w-[22px] sm:h-5 sm:w-5 lg:h-6 lg:w-6 xl:h-[30px] xl:w-[30px]">
              <img src={Right} alt="right icon" />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-6 hidden h-[2px] w-[81px] bg-[#333333] bg-[#E60000] sm:block"></div>
    </section>
  );
};

export default Genre;
