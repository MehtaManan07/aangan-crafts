import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import { HomePage, ProductsPage } from "./pages";
import { ReactQueryDevtools } from 'react-query/devtools';
const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route Component={HomePage} path="/" />
          <Route Component={ProductsPage} path="/products" />
        </Routes>
      </Layout>
      <ReactQueryDevtools position="bottom-left" />
      
    </Router>
  );
};

export default App;
