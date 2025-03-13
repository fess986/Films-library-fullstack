import { PictureHero, SourceWebpHero, ImgHero } from './styles'
import { PageList } from '../../../const/const'

type HeroPictureProps = {
  $page?: PageList
}

const HeroPicture: React.FC<HeroPictureProps> = ({ $page = PageList.MAIN }) => {
  return (
    <PictureHero>
      <SourceWebpHero srcSet="/images/hero-poster2.webp" />
      <ImgHero $page={$page} src="/images/hero-poster2.jpg" />
    </PictureHero>
  )
}

export default HeroPicture
