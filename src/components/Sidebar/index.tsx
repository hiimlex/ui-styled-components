import React from 'react';
import { Link, Section, Title, Footer } from './styles';

const SideBar = () => {
	const year = new Date().getFullYear();

	return (
		<Section>
			<Title>
				<Link href="https://linktr.ee/yuninho" target="_blank">
					<div className="content">
						<h2>LeUX</h2>
						<h2>LeUX</h2>
					</div>
				</Link>
			</Title>
			<span></span>
			<Footer>
				<p>Design and developed by Alex. © {year}</p>
			</Footer>
		</Section>
	);
};

export default SideBar;
