import React from 'react'
import './ScrollToTop.css'
import SvgComponent from '../../utils/SvgComponent';
const ScrollToTop = ({ btnScrollToTopRef }) => {


    // When the user clicks on the button, scroll to the top of the document smoothly
    function topFunction() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return <button onClick={topFunction} ref={btnScrollToTopRef} className="btn-scroll-to-top" title="Go to top">
        <SvgComponent
            svgKey="ArrowUpSvg"
            width={18}
            height={18}
            stroke='var(--text--primary)'
        />
    </button>

}
export default ScrollToTop