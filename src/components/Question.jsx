import { Collapse, initTWE } from "../../node_modules/tw-elements";
import Plus from "../images/icon/main/plus.svg";
import Minus from "../images/icon/main/minus.svg";
import React, { useEffect, useState } from "react";

const questions = [
  "What is StreamVibe?",
  "How do I sign up for StreamVibe?",
  "How much does StreamVibe cost?",
  "What is the StreamVibe free trial?",
  "What content is available on StreamVibe?",
  "How do I contact StreamVibe customer support?",
  "How can I watch StreamVibe?",
  "What are the StreamVibe payment methods?",
];

const Question = () => {
  initTWE({ Collapse });

  useEffect(() => {
    setIsExpanded(Array(questions.length).fill(false));
  }, []);

  const [isExpanded, setIsExpanded] = useState(
    Array(questions.length).fill(false),
  );

  const toggleExpansion = (index) => {
    const newExpandedState = [...isExpanded];
    newExpandedState[index] = !newExpandedState[index];
    setIsExpanded(newExpandedState);
  };

  return (
    <section className="mb-[100px] sm:mb-[80px] lg:mb-[120px] xl:mb-[150px]">
      <div className="mb-12 flex items-end justify-between sm:mb-10 sm:flex-col sm:items-start lg:mb-[60px] xl:mb-[80px]">
        <div>
          <h2 className="text-[24px] font-bold sm:mb-2 sm:text-[24px] lg:mb-[10px] lg:text-[28px] xl:mb-[14px] xl:text-[38px]">
            Frequently Asked Questions
          </h2>
          <p className="text-[14px] text-[#999999] lg:text-[16px] xl:text-[18px]">
            Got questions? We've got answers! Check out our FAQ section to find
            answers to the most common questions about StreamVibe.
          </p>
        </div>
        <button className="h-[50px] rounded-md bg-[#E60000] px-5 py-[14px] text-[14px] font-semibold sm:mt-5 sm:max-w-[140px]  xl:rounded-lg xl:px-[24px] xl:py-[18px] xl:text-[18px]">
          Ask a Question
        </button>
      </div>
      <div
        id="accordionExample"
        className="grid grid-cols-2 gap-x-5 bg-[#141414] sm:grid-cols-1 lg:gap-x-10 xl:gap-x-20"
      >
        {questions.map((question, index) => (
          <div key={index}>
            <div className="p-[22px] sm:p-5 lg:p-6 xl:p-[30px]">
              <h2
                className="mb-0 flex  items-center gap-2"
                id={`heading${index + 1}`}
              >
                <span className="rounded-lg bg-[#262626] p-[14px] font-semibold sm:rounded-md sm:p-[12px] lg:p-[16px] xl:rounded-[10px] xl:p-[20px]">
                  {`0${index + 1}`}
                </span>
                <button
                  className="flex w-full items-center justify-between"
                  type="button"
                  data-twe-collapse-init
                  data-twe-target={`#collapse${index + 1}`}
                  aria-expanded={isExpanded[index]}
                  aria-controls={`collapse${index + 1}`}
                  onClick={() => toggleExpansion(index)}
                >
                  <span>{question}</span>
                  <span className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
                    {isExpanded[index] ? (
                      <img src={Minus} alt="icon" />
                    ) : (
                      <img src={Plus} alt="icon" />
                    )}
                  </span>
                </button>
              </h2>
              <div
                id={`collapse${index + 1}`}
                className={`collapse-panel ${isExpanded[index] ? "visible" : "hidden"}`}
                data-twe-collapse-item
                aria-labelledby={`heading${index + 1}`}
                data-twe-parent="#accordionExample"
              >
                <div className="pl-14 text-[14px] text-[#999999] lg:text-[16px] xl:text-[18px]">
                  StreamVibe is a streaming service that allows you to watch
                  movies and shows on demand.
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Question;
