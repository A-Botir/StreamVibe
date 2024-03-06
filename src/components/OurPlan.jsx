import React, { useState } from "react";

const OurPlan = () => {
  const [selectedPlan, setSelectedPlan] = useState("Basic");

  const handPlanChange = (plan) => {
    setSelectedPlan(plan);
  };
  return (
    <section className="lg-[100px] xl-[150px] mb-20 sm:mb-10">
      <div className="mb-[50px] sm:mb-10 lg:mb-[60px] xl:mb-20">
        <h2 className="text-[24px] font-bold sm:mb-2 sm:text-[24px] lg:mb-[10px] lg:text-[28px] xl:mb-[14px] xl:text-[38px]">
          Compare our plans and find the right one for you
        </h2>
        <p className="text-[14px] text-[#999999] lg:text-[16px] xl:text-[18px]">
          StreamVibe offers three different plans to fit your needs: Basic,
          Standard, and Premium. Compare the features of each plan and choose
          the one that's right for you.
        </p>
      </div>
      <table className="border-collapse rounded-[10px] border border-[#262626] sm:hidden">
        <thead>
          <tr className="bg-[#0F0F0F] ">
            <th className="border border-[#262626] p-5 text-left text-[16px] font-semibold lg:p-6 lg:text-[18] xl:p-[30px] xl:text-[20px] ">
              Features
            </th>
            <th className="border border-[#262626] p-5 text-left text-[16px] font-semibold lg:p-6 lg:text-[18] xl:p-[30px] xl:text-[20px] ">
              Basic
            </th>
            <th className="border border-[#262626] p-5 text-left text-[16px] font-semibold lg:p-6 lg:text-[18] xl:p-[30px] xl:text-[20px] ">
              Standard
              <span className="ml-2 rounded bg-[#ff0000] px-2 py-1 text-[14px] font-medium">
                Popular
              </span>
            </th>
            <th className="border border-[#262626] p-5 text-left text-[16px] font-semibold lg:p-6 lg:text-[18] xl:p-[30px] xl:text-[20px] ">
              Premium
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-[#262626] p-5 text-[14px] font-medium text-[#999999] lg:p-6 lg:text-[16px] xl:p-[30px] xl:text-[18px]">
              Price
            </td>
            <td className="border border-[#262626] p-5 text-[14px] font-medium text-[#999999] lg:p-6 lg:text-[16px] xl:p-[30px] xl:text-[18px]">
              $9.99/Month
            </td>
            <td className="border border-[#262626] p-5 text-[14px] font-medium text-[#999999] lg:p-6 lg:text-[16px] xl:p-[30px] xl:text-[18px]">
              $12.99/Month
            </td>
            <td className="border border-[#262626] p-5 text-[14px] font-medium text-[#999999] lg:p-6 lg:text-[16px] xl:p-[30px] xl:text-[18px]">
              $14.99/Month
            </td>
          </tr>
          <tr>
            <td className="border border-[#262626] p-5 text-[14px] font-medium text-[#999999] lg:p-6 lg:text-[16px] xl:p-[30px] xl:text-[18px]">
              Content
            </td>
            <td className="border border-[#262626] p-5 text-[14px] font-medium text-[#999999] lg:p-6 lg:text-[16px] xl:p-[30px] xl:text-[18px]">
              Access to a wide selection of movies and shows, including some new
              releases.
            </td>
            <td className="border border-[#262626] p-5 text-[14px] font-medium text-[#999999] lg:p-6 lg:text-[16px] xl:p-[30px] xl:text-[18px]">
              Access to a wider selection of movies and shows, including most
              new releases and exclusive content
            </td>
            <td className="border border-[#262626] p-5 text-[14px] font-medium text-[#999999] lg:p-6 lg:text-[16px] xl:p-[30px] xl:text-[18px]">
              Access to a widest selection of movies and shows, including all
              new releases and Offline Viewing
            </td>
          </tr>
          <tr>
            <td className="border border-[#262626] p-5 text-[14px] font-medium text-[#999999] lg:p-6 lg:text-[16px] xl:p-[30px] xl:text-[18px]">
              Devices
            </td>
            <td className="border border-[#262626] p-5 text-[14px] font-medium text-[#999999] lg:p-6 lg:text-[16px] xl:p-[30px] xl:text-[18px]">
              Watch on one device simultaneously
            </td>
            <td className="border border-[#262626] p-5 text-[14px] font-medium text-[#999999] lg:p-6 lg:text-[16px] xl:p-[30px] xl:text-[18px]">
              Watch on Two device simultaneously
            </td>
            <td className="border border-[#262626] p-5 text-[14px] font-medium text-[#999999] lg:p-6 lg:text-[16px] xl:p-[30px] xl:text-[18px]">
              Watch on Four device simultaneously
            </td>
          </tr>
          <tr>
            <td className="border border-[#262626] p-5 text-[14px] font-medium text-[#999999] lg:p-6 lg:text-[16px] xl:p-[30px] xl:text-[18px]">
              Free Trail
            </td>
            <td className="border border-[#262626] p-5 text-[14px] font-medium text-[#999999] lg:p-6 lg:text-[16px] xl:p-[30px] xl:text-[18px]">
              7 Days
            </td>
            <td className="border border-[#262626] p-5 text-[14px] font-medium text-[#999999] lg:p-6 lg:text-[16px] xl:p-[30px] xl:text-[18px]">
              7 Days
            </td>
            <td className="border border-[#262626] p-5 text-[14px] font-medium text-[#999999] lg:p-6 lg:text-[16px] xl:p-[30px] xl:text-[18px]">
              7 Days
            </td>
          </tr>
          <tr>
            <td className="border border-[#262626] p-5 text-[14px] font-medium text-[#999999] lg:p-6 lg:text-[16px] xl:p-[30px] xl:text-[18px]">
              Cancel Anytime
            </td>
            <td className="border border-[#262626] p-5 text-[14px] font-medium text-[#999999] lg:p-6 lg:text-[16px] xl:p-[30px] xl:text-[18px]">
              Yes
            </td>
            <td className="border border-[#262626] p-5 text-[14px] font-medium text-[#999999] lg:p-6 lg:text-[16px] xl:p-[30px] xl:text-[18px]">
              Yes
            </td>
            <td className="border border-[#262626] p-5 text-[14px] font-medium text-[#999999] lg:p-6 lg:text-[16px] xl:p-[30px] xl:text-[18px]">
              Yes
            </td>
          </tr>
          <tr>
            <td className="border border-[#262626] p-5 text-[14px] font-medium text-[#999999] lg:p-6 lg:text-[16px] xl:p-[30px] xl:text-[18px]">
              HDR
            </td>
            <td className="border border-[#262626] p-5 text-[14px] font-medium text-[#999999] lg:p-6 lg:text-[16px] xl:p-[30px] xl:text-[18px]">
              No
            </td>
            <td className="border border-[#262626] p-5 text-[14px] font-medium text-[#999999] lg:p-6 lg:text-[16px] xl:p-[30px] xl:text-[18px]">
              Yes
            </td>
            <td className="border border-[#262626] p-5 text-[14px] font-medium text-[#999999] lg:p-6 lg:text-[16px] xl:p-[30px] xl:text-[18px]">
              Yes
            </td>
          </tr>
          <tr>
            <td className="border border-[#262626] p-5 text-[14px] font-medium text-[#999999] lg:p-6 lg:text-[16px] xl:p-[30px] xl:text-[18px]">
              Dolby Atmos
            </td>
            <td className="border border-[#262626] p-5 text-[14px] font-medium text-[#999999] lg:p-6 lg:text-[16px] xl:p-[30px] xl:text-[18px]">
              No
            </td>
            <td className="border border-[#262626] p-5 text-[14px] font-medium text-[#999999] lg:p-6 lg:text-[16px] xl:p-[30px] xl:text-[18px]">
              Yes
            </td>
            <td className="border border-[#262626] p-5 text-[14px] font-medium text-[#999999] lg:p-6 lg:text-[16px] xl:p-[30px] xl:text-[18px]">
              Yes
            </td>
          </tr>
          <tr>
            <td className="border border-[#262626] p-5 text-[14px] font-medium text-[#999999] lg:p-6 lg:text-[16px] xl:p-[30px] xl:text-[18px]">
              Ad - Free
            </td>
            <td className="border border-[#262626] p-5 text-[14px] font-medium text-[#999999] lg:p-6 lg:text-[16px] xl:p-[30px] xl:text-[18px]">
              No
            </td>
            <td className="border border-[#262626] p-5 text-[14px] font-medium text-[#999999] lg:p-6 lg:text-[16px] xl:p-[30px] xl:text-[18px]">
              Yes
            </td>
            <td className="border border-[#262626] p-5 text-[14px] font-medium text-[#999999] lg:p-6 lg:text-[16px] xl:p-[30px] xl:text-[18px]">
              Yes
            </td>
          </tr>
          <tr>
            <td className="border border-[#262626] p-5 text-[14px] font-medium text-[#999999] lg:p-6 lg:text-[16px] xl:p-[30px] xl:text-[18px]">
              Offline Viewing
            </td>
            <td className="border border-[#262626] p-5 text-[14px] font-medium text-[#999999] lg:p-6 lg:text-[16px] xl:p-[30px] xl:text-[18px]">
              No
            </td>
            <td className="border border-[#262626] p-5 text-[14px] font-medium text-[#999999] lg:p-6 lg:text-[16px] xl:p-[30px] xl:text-[18px]">
              Yes, for select titles.
            </td>
            <td className="border border-[#262626] p-5 text-[14px] font-medium text-[#999999] lg:p-6 lg:text-[16px] xl:p-[30px] xl:text-[18px]">
              Yes, for all times
            </td>
          </tr>
          <tr>
            <td className="border border-[#262626] p-5 text-[14px] font-medium text-[#999999] lg:p-6 lg:text-[16px] xl:p-[30px] xl:text-[18px]">
              Family Sharing
            </td>
            <td className="border border-[#262626] p-5 text-[14px] font-medium text-[#999999] lg:p-6 lg:text-[16px] xl:p-[30px] xl:text-[18px]">
              No
            </td>
            <td className="border border-[#262626] p-5 text-[14px] font-medium text-[#999999] lg:p-6 lg:text-[16px] xl:p-[30px] xl:text-[18px]">
              Yes, up to 5 family members.
            </td>
            <td className="border border-[#262626] p-5 text-[14px] font-medium text-[#999999] lg:p-6 lg:text-[16px] xl:p-[30px] xl:text-[18px]">
              Yes, up to 6 family members.
            </td>
          </tr>
        </tbody>
      </table>
      <div className="hidden sm:block">
        <div className="flex gap-1 rounded-lg border border-[#262626] bg-[#0F0F0F] p-2 xl:h-[60px] xl:rounded-[10px]">
          <button
            className={`rounded-md ${
              selectedPlan === "Basic"
                ? "bg-[#1F1F1F] text-white"
                : "text-[#999999]"
            } px-4 py-2 hover:bg-[#1F1F1F] hover:text-white xl:rounded-[10px] xl:px-[24px] xl:py-[14px] `}
            onClick={() => handPlanChange("Basic")}
          >
            Basic
          </button>
          <button
            className={`rounded-md ${
              selectedPlan === "Standard"
                ? "bg-[#1F1F1F] text-white"
                : "text-[#999999]"
            } px-4 py-2 hover:bg-[#1F1F1F] hover:text-white xl:rounded-[10px] xl:px-[24px] xl:py-[14px]`}
            onClick={() => handPlanChange("Standard")}
          >
            Standard
          </button>
          <button
            className={`rounded-md ${
              selectedPlan === "Premium"
                ? "bg-[#1F1F1F] text-white"
                : "text-[#999999]"
            } px-4 py-2 hover:bg-[#1F1F1F] hover:text-white xl:rounded-[10px] xl:px-[24px] xl:py-[14px] `}
            onClick={() => handPlanChange("Premium")}
          >
            Premium
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurPlan;
