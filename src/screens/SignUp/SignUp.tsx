import React, {useState } from "react";
import InputLoginComponents from "../../components/InputLoginComponents/InputLoginComponents";
import SelectInputComponent from "../../components/SelectInputComponent/SelectInputComponent";
import ButtomLoginComponent from "../../components/ButtomLoginComponent/ButtomLoginComponent";
import { Link, useNavigate } from "react-router-dom";
import  Axios from "axios";
import { DATABASE } from "../../Server/server";


const Signup = () => {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState<any>();

  const handleChargeValues = (value: any) => {
    setNewUser((prevValue: any) => ({
      ...prevValue,
      [value.target.id]: value.target.value,
    }));
  };

  const HandleCadastreNewUser = () => {
    Axios.post(`${DATABASE}/SignupUser`, {
      name: newUser.name,
      password: newUser.password,
      setor: newUser.setor,
    }).then(() => {
      alert('Cadastro realizado')
      navigate('/')
    }).catch((err:any) => {
      alert('Erro ao criar cadastro, verifique seus dados')
    })
  };

  return (
        <div className="AreaSignup">
          <div className="boxSignup">
          <InputLoginComponents
            TYPEINPUT="text"
            IDINPUT='name'
            PLACEHOLDERINPUT="Digite seu nome"
            CHANGEINPUT={handleChargeValues}
          />
          <InputLoginComponents
            TYPEINPUT="password"
            IDINPUT='password'
            PLACEHOLDERINPUT="Crie uma senha"
            CHANGEINPUT={handleChargeValues}
          />
          <SelectInputComponent
            IDSELECT="setor"
            CHANGESELECT={handleChargeValues}
            PLACEINPUT="confirme seu setor"
            OPTS="T.I"
            OPTS2="Trafego"
          />
          <ButtomLoginComponent
            TEXTBUTTOM='Cadastrar-se'
            BUTTOMBODY={() => HandleCadastreNewUser()}
          />
          <Link to="/">&nbsp;Entre</Link>
          </div>
        </div>
  );
};

export default Signup;
