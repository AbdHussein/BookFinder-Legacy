import React from 'react';
import NavBar from '../../components/NavBar/NavBar'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/footer'
// import WebsiteFeatures from '../../components/WebsiteFeatures/WebsiteFeatures'
class HomePage extends React.Component {
    state = {}
    render(){
        return (
            <div>
                <NavBar />
                <Header />
                {/* <WebsiteFeatures /> */}
                <Footer />
            </div>
        )
    }

}
export default HomePage