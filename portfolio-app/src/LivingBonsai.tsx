import Navbar from './Navbar';

export default function LivingBonsai() {
  return (
    <>
      <div className="dark-section">
        <Navbar />
        
        <header className="hero">
          <h1>Living Bonsai</h1>
        </header>
      </div>

      <section className="desc-section">
        <div className="desc-hero">
          <div className="project-photos-equal">
            <div className="project-photo">
              <img 
                src="/photos/bonsai-home.png"
                alt="Bonsai Home"
              />
            </div>

            <div className="project-photo">
              <img 
                src="/photos/bonsai-styles.png"
                alt="Bonsai Styles"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
