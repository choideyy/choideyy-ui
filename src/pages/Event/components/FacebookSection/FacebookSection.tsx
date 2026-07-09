import { useEffect, useRef } from 'react';
import './FacebookSection.css';

const FACEBOOK_PAGE_URL =
  'https://www.facebook.com/profile.php?id=61576861010889';

declare global {
  interface Window {
    FB?: {
      XFBML: {
        parse: (element?: HTMLElement) => void;
      };
    };
    fbAsyncInit?: () => void;
  }
}

export const FacebookSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parsePlugin = () => {
      if (containerRef.current) {
        window.FB?.XFBML.parse(containerRef.current);
      }
    };

    if (document.getElementById('facebook-jssdk')) {
      parsePlugin();
      return;
    }

    window.fbAsyncInit = parsePlugin;

    const script = document.createElement('script');
    script.id = 'facebook-jssdk';
    script.src =
      'https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v19.0';
    script.async = true;
    script.defer = true;
    script.crossOrigin = 'anonymous';
    document.body.appendChild(script);
  }, []);

  return (
    <section className="event-facebook" aria-label="Latest Facebook post">
      <div className="event-facebook__inner" ref={containerRef}>
        <div
          className="fb-page"
          data-href={FACEBOOK_PAGE_URL}
          data-tabs="timeline"
          data-width="903"
          data-height="620"
          data-small-header="true"
          data-adapt-container-width="true"
          data-hide-cover="true"
          data-show-facepile="false"
        />
      </div>
    </section>
  );
};
