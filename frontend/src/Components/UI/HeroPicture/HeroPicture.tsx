import { PictureHero, SourceWebpHero, ImgHero } from "./styles"

const HeroPicture = (): JSX.Element => {
  return (
    <PictureHero>
      <SourceWebpHero srcSet="/images/hero-poster2.webp" />
      <ImgHero src="/images/hero-poster2.jpg" />
    </PictureHero>
  )
}

export default HeroPicture

