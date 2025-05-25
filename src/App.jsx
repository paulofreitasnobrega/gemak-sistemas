import React from "react";
import "./App.css";
import Button from "./components/Button/Button.jsx";

const App = () => {
  const handleClick = () => {
    console.log("Botão clicado!");
    // Adicione sua lógica aqui
  };

  return (
    <div className="app-container">
      <Button onClick={handleClick} variant="primary">
        Salvar
      </Button>

      <Button variant="secondary">Cancelar</Button>

      <Button variant="danger" disabled>
        Excluir
      </Button>
    </div>
  );
};

export default App;
