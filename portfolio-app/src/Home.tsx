import Navbar from './Navbar';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const carouselItems = [
    { type: 'video', src: '/videos/surf-or-sound-hero.mp4' },
    { type: 'image', src: '/photos/bonsai-home-hero.png', alt: 'Bonsai Home Hero' },
    { type: 'image', src: '/photos/surf-boards.png', alt: 'Surf Boards' },
  ];

  const handlePrevious = () => {
    setCarouselIndex((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCarouselIndex((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
  };

  const currentItem = carouselItems[carouselIndex];

  return (
    <>
      <div className="dark-section">
        <Navbar />
        
        <header className="hero">
          <h1>We craft identity,<br/>experience and presence.</h1>
        </header>

        <section className="showcase">
          <div className="showcase-header">
            <div className="showcase-controls">
              <button className="control-btn" onClick={handlePrevious}><ArrowLeft size={20} /></button>
              <button className="control-btn" onClick={handleNext}><ArrowRight size={20} /></button>
            </div>
            <div className="brand-info">
              <div className="brand-title">GEN</div>
              <div className="brand-desc">Branding, brand guide</div>
            </div>
          </div>
          
          <div className="project-image">
            {currentItem.type === 'video' ? (
              <video 
                src={currentItem.src}
                autoPlay
                loop
                muted
                className="project-video"
              />
            ) : (
              <img 
                src={currentItem.src}
                alt={currentItem.alt}
                className="project-video"
              />
            )}
          </div>
        </section>
      </div>

      <section className="desc-section">
        <div className="desc-hero">
          <h2>We blend technology and art to create innovative designs that open up new possibilities.</h2>
        </div>
        
        <div className="desc-columns">
          <div className="desc-column">
            <p>At Regno Studio, we blend technology and art to create innovative designs that open up new possibilities. We understand that sensitivity and technique go hand in hand, working together to benefit your company and customers.</p>
            <p>Specializing in digital platforms, we also work across various mediums. From planning to development, we cover everything from visual identities to interactive installations.</p>
            
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