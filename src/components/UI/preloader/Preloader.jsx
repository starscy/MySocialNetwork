import React from "react";
import preloader from "../../../assets/img/preloader.gif";
import cl from "../preloader/Preloader.module.css";

const Preloader = () => {
  return (
    <div className={cl.preloaderBlock}>
      <img src={preloader} alt="Идет загрузка" className={cl.preloader} />
    </div>
  );
};
export default Preloader;
