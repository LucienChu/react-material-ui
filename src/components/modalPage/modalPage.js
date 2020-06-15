import React, { useState } from "react";
import LucienModal from "../../cssComponent/panel/lucienModal/lucienModal";
import IrisModal from "../../cssComponent/panel/IrisModal/irisModal";
import IrisImageModal from "../../cssComponent/panel/IrisImageModal/irisImageModal";
import IrisRippleButton from "../button/irisRippleButton";

export default function ModalPage() {
  console.log("modal page called");
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <IrisRippleButton />
      <button onClick={() => setOpenModal(true)}>Open</button>
    </div>
  );
}
