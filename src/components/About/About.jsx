import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.jpg'
const About = () => {
    return (
        <div id="about" className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Hi, I’m Lakhan Raut 👋
                            I’m a passionate Full Stack Developer and Data Analyst with a strong background in building scalable web applications and analyzing data to drive meaningful insights. My expertise spans frontend and backend development, API integration, database management, and data visualization using tools like Power BI, Tableau, and MySQL</p>
                        <p>I enjoy creating user-friendly digital experiences, solving real-world problems with data, and continuously learning new technologies to stay ahead in the tech space. Alongside coding, I also love sharing knowledge and creating content that helps others grow.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p><hr style={{width:"60%"}}/>
                        </div>
                        <div className="about-skill">
                            <p>ReactJS</p><hr style={{width:"70%"}}/>
                        </div>
                        <div className="about-skill">
                            <p>JavaScript</p><hr style={{width:"60%"}}/>
                        </div>
                        <div className="about-skill">
                            <p>Python</p><hr style={{width:"70%"}}/>
                        </div>
                        <div className="about-skill">
                            <p>Java</p><hr style={{width:"50%"}}/>
                        </div>
                        <div className="about-skill">
                            <p>SQL</p><hr style={{width:"70%"}}/>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="about-achievements">
                    <div className="about-achievement">
                        <h1>🖥️ </h1>
                        <p>Develop responsive & modern web applications</p>
                    </div>
                    <hr/>
                      <div className="about-achievement">
                        <h1>📊</h1>
                        <p>Analyze data for better decision-making</p>
                    </div>
                    <hr/>
                      <div className="about-achievement">
                        <h1>⚡ </h1>
                        <p>Work across Java Full Stack development</p>
                    </div>
                    <hr/>
                      <div className="about-achievement">
                        <h1>🌐 </h1>
                        <p>Build dashboards, optimize SEO, and design APIs</p>
                    </div>
                </div>
        </div>
    )
}

export default About
