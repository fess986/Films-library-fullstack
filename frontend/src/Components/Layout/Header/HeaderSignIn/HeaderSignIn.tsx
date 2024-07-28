import Header from "../../../blocks/Header/Header";
import { SectionHero } from "./styles";
import { H1Hidden } from "../../../styled/Components";

const HeaderSignIn: React.FC = ( ) => {
  return (
    <SectionHero>
      <H1Hidden>Films Library</H1Hidden>
        <Header isDark={true} isAuth={false}/>
    </SectionHero>
  )
};

export default HeaderSignIn;