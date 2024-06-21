import React from 'react'
import './ScrollToTop.css'
import SvgComponent from '../../utils/SvgComponent';
export default function ScrollToTop() {
    const myButtonRef = React.useRef(null);

    React.useEffect(() => {
        // Get the button:
        const scrollToTopBtn = myButtonRef.current;

        // When the user scrolls down 450px from the top of the document, show the button
        window.onscroll = function () {
            scrollFunction();
        };

        function scrollFunction() {
            if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
                scrollToTopBtn.style.display = "flex";
            } else {
                scrollToTopBtn.style.display = "none";
            }
        }

        // Clean up the event listener on component unmount
        return () => {
            window.onscroll = null;
        };
    }, []);

    // When the user clicks on the button, scroll to the top of the document smoothly
    function topFunction() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return <button onClick={topFunction} ref={myButtonRef} className="btn-scroll-to-top" title="Go to top">
        <SvgComponent
            svgKey="ArrowUpSvg"
            width={18}
            height={18}
            stroke='var(--text--primary)'
        />
    </button>

}
