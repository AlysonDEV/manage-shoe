import { Link } from "react-router-dom";

import '../styles.scss'

export function Ferramentas() {
  return(
    <div className="h-screen w-screen bg-center bg-cover ferramentas">
      <div className="bg-primary h-full w-full flex flex-col items-center">
        <h1 className="pt-11 pb-6 text-[1.4375rem] uppercase font-extrabold w-screen-relative text-center text-white">
          Ferramental Alta Frequência
        </h1>
        <form className="w-screen-relative flex flex-col">
          <div className="flex flex-col bg-white rounded-lg p-3">
            <label 
              htmlFor="marca"
              className="text-[0.8125rem] text-gray-400 leading-tight"
            >
              Marca
            </label>
            <input type="text" id="marca" name="marca" />
          </div>
          <div className="flex flex-col bg-white rounded-lg p-3 mt-6">
            <label 
              htmlFor="modelo"
              className="text-[0.8125rem] text-gray-400 leading-tight"
            >
              Modelo
            </label>
            <input type="text" id="modelo" name="modelo" />
          </div>
          <div className="flex flex-col bg-white rounded-lg p-3 mt-6">
            <label 
              htmlFor="ferramenta"
              className="text-[0.8125rem] text-gray-400 leading-tight"
            >
              Ferramenta
            </label>
            <input type="text" id="ferramenta" name="ferramenta"/>
          </div>
        </form>
        <div className="flex flex-col w-screen-relative">
          <h2 className="uppercase font-extrabold text-[0.9375rem] leading-tight tracking-widest text-center text-white mt-6">
            Tamanho / Qtd de Jogos
          </h2>
          <div className="flex flex-row gap-2.5">
            <div className="cardSize">
              <span className="!text-[24px]">37</span>
              <span>1</span>
            </div>
            <div className="cardSize">
              <span className="!text-[24px]">37</span>
              <span>1</span>
            </div>
            <div className="cardSize">
              <span className="!text-[24px]">37</span>
              <span>1</span>
            </div>
            <div className="cardSize">
              <span className="!text-[24px]">37</span>
              <span>1</span>
            </div>
            <div className="cardSize">
              <span className="!text-[24px]">37</span>
              <span>1</span>
            </div>
            <div className="cardSize">
              <span className="!text-[24px]">37</span>
              <span>1</span>
            </div>
            <div className="cardSize">
              <span className="!text-[24px]">37</span>
              <span>1</span>
            </div>
            <div className="cardSize">
              <span className="!text-[24px]">37</span>
              <span>1</span>
            </div>
            <div className="cardSize">
              <span className="!text-[24px]">37</span>
              <span>1</span>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}