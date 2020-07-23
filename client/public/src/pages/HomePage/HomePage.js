import React from 'react';
import NavBar from '../../components/NavBar/NavBar'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/footer'
class HomePage extends React.Component {
    state = {}
    render(){
        return (
            <div>
                <NavBar />
                <Header />
                {/* <BookElement /> */}
                <Footer />
                
            </div>
        )
    }

}
export default HomePage