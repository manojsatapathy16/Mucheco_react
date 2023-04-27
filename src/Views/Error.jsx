import React from 'react';
import Header from './Header';
function Error() {
 
  return (
    <>
     <Header class='black_bg' />
    <div className="error_section">
        <img src={require("../image/error.png")} alt="" />
    </div>
    </>
    );
}

export default Error;