import React from 'react';

const CUBE_FRONT_MENU = ({handleItemSelect}) => {
  return (
    <div className="cube__face cube__face--menu">
      <div className="menu-group container-fluid">

        <div className="row">
          <div className="col">
            <span>
              <button className="m-3 menu_button" name="rotate-cube-side" value="top"
              onClick={(e)=>handleItemSelect(e)}>top</button>
            </span>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <span>
              <button className="mr-3 menu_button" name="rotate-cube-side" value="left"
              onClick={(e)=>handleItemSelect(e)}>left</button>
            </span>
            <span>
              <button className="m-3 menu_button" name="rotate-cube-side" value="back"
              onClick={(e)=>handleItemSelect(e)}>back</button>
            </span>
            <span>
              <button className="ml-3 menu_button" name="rotate-cube-side" value="right"
              onClick={(e)=>handleItemSelect(e)}>right</button>
            </span>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <span>
              <button className="m-3 menu_button" name="rotate-cube-side" value="bottom"
              onClick={(e)=>handleItemSelect(e)}>bottom</button>
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
export default CUBE_FRONT_MENU;