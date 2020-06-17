import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import PanelAnimation from "./cssComponent/panel/panelAnimation";
import ModalPage from "./components/modalPage/modalPage";
import IrisModal from "./cssComponent/panel/IrisModal/irisModal";
import IrisPCIForm from "./components/irisPciForm/irisPciForm";

function App() {
  // return <PanelAnimation />;
  // return (
  //   <div>
  //     <IrisButton />
  //   </div>
  // );
  // useEffect(() => {
  //   const myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  //   const urlencoded = new URLSearchParams();
  //   urlencoded.append("client_id", "Ifv69JVxNcPzoCks");
  //   urlencoded.append("client_secret", "cbe746d3118846c7a96e90ad01a21ec5");
  //   urlencoded.append("grant_type", "client_credentials");

  //   const requestOptions = {
  //     method: "POST",
  //     headers: myHeaders,
  //     body: urlencoded,
  //     redirect: "follow",
  //   };

  //   fetch("https://www.arcgis.com/sharing/rest/oauth2/token", requestOptions)
  //     .then((response) => response.json())
  //     .then((result) => console.log(result))
  //     .catch((error) => console.log("error", error));
  // }, []);

  // return <ModalPage />;

  return <IrisPCIForm />;
}

export default App;
