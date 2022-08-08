import { Link } from "react-router-dom";

import './styles.scss'

export function Dashboard() {
  return (
    <div className="w-full h-full bg-primary flex flex-col items-center text-white">
      <h1 
        className="w-[77%] mt-[7.4375rem] uppercase text-[1.4375rem] font-extrabold leading-normal tracking-widest text-center "
      >
        selecione uma função e avance
      </h1>
      <Link 
        to="/painel/ordem" 
        className="cardButton flex items-center w-[77%] h-[4.25rem] mt-[6.75rem]"
      >
        <span className="m-auto text-center uppercase leading-[1.2]">CONSULTE DE GRADE</span>
      </Link>
      <Link 
        to="/painel/ferramentas" 
        className="cardButton flex items-center w-[77%] h-[4.25rem] mt-[1.3125rem]"
      >
        <span className="m-auto text-center uppercase">consulta de ferramentas ALTA-FREQUÊNCIA</span>
      </Link>
    </div>
  )
}