import React, { useState } from "react";
import { Capacitacao } from "./components/Capacitacao";
import { Denuncia } from "./components/Denuncia";
import { Consultoria } from "./components/Consultoria";
import { Benchmark } from "./components/Benchmark";

function App() {
  const [tela, setTela] = useState("capacitacao");

  const renderizarModulo = () => {
    switch (tela) {
      case "capacitacao":
        return <Capacitacao />;
      case "denuncia":
        return <Denuncia />;
      case "consultoria":
        return <Consultoria />;
      case "benchmark":
        return <Benchmark />;
      default:
        return <Capacitacao />;
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ marginBottom: "1rem" }}>🚀 EthoSUS Plataforma</h1>
      <div style={{ marginBottom: "2rem" }}>
        <button onClick={() => setTela("capacitacao")} style={{ marginRight: 10 }}>📘 Capacitação</button>
        <button onClick={() => setTela("denuncia")} style={{ marginRight: 10 }}>🚨 Denúncia</button>
        <button onClick={() => setTela("consultoria")} style={{ marginRight: 10 }}>🤖 Consultoria</button>
        <button onClick={() => setTela("benchmark")}>📊 Benchmark</button>
      </div>
      <div>
        {renderizarModulo()}
      </div>
    </div>
  );
}

export default App;
