import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import { HomePage } from "./pages";
const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route Component={HomePage} path="/" />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
