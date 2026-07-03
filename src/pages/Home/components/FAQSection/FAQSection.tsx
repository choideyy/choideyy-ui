import { useState, type ReactNode } from 'react';
import faqVinyl from '../../../../assets/figma/faq-vinyl.png';
import faqDeco from '../../../../assets/figma/faq-deco.png';
import tornPaper from '../../../../assets/figma/torn-paper.png';
import './FAQSection.css';

type FAQItem = {
  question: string;
  answer: ReactNode;
};

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Một người có thể tham gia nhiều hạng mục không ?',
    answer: <p>Nội dung sẽ được cập nhật sau.</p>,
  },
  {
    question: 'Làm sao để đăng kí ?',
    answer: (
      <p>
        Bạn chỉ cần nhấn vào nút <strong>MUA VÉ</strong> trên góc phải website,
        điền đầy đủ thông tin trong form và gửi. BTC sẽ xác nhận lại cho bạn
        ngay sau khi hoàn tất.
      </p>
    ),
  },
  {
    question: 'Sự kiện có bán đồ ăn/uống không ?',
    answer: <p>Nội dung sẽ được cập nhật sau.</p>,
  },
  {
    question: 'Thí sinh cần có mặt trước giờ event bao lâu ?',
    answer: <p>Nội dung sẽ được cập nhật sau.</p>,
  },
  {
    question: 'Có giới hạn độ tuổi không?',
    answer: <p>Nội dung sẽ được cập nhật sau.</p>,
  },
  {
    question: 'Sự kiện diễn ra ở đâu, vào thời gian nào ?',
    answer: <p>Nội dung sẽ được cập nhật sau.</p>,
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="faq" id="faq" aria-labelledby="faq-heading">
      <div className="faq__body">
        <div className="faq__torn-paper" aria-hidden="true">
          <div className="faq__torn-paper-rotator">
            <img src={tornPaper} alt="" />
          </div>
        </div>

        <div className="faq__body-inner">
          <img
            className="faq__vinyl"
            src={faqVinyl}
            alt=""
            aria-hidden="true"
          />
          <img
            className="faq__deco"
            src={faqDeco}
            alt=""
            aria-hidden="true"
          />

          <div className="faq__content">
            <h2 id="faq-heading" className="faq__title">
              FAQs
            </h2>

            <ul className="faq__list">
              {FAQ_ITEMS.map((item, index) => {
                const isOpen = openIndex === index;
                const panelId = `faq-panel-${index}`;
                const triggerId = `faq-trigger-${index}`;

                return (
                  <li key={item.question} className="faq__item">
                    <button
                      type="button"
                      id={triggerId}
                      className="faq__question"
                      onClick={() => toggle(index)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                    >
                      <span className="faq__question-text">{item.question}</span>
                      <span className="faq__toggle" aria-hidden="true">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>

                    {isOpen && (
                      <div
                        id={panelId}
                        className="faq__answer"
                        role="region"
                        aria-labelledby={triggerId}
                      >
                        {item.answer}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
