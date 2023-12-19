import React, { useEffect, useState } from "react";
import "./UpdateVeicles.css";
import { useLocation } from "react-router-dom";
import Axios from "axios";
import ButtomComponent from "../../components/ButtomComponent/ButtomComponent";
import DataSetComponent from "../../components/DataSetComponent/DataSetComponent";
import { DATABASE } from "../../Server/server";

function UpdateVeicles(dadosVeiculo: any) {
  const [veicle, setVeicle] = useState<any>(String);
  const [UPveicles, setUPVeicles] = useState<any>()

  const handleChargeValuesUpdate = (value: any) => {
    setUPVeicles((prevValue: any) => ({
      ...prevValue,
      [value.target.id]: value.target.value,
    }));
  };

  const location = useLocation();
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const dadosVeiculo = {
      prefixo: queryParams.get("prefixo"),
      placa: queryParams.get("placa"),
      modelo: queryParams.get("modelo"),
      metroplan: queryParams.get("metroplan"),
      daer: queryParams.get("daer"),
      tacografo: queryParams.get("tacografo"),
      prefeitura: queryParams.get("prefeitura"),
      id: queryParams.get("id"),
    };
    setVeicle(dadosVeiculo);
  }, [location.search]);

  const handleChargeButtomUpdate = () => {
    Axios.put(`${DATABASE}/VeiclesUpdate/${veicle.id}`, {
      metroplan: UPveicles.UPmetroplan,
      daer: UPveicles.UPdaer,
      tacografo: UPveicles.UPtacografo,
      prefeitura: UPveicles.UPprefeitura,

    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="BoxUpdateVeicles">
      <div className="FelxUpload">
        <div className="VeicleAtualData">
          <p>Placa: {veicle.placa}</p>
          <p>Prefixo: {veicle.prefixo}</p>
          <p>Metroplan: {veicle.metroplan}</p>
          <p>Daer: {veicle.daer}</p>
          <p>Tacografo: {veicle.tacografo}</p>
          <p>Prefeitura: {veicle.prefeitura}</p>
        </div>
        <div className="VeicleUPData">
          <DataSetComponent
            TITLE='Metroplan'
            IDDATECOMPONENT='UPmetroplan'
            CHANGEDATE={handleChargeValuesUpdate}

          />
          <DataSetComponent 
            TITLE='Daer'
            IDDATECOMPONENT='UPdaer'
            CHANGEDATE={handleChargeValuesUpdate}
          />
          <DataSetComponent 
            TITLE='Tacografo'
            IDDATECOMPONENT='UPtacografo'
            CHANGEDATE={handleChargeValuesUpdate}
          />
          <DataSetComponent 
            TITLE='Prefeitura'
            IDDATECOMPONENT='UPprefeitura'
            CHANGEDATE={handleChargeValuesUpdate}
          />
        </div>
      </div>
        <ButtomComponent
        CLICKBUTTOMCOMPONENT={() => handleChargeButtomUpdate()}
        IDBUTTOM='AlterButton'
        TEXTBUTTOMCOMPONENT='Alterar'
        />
    </div>
  );
}

export default UpdateVeicles;
