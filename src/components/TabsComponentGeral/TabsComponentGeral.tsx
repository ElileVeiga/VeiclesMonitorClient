import React, { useEffect, useState } from "react";
import "./TabsComponentGeral.css";
import ItensMenuComponents from "../ItensMenuComponents/ItensMenuComponents";

import { Bus, ArrowLeftRight  } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import  Axios  from "axios";
import { DATABASE } from "../../Server/server";


interface TabsComponentProps {
  AREASISTEM: React.ReactNode; // Tipo para o prop que contém a área do sistema
}

function TabsComponentGeral(props: TabsComponentProps) {
  const [userLog, setUserLog] = useState({
    name: "",
    setor: ""
  });
  const location = useLocation();
  const parametros = location.pathname.split('/'); // Extrai os parâmetros da localização

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(`${DATABASE}/LoginUser/${parametros[parametros.length - 1]}`);
        setUserLog(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <body className="BodyTabsComponentGeral">
      <div className="TopTabsComponent">
        <Link 
          className="LogoImg" 
          to={`/home/${userLog.name}`}>
        </Link>
        <div className="AreaUser">
          <div>
            <p className="NomeUser">{userLog.name}</p>
            <p className="ClassUser">{userLog.setor}</p>
          </div>
          <div className="ImgUser"></div>
        </div>
      </div>
      <div className="AreaCenterComponents">
        <div className="LeftTabsComponent">
          <div className="MenuLeft">
            <ItensMenuComponents
              LINKANCOR={`/CadastrodeVeiculo/${userLog.name}`}
              ICONEMENU={<Bus />}
              TEXTITEMMENU="Cadastro de Veiculo"
            />
             <ItensMenuComponents
              LINKANCOR={`/Veiculos/${userLog.name}`}
              ICONEMENU={<Bus />}
              TEXTITEMMENU="Veiculos Cadastrados"
            />
          </div>
          <div className="LeftTabsOcult">
            <ArrowLeftRight />
          </div>
        </div>
        <div className="AreaSistemComponents">{props.AREASISTEM}</div>
      </div>
    </body>
  );
}

export default TabsComponentGeral;
