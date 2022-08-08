import { Link } from "react-router-dom";
import { ToolOrdem } from "./ToolOrdem";

export function Tools() {
  return (
    <>
      <h1>selecione uma função e avance</h1>
      <Link to="/ordens">
        <span>CONSULTE DE GRADE</span>
      </Link>
      <Link to="/matriz">
        <span>consulta de ferramentas ALTA-FREQUÊNCIA</span>
      </Link>
    </>
  )
}