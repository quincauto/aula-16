import React, { useState } from "react";
import "./App.css";

function App() {
  // Estado para gerenciar a lista
  const [tasks, setTasks] = useState([
    { id: 1, text: "Estudar React" },
    { id: 2, text: "Finalizar o projeto" },
    { id: 3, text: "Organizar o workspace" },
  ]);

  // Estado para controle condicional
  const [showList, setShowList] = useState(true);

  // Função para alternar visibilidade
  const toggleList = () => {
    setShowList(!showList);
  };

  return (
    <div className="App">
      <h1 style={{ color: "#00008B" }}>Oficina de Tarefas</h1>

      <button
        onClick={toggleList}
        style={{
          padding: "10px 20px",
          backgroundColor: showList ? "#00008B" : "#00008B",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          margin: "10px 0",
        }}
      >
        {showList ? "Esconder Lista" : "Mostrar Lista"}
      </button>

      {showList && (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {tasks.map((task) => (
            <li
              key={task.id}
              style={{
                background: "#f24f00",
                padding: "10px",
                margin: "10px 0",
                borderRadius: "5px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                display: "flex",
                alignItems: "center",
                fontSize: "18px",
              }}
            >
              {task.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
