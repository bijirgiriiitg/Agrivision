import React from "react";
import "./Modal.module.css";
import {MdCancel } from "react-icons/md";
//import {baseURL} from "../Apis";
//import { useState } from "react";
import styles from "./Modal.module.css";
const Modals =({setOpenModal})=> {

  const handleClick = (name) => {
    console.log(name);
  }

  return (
    <div className={styles.modalBackground}>
    <div className={styles.modalContainer}>
      <div className={styles.titleCloseBtn}>
        <button
          onClick={() => {
            setOpenModal(false);
          }}
        >
        <MdCancel/>
        </button>
      </div>
      <div className={styles.title9}>
        <h3>Was this video helpful?</h3>
      </div>
      <div className={styles.footer}>
      <button onClick={() => handleClick('Yes')}
            //()=> {setOpenModal(false);}
          id="cancelBtn"
        >
          Yes
        </button>
        <button onClick={() => handleClick('No')}
            //()=> {setOpenModal(false);}
          id="cancelBtn"
        >
          No
        </button>
      </div>
    </div>
  </div>
  );
}

export default Modals;
