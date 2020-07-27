import React, { useEffect } from "react";
import logo from "./logo.svg";
// import "./App.css";
import PanelAnimation from "./cssComponent/panel/panelAnimation";
import ModalPage from "./components/modalPage/modalPage";
import IrisModal from "./cssComponent/panel/IrisModal/irisModal";
import IrisPCIForm from "./components/irisPciForm/irisPciForm";
import { LucienGrid } from "./components/grid/LucienGrid";
import ImageInfo from "./components/irisPciForm/imageAndInfo/imageInfo";
import IrisPCIFormHalfHalf from "./components/irisPCIFormHalfHalf/irisPCIFormHalfHalf";
import { Grid } from "@material-ui/core";
import ImageWithModal from "./components/imageWithModal/imageWithModal";
import IrisHeader from "./components/IrisHeader/irisHeader";
import { WC } from "./hoc/wrappedComponent";
import IrisDriftZoom from "./components/irisDriftZoom/irisDriftZoom";

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

  // return <IrisPCIForm />;

  // return <LucienGrid />;

  // return <ImageInfo />;

  // return <IrisPCIFormHalfHalf />;
  // return (
  //   <Grid container>
  //     <Grid item xs={8} style={{ background: "green" }}></Grid>
  //     <Grid item xs={3}>
  //       <ImageWithModal src="https://www.gstatic.com/webp/gallery/3.jpg" />
  //     </Grid>
  //   </Grid>
  // );

  // return <IrisHeader />;

  // return <WC />;
  return (
    <div style={{ display: "flex" }}>
      <IrisDriftZoom
        src="http://assets.imgix.net/unsplash/lighthouse.jpg?w=400&ch=DPR&dpr=2"
        imageStyle={{ width: "600px", height: "600px", overflow: "hidden" }}
      />
      <span>hello world</span>
    </div>
  );
}

export default App;
