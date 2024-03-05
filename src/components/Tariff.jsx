import React, { useState } from "react";

const Tariff = () => {
  const [selectedPlan, setSelectedPlan] = useState("Monthly");

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <section className="mb-24 sm:mb-20 lg:mb-[110px] xl:mb-[135px]">
      <div className="mb-12 flex items-end justify-between sm:mb-10 sm:flex-col sm:items-start lg:mb-[60px] xl:mb-[80px]">
        <div>
          <h2 className="text-[24px] font-bold sm:mb-2 sm:text-[24px] lg:mb-[10px] lg:text-[28px] xl:mb-[14px] xl:text-[38px]">
            Choose the plan that's right for you
          </h2>
          <p className="text-[14px] text-[#999999] lg:text-[16px] xl:text-[18px]">
            Join StreamVibe and select from our flexible subscription options
            tailored to suit your viewing preferences. Get ready for non-stop
            entertainment!
          </p>
        </div>
        <div className="flex gap-1 rounded-lg border border-[#262626] bg-[#0F0F0F] p-2 xl:h-[60px] xl:rounded-[10px]">
          <button
            className={`rounded-md ${
              selectedPlan === "Monthly"
                ? "bg-[#1F1F1F] text-white"
                : "text-[#999999]"
            } px-4 py-2 hover:bg-[#1F1F1F] hover:text-white xl:rounded-[10px] xl:px-[24px] xl:py-[14px] `}
            onClick={() => handlePlanChange("Monthly")}
          >
            Monthly
          </button>
          <button
            className={`rounded-md ${
              selectedPlan === "Yearly"
                ? "bg-[#1F1F1F] text-white"
                : "text-[#999999]"
            } px-4 py-2 hover:bg-[#1F1F1F] hover:text-white xl:rounded-[10px] xl:px-[24px] xl:py-[14px]`}
            onClick={() => handlePlanChange("Yearly")}
          >
            Yearly
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 sm:grid-cols-1 md:grid-cols-2 xl:gap-[30px]">
        <div className="rounded-[10px] border border-[#262626] bg-[#1A1A1A] p-8 sm:p-6 lg:p-10 xl:rounded-xl xl:p-[50px]">
          <h3 className="mb-[10px] text-[18px] font-bold lg:mb-3 lg:text-[20px] xl:mb-4 xl:text-[24px]">
            Basic Plan
          </h3>
          <p className="mb-9 text-[14px] text-[#999999] sm:mb-[30px] lg:mb-10 lg:text-[15px] xl:mb-[50px] xl:text-[18px]">
            Enjoy an extensive library of movies and shows, featuring a range of
            content, including recently released titles.
          </p>
          <p className="mb-9 text-[14px] font-medium text-[#999999] sm:mb-[30px] lg:mb-10 lg:text-[16px] xl:mb-[50px] xl:text-[18px]">
            <span className="text-[24px] font-semibold text-white lg:text-[30px] xl:text-[40px]">
              {selectedPlan === "Monthly" ? "$9.99" : "$99.99"}
            </span>
            {selectedPlan === "Monthly" ? "/month" : "/year"}
          </p>
          <div className="flex items-center gap-2 xl:gap-5">
            <button className="h-[50px] grow rounded-md bg-[#141414] px-5 py-[14px] text-[12px] font-semibold sm:mt-5 xl:h-16  xl:rounded-lg xl:px-[24px] xl:py-[18px] xl:text-[18px]">
              Start Free Trial
            </button>
            <button className="h-[50px] grow rounded-md bg-[#E60000] px-5 py-[14px] text-[12px] font-semibold sm:mt-5 xl:h-16  xl:rounded-lg xl:px-[24px] xl:py-[18px] xl:text-[18px]">
              Choose Plan
            </button>
          </div>
        </div>
        <div className="rounded-[10px] border border-[#262626] bg-[#1A1A1A] p-8 sm:p-6 lg:p-10 xl:rounded-xl xl:p-[50px]">
          <h3 className="mb-[10px] text-[18px] font-bold lg:mb-3 lg:text-[20px] xl:mb-4 xl:text-[24px]">
            Standard Plan
          </h3>
          <p className="mb-9 text-[14px] text-[#999999] sm:mb-[30px] lg:mb-10 lg:text-[16px] xl:mb-[50px] xl:text-[18px]">
            Access to a wider selection of movies and shows, including most new
            releases and exclusive content
          </p>
          <p className="mb-9 text-[14px] font-medium text-[#999999] sm:mb-[30px] lg:mb-10 lg:text-[16px] xl:mb-[50px] xl:text-[18px]">
            <span className="text-[24px] font-semibold text-white lg:text-[30px] xl:text-[40px]">
              {selectedPlan === "Monthly" ? "$12.99" : "$149.99"}
            </span>
            {selectedPlan === "Monthly" ? "/month" : "/year"}
          </p>
          <div className="flex items-center gap-3 sm:gap-2 xl:gap-5">
            <button className="h-[50px] rounded-md bg-[#141414] px-5 py-[14px] text-[14px] font-semibold sm:mt-5 sm:text-[12px] xl:h-16  xl:rounded-lg xl:px-[24px] xl:py-[18px] xl:text-[18px]">
              Start Free Trial
            </button>
            <button className="h-[50px] rounded-md bg-[#E60000] px-5 py-[14px] text-[14px] font-semibold sm:mt-5 sm:text-[12px] xl:h-16  xl:rounded-lg xl:px-[24px] xl:py-[18px] xl:text-[18px]">
              Choose Plan
            </button>
          </div>
        </div>
        <div className="rounded-[10px] border border-[#262626] bg-[#1A1A1A] p-8 sm:p-6 lg:p-10 xl:rounded-xl xl:p-[50px]">
          <h3 className="mb-[10px] text-[18px] font-bold lg:mb-3 lg:text-[20px] xl:mb-4 xl:text-[24px]">
            Premium Plna
          </h3>
          <p className="mb-9 text-[14px] text-[#999999] sm:mb-[30px] lg:mb-10 lg:text-[16px] xl:mb-[50px] xl:text-[18px]">
            Access to a widest selection of movies and shows, including all new
            releases and Offline Viewing
          </p>
          <p className="mb-9 text-[14px] font-medium text-[#999999] sm:mb-[30px] lg:mb-10 lg:text-[16px] xl:mb-[50px] xl:text-[18px]">
            <span className="text-[24px] font-semibold text-white lg:text-[30px] xl:text-[40px]">
              {selectedPlan === "Monthly" ? "$14.99" : "$169.99"}
            </span>
            {selectedPlan === "Monthly" ? "/month" : "/year"}
          </p>
          <div className="flex items-center gap-3 sm:gap-2 xl:gap-5">
            <button className="h-[50px] rounded-md bg-[#141414] px-5 py-[14px] text-[14px] font-semibold sm:mt-5 sm:text-[12px] xl:h-16  xl:rounded-lg xl:px-[24px] xl:py-[18px] xl:text-[18px]">
              Start Free Trial
            </button>
            <button className="h-[50px] rounded-md bg-[#E60000] px-5 py-[14px] text-[14px] font-semibold sm:mt-5 sm:text-[12px] xl:h-16  xl:rounded-lg xl:px-[24px] xl:py-[18px] xl:text-[18px]">
              Choose Plan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tariff;
