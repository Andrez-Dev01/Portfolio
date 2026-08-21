import './TechStackMarquee.css';

/**
 * Infinite scrolling tech stack bar at the top of the page.
 * CUSTOMIZE: Items come from the Go API — edit backend/internal/data/store.go.
 */
function TechStackMarquee({ items, loading }) {
  const displayItems = loading || items.length === 0
    ? [{ name: 'Loading...' }]
    : items;

  // Duplicate items for seamless infinite scroll animation
  const marqueeItems = [...displayItems, ...displayItems];

  return (
    <div className="tech-marquee" aria-label="Technology stack">
      <div className="tech-marquee__track">
        {marqueeItems.map((item, index) => (
          <span key={`${item.name}-${index}`} className="tech-marquee__item">
            {item.name}
            <span className="tech-marquee__dot" aria-hidden="true">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default TechStackMarquee;
