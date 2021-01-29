import styled from 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		title: string,

		colors: {
			primary: string,
			secundary: string,
			main: string,
			background: string,
			text: string,
			white: string,
			highlighter: any,
			success: string,
			warning: string,
		}
	}
}
