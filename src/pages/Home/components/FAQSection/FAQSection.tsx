import { useState, type ReactNode } from 'react';
import faqVinyl from '../../../../assets/figma/faq-vinyl.png';
import faqDeco from '../../../../assets/figma/faq-deco.png';
import tornPaper from '../../../../assets/figma/torn-paper.png';
import { TornEdgeSeamDesktop, TornEdgeSeamMobile } from '../TornEdgeSeam/TornEdegeSeam';
import './FAQSection.css';

type FAQItem = {
  question: string;
  answer: ReactNode;
};

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Thể lệ thi đấu của hạng mục Crew vs Crew là gì ?',
    answer: <p>Mỗi đội sẽ biểu diễn một tiết mục theo chủ đề mùa giải. BGK sẽ chọn ra Top 4-8 đội cao điểm để bốc thăm đấu đối kháng với nhau và chọn ra <strong>Champion Crew vs Crew 2026</strong>. <strong>Giải Best Performance</strong> dành cho đội có màn trình diễn xuất sắc nhất vòng 1. </p>,
  },
  {
    question: 'Thể lệ thi đấu của hạng mục 2 vs 2 All Style là gì ?',
    answer: <p>Prelim đến Top 16, mỗi Duo thi đấu trên nền nhạc ngẫu nhiên. Top 16 đấu loại trực tiếp và áp dụng cơ chế Recall. BGK chấm và chọn ra <strong>Duo Quán quân 2 vs 2 All Style Battle </strong>.</p>,
  },
  {
    question: 'Làm sao để đăng kí ?',
    answer: (
      <p>
        Bạn chỉ cần nhấn vào nút <strong>ĐĂNG KÍ</strong> trên góc phải website,
        điền đầy đủ thông tin trong form và gửi. BTC sẽ xác nhận lại cho bạn
        ngay sau khi hoàn tất.
      </p>
    ),
  },
  {
    question: 'Ai có thể đăng kí tham gia Chọi Deyyy 2026 ?',
    answer: <p>Các cá nhân, nhóm nhảy, có niềm đam mê với nhảy, yêu thích vũ đạo nói chung và các thể loại nhảy Đường phố nói riêng đang sinh sống, học tập và làm việc trên địa bàn thành phố Hải Phòng và các tỉnh miền Bắc.</p>,
  },
  {
    question: 'Sự kiện diễn ra ở đâu, vào thời gian nào ?',
    answer: <p>Sự kiện được diễn ra vào ngày <strong>08/08/2026</strong> tại <strong>Nhà thi đấu Trường Đại học Hàng Hải</strong>, số 484, Lạch Tray, Ngô Quyền, Hải Phòng.</p>,
  },
  {
    question: 'BTC Chọi Deyyy là ai ?',
    answer: <p>BTC Chọi Deyyy được hợp thành từ hai nhóm: <strong>TPConik Team</strong>(THPT Chuyên Trần Phú) và <strong>Navi Dance Team</strong> (Trường Đại học Hàng Hải). Với tinh thần trẻ, nhiệt huyết và sáng tạo, luôn hướng đến việc xây dựng một sân chơi street dance công bằng, chuyên nghiệp và đầy cảm hứng cho cộng đồng dancer, <strong>Chọi Deyyy</strong> đặt trọng tâm vào tôn vinh nỗ lực của người trẻ, thúc đẩy sự kết nối, học hỏi và lan tỏa văn hóa hiphop tại Hải Phòng.</p>,
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
        <div className="faq__bg" aria-hidden="true">
          <TornEdgeSeamDesktop />
          <TornEdgeSeamMobile />
          <div className="faq__fill" />
        </div>
        <div className="faq__fill" aria-hidden="true" />
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
