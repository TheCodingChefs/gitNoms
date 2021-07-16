import chef from '../../assets/chef.png'
import stevenProfile from '../../assets/stevenProfile.jpg'
import woosikProfile from '../../assets/woosikProfile.jpg'
import collenProfile from '../../assets/collenProfile.jpg'
import anselemProfile from '../../assets/anselemProfile.png'

function About() {
    const today = new Date();
    const utcHr = today.getUTCHours();
    const utcMin = today.getUTCMinutes();
        
    return (
        <div className='about' theme={darkMode ? "dark" : "light"}>
            <div className='gitNoms'>
                <h2>gitNoms</h2>

                <p className="about-text">Living in this pandemic world, more and more people are becoming the home cook. The gitNoms is an online recipe application. Users can easily upload, edit, or delete their own receipes. The gitNoms is built by the Coding Chefs from 4 different time zones!

                </p>
            </div>
            <div className='theCodingChefs'>
                <img src={chef} alt='the coding chefs logo' width='300px' height='300px' />
                <h2>Introducing the Coding Chefs Team!</h2>
                <div className='teamMembers'>
                    <div className='steven'>
                        <img src={stevenProfile} alt='steven profile picture' width='150px' height='150px' className="profile-img"/>
                        <h3>Steven Semco</h3>
                        <h5>Colorado Springs, CO</h5>
                        <h5>{utcHr-6+':'+utcMin+' '}MT</h5>
                    </div>
                    <div className='woosik'>
                        <img src={woosikProfile} alt='woo-sik profile picture' width='150px' height='150px' className="profile-img" />
                        <h3>Woo-Sik Choi</h3>
                        <h5>Austin, TX</h5>
                        <h5>{utcHr-5+':'+utcMin+' '}CT</h5>
                    </div>
                    <div className='collen'>
                        <img src={collenProfile} alt='collen profile picture' width='150px' height='150px' className="profile-img" />
                        <h3>Collen Whitney</h3>
                        <h5>Harrisonburg, VA</h5>
                        <h5>{utcHr-4+':'+utcMin+' '}ET</h5>
                    </div>
                    <div className='anselem'>
                        <img src={anselemProfile} alt='anselem profile picture' width='150px' height='150px' className="profile-img" />
                        <h3>Anselem Ogbennia</h3>
                        <h5>Los Angeles, CA</h5>
                        <h5>{utcHr-7+':'+utcMin+' '}PT</h5>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default About;