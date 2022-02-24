import HeaderBody from "./HeaderBody/Headerbody";
import Navbar from "./navbar/Navbar";
import Connects from "./Pages/Connects";
import Create from "./Pages/Create";
import Learn from "./Pages/Learn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./NotFound/NotFound";

const HEADER = () => {
  return (
    <div className="Container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HeaderBody />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/create" element={<Create />} />
          <Route path="/connect" element={<Connects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default HEADER;
