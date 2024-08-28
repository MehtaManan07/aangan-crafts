import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import { HomePage, ProductsPage, SingleProductPage } from "./pages";
import { ReactQueryDevtools } from "react-query/devtools";
const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route Component={HomePage} path="/" />
          <Route Component={ProductsPage} path="/products" />
          <Route Component={SingleProductPage} path="/products/:slug" />
          {/* <Route path="*">
            <ErrorPage />
          </Route> */}
        </Routes>
      </Layout>
      <ReactQueryDevtools position="bottom-left" />
    </Router>
  );
};

export default App;
