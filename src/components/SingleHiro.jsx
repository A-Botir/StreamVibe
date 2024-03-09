import Play from "../images/icon/hero/play_icon.svg";
import Plus from "../images/icon/main/plus.svg";
import Volume from "../images/icon/hero/volume_icon.svg";
import Like from "../images/icon/hero/like_icon.svg";

const SingleHiro = () => {
  return (
    <section
      className={`relative mb-[90px] rounded-xl pb-4 pt-[335px] sm:mb-[80px] sm:pt-[276px] lg:mb-[100px] lg:pt-[434px] xl:mb-[180px] xl:pb-5 xl:pt-[504px]`}
    >
      <img
        src=""
        alt="backdrop"
        className="absolute left-0 top-0 z-[-2] h-full w-full rounded-xl"
      />
      <div className="mx-auto w-[75%]">
        <h2 className="text-6 mb-3 text-center font-bold lg:text-[30px] xl:text-[38px]"></h2>
        <p className="lg:text-4 text-center text-[14px] font-medium text-[#999999] sm:hidden xl:text-[18px]"></p>
        <div className="mt-[22px] flex items-center justify-center gap-5 sm:mt-5 sm:flex-col lg:mt-6 xl:mt-[30px]">
          <button className="sm:py-{18px} flex rounded-lg bg-[#E60000] px-[26px] py-5 text-[14px] font-semibold lg:py-[18px] xl:px-[27px] xl:py-[22px] xl:text-[18px]">
            <img
              src={Play}
              alt="play icon"
              className="mr-2 h-6 w-6 hover:opacity-80 xl:h-7 xl:w-7"
            />
            Play Now
          </button>
          <div className="flex gap-2">
            <button className="rounded-lg bg-[#0F0F0F] p-3 xl:p-[14px]">
              <img src={Plus} alt="plus icon" />
            </button>
            <button className="rounded-lg bg-[#0F0F0F] p-3 xl:p-[14px]">
              <img src={Like} alt="like icon" />
            </button>
            <button className="rounded-lg bg-[#0F0F0F] p-3 xl:p-[14px]">
              <img src={Volume} alt="volume icon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleHiro;
