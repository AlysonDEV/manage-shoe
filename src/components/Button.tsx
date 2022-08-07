
import './buttonStyle.scss'

interface ButtonPropsType {
  textInput?: string;
}

export function Button ( {textInput}: ButtonPropsType ){
  return (
    <button type="submit" className="Button">{ textInput || 'Botão' }</button>
  )
}

