import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "./component/layout/Layout";
import MediaArticle from "./component/article/MediaArticle";
// import Presentation from "./component/presentation/Presentation";
import Footer from "./component/footer/Footer";
import Navbar from "./component/navbar/Navbar";
import ArticleContainer from "./component/article/articleContainer";
import EmbedMediaArticle from "./component/article/EmbedMediaArticle";

function App() {
  return (
    //encierra los componentes
    <Layout>
      {/* componentes */}
      <Navbar />
      <ArticleContainer>
        <MediaArticle />
        <EmbedMediaArticle />
      </ArticleContainer>
      {/* <Presentation /> */}
      <Footer />
    </Layout>
  );
}

export default App;
