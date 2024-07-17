import React from 'react';
import Header4 from './../Common/Header4';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import AboutCompany from '../Elements/AboutCompany';
import Specialization3 from '../Elements/Specialization3';
import OurServices3 from '../Elements/OurServices3';
import OurValue3 from '../Elements/OurValue3';
// import OurProject3 from '../Elements/OurProject3';
import Faq from '../Elements/Faq';

var bnrimg = require('./../../images/gallery/pic6.jpg');

class Services extends React.Component {
    render() {
        return (
            <>

                <Header4 />
                <div className="page-content">
                    <Banner title="Diversified services. Unvarying quality." pagename="Services" bgimage={bnrimg}/>
                    <AboutCompany />
                    <Specialization3 />
                    <OurServices3 />
                    <OurValue3 />
                    {/* <OurProject3 /> */}
                    <Faq />
                <Footer />
                    
                </div>

                
               

            </>
        );
    };
};

export default Services;