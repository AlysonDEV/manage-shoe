
import background from '../../assets/bg-home.png'
import { Button } from '../../components/Button'

export function Home() {
  return (
    <div className='h-screen flex flex-col justify-center bg-home-background bg-no-repeat bg-bottom text-center bg-[hei]'>
      <h1 className='uppercase'>Bem vindo!</h1>
      <span>Torne seu dia de trabalho na Vulcabras|Azaleia mais prático</span>
      <Button TextInput="Entrar" />
    </div>
  )
}