import React, { useState } from "react";
import "./style/main.scss";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { GrRotateLeft, GrRotateRight } from "react-icons/gr";
import { CgMergeVertical, CgMergeHorizontal } from "react-icons/cg";
import { IoMdUndo, IoMdRedo, IoIosImage } from "react-icons/io";
import storeData from "./LinkedList";
const Main = () => {
  // an array of filter options with their max values
  const filterElement = [
    { name: "brightness", maxValue: 200 },
    { name: "grayscale", maxValue: 200 },
    { name: "sepia", maxValue: 200 },
    { name: "saturate", maxValue: 200 },
    { name: "contrast", maxValue: 200 },
    { name: "hue-Rotate" },
  ];
  // define main state variable using useState
  const [property, setProperty] = useState({
    name: "brightness",
    maxValue: 200,
  });
  const [details, setDetails] = useState("");
  const [crop, setCrop] = useState("");
  const [state, setState] = useState({
    image: "",
    brightness: 100,
    grayscale: 0,
    sepia: 0,
    saturate: 100,
    contrast: 100,
    hueRotate: 0,
    rotate: 0,
    vertical: 1,
    horizontal: 1,
  });
  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const leftRotate = () => {
    setState({
      ...state,
      rotate: state.rotate - 90,
    })

    const stateData=state
    stateData.rotate=state.rotate - 90

    storeData.insert(stateData)
  };
  // const inputHandle = (e) => {
  //   setState({
  //     ...state,
  //     [e.target.name]: e.target.value
  //   });
  // };
  // const leftRotate = ()=>{
  //   setState({
  //     ...state,
  //     rotate:state.rotate - 90
  //   })
  // }
  const rightRotate = () => {
    setState({
      ...state,
      rotate: state.rotate + 90,
    })
    const stateData=state
    stateData.rotate=state.rotate + 90

    storeData.insert(stateData)
  };
  const verticalFlip = () => {
    setState({
      ...state,
      vertical: state.vertical === 1 ? -1 : 1,
    })
    const stateData=state
    stateData.vertical=state.vertical === 1 ? -1 : 1

    storeData.insert(stateData)
  };
  const horizontalFlip = () => {
    setState({
      ...state,
      horizontal: state.horizontal === 1 ? -1 : 1,
    })
    const stateData=state
    stateData.horizontal=state.horizontall === 1 ? -1 : 1

    storeData.insert(stateData)
  };
  const redo = ()=>{
    const data=storeData.redoEdit()
    if(data){
      setState(data)
    }
    console.log(data)
  }
  const undo = ()=>{
    const data=storeData.undoEdit()
    if(data){
      setState(data)
    }
    console.log(data)

  }
  const imageHandle = (e) => {
    if (e.target.files.length !== 0) {
      const reader = new FileReader();
      reader.onload = () => {
        setState({
          ...state,
          image: reader.result,
        });
        const stateData = {
          image: reader.result,
          brightness: 100,
          grayscale: 0,
          sepia: 0,
          saturate: 100,
          contrast: 100,
          hueRotate: 0,
          rotate: 0,
          vertical: 1,
          horizontal: 1,
        }
        storeData.insert(stateData)
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const imageCrop = () => {
    const canvas = document.createElement("canvas");
    const scaleX = details.naturalWidth / details.width;
    const scaleY = details.naturalHeight / details.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(
      details,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );
    const base64Url = canvas.toDataURL("image/jpg");
    setState({
      ...state,
      image: base64Url,
    });
  };
  const saveImage = () => {
    const canvas = document.createElement("canvas");
    canvas.width = details.naturalWidth;
    canvas.height = details.naturalHeight;
    const ctx = canvas.getContext("2d");
    ctx.filter = `brightness(${state.brightness}%) grayscale(${state.grayscale}%) sepia(${state.sepia}%) 
    saturate(${state.saturate}%) contrast(${state.contrast}%) hue-rotate(${state.hueRotate}deg)`;
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate((state.rotate * Math.PI) / 180);
    ctx.scale(state.vertical, state.horizontal);
    ctx.drawImage(
      details,
      -canvas.width / 2,
      -canvas.height / 2,
      canvas.width,
      canvas.height
    );
    const link = document.createElement("a");
    link.download = "Edited_Image.jpg";
    link.href = canvas.toDataURL();
    link.click();
  };
  const resetImage = () => {
    const originalImage = state.image;
    setState({
      image: originalImage,
      brightness: 100,
      grayscale: 0,
      sepia: 0,
      saturate: 100,
      contrast: 100,
      hueRotate: 0,
      rotate: 0,
      vertical: 1,
      horizontal: 1,
    });
  };
  return (
    <div className="image_editor">
      <div className="card">
        <div className="card_header">
          <h1>---- PicPerfect ----</h1>
        </div>
        <div className="card_body">
          <div className="sidebar">
            <div className="side_body">
              <div className="filter_section">
                <span>Filters</span>
                <div className="filter_key">
                  {filterElement.map((v, i) => (
                    <button
                      className={property.name === v.name ? "active" : " "}
                      onClick={() => setProperty(v)}
                      key={i}
                    >
                      {v.name}
                    </button>
                  ))}
                </div>
              </div>
              <div className="filter_slider">
                <div className="label_bar">
                  <label htmlFor="range">Set</label>
                  <span>100%</span>
                </div>
                <input
                  name={property.name}
                  onChange={inputHandle}
                  value={state[property.name]}
                  max={property.maxValue}
                  type="range"
                />
              </div>
              <div className="rotate">
                <label htmlFor="">Rotate & Flip</label>
                <div className="icon">
                  <div onClick={leftRotate}>
                    <GrRotateLeft />
                  </div>
                  <div onClick={rightRotate}>
                    <GrRotateRight />
                  </div>
                  <div onClick={verticalFlip}>
                    <CgMergeVertical />
                  </div>
                  <div onClick={horizontalFlip}>
                    <CgMergeHorizontal />
                  </div>
                </div>
              </div>
            </div>
            <div className="reset">
              <button onClick={resetImage}>Reset</button>
              <button onClick={saveImage} className="save">
                Save Image
              </button>
            </div>
          </div>
          <div className="image_section">
            <div className="image">
              {state.image ? (
                <ReactCrop crop={crop} onChange={(c) => setCrop(c)}>
                  <img
                    onLoad={(e) => setDetails(e.currentTarget)}
                    style={{
                      filter: `brightness(${state.brightness}%) grayscale(${state.grayscale}%) sepia(${state.sepia}%) 
                      saturate(${state.saturate}%) contrast(${state.contrast}%) hue-rotate(${state.hueRotate}deg)`,
                      transform: `rotate(${state.rotate}deg) scale(${state.vertical},${state.horizontal})`,
                    }}
                    src={state.image}
                    alt=""
                  />
                </ReactCrop>
              ) : (
                <label htmlFor="choose">
                  <IoIosImage />
                  <span>Choose Image</span>
                </label>
              )}
            </div>
            <div className="image_select">
              <button onClick={undo} className="undo">
                <IoMdUndo />
              </button>
              <button onClick={redo} className="redo">
                <IoMdRedo />
              </button>
              {crop && (
                <button onClick={imageCrop} className="crop">
                  Crop Image
                </button>
              )}
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
