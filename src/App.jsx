import React from "react";
import "./App.css";
import { Home } from "./pages";
import { MainLayout } from "./layout/MainLayout";

function App() {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
}

export default App;
