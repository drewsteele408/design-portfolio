import Navbar from './Navbar';

export default function Work() {
  return (
    <div className="dark-section" style={{ minHeight: '100vh' }}>
      <Navbar />
      <header className="hero" style={{ paddingBottom: '3rem' }}>
        <h1>Our Works</h1>
        <p style={{ marginTop: '2rem', fontSize: '1.2rem', color: '#ccc' }}>
          Explore some of our recent design case studies.
        </p>
      </header>

      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', padding: '0 4rem' }}>
        <div style={{ backgroundColor: '#fff', height: '400px', borderRadius: '12px', overflow: 'hidden' }}>
          <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" alt="Work 1" />
        </div>
        <div style={{ backgroundColor: '#fff', height: '400px', borderRadius: '12px', overflow: 'hidden' }}>
          <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" alt="Work 2" />
        </div>
      </div>
    </div>
  );
}