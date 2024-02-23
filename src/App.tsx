import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Loader } from "./components/Loader";

import AddBook from "./pages/AddBook";

const App = () => {
  return (
    <>
    <Loader showLoading />
      <Router>
        <Routes>
          <Route path="/" element={<AddBook />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;