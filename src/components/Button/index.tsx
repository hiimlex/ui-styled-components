import React from 'react';

import { Confirm } from './styles';

interface Props {
	text?: string;
	confirm?: boolean;
}

const Button: React.FC<Props> = (props: Props) => {
	return <Confirm>{props.text}</Confirm>;
};

export default Button;
