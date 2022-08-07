
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'

import './styles.scss'

export function Home() {

  return (
    <>
      <div className='home'>
        <div></div>
        <h1>Bem vindo!</h1>
        <p>Torne seu dia de trabalho na <span>Vulcabras|Azaleia</span> mais prático</p>
      </div>
      <Link to="/login" className='button-home'>
        <div className="w-[87.2%]">
          <Button textInput='Entrar'/>
        </div>
      </Link>
    </>
  )
}