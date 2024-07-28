import Header from "../../../blocks/Header/Header";

const HeaderSignIn: React.FC = ( ) => {
  return (
    <section className="add-review__hero-image hero">
      <h1 className="visually-hidden">Films Library</h1>

        <Header isDark={true} isAuth={false}/>

    </section>
  )
};

export default HeaderSignIn;