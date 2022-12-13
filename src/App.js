import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "./component/layout/Layout";
import Home from "./component/pages/Home";


function App() {
  return (
    //encierra los componentes
    <Layout>
      {/* componentes */}
      <Home/>
    </Layout>
  );
}

export default App;
