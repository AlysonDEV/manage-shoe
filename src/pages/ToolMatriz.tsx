import { Link } from "react-router-dom";
import { Tools } from "./Tools";

export function ToolMatriz() {
  return(
    <>
      <h1>Ferramental Alta Frequência</h1>
      <form>
        <div>
          <label htmlFor="marca">Marca</label>
          <input type="text" id="marca" name="marca" />
        </div>
        <div>
          <label htmlFor="modelo">Modelo</label>
          <input type="text" id="modelo" name="modelo" />
        </div>
        <div>
          <label htmlFor="ferramenta">Ferramenta</label>
          <input type="text" id="ferramenta" name="ferramenta"/>
        </div>
      </form>
      <div>
        <h2>Tamanho / Qtd de Jogos</h2>
        <div>
          <div>
            <span>37</span>
            <span>1</span>
          </div>
          <div>
            <span>38</span>
            <span>1</span>
          </div>
          <div>
            <span>39</span>
            <span>1</span>
          </div>
          <div>
            <span>40</span>
            <span>1</span>
          </div>
          <div>
            <span>41</span>
            <span>1</span>
          </div>
          <div>
            <span>42</span>
            <span>1</span>
          </div>
          <div>
            <span>43</span>
            <span>1</span>
          </div>
        </div>
      </div>
      <Link to={<Tools />} />
    </>
  )
}