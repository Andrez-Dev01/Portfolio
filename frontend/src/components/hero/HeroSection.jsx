import './HeroSection.css';

/**
 * Hero intro block above featured projects.
 * TODO(PERSONALIZE): Name, title, and bio are loaded from the API profile object.
 */
export default function HeroSection({ profile }) {
  if (!profile) {
    return null;
  }

  return (
    <section className="hero" id="about" aria-labelledby="hero-heading">
      <div className="hero__content">
        <p className="hero__eyebrow">Portfolio</p>
        <h1 id="hero-heading" className="hero__title">
          {profile.name}
          <span className="hero__title-accent"> — {profile.title}</span>
        </h1>
        <p className="hero__bio">{profile.bio}</p>
      </div>
      <div className="hero__glow" aria-hidden="true" />
    </section>
  );
}
