import { useState, useRef, useEffect } from "react";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <div
      className={`bg-white w-full md:p-8 p-6 cursor-pointer transition-all duration-300 ${
        isOpen ? "rounded-2xl" : "rounded-[50px]"
      }`}
      onClick={onClick}
    >
      <div className="flex justify-between items-center">
        <p className="md:text-3xl text-2xl font-semibold text-gray-800">
          {question}
        </p>
        <span className="md:text-3xl text-xl text-red font-bold bg-yellow rounded-full md:w-8 md:h-8 py-0.5 px-2 md:py-0 md:px-0 flex justify-center items-center">
          {isOpen ? "−" : "+"}
        </span>
      </div>

      <div
        style={{
          maxHeight: isOpen ? `${height}px` : "0px",
          transition: "max-height 0.3s ease",
        }}
        className="overflow-hidden mt-2 text-gray-700 text-lg"
      >
        <div ref={contentRef}>
          <p className="text-2xl whitespace-pre-line">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ = ({ faqData }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="flex justify-center mt-25 items-center content-center flex-col">
      <div className="xl:w-[1000px] md:w-[600px] m-5 grid grid-cols-1 gap-7">
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
