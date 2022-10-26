import "./App.css";
import Layout from "./component/Layout";
import Banner from "./component/Banner";
import About from "./component/About";
import Presentation from "./component/Presentation";
import Footer from "./component/Footer";

function App() {
  return (
    <Layout>
      <Banner />
      <About />
      <Presentation />
      <Footer />
    </Layout>
  );
}

export default App;
