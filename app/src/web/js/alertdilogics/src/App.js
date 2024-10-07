import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainComponent from "./MainComponent/MainComponent";

import FormPage from "./form/FormPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainComponent />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </Router>
  );
};

export default App;

