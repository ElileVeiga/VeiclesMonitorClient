import React, { useState } from "react";
import "./CadastreVeicles.css";

import Axios from "axios";

import InputComponent from "../../components/InputComponent/InputComponent";
import SelectInputComponent from "../../components/SelectInputComponent/SelectInputComponent";
import ButtomComponent from "../../components/ButtomComponent/ButtomComponent";
import DataSetComponent from "../../components/DataSetComponent/DataSetComponent";
import { DATABASE } from "../../Server/server";

function CadastreVeicles() {
  const [values, setValues] = useState<any>();
  const [date, setDate] = useState<any>();

  const handleChargeValues = (value: any) => {
    setValues((prevValue: any) => ({
      ...prevValue,
      [value.target.id]: value.target.value,
    }));
  };

  const handleChargeValuesDate = (value: any) => {
    setDate((prevValue: any) => ({
      ...prevValue,
      [value.target.id]: value.target.value,
    }));
  };

  const handleChargeButtom = () => {
    Axios.post(`${DATABASE}/CadastreVeicles`, {
      placa: values.idPlaca,
      prefixo: values.idPrefixo,
      modelo: values.idModelo,
      metroplan: date.metroplan,
      daer: date.daer,
      tacografo: date.tacografo,
      prefeitura: date.prefeitura,
      empresa: values.idWob,
      filial: values.idLocation,

    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="RowInput">
        <InputComponent
          TYPEINPUT="text"
          PLACEHOLDERINPUT="placa"
          IDINPUT="idPlaca"
          CHANGEINPUT={handleChargeValues}
        />
        <InputComponent
          TYPEINPUT="number"
          PLACEHOLDERINPUT="prefixo"
          IDINPUT="idPrefixo"
          CHANGEINPUT={handleChargeValues}
        />
        <SelectInputComponent
          PLACEINPUT="Modelo do veiculo"
          OPTS="onibus"
          OPTS2="micro-onibus"
          IDSELECT="idModelo"
          CHANGESELECT={handleChargeValues}
        />
        <SelectInputComponent
          PLACEINPUT="Empresa"
          OPTS="Vimsa"
          OPTS2="Silas"
          IDSELECT="idWob"
          CHANGESELECT={handleChargeValues}
        />
        <SelectInputComponent
          PLACEINPUT="Filial"
          OPTS="Montenegro"
          OPTS2="Estância Velha"
          IDSELECT="idLocation"
          CHANGESELECT={handleChargeValues}
        />
      </div>
      <div className="RowInput">
        <DataSetComponent
          TITLE="Metroplan"
          IDDATECOMPONENT="metroplan"
          CHANGEDATE={handleChargeValuesDate}
        />
        <DataSetComponent
          TITLE="Daer"
          IDDATECOMPONENT="daer"
          CHANGEDATE={handleChargeValuesDate}
        />
        <DataSetComponent
          TITLE="Tacografo"
          IDDATECOMPONENT="tacografo"
          CHANGEDATE={handleChargeValuesDate}
        />
        <DataSetComponent
          TITLE="Prefeitura"
          IDDATECOMPONENT="prefeitura"
          CHANGEDATE={handleChargeValuesDate}
        />
      </div>
      <div className="AreaCenterButtomCadastrate">
        <ButtomComponent
          TEXTBUTTOMCOMPONENT="cadastrar"
          CLICKBUTTOMCOMPONENT={() => handleChargeButtom()}
        />
      </div>
    </div>
  );
}

export default CadastreVeicles;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// interface IDateResponse {
//  hour: string;
// }

// const App: React.FC = () => {
//  const [currentDate, setCurrentDate] = useState(new Date());
//  const [dbDate, setDbDate] = useState<string | null>(null);

//  useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await axios.get('URL DO SERVIDOR/DATA_BANCO_DE_DADOS');
//         const data: IDateResponse = response.data;

//         setDbDate(data.hour);
//         console.log('Data atual:', currentDate);
//         console.log('Data do banco de dados:', dbDate);
//       } catch (error) {
//         console.error('Erro ao buscar dados:', error);
//       }
//     }

//     fetchData();
//  }, []);

//  return (
//     <div>
//       <h1>Data e Hora atual</h1>
//       <p>{currentDate.toString()}</p>

//       <h1>Data e Hora do banco de dados</h1>
//       <p>{dbDate ? dbDate : 'Carregando...'}</p>
//     </div>
//  );
// };

// export default App;
