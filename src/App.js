import logo from "./logo.svg";
import PivotTableUI from "react-pivottable/PivotTableUI";
import "react-pivottable/pivottable.css";
import TableRenderers from "react-pivottable/TableRenderers";
import Plot from "react-plotly.js";
import createPlotlyRenderers from "react-pivottable/PlotlyRenderers";

import "./App.css";
import { useState } from "react";

function App() {
  const PlotlyRenderers = createPlotlyRenderers(Plot);
  const [state, setState] = useState([]);
  const data = [
    {
      id: 1,
      nombre: "Juan",
      apellido: "Perez",
      edad: 20,
    },
    {
      id: 2,
      nombre: "Carlos",
      apellido: "Perez",
      edad: 20,
    },
    {
      id: 3,
      nombre: "Juan",
      apellido: "Alberto",
      edad: 20,
    },
  ];

  return (
    <PivotTableUI
      data={data}
      renderers={Object.assign({}, TableRenderers, PlotlyRenderers)}
      onChange={(s) => {
        setState(s);
      }}
      {...state}
    />
  );
}

export default App;
