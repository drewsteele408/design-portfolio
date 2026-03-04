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
