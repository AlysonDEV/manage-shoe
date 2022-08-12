import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";

import '../styles.scss'

const exemploFerramentas = [
  {
    Tamanho: '37',
    Qtd: '1'
  },
  {
    Tamanho: '38',
    Qtd: '1'
  },
  {
    Tamanho: '39',
    Qtd: '1'
  },
  {
    Tamanho: '40',
    Qtd: '1'
  },
  {
    Tamanho: '41',
    Qtd: '1'
  },
  {
    Tamanho: '42',
    Qtd: '1'
  },
  {
    Tamanho: '43',
    Qtd: '1'
  },

]

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
          <AliceCarousel 
            mouseTracking 
            autoWidth
            disableDotsControls={true}
            disableButtonsControls={true}
            paddingLeft={14}
            paddingRight={200}
          >

            {exemploFerramentas.map(ferramenta =>(
              <div className="cardSize" key={ferramenta.Tamanho}>
                <span className="!text-[24px]">{ferramenta.Tamanho}</span>
                <span>{ferramenta.Qtd}</span>
              </div>  
            ))}
              


          </AliceCarousel>
        </div>
      </div>
    </div>
  )
}