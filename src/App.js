import React, { useState, useEffect, useRef } from "react";
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
import IrisDriftZoomCircle from "./components/irisDriftZoomCircle/irisDriftZoomCircle";
import LucienKeyEvent from "./components/lucienKeyEvent/lucienKeyEvent";
import { IrisMutiSelect } from "./components/irisMultiSelect/IrisMutiSelect";
import FixPosition from "./components/fixePosition/FixPosition";
import IrisTabs from "./components/irisTabs/IrisTabs";
import LucienCanvas from "./components/LucienCanvas/LucienCanvas";
import SlideBar from "./components/slidBar/slideBar";
import TestRender from "./components/testRender/testRender";
import AsynFetchErrorHandling from "./components/asyncFetchErrorHandling/asynFetchErrorHandling";
<<<<<<< HEAD
import ReactDraggable from "./components/reactDraggable/ReactDraggable";
=======
import ParentChildKeyEvent from "./components/parentChildKeyEvents/ParentChildKeyEvent";
>>>>>>> 71ce3db90c25b376457038f03c6049039c46dbed

const allElements = ["Apple", "Banana", "None", "all Okay", "番石榴"];
function App() {
  const keyEvent = (event) => {
    const currentTarget = event.currentTarget;
    const eventTarget = event.target;
    console.log("currentTarget", currentTarget);
    console.log("eventTarget", eventTarget);
    console.log("currentTarget === eventTarget", currentTarget === eventTarget);
    if (event.target === event.currentTarget) {
      console.log("parent is listen");
    }
  };

  const appRef = useRef(null);

  // useEffect(() => {
  //   document.addEventListener("keydown", keyEvent, true);

  //   return () => {
  //     document.removeEventListener("keydown", keyEvent, true);
  //   };
  // }, []);

  useEffect(() => {
    if (appRef) {
      document.body.addEventListener("keydown", keyEvent);
    }
    return () => {
      document.body.removeEventListener("keydown", keyEvent);
    };
  }, [appRef]);
  const [selectedValues, setSelectedValues] = useState(["None"]);
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
  // return (
  //   <div style={{ display: "flex" }}>
  //     <IrisDriftZoomCircle
  //       src="http://assets.imgix.net/unsplash/lighthouse.jpg?w=400&ch=DPR&dpr=2"
  //       imageStyle={{ width: "600px", height: "600px", overflow: "hidden" }}
  //       // zoomLevel={3}
  //       breakPoint={900}
  //     />
  //     <span>hello world</span>
  //   </div>
  // );
  // return <LucienKeyEvent />;
  // return <IrisTabs width={400} />;
  // return <LucienCanvas />;
  // return (
  //   <div>
  //     {console.log("app rendered")}
  //     <TestRender />
  //   </div>
  // );

<<<<<<< HEAD
  return <ReactDraggable />;
=======
  // return <AsynFetchErrorHandling />;
>>>>>>> 71ce3db90c25b376457038f03c6049039c46dbed

  // right hand side slide bar
  // return <SlideBar />;

  return (
    <div id="app" ref={appRef}>
      <ParentChildKeyEvent />
    </div>
  );
}

export default App;
