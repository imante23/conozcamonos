import { useEffect, useState } from 'react';
import "./Home.css"


import { Fade, Zoom } from "react-awesome-reveal";

// import Navbar from "./Navbar.jsx"
import { useTranslation } from 'react-i18next'
import Navbar from '../../components/Navbar/Navbar.jsx';
import Header from '../../components/homeComponents/Header/Header.jsx';
import About from '../../components/homeComponents/About/About.jsx';
import Events from '../../components/homeComponents/Events/Events.jsx';
import More from '../../components/homeComponents/More/More.jsx';
import Contact from '../../components/homeComponents/Contact/Contact.jsx';
import Footer from '../../components/Footer/Footer.jsx';

function Home() {
    const { t } = useTranslation();

    // const [faqs, setfaqs] = useState([]);

    // useEffect(() => {
    //     const faqsData = [
    //         {
    //             question: t("FAQ.faq1"),
    //             answer: t("FAQ.ans1"),
    //             open: false
    //         },
    //         {
    //             question: t("FAQ.faq2"),
    //             answer: t("FAQ.ans2"),
    //             open: false
    //         },
    //         {
    //             question: t("FAQ.faq3"),
    //             answer: t("FAQ.ans3"),
    //             open: false
    //         },
    //         {
    //             question: t("FAQ.faq4"),
    //             answer: t("FAQ.ans4"),
    //             open: false
    //         }
    //     ];
    //     setfaqs(faqsData);
    // }, [t]);

    // const toggleFAQ = index => {
    //     setfaqs(faqs.map((faq, i) => {
    //         if (i === index) {
    //             faq.open = !faq.open
    //         } else {
    //             faq.open = false;
    //         }
    //         return faq;
    //     }))
    // }

    return (
        
        <>
        <Navbar />
                
        <div style={{ paddingTop: "72px" }}>
               
               
                <Header />
                <About/>
                <Events />
                <More/>
                <Contact/>
                <Footer/>
{/* 
            <Fade>
                <div className="faqs">
                    <h2 className='faqs-title'>{t("FAQ.faq-title")}</h2>
                    {faqs.map((faq, i) => (
                        <FAQ key={i} faq={faq} index={i} toggleFAQ={toggleFAQ} />
                    ))}
                </div>
            </Fade> */}


            {/* <Footer /> */}
        </div>
        </>
    )
}

export default Home



// REFERENCIAS 
// https://nyspeeddating.com/
// https://plentyofparties.com/