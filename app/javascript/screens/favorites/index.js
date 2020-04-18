import React from 'react';
import SectionWrapper from '../../components/common/SectionWrapper';
import { Heading } from 'react-bulma-components';
import Favorites from '../../components/Favorites';
import NavbarFooter from '../../components/common/NavbarFooter';

const FavoritesScreen = () => {
	return (
		<>
			<SectionWrapper>
      	<Heading className='has-text-centered has-text-white'>Favoritos</Heading>
       	<Favorites/>
     	</SectionWrapper>
			<NavbarFooter />
		</>
	);
}

export default FavoritesScreen;