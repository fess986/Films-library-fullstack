const HeroPicture = (): JSX.Element => {
  return (
    <picture className="hero__container">
      <source srcSet="/images/hero-poster2.webp" type="image/webp" />
      <img className="hero__image" src="/images/hero-poster2.jpg" alt="The Grand Budapest Hotel" />
    </picture>
  )
}

export default HeroPicture

