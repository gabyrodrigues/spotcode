import React from 'react';
import NavbarFooter from '../../components/common/NavbarFooter';
import Albums from '../../components/Albums';
import SectionWrapper from '../../components/common/SectionWrapper';

const AlbumScreen = () => {
	return (
		<>
			<SectionWrapper>
				<Albums/>
				<NavbarFooter/>
			</SectionWrapper>
		</>
	);
}

export default AlbumScreen;