import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import SingleArticle from "./components/SingleArticle/SingleArticle";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="article">
            <Route path=":id" element={<SingleArticle />} />
          </Route>
          {/* Catch all redirect back to home*/}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
