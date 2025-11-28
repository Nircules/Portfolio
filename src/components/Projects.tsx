import './Projects.css';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Project One',
            description: 'A comprehensive web application that solves real-world problems with an intuitive interface and robust backend.',
            tags: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
            link: '#',
            github: '#',
        },
        {
            id: 2,
            title: 'Project Two',
            description: 'An innovative solution featuring modern design patterns, scalable architecture, and seamless user experience.',
            tags: ['React', 'Express', 'PostgreSQL', 'Docker'],
            link: '#',
            github: '#',
        },
    ];

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <p className="section-subtitle">
                    Here are some of my recent projects that showcase my skills and creativity
                </p>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-image">
                                <div className="placeholder-image">
                                    {/* Replace with actual project screenshots */}
                                    <span>Project Screenshot</span>
                                </div>
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                                        <span>🔗</span> Live Demo
                                    </a>
                                    <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                                        <span>💻</span> View Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
