import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button, Columns } from 'react-bulma-components';
import Music from './Music';

const PlaySequenceButton = styled(Button)`
	margin-bottom: 30px;
`

const Musics = (props) => {
	const [songs, setSongs] = useState([]);
	const [playing, setPlaying] = useState([]);
	 
	useEffect(() => {
		setSongs(props.songs.map((song, key) =>
			<Music
				song={song}
				playing={playing.id == song.id}
				setPlaying={setPlaying}
				key={key}
			/>
	 ));
 	}, [props.songs, playing]);

	return (
		<>
			<Columns className='is-mobile is-centered'>
				<Columns.Column desktop={{ size: 2 }} mobile={{ size: 12 }} className='has-text-centered'>
					<PlaySequenceButton
						className='is-medium'
						color='primary'
						outlined>
						Tocar aleatoriamente
					</PlaySequenceButton>
				</Columns.Column>
			</Columns>
			{songs}
		</>
	);
}
export default Musics;