import {createGlobalStyle} from 'styled-components';
import device from './mediaQueries';

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
	}

    html {
		box-sizing: border-box;
		overflow-y: scroll;
		font-family: 'Cinzel', Arial, Helvetica, sans-serif;
		font-size: 62.5%;
		font-variant-ligatures: none;
		-webkit-font-variant-ligatures: none;
		text-rendering: optimizeLegibility;
		-moz-osx-font-smoothing: grayscale;
		font-smoothing: antialiased;
		-webkit-font-smoothing: antialiased;
		text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;

	}

    body {
		font-size: 1.7rem;
		line-height: 1.5;
		padding: 0;
		margin: 0;
		margin-top: 5.7rem;
		
	}

    h1, h2, h3, h4, h5, h6 {
		font-family:'Taviraj';
		line-height: 1.25;
		margin: 16px 0;
		font-weight: 400;
		text-transform: capitalize;

	}
	h1,
	.h1 {
		font-family:'Taviraj';
		position: absolute;
		margin-bottom: 24px;
		margin-top: 24px;
		font-size: 32px;
		font-weight: 400;
		line-height: 1.1;

		@media ${device.lg} {
			font-size: 60px;
		}
	}
	h2,
	.h2 {
		font-size: 30px;
		@media ${device.lg} {
			font-size: 32px;
		}
	}
	h3,
	.h3 {
		font-size: 24px;
		@media ${device.lg} {
			font-size: 30px;
		}
	}
	h4,
	.h4 {
		font-size: 20px;
		@media ${device.lg} {
			font-size: 24px;
		}
	}
	h5,
	.h5 {
		font-size: 18px;
		@media ${device.lg} {
			font-size: 20px;
		}
	}
	h6,
	.h6 {
		font-size: 16px;
		@media ${device.lg} {
			font-size: 18px;
		}
	}

	p{
		font-family: Open Sans;
		letter-spacing: 1px;
	}

	figure {
		margin: 0;
	}

	nav {
		ul {
			list-style: none;
		}
	}

	ul {
		list-style: none;
		padding: 0;
	}

	form {
		width: 100%;
		max-width: 60rem;
		margin: 0 auto;
		padding: 2rem;
		box-shadow: 0px 4px 9px -6px rgba(0,0,0,0.4);
		margin-top: 5rem;
		margin-bottom: 5rem;
		height: auto;


		label {
			font-family:'Taviraj';
			font-size: 1.8rem;
		}

		input, textarea {
			width: 100%;
			border: none;
			outline: none;
			border-bottom: 1px solid #3d4999;
			transition: all .3s ease-in;
			font-size: 2rem;

			&:focus {
				border-bottom: 2.5px solid #3d4999;

			}
		}

		.has-text-align-center {
			text-align: center;
		}

		textarea {
			height: 10rem
		}

	}

	.btn {
		font-family:'Taviraj';
		background: #a88855;
		color: white;
		padding: 1rem 2rem;
		text-decoration: none;
		text-transform: uppercase;
		border-radius: 5px;
		box-shadow: -1px 2px 17px 0px rgba(0,0,0,0.25);
		transition: all .3s ease-out;
		border-bottom: none;
		cursor: pointer;

		&:hover {
			background: #bf9045;
		}

	}

	.site-btn {
		background-color: none !important;
		background: none !important; 
		width: 100% !important;
		display: flex !important;
		justify-content: center !important;
		border: none !important;
		box-shadow: none;

		a {
			font-family:'Taviraj';
			background: #a88855;
			color: white;
			padding: 1rem 2rem;
			text-decoration: none;
			text-transform: uppercase;
			border-radius: 5px;
			box-shadow: -1px 2px 17px 0px rgba(0,0,0,0.25);
			transition: all .3s ease-out;
			

			&:hover {
				background: #bf9045;
			}
		}
	}

	.svg-inline--fa{
		margin-right: 1rem;
	}

	@media ${device.lg} {
		form {
			margin-top: 0 !important;

			br {
				display: none;
			}

			label {
				font-family:'Taviraj';
				display: flex;
				flex-direction: column;
			}
		}
	}


	.site-btn, button {
		display: inline-block;
		width: auto;
		background: #3d4999;
		color: white;
		font-family:'Taviraj';
		padding: 5px 5rem;
		cursor: pointer;
		border: none; 
		outline: none;
		transition: all .2s ease-out;
		border: 2px solid #3d4999;

		&:hover {
			background: #3d4999;
		}

	}
`


export default GlobalStyle;