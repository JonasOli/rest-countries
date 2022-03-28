import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "components/Header";
import CountryDetail from "pages/CountryDetail";
import ListCountries from "pages/ListCountries";

function App() {
  return (
    <main className="App">
      <Header />

      <Router>
        <Routes>
          <Route path="/" element={<ListCountries />} />
          <Route path="/country/:id" element={<CountryDetail />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
