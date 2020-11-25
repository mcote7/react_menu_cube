import React, { useEffect } from 'react';

import '../CSS/cube.css';

import useRS from "radioactive-state";

import CUBE_FRONT_MENU from './cube-faces/CUBE_FRONT_MENU';

const CUBE_MAIN_RS = () => {
  
  const state = useRS({
    currentClass: 'menu'
  });

  // -- CHANGE SIDES --->
  const handleItemSelect = (e) => {
    // console.log("1",state.currentClass)
    // console.log("next",e.target.value)
    state.currentClass = e.target.value;
    // console.log("2",state.currentClass)
  };

  // -- CHANGE BUTTON COLOR --->
  useEffect(()=>{

    const defaultColor = 'rgba(255, 255, 255, 0.2)';
    const defaultBorderColor = 'rgba(255, 255, 255, 0.3)';
    const defaultTextColor = 'rgba(255, 255, 255,1)';

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
        button[i].style.borderColor = 'rgba(255, 255, 255, 0.75)';
        button[i].style.color = 'rgba(0,0,0,1)';
      }
      else {
        button[i].style.backgroundColor = defaultColor;
        button[i].style.borderColor = defaultBorderColor;
        button[i].style.color = defaultTextColor;
      }
    }
  },[state.currentClass]);

  // -- OPENING ENTERANCE --->
  useEffect(()=>{
    setTimeout(() => {
      const buttons = document.getElementsByClassName('menu_button');
        for(let i = 0; i < buttons.length; i++) {
        setTimeout(() => {
          state.currentClass = buttons[i].value;
        }, i * 1000);
      }
    }, 250);
    setTimeout(() => {
      state.currentClass = 'menu';
    }, 6250);
  },[]);// eslint-disable-line
  // -- LINTER DISSABLED FOR RADIOACTIVE STATE -

  return (<>

    <div className="row mt-1 mb-2">
      <div className="col">


            <span>
              <button className="m-3 menu_button" name="rotate-cube-side" value="menu"
              onClick={(e)=>handleItemSelect(e)}>menu</button>
            </span>

          {/*  */}

          {/*  */}

      </div>
    </div>

    <div className="row">
      <div className="col">
        <div className="scene m-auto">
          <div className={`cube show-${state.currentClass}`}>
            <CUBE_FRONT_MENU handleItemSelect={handleItemSelect}/>
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