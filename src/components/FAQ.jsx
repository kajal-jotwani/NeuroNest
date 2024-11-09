import { useState } from 'react';
import { IoIosArrowDropdownCircle } from "react-icons/io"; // Import the arrow icon
import '../App.css'
import faq from '../media/faq.png';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What does neurodivergent mean?",
            answer: "Neurodivergent refers to individuals whose brain functions differ from what is typically expected. It includes conditions like autism, ADHD, dyslexia, and more."
        },
        {
            question: "What are common conditions for neurodivergent kids?",
            answer: "Common conditions include autism spectrum disorder (ASD), ADHD, dyslexia, and learning disabilities."
        },
        {
            question: "How can I support my neurodivergent child?",
            answer: "Support includes providing structure, understanding their specific needs, ensuring proper therapies or accommodations at school, and fostering a nurturing, patient environment."
        },
        {
            question: "Are neurodivergent children capable of learning and succeeding?",
            answer: "Yes! Neurodivergent children may learn differently, but with the right support and accommodations, they can thrive in various environments and show great strengths."
        },
        {
            question: "What is the importance of early diagnosis?",
            answer: "Early diagnosis can help identify specific needs and allow for early interventions, which can significantly improve the development of neurodivergent children."
        },
        {
            question: "What accommodations might be needed for neurodivergent children in school?",
            answer: "Accommodations may include extra time on tests, a quiet space for studying, use of assistive technology, and tailored teaching strategies."
        },
        {
            question: "Can neurodivergent children have social challenges?",
            answer: "Yes, neurodivergent children may face social challenges, such as difficulty interpreting social cues or making friends, but they can also develop strong social skills with support and practice."
        },
    ];


    return (
        <div className="faq-container">
            <h2>Frequently Asked Questions</h2>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
            }}
            >

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => toggleAnswer(index)}
                        >
                            <div className="faq-question">
                                {faq.question}
                                <IoIosArrowDropdownCircle
                                    className={`faq-icon ${activeIndex === index ? 'rotated' : ''}`}
                                />
                            </div>
                            <div className="faq-answer">{faq.answer}</div>
                        </div>
                    ))}
                </div>
                <img src={faq} alt="housePhoto" style={{ width: "300px",
                height: "300px",
                marginLeft: "40px",
                 }} />
            </div>
        </div>
    );
};

export default FAQ;
