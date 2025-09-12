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
      className="border-b border-gray-200 pb-4 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-between items-center">
        <p className="md:text-4xl text-2xl font-semibold text-gray-800">
          {question}
        </p>
        <span className="md:text-3xl text-xl">{isOpen ? "−" : "+"}</span>
      </div>

      <div
        style={{
          maxHeight: isOpen ? `${height}px` : "0px",
          transition: "max-height 0.3s ease",
        }}
        className="overflow-hidden mt-2 text-gray-700 text-lg"
      >
        <div ref={contentRef}>{answer}</div>
      </div>
    </div>
  );
};

const FAQ = ({ faqData }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="mx-8 md:mx-34 md:my-15 bg-amber-50 p-8 rounded-4xl shadow-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
