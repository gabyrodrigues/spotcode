import React, { useEffect, useState } from 'react';
import { Columns } from 'react-bulma-components';
import SearchBar from './SearchBar';
import Categories from '../common/Categories'
import ResultsTabs from '../common/ResultsTabs';

import SearchService from '../../services/search';
import CategoriesService from '../../services/categories';

const Search = () => {
	const [albums, setAlbums] = useState([]);
	const [artists, setArtists] = useState([]);
	const [songs, setSongs] = useState([]);

	async function fetchCategorySearch(id) { //busca por categoria
		const response = await CategoriesService.show(id);
		setAlbums(response.data['albums']);
		setArtists(response.data['artists']);
		setSongs(response.data['songs']);
	}

	async function fetchSearch(query) { //busca pelo campo de texto
		const response = await SearchService.index(query);
		setAlbums(response.data['albums']);
		setArtists(response.data['artists']);
		setSongs(response.data['songs']);
	}

	return (
		<>
			<Columns>
				<Columns.Column desktop={{ size: 6, offset: 3 }} mobile={{ size: 12 }}>
					<SearchBar fetchSearch={fetchSearch} />
				</Columns.Column>
			</Columns>

			<ResultsTabs albums={albums} artists={artists} songs={songs}/>

			<Categories fetchCategorySearch={fetchCategorySearch} />
		</>
	);
}
export default Search;