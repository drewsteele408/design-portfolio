import Navbar from './Navbar';

export default function Home() {
  return (
    <>
      <div className="dark-section">
        <Navbar />
        
        <header className="hero">
          <h1>Drew Steele Portfolio</h1>
        </header>

        <section className="showcase">
          <div className="showcase-header">
            <div className="showcase-controls">
            </div>
            <div className="brand-info">
              <div className="brand-title">STEELE</div>
              <div className="brand-desc">Design Portfolio</div>
            </div>
          </div>
          
          <div className="project-image">
            <video 
              src="/videos/surf-or-sound-hero.mp4"
              autoPlay
              loop
              muted
              className="project-video"
            />
          </div>
        </section>
      </div>

      <section className="desc-section">
        <div className="desc-hero">
          <h2>THOUTFUL DESIGN FOR THE DIGITAL WORLD</h2>
        </div>
        
        <div className="desc-columns">
          <div className="desc-column">
            <p>I’m a designer focused on building clean and engaging designs. This is a collection of my work across web, branding, and digital experiences. From concept to execution, my work is driven by problem-solving, user-centered design, and a passion for creating brands and websites that make an impact.</p>
            
            <div className="guitar-image-section">
              <img 
                src="/photos/guitar-poster.png"
                alt="Guitar Poster"
              />
            </div>

            <div className="email-image-section">
              <img 
                src="/photos/Email-Desktop-Finished-Small.png"
                alt="Email Desktop"
              />
            </div>
          </div>
          <div className="desc-column bonsai-column">
            <img 
              src="/photos/bonsai-home.png"
              alt="Bonsai"
            />
          </div>
        </div>
      </section>
    </>
  );
}