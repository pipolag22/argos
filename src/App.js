import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "./component/Layout";
import MediaArticle from "./component/MediaArticle";
import Presentation from "./component/Presentation";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import ArticleContainer from "./component/articleContainer";
import EmbedMediaArticle from "./component/EmbedMediaArticle";

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
