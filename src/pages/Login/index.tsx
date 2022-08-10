import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import './styles.scss'

export function Login() {
  return (
    <div className="w-full h-full bg-primary items-center flex flex-col">
      <h1 className="uppercase mt-[8.295625rem] text-white font-extrabold text-[1.4375rem] leading-normal tracking-widest">Vamos começar</h1>
      <span className="text-white mt-[3.625rem]">Digite seu usuário e senha</span>
      <form className="form-login mt-[3.625rem] w-[87.2%]">
        <div className="flex flex-col bg-white rounded-md px-3 py-[0.65625rem]">
          <label 
            htmlFor="userName"
            className='tracking-tight text-[0.8125rem] text-gray-400 leading-[1.2]'
          >
            Usuário
          </label>
          <input 
            type="text" 
            name="userName" 
            id="userName" 
            className='bg-transparent border-none'
          />
        </div>
        <div className="flex flex-col bg-white rounded-md px-3 py-[0.65625rem] mt-[1.3125rem]">
          <label 
            htmlFor="userPass"
            className='tracking-tight text-[0.8125rem] text-gray-400 leading-[1.2]'
          >
            Senha
          </label>
          <input 
            type="password" 
            name="userPass" 
            id="userPass" 
          />
        </div>
        <Link to="/painel">
          <div className="mt-14">
              <Button textInput='Continue' />
          </div>
        </Link>
      </form>

    </div>
  )
}