import { Button } from "../components/Button";

export function ToolOrdem(){
  return (
    <div>
      <form>
        <label htmlFor="ordem">Digite o número de OF</label>
        <input type="text" name="ordem" id="ordem" />
        <Button textInput="Confirmar" />
      </form>
    </div>
  )
}