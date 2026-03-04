import Navbar from './Navbar';

export default function Designs() {
  return (
    <>
      <div className="dark-section">
        <Navbar />
        
        <header className="hero">
          <h1>Designs</h1>
        </header>
      </div>

      <div className='designs-header'>
        <h1>Minimalist Brand Advertising</h1>
        <p>
          This project explores minimalist ad design through brand-focused visuals and restrained typography. Featuring concept ads for Fender and Billabong, each piece relies on strong imagery, a concise slogan, and subtle branding to communicate identity without excess—letting the product and lifestyle speak for themselves.
        </p>
      </div>

      <section className="desc-section">
        <div className="desc-hero">
          <div className="project-photos-equal">
            <div className="project-photo">
              <img 
                src="/photos/guitar-poster.png"
                alt="Guitar Poster"
              />
            </div>

            <div className="project-photo">
              <img 
                src="/photos/surf-boards.png"
                alt="Surf Boards"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
