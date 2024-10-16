import { useEffect, useState } from "react";

export default function ScrollTop() {

const [show, setShow] = useState(false)

const handleScrollResponsiveness = () => {
    if (window.scrollY > 1000) {
        setShow(true)
    } else {
        setShow(false)
    }
}

useEffect(() => {
    window.addEventListener('scroll', handleScrollResponsiveness)
    return () => {
    window.addEventListener('scroll', handleScrollResponsiveness)

    }
})

const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth'})
}


    return(
        <div id="to-top-btn" className={show ? 'show' : ''}>
        <button type="button" onClick={handleScroll}>{'>'}</button>
    </div>
    );
}