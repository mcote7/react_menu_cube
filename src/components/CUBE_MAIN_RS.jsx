import React, { useEffect } from 'react';

import '../CSS/cube.css';

import useRS from "radioactive-state";

import CUBE_FRONT_MENU from './cube-faces/CUBE_FRONT_MENU';

const CUBE_MAIN_RS = () => {
  
  const state = useRS({
    currentClass: 'front'
  });

  const handleItemSelect = (e) => {
    // console.log("1",state.currentClass)
    // console.log("next",e.target.value)
    state.currentClass = e.target.value;
    // console.log("2",state.currentClass)
  };

  useEffect(()=>{
    const defaultColor = 'rgba(255, 255, 255, 0.2)'
    const target = document.getElementsByClassName(`cube__face--${state.currentClass}`)[0];
    // console.log({target});
    const style = window.getComputedStyle(target);
    // console.log({style});
    const color = style.getPropertyValue('background-color').replace('0.7', '1');
    // console.log({color});
    const button = document.getElementsByClassName('menu_button');
    // console.log({button});
    for(let i = 0; i < button.length; i++) {
      // console.log('n',button[i]);
      if(button[i].value === state.currentClass) {
        button[i].style.backgroundColor = color;
      }
      else {button[i].style.backgroundColor = defaultColor;}
    }
  },[state.currentClass])

  return (<>

    <div className="row mt-1 mb-2">
      <div className="col">
        <div className="button-group">

            <span>
              <button className="m-3 menu_button" name="rotate-cube-side" value="front"
              onClick={(e)=>handleItemSelect(e)}>front</button>
            </span>

            <span>
              <button className="m-3 menu_button" name="rotate-cube-side" value="right"
              onClick={(e)=>handleItemSelect(e)}>right</button>
            </span>

            <span>
              <button className="m-3 menu_button" name="rotate-cube-side" value="back"
              onClick={(e)=>handleItemSelect(e)}>back</button>
            </span>

            <span>
              <button className="m-3 menu_button" name="rotate-cube-side" value="left"
              onClick={(e)=>handleItemSelect(e)}>left</button>
            </span>

            <span>
              <button className="m-3 menu_button" name="rotate-cube-side" value="top"
              onClick={(e)=>handleItemSelect(e)}>top</button>
            </span>

            <span>
              <button className="m-3 menu_button" name="rotate-cube-side" value="bottom"
              onClick={(e)=>handleItemSelect(e)}>bottom</button>
            </span>

        </div>
      </div>
    </div>

    <div className="row">
      <div className="col">
        <div className="scene m-auto">
          <div className={`cube show-${state.currentClass}`}>
            <CUBE_FRONT_MENU />
            <div className="cube__face cube__face--back">back</div>
            <div className="cube__face cube__face--right">right</div>
            <div className="cube__face cube__face--left">left</div>
            <div className="cube__face cube__face--top">top</div>
            <div className="cube__face cube__face--bottom">bottom</div>
          </div>
          <div className="water"></div>
        </div>
      </div>
    </div>
  </>);
};

export default CUBE_MAIN_RS;