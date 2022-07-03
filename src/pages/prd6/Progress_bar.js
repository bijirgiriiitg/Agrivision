import React from 'react'

const Progressbar = ({bgcolor,progress,height}) => {
	
	const Parentdiv = {
		height: height,
		width: '75%',
		backgroundColor: 'whitesmoke',
		borderRadius: 40,
		margin: '2vw auto 1vw auto'
	}
	
	const Childdiv = {
		height: '100%',
		width: `${progress}%`,
		backgroundColor: bgcolor,
		borderRadius:40,
	
	}
	
	
		
	return (
		<div style={Parentdiv}>
	<div style={Childdiv}>
	</div>
	</div>

	
	)
}

export default Progressbar;
