import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="hero-title">
                    Hi, I'm <span className="highlight">Nir Ben Giat</span>
                </h1>
                <p className="hero-subtitle">Full Stack Developer | Problem Solver | Tech Enthusiast</p>
                <p className="hero-description">
                    I create elegant solutions to complex problems through clean code and innovative thinking.
                </p>
                <div className="hero-buttons">
                    <a href="#projects" className="btn btn-primary">View My Work</a>
                    <a href="#contact" className="btn btn-secondary">Get In Touch</a>
                </div>
            </div>
            <div className="hero-image">
                <div className="placeholder-avatar">
                    {/* Replace with your actual photo */}
                    <span>Your Photo</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
