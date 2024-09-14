import React, { useContext } from "react";
import Input from '../../Input/Input';
import logo from '../../../assets/logo.png';
import Button from '../../Button/Button';
import './styles.css';
import useForm from "../../../hooks/useForm";
import useLogin from "../../../hooks/useLogin";
import { UserContext } from "../../../contexts/UserContext";
import { useSnackbar } from "react-simple-snackbar";

const Login = () => {
  const email = useForm("email");
  const password = useForm();
  const { login, loading, error } = useLogin();
  const { isAuthenticated } = useContext(UserContext);
  const [openSnackbar, closeSnackbar] = useSnackbar();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email.validate() && password.validate()) {
      await login(email.value, password.value).then(() => {
        if(isAuthenticated) {
            openSnackbar('Login efetuado com sucesso!');
            setTimeout(() => {
                closeSnackbar();
            }, 3000);
        } else {
            openSnackbar('Dados incorretos!');
            setTimeout(() => {
                closeSnackbar();
            }, 3000);
        }
      });
    }
  };

  return (
    <div className="frame">
      <div className="banner">
        <img id="logo" src={logo} alt="logo" />
      </div>
      <div className="form">
        <form className="form-content" onSubmit={handleSubmit}>
          <Input
            label="E-MAIL"
            placeholder="Digite seu email..."
            type="email"
            {...email}
          />
          <Input
            label="SENHA"
            placeholder="Digite sua senha..."
            type="password"
            {...password}
          />
          <Button name="LOGIN" variant="primary" disabled={loading} onClick={login} />
        </form>
      </div>
      {isAuthenticated && <p>Usuário autenticado!</p>}
    </div>
  );
};

export default Login;
