const Fade = () => {
  return (
    <section className="mb-[100px] rounded-xl bg-[url('./images/back/trail.png')] bg-cover bg-center bg-no-repeat sm:mb-[80px] lg:mb-[120px] xl:mb-[150px]">
      <div className="flex justify-between  px-[45px] py-[65px] sm:flex-col sm:px-[30px] sm:py-[47px] lg:px-[60px] lg:py-[87px] xl:px-20 xl:py-[115px]">
        <div>
          <h2 className="text-[24px] font-bold sm:mb-2 sm:text-[24px] lg:mb-[10px] lg:text-[28px] xl:mb-[14px] xl:text-[38px]">
            Start your free trial today!
          </h2>
          <p className="text-[14px] text-[#999999] lg:text-[16px] xl:text-[18px]">
            This is a clear and concise call to action that encourages users to
            sign up for a free trial of StreamVibe.
          </p>
        </div>
        <button className="h-[50px] rounded-md bg-[#E60000] px-5 py-[14px] text-[12px] font-semibold sm:mt-5 xl:h-16  xl:rounded-lg xl:px-[24px] xl:py-[18px] xl:text-[18px]">
          Start a Free Trail
        </button>
      </div>
    </section>
  );
};

export default Fade;
