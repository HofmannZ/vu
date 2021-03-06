import React from 'react';
import { white } from 'material-ui/styles/colors';
import SvgIcon from 'material-ui/SvgIcon';

const iconStyles = {
	width: 24,
	height: 24
};

const Github = (props) => (
	<SvgIcon style={iconStyles} color={white}>
		<path d="M12,.3A12,12,0,0,0,8.21,23.68c.6.11.82-.26.82-.58s0-1,0-2c-3.34.73-4-1.61-4-1.61A3.18,3.18,0,0,0,3.63,17.7C2.55,17,3.72,17,3.72,17a2.52,2.52,0,0,1,1.84,1.24A2.55,2.55,0,0,0,9,19.2a2.56,2.56,0,0,1,.76-1.6c-2.66-.3-5.47-1.33-5.47-5.93A4.64,4.64,0,0,1,5.58,8.45,4.32,4.32,0,0,1,5.7,5.27S6.7,5,9,6.5a11.37,11.37,0,0,1,6,0C17.29,5,18.3,5.27,18.3,5.27a4.31,4.31,0,0,1,.12,3.18,4.63,4.63,0,0,1,1.23,3.22c0,4.61-2.81,5.62-5.48,5.92A2.86,2.86,0,0,1,15,19.81c0,1.6,0,2.9,0,3.29s.22.69.82.58A12,12,0,0,0,12,.3Z" transform="translate(0 -0.3)"/>
	</SvgIcon>
);

export default Github;
