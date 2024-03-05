import Play from "../images/icon/hero/play_icon.svg";
import Plus from "../images/icon/main/plus.svg";
import Volume from "../images/icon/hero/volume_icon.svg";
import Like from "../images/icon/hero/like_icon.svg";

const Hero = () => {
  return (
    <section className="mb-[90px] rounded-xl bg-yellow-300 pb-4 pt-[335px] sm:mb-[80px] sm:pt-[276px] lg:mb-[100px] lg:pt-[434px] xl:mb-[180px] xl:pb-5 xl:pt-[504px]">
      <div className="mx-auto w-[75%]">
        <h2 className="text-center">Avengers:Endgame</h2>
        <p className="text-center sm:hidden">
          With the help of remaining allies, the Avengers must assemble once
          more in order to undo Thanos's actions and undo the chaos to the
          universe, no matter what consequences may be in store, and no matter
          who they face... Avenge the fallen.
        </p>
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

export default Hero;
