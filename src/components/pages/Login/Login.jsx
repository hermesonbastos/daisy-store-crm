import Input from '../../Input/Input'
import logo from '../../../assets/logo.png'
import Button from '../../Button/Button'
import './styles.css'

const Login = () =>{
    return (
        <div className='frame'>
            <div className='banner'>
                <img id="logo" src={logo} alt="logo" />
            </div>
            <div className='form'>
                <Input name = "E-MAIL" placeholder="Digite seu email..." type="email"/>
                <Input name = "SENHA" placeholder="Digite sua senha..." type="password"/>
                <div id='button-text'>
                    <Button name = "LOGIN"/>
                    <a>Não possui uma conta? Cadastre-se</a>
                </div>
            </div>
        </div>
    )   
}


export default Login;