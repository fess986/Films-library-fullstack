import { SectionHero } from './styles'
import Header from '../../../blocks/Header/Header'
import { H1Hidden } from '../../../styled/Components'

const HeaderSignIn: React.FC = () => {
  return (
    <SectionHero>
      <H1Hidden>Films Library</H1Hidden>
      <Header isDark={true} />
    </SectionHero>
  )
}

export default HeaderSignIn
