import { HelmetProvider } from "react-helmet-async";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Detail } from "./components/pages/Detail/Detail";
import { Home } from "./components/pages/Home/Home";
import { NotFound } from "./components/pages/NotFound";
import { Search } from "./components/pages/search/Search";
import { GlobalStyled } from "./styles/globalStyle";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <GlobalStyled />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/search" element={<Search />} />
          <Route path="/" element={<NotFound />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
