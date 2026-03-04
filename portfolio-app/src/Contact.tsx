import Navbar from './Navbar';

export default function Contact() {
  return (
    <>
      <div className="dark-section">
        <Navbar />
        
        <header className="hero">
          <h1>Contact</h1>
        </header>
      </div>

      <div className='contact-header'>
        <h1>Get In Touch</h1>
        <p>
          I'm always interested in hearing about new projects and opportunities. Feel free to reach out through the links below or send me an email directly.
        </p>
      </div>

      <section className="desc-section">
        <div className="desc-hero">
          <div className="contact-info">
            <div className="contact-item">
              <h3>Email</h3>
              <a href="mailto:your-email@example.com">drewsteele408@gmail.com</a>
            </div>
            <div className="contact-item">
              <h3>LinkedIn</h3>
              <a href="https://www.linkedin.com/in/andrew-steele408/" target="_blank" rel="noopener noreferrer">linkedin.com/in/andrew-steele408</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
