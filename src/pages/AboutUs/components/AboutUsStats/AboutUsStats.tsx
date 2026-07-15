import './AboutUsStats.css';

const STATS = [
  {
    id: 'years',
    value: '03',
    label: 'NĂM TỔ CHỨC',
    description:
      'Đã trở thành một sự kiện không thể thiếu đối với dancers Hải Phòng',
  },
  {
    id: 'contestants',
    value: '250+',
    label: 'SỐ THÍ SINH',
    description:
      'Hàng trăm dancers đã tham gia và trưởng thành qua từng mùa giải',
  },
  {
    id: 'partners',
    value: '30+',
    label: 'SỐ ĐƠN VỊ',
    description: 'Thương hiệu đã đồng hành cùng sự kiện trong suốt hành trình.',
  },
] as const;

export const AboutUsStats = () => {
  return (
    <section className="about-us-stats" aria-labelledby="about-us-stats-heading">
      <div className="about-us-stats__header">
        <h2 id="about-us-stats-heading" className="about-us-stats__title">
          THÀNH TÍCH
        </h2>
        <p className="about-us-stats__intro">
          Những con số nói lên sự phát triển không ngừng của <strong>Chọi Deyyy</strong> trong
          hành trình trở thành một trong những giải đấu hàng đầu của thành phố
          Hải Phòng.
        </p>
      </div>

      <ul className="about-us-stats__grid">
        {STATS.map((stat) => (
          <li key={stat.id} className="about-us-stats__card">
            <p className="about-us-stats__value">{stat.value}</p>
            <p className="about-us-stats__label">{stat.label}</p>
            <p className="about-us-stats__description">{stat.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
