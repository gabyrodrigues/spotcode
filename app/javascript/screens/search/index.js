import React from 'react';
import SectionWrapper from '../../components/common/SectionWrapper';
import { Heading } from 'react-bulma-components';
import Search from '../../components/Search';
import NavbarFooter from '../../components/common/NavbarFooter';

const SearchScreen = () => {
	return (
		<>
			<SectionWrapper>
				<Heading className='has-text-centered has-text-white'>Buscar</Heading>
				<Search />
			</SectionWrapper>
			<NavbarFooter />
		</>
	);
}

export default SearchScreen;