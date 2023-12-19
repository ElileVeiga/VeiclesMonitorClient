import React, {useState} from 'react';
import './App.css'
import InputLoginComponents from './components/InputLoginComponents/InputLoginComponents';
import ButtomLoginComponent from './components/ButtomLoginComponent/ButtomLoginComponent';
import { Link, useNavigate } from "react-router-dom";
import  Axios  from 'axios';
import { DATABASE } from './Server/server';

function Signin () {
  const navigate = useNavigate();
  const [login, setLogin] = useState<any>({
    username:'',
    password:''
  });

  const[ USER, setUSER] = useState<any>()

  const handleChargeValues = (value:any) => {
    setLogin((prevValue:any) => ({
      ...prevValue,
      [value.target.id]: value.target.value,
    }));
  };

  const handleLogin = () => {
    // Verifique se a senha fornecida é igual à senha armazenada localmente
  
      Axios.post(`${DATABASE}/LoginUser`, {
        name: login.username,
        password: login.password,
      })
        .then((response) => { 
          // Autenticação bem-sucedida, pode redirecionar para a tela de home
          localStorage.setItem('token', response.data.token);
          setUSER(login.username)
          navigate(`/home/${login.username}`);          
        })
        .catch((err) => {
          // Lógica para lidar com falha na autenticação
          console.log(err);
          navigate('/');

        });
  };


  return (
    <body
      className='BodyLogin'
    >
      <div
        className='BoxLoginPage'
      >
       <InputLoginComponents 
        TYPEINPUT='text'
        PLACEHOLDERINPUT='nome'
        IDINPUT='username'
        CHANGEINPUT={handleChargeValues}
       />
       <InputLoginComponents 
        TYPEINPUT='password'
        PLACEHOLDERINPUT='senha'
        IDINPUT='password'
        CHANGEINPUT={handleChargeValues}
       />
      <ButtomLoginComponent 
        TEXTBUTTOM='entrar'
        BUTTOMBODY={() => handleLogin()}
      />  
       <Link to="/signup">&nbsp;Registre-se</Link>
      </div>
    </body>
  );
}

export default Signin ;