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

      <section className="desc-section">
        <div className="desc-hero">
          <video 
            src="/videos/surf-or-sound-hero.mp4"
            autoPlay
            loop
            muted
            className="project-video"
          />
        </div>
      </section>
    </>
  );
}
