import React, { useEffect } from 'react';
import { AwesomeButtonSocial } from 'react-awesome-button';
import defaultStyles from 'react-awesome-button/src/styles';
import './styles/about.css'
import picture from './images/colin.jpeg'
import Aos from 'aos';

const About = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])
    return (
        <div id="about">
            <div id="about-page" className="about-page">
                <div data-aos='fade-up-right' className="about-section-title">
                    <h1 className='about-title turquoise'>About</h1>
                </div>
                <img data-aos='fade-up-right' id="image" src={picture} alt="My Picture" />
                <div data-aos='fade-up-left' className="about-information">
                    <h3 className="about-information-title turquoise">Software Engineer & Web Developer</h3>
                </div>
                <div data-aos='fade-up-left' className="colin-information">
                    <span className="turquoise bold">Degree:</span> BS in Petroleum Engineering
                </div>
                <div data-aos='fade-up-left' className="colin-information">
                    <span className="turquoise bold">Phone:</span> 469-442-7040
                </div>
                <div data-aos='fade-up-left' className="colin-information">
                    <span className="turquoise bold">Email:</span>{'  '}
                    <a className="email" href="mailto:colin.a.mosley@gmail.com">colin.a.mosley@gmail.com</a>
                </div>
                <div data-aos='fade-up-left' className="colin-information">
                    <span className="turquoise bold">City:</span> Austin, Texas
                </div>
                <p data-aos='fade-up-left' className="description">
                    Self-driven engineer with 3+ years of experience working in a fast-paced environment, executing company aligned goals through communication, collaboration, and critical thinking. Carrying over from my previous career in Petroleum Engineering, I have proven skills in on my feet problem solving, adapting to get the best results, and executing highly technical projects to high client satisfaction. Now as a Software Engineer, I take this same logical approach to creating clean, scalable code.
                </p>
                <div data-aos='fade-up' className="skills">
                    <h2 className="turquoise skills-title">Skills</h2>
                    <p className="skills-listed">
                        Ruby on Rails{' '}
                        <span className="turquoise bold">|</span>{' '}
                    Javascript{' '}
                        <span className="turquoise bold">|</span>{' '}
                    React{' '}
                        <span className="turquoise bold">|</span>{' '}
                    Redux{' '}
                        <span className="turquoise bold">|</span>{' '}
                    HTML5{' '}
                        <span className="turquoise bold">|</span>{' '}
                    CSS3{' '}
                        <span className="turquoise bold">|</span>{' '}
                    SQL{' '}
                        <span className="turquoise bold">|</span>{' '}
                    Python{' '}
                        <span className="turquoise bold">|</span>{' '}
                    JWT{' '}
                        <span className="turquoise bold">|</span>{' '}
                    PostgreSQL{' '}
                        <span className="turquoise bold">|</span>{' '}
                    Git/GitHub{' '}
                        <span className="turquoise bold">|</span>{' '}
                    MATLAB{' '}
                        <span className="turquoise bold">|</span>{' '}
                    </p>
                </div>
                <div data-aos='fade-up-left' className="contact-information">
                    <AwesomeButtonSocial
                        className="no-underline"
                        size="large"
                        type='instagram'
                        target='_blank'
                        href='https://www.instagram.com/colin_mosley'

                    >
                        {'Instagram'}
                    </AwesomeButtonSocial>{'  '}
                    <AwesomeButtonSocial
                        size='large'
                        type='linkedin'
                        target='_blank'
                        href='https://www.linkedin.com/in/colin-mosley'
                    >
                        LinkedIn
                </AwesomeButtonSocial>{'  '}
                    <AwesomeButtonSocial
                        size='large'
                        type='github'
                        target='_blank'
                        href='https://github.com/colin-mosley'
                    >
                        GitHub
                </AwesomeButtonSocial>
                </div>
            </div>
        </div>
    )
}

export default About;