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

       <div className='living-bonsai-header'>
        <h1>Living Bonsai Blog Design</h1>
        <p>
          Living Bonsai is a conceptual blog design that explores the beauty, philosophy, and craftsmanship behind bonsai trees. The project includes a blog home page featuring curated trees, an introduction to the art of bonsai, and an overview of different bonsai styles—designed with a calm, modern aesthetic that reflects the patience and intention at the heart of bonsai practice.
        </p>
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
