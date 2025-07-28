import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    question: "What is Resezy?",
    answer: "Resyez is an AI-powered resume builder designed for students and early-career professionals. It helps you generate optimized, professional resumes tailored for specific job roles."
  },
  {
    question: "Is Resezy free to use?",
    answer: "Yes! Resyez offers a free plan that includes a basic template, AI suggestions, and PDF download. You can upgrade to Pro for advanced features like premium templates and ATS optimization."
  },
  {
    question: "How does the AI help with resume building?",
    answer: "The AI analyzes your inputs and job descriptions to suggest achievements, keywords, and formats that are likely to perform well with recruiters and Applicant Tracking Systems (ATS)."
  },
  {
    question: "Are the templates ATS-friendly?",
    answer: "Absolutely. All Resyez templates are designed to pass through Applicant Tracking Systems by using clean formatting, standard fonts, and proper section headings."
  },
  {
    question: "Can I customize my resume?",
    answer: "Yes. You can customize text, layout, colors, and even add or remove sections to match your industry or preferences."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="border rounded-lg bg-white shadow-sm transition">
              <button
                onClick={() => toggle(index)}
                className="flex justify-between items-center w-full px-6 py-5 text-left text-gray-800 font-medium text-lg hover:bg-gray-50 transition"
              >
                <span>{item.question}</span>
                <span className="ml-4 text-blue-600">
                  {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
              </button>
              <div
                className={`px-6 pb-5 text-gray-600 transition-all duration-300 ease-in-out ${
                  isOpen ? "block" : "hidden"
                }`}
              >
                {item.answer}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;
