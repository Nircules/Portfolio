import './About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            I'm a passionate developer with a love for creating beautiful, functional, and
                            user-friendly applications. With a strong foundation in modern web technologies,
                            I bring ideas to life through code.
                        </p>
                        <p>
                            My journey in tech has equipped me with expertise in both frontend and backend
                            development, allowing me to build complete solutions from concept to deployment.
                        </p>
                        <p>
                            When I'm not coding, you can find me exploring new technologies, contributing to
                            open-source projects, or sharing knowledge with the developer community.
                        </p>
                    </div>
                    <div className="skills-grid">
                        <div className="skill-card">
                            <div className="skill-icon">⚛️</div>
                            <h3>Frontend</h3>
                            <p>React, TypeScript, HTML/CSS, Tailwind</p>
                        </div>
                        <div className="skill-card">
                            <div className="skill-icon">⚙️</div>
                            <h3>Backend</h3>
                            <p>Node.js, Express, REST APIs, Databases</p>
                        </div>
                        <div className="skill-card">
                            <div className="skill-icon">🛠️</div>
                            <h3>Tools</h3>
                            <p>Git, VS Code, Docker, CI/CD</p>
                        </div>
                        <div className="skill-card">
                            <div className="skill-icon">🎨</div>
                            <h3>Design</h3>
                            <p>UI/UX, Responsive Design, Figma</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
