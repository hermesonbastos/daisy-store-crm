import Input from '../../Input/Input'
import logo from '../../../assets/logo.png'
import Button from '../../Button/Button'
import './styles.css'
import useLogin from './useLogin'

const Login = () =>{

    const { login } = useLogin();

    return (
        <div className='frame'>
            <div className='banner'>
                <img id="logo" src={logo} alt="logo" />
            </div>
            <div className='form'>
                <div className='form-content'>
                    <Input label="E-MAIL" placeholder="Digite seu email..." type="email"/>
                    <Input label="SENHA" placeholder="Digite sua senha..." type="password"/>
                    <div id='button-text'>
                        <Button name = "LOGIN" onClick={login}/>
                        <a>Esqueceu a senha?</a>
                    </div>
                </div>
            </div>
        </div>
    )   
}


export default Login;