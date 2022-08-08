import { Button } from "../../../components/Button";

export function Ordem(){
  return (
    <div className="w-full h-full bg-primary mt-0">
      <form className="w-screen-relative flex flex-col mx-auto">
        <label 
          htmlFor="ordem"
          className="mt-[25.24vh]  text-[0.9375rem] text-white leading-normal w-full text-center mb-[1.0625rem]"
        >
          Digite o número de OF
        </label>
        <input 
          type="text" 
          name="ordem" 
          id="ordem"
          className="h-[3.75rem] p-3 rounded-lg mb-[27.40vh]" 
        />
        <Button textInput="Confirmar" />
      </form>
    </div>
  )
}