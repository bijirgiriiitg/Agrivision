import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";


const style = {
    borderRadius: 20,
    height: 6,
    backgroundColor: "grey",
    width: 500,
   };


export default function Bar(props) {
return (
	<div>  
	<LinearProgress variant="determinate" style={style} value={props.percentage} />
	</div>
);
}
