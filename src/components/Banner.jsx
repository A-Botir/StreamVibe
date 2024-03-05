import HeroPlay from "../images/picture/hero_play.svg";
import Play from "../images/icon/hero/play_icon.svg";

const Banner = () => {
  return (
    <div
      className={`m-auto mb-[125px] mt-[81px] max-w-[75%] sm:mb-[100px] sm:mt-[54px] sm:max-w-full lg:mb-[150px] lg:mt-[102px] xl:mb-[200px] xl:mt-[102px]`}
    >
      <img
        src={HeroPlay}
        alt="hero main img"
        className="lg:h-300px mx-auto mb-[75px] h-[250px] w-[250px] sm:mb-[50px] sm:h-[200px] sm:w-[200px] lg:mb-[100px] lg:w-[300px] xl:mb-32 xl:h-[470px] xl:w-[470px] xl:max-w-[66%]"
      />
      <h1 className="mb-[10px] text-center font-bold sm:text-[28px] lg:text-[48px] xl:mb-[14px] xl:text-[58px]">
        The Best Streaming Experience
      </h1>
      <p className="mb-9 text-center text-[14px] text-[#999999] sm:mb-[30px] lg:mb-10 xl:mb-[50px] xl:text-[18px]">
        StreamVibe is the best streaming experience for watching your favorite
        movies and shows on demand, anytime, anywhere.
        <span className="text-[#999999] sm:hidden">
          With StreamVibe, you can enjoy a wide variety of content, including
          the latest blockbusters, classic movies, popular TV shows, and more.
          You can also create your own watchlists, so you can easily find the
          content you want to watch.
        </span>
      </p>
      <button className="sm:py-{18px} m-auto flex rounded-lg bg-[#E60000] px-[26px] py-5 text-[14px] font-semibold lg:py-[18px] xl:px-[27px] xl:py-[22px] xl:text-[18px]">
        <img
          src={Play}
          alt="play icon"
          className="mr-2 h-6 w-6 hover:opacity-80 xl:h-7 xl:w-7"
        />
        Start Watching Now
      </button>
    </div>
  );
};

export default Banner;
