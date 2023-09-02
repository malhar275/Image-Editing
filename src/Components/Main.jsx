import React, { useState } from "react";
import "./style/main.scss";
import { GrRotateLeft, GrRotateRight } from "react-icons/gr";
import { CgMergeVertical, CgMergeHorizontal } from "react-icons/cg";
import { IoMdUndo, IoMdRedo, IoIosImage } from "react-icons/io";
const Main = () => {
  const filterElement = [
    { name: "brightness",maxValue:200 },
    { name: "grayscale",maxValue:200 },
    { name: "sepia",maxValue:200 },
    { name: "saturate",maxValue:200 },
    { name: "contrast",maxValue:200 },
    { name: "hueRotate" },
  ];
  const[property,setProperty] = useState(
    { name: "brightness",maxValue:200 }

  )
  const [state, setState] = useState({
    image: "",
    brightness: 70,
    grayscale: 0,
    sepia: 0,
    saturate: 100,
    contrast: 100,
    hueRotate: 0,
    rotate: 0,
    vartical: 1,
    horizontal: 1,
  });
  const inputHandle=(e)=>{
    setState({
        ...state,
        [e.target.name]:e.target.value
    })
  }
  const imageHandle = (e) => {
    if (e.target.files.length !== 0) {
      const reader = new FileReader();
      reader.onload = () => {
        setState({
          ...state,
          image: reader.result,
        });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  return (
    <div className="image_editor">
      <div className="card">
        <div className="card_header">
          <h2>---- Image Editor ----</h2>
        </div>
        <div className="card_body">
          <div className="sidebar">
            <div className="side_body">
              <div className="filter_section">
                <span>Filters</span>
                <div className="filter_key">
                  {filterElement.map((v, i) => (
                    <button className={property.name=== v.name ? 'active':' '} onClick={()=>setProperty(v)} key={i}>{v.name}</button>
                  ))}
                </div>
              </div>
              <div className="filter_slider">
                <div className="label_bar">
                  <label htmlFor="range">Rotate</label>
                  <span>100%</span>
                </div>
                <input name={property.name} onChange={inputHandle} value={state[property.name]} max={property.maxValue} type="range" />
              </div>
              <div className="rotate">
                <label htmlFor="">Rotate & Flip</label>
                <div className="icon">
                  <div>
                    <GrRotateLeft />
                  </div>
                  <div>
                    <GrRotateRight />
                  </div>
                  <div>
                    <CgMergeVertical />
                  </div>
                  <div>
                    <CgMergeHorizontal />
                  </div>
                </div>
              </div>
            </div>
            <div className="reset">
              <button>Reset</button>
              <button className="save">Save Image</button>
            </div>
          </div>
          <div className="image_section">
            <div className="image">
              {state.image ? (
                <img
                  style={{
                    filter: `brightness(${state.brightness}%) grayscale(${state.grayscale}%) sepia(${state.sepia}%) saturate(${state.saturate}%) contrast(${state.contrast}%) hue-rotate(${state.hueRotate}%)`,
                    transform: `rotate(${state.rotate}deg)scale(${state.vartical},scale(${state.horizontal}))`,
                  }}
                  src={state.image}
                  alt=""
                />
              ) : (
                <label htmlFor="choose">
                  <IoIosImage />
                  <span>Choose Image</span>
                </label>
              )}
            </div>
            <div className="image_select">
              <button className="undo">
                <IoMdUndo />
              </button>
              <button className="redo">
                <IoMdRedo />
              </button>
              <button className="crop">Crop Image</button>
              <label htmlFor="choose">Choose Image</label>
              <input onChange={imageHandle} type="file" id="choose" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;