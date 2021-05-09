import { useEffect } from 'react';
import image404 from '../assets/404.png';

function useLazyLoading() {
  useEffect(() => {
    var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

    if ("IntersectionObserver" in window) {
      let lazyImageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const lazyImage: any = entry.target;

            try {
              lazyImage.src = lazyImage.dataset.src || image404;
              lazyImage.srcset = lazyImage.dataset.srcset || '';
              lazyImage.alt = lazyImage.dataset.alt || '';
            } catch (error) {
              console.error('Load!', error);
              lazyImage.src = image404;
            }
            
            // lazyImage.removeAttribute('data-src');
            // lazyImage.removeAttribute('data-srcset');
            lazyImage.classList.remove("lazy");
            lazyImageObserver.unobserve(lazyImage);
          }
        });
      });

      lazyImages.forEach((lazyImage: any) => {
        lazyImageObserver.observe(lazyImage);
      });
    } else {
      // Possibly fall back to event handlers here
      lazyImages.forEach((lazyImage: any) => {
        try {
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.srcset = lazyImage.dataset.srcset;
        } catch (error) {
          console.error('Load!', error);
          lazyImage.src = image404;
        }
      });
    }

  })
}

export default useLazyLoading;
