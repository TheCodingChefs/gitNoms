import logo from '../../assets/logo.png'
import stevenProfile from '../../assets/stevenProfile.jpg'
import woosikProfile from '../../assets/woosikProfile'
import collenProfile from '../../assets/collenProfile.jpg'
import anselemProfile from '../../assets/anselemProfile.png'

function About () {
    return (
        <div className='about'>
            <div className='gitNoms'>
                <h2>gitNoms</h2>
                <p>Living in this pandemic world, more and more people are becoming the home cook. The gitNoms is an online recipe application. Users can easily upload, edit, or delete their own receipes. The gitNoms is built by the Coding Chefs from 4 different time zones!
                </p>
            </div>
            <div className='theCodingChefs'>
                <img src={logo} alt="the coding chefs logo" width="150px" height="150px"/>
                <h2>Introducing the Coding Chefs Team!</h2>
                    <div className="teamMembers">
                        <div>
                            <img src={stevenProfile} alt="steven profile picture" width="100px" height="100px"/>
                            <h3>Steven Semco</h3>
                            <h4>Colorado Springs, CO</h4>
                        </div>
                        <div>
                            <img src={woosikProfile} alt="woo-sik profile picture" width="100px" height="100px"/>
                            <h3>Woo-Sik Choi</h3>
                            <h4>Austin, TX</h4>
                        </div>
                        <div>
                            <img src={collenProfile} alt="collen profile picture" width="100px" height="100px"/>
                            <h3>Collen Whitney</h3>
                            <h4>Harrisonburg, VA</h4>
                        </div>
                        <div>
                            <img src={anselemProfile} alt="anselem profile picture" width="100px" height="100px"/>
                            <h3>Anselem Ogbennia</h3>
                            <h4>Los Angeles, CA</h4>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default About;