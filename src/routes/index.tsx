import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Signin from "../App";
import Signup from "../screens/SignUp/SignUp";
import Deshboard from "../screens/Deshboard/Deshboard";
import CadastreVeicles from "../screens/CadastreVeicles/CadastreVeicles";
import Veicles from "../screens/Veicles/Veicles";
import UpdateVeicles from "../screens/UpdateVeicles/UpdateVeicles";
import TabsComponentGeral from "../components/TabsComponentGeral/TabsComponentGeral";

interface PrivateRouteProps {
  element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const [authenticationStatus, setAuthenticationStatus] = useState<
    500 | 401 | 200
  >(500);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const token = localStorage.getItem('token');

        if (token === undefined || token === null) {
          setAuthenticationStatus(401);
        } else {
          // Você pode realizar verificações adicionais aqui
          // por exemplo, chamar uma API para validar o token
          // Se tudo estiver correto, autentique o usuário
          setAuthenticationStatus(200);
        }
      } catch (error) {
        // Lidar com erros de autenticação, como erro 401
        setAuthenticationStatus(500);
      }
    };

    checkAuthentication();
  }, []); // Adicione os colchetes para garantir que o useEffect execute apenas uma vez

  if (authenticationStatus === 200) {
    // Se autenticado, renderize o elemento desejado
    return <>{element}</>;
  }

  if (authenticationStatus === 401) {
    // Se não estiver autenticado, redirecione para a página de login
    return null
  }

  // Aguarde enquanto estamos verificando a autenticação
  return null;
};


export const Rotas: React.FC = () => {
  useEffect(() => {
    const handleBeforeUnload = (event: any) => {
      // Verifique se o evento é de fechar a janela antes de remover o token
      if (event.currentTarget.performance.navigation.type === 1) {
        localStorage.removeItem('token');
      }
    };

    const handleUnload = () => {
      // Remova o ouvinte do evento beforeunload para evitar a remoção duplicada do token
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Adicione um ouvinte para o evento unload para remover o ouvinte beforeunload
    window.addEventListener('unload', handleUnload);

    return () => {
      // Remova os ouvintes ao desmontar o componente
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('unload', handleUnload);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/home/:name"
          element={
            <PrivateRoute
              element={<TabsComponentGeral AREASISTEM={<Deshboard />} />}
            />
          }
        />
        <Route
          path="/CadastrodeVeiculo/:name"
          element={
            <PrivateRoute
              element={<TabsComponentGeral AREASISTEM={<CadastreVeicles />} />}
            />
          }
        />
        <Route
          path="/Veiculos/:name"
          element={
            <PrivateRoute
              element={<TabsComponentGeral AREASISTEM={<Veicles />} />}
            />
          }
        />
        <Route
          path="/AtualizarVeiculos/*"
          element={
            <PrivateRoute
              element={<TabsComponentGeral AREASISTEM={<UpdateVeicles />} />}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};