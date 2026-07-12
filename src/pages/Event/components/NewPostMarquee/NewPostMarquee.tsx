import newPostTape from '../../../../assets/figma/event/new-post-tape.png';
import './NewPostMarquee.css';

export const NewPostMarquee = () => {
  return (
    <section className="event-new-post" aria-hidden="true">
      <img
        className="event-new-post__image"
        src={newPostTape}
        alt=""
      />
    </section>
  );
};
