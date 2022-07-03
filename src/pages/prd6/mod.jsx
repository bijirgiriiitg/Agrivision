import React, { useState } from "react";
import Modals from "../../components/prd6/Modal";
import styles from "./confirm.module.css";
import "./confirm.module.css";
const App8=()=> {
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <div className={styles.App7}>
      {modalOpen && <Modals setOpenModal={setModalOpen} />}
    </div>
  );
}
export default App8;

