import { useState, useRef, useEffect } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
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
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center">
        <p className="text-3xl font-semibold text-gray-800">{question}</p>
        <span className="text-3xl">{isOpen ? "−" : "+"}</span>
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

const FAQ = () => {
  const faqData = [
    { question: "Вопрос 1", answer: "Ответ на вопрос 1" },
    { question: "Вопрос 2", answer: "Ответ на вопрос 2" },
    { question: "Вопрос 3", answer: "Ответ на вопрос 3" },
    { question: "Вопрос 4", answer: "Ответ на вопрос 4" },
    { question: "Вопрос 5", answer: "Ответ на вопрос 5" },
    { question: "Вопрос 6", answer: "Ответ на вопрос 6" },
  ];

  return (
    <div className="mx-8 md:mx-34 md:my-15 bg-amber-50 p-8 rounded-4xl shadow-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
