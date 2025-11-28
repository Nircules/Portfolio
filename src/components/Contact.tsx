import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <p className="section-subtitle">
                    I'm always open to new opportunities and collaborations. Let's connect!
                </p>
                <div className="contact-content">
                    <div className="contact-info">
                        <div className="contact-item">
                            <div className="contact-icon">📧</div>
                            <div>
                                <h3>Email</h3>
                                <a href="mailto:your.email@example.com">your.email@example.com</a>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon">💼</div>
                            <div>
                                <h3>LinkedIn</h3>
                                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                                    linkedin.com/in/yourprofile
                                </a>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon">💻</div>
                            <div>
                                <h3>GitHub</h3>
                                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                                    github.com/yourusername
                                </a>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon">📱</div>
                            <div>
                                <h3>Phone</h3>
                                <a href="tel:+1234567890">+1 (234) 567-890</a>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form-container">
                        <form className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" placeholder="your.email@example.com" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" rows={5} placeholder="Your message..." required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
