import React from "react";
import FilmList from "./Components/FilmList";
import Header from "./Components/Header";

let App: React.FC = () => {
  return (
    <>
      <Header name="grisha" btnText="log out" />
      <FilmList />
    </>
  );
};

export default App;
