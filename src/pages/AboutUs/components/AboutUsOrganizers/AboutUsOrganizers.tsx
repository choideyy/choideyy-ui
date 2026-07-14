import { useCallback, useState } from 'react';
import organizersImage from '../../../../assets/figma/about-us/organizers.png';
import partnerNavi from '../../../../assets/figma/about-us/partner-navi.png';
import partnerSoloist from '../../../../assets/figma/about-us/partner-soloist.png';
import { OrganizerPartnerCard } from './components/OrganizerPartnerCard';
import './AboutUsOrganizers.css';

type ActivePartner = 'partnerA' | 'partnerB' | null;

const PARTNERS = [
  {
    id: 'partnerA' as const,
    name: 'TPConik Team',
    logo: partnerSoloist,
    logoAlt: 'TPConik Team',
    descriptionPosition: 'right' as const,
    paragraphs: [
      <>
        Là một trong những nhóm nhảy tài năng nhất trực thuộc trường THPT Chuyên
        Trần Phú, <strong>TPConik Team</strong> thành lập vào cuối năm 2020 với
        mục đích tạo nên một môi trường hoạt động lành mạnh và lan tỏa niềm đam
        mê bộ môn nhảy tới các bạn học sinh trong cũng như ngoài trường tại Hải
        Phòng.
      </>,
      <>
        Trong quá trình hoạt động, <strong>TPConik Team</strong> đã nhiều lần có
        mặt tại vòng chung kết của những giải đấu lớn dành cho lứa tuổi học sinh
        trung học phổ thông ở toàn miền Bắc, góp phần phát triển, mang màu sắc
        của học sinh trường THPT Chuyên Trần Phú nói riêng, cũng như của học
        sinh Hải Phòng nói chung đến gần hơn với mọi người.
      </>,
      <>
        Ngoài ra, nhóm luôn hăng hái tham gia vào các hoạt động văn nghệ của
        trường và tổ chức những buổi giao lưu nhằm gắn kết những bạn trẻ có chung
        sở thích với nhau hơn.
      </>,
    ],
  },
  {
    id: 'partnerB' as const,
    name: 'Navi Dance Team',
    logo: partnerNavi,
    logoAlt: 'Navi Dance Team',
    descriptionPosition: 'left' as const,
    paragraphs: [
      <>
        <strong>Navi Dance Team</strong> là câu lạc bộ nhảy trực thuộc Trường
        Đại học Hàng hải Việt Nam, được thành lập vào năm 2013. Trải qua hơn một
        thập kỷ hình thành và phát triển, <strong>Navi Dance Team</strong> đã
        khẳng định vị thế là một trong những câu lạc bộ năng động, tiêu biểu và
        có bề dày truyền thống lâu năm của nhà trường.
      </>,
      <>
        Với niềm đam mê cháy bỏng dành cho nghệ thuật nhảy hiện đại, tinh thần
        đoàn kết và không ngừng đổi mới, <strong>Navi Dance Team</strong> đã gặt
        hái được nhiều thành tích ấn tượng tại các cuộc thi, chương trình giao
        lưu văn hóa – nghệ thuật trong và ngoài thành phố.
      </>,
      <>
        Không chỉ là nơi hội tụ của những tài năng trẻ,{' '}
        <strong>Navi Dance Team</strong> còn là mái nhà chung nuôi dưỡng đam mê,
        lan tỏa năng lượng tích cực và góp phần làm phong phú đời sống sinh
        viên Trường Đại học Hàng hải Việt Nam nói riêng và Thành phố Hải Phòng
        nói chung.
      </>,
    ],
  },
] as const;

export const AboutUsOrganizers = () => {
  const [activePartner, setActivePartner] = useState<ActivePartner>(null);

  const handleToggle = useCallback((partnerId: ActivePartner) => {
    setActivePartner((current) => (current === partnerId ? null : partnerId));
  }, []);

  return (
    <section
      className="about-us-organizers"
      aria-labelledby="about-us-organizers-heading"
    >
      <h2 id="about-us-organizers-heading" className="about-us-organizers__title">
        BAN TỔ CHỨC
      </h2>

      <img
        className="about-us-organizers__photo"
        src={organizersImage}
        alt="Ban tổ chức Chọi Deyyy"
      />

      <div
        className={`about-us-organizers__partners${activePartner ? ' has-active' : ''}`}
      >
        {PARTNERS.map((partner) => (
          <OrganizerPartnerCard
            key={partner.id}
            partnerId={partner.id}
            name={partner.name}
            logo={partner.logo}
            logoAlt={partner.logoAlt}
            descriptionPosition={partner.descriptionPosition}
            paragraphs={[...partner.paragraphs]}
            isActive={activePartner === partner.id}
            onToggle={() => handleToggle(partner.id)}
          />
        ))}
      </div>
    </section>
  );
};
