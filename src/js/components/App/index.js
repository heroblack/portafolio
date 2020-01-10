import React, { useState } from "react";
import data from "../../../json/loader.json";
import Loader from "../Loader";
import logo from "../../../image/platzi.png";
import video from "../../../video/que-es-core.mp4";
console.log(data);
import "../../../less/style.less";
import "../../../sass/style.scss";
import "../../../stylus/style.styl";

function App() {
  const [loaderList, setLoaderList] = useState([]);
  async function handleClick() {
    setLoaderList(data.loaders);
    const { alerta } = await import("../../alert");
    alerta("este modulo ha cargado dinamicamnete cool");
  }
  return (
    <div>
      <p className="sass">esto es 4</p>
      <p className="less">esto es less</p>
      <p className="stylus">esto es stylus</p>
      <p className="post-css">esto es postcsse</p>
      si linda aplicación hecha en React2.js
      <video src={video} width={360} controls poster={logo}></video>
      <p>
        <img src={logo} alt="" />
      </p>
      <ul>
        {loaderList.map(item => (
          <Loader data={item} key={item.id} />
        ))}
      </ul>
      <button onClick={handleClick}>Loaders ?</button>
    </div>
  );
}

export default App;
