import React from 'react';
import Drawing from 'react-drawing-board';
import './DrawingBoard.css';
class DrawingBoard extends React.Component{

render(){

return (

<div className="dboard">
<Drawing className="dboard"/>
</div>
);
}


}

export default DrawingBoard;
