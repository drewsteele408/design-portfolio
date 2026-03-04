import Navbar from './Navbar';

export default function SurfOrSound() {
  return (
    <>
      <div className="dark-section">
        <Navbar />
        
        <header className="hero">
          <h1>Surf or Sound</h1>
        </header>
      </div>
      <div className='surf-or-sound-header'>
        <h1>Surf or Sound Website Redesign</h1>
        <p>
          This project reimagines the digital experience for Surf or Sound Realty, a vacation rental company based on Hatteras Island in the Outer Banks. The redesign includes a refreshed homepage hero, a modernized property search experience, and a promotional marketing email—each crafted to highlight the coastal lifestyle while making it easier for users to explore and book their ideal vacation home.
        </p>
      </div>
      <section className="desc-section">
        <div className="desc-hero">
          <video 
            src="/videos/surf-or-sound-hero.mp4"
            autoPlay
            loop
            muted
            className="project-video"
          />
          
          <div className="project-photos-grid">
            <div className="project-photo">
              <img 
                src="/photos/surf-or-sound-search-page.png"
                alt="Surf or Sound Search Page"
              />
            </div>

            <div className="project-photo">
              <img 
                src="/photos/Email-Desktop-Finished.png"
                alt="Email Desktop"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
