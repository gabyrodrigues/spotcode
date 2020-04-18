import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Button, Columns } from 'react-bulma-components';
import Music from './Music';

const PlaySequenceButton = styled(Button)`
	margin-bottom: 30px;
`

const Musics = (props) => {
	const [songs, setSongs] = useState([]);
	const [playing, setPlaying] = useState([]);
	const [playRandom, setPlayRandom] = useState(false);
	const AudioRef = useRef(); //permite o controle da música

	const NextSong = () => { //chama a próxima música aleatória
		if (playRandom) { //se playRandom estiver true ele procura e seta a proxima musica aleatoria a ser tocada
			let index = Math.floor(Math.random() * props.songs.length);
			setPlaying(props.songs[index]);
		} else
			setPlaying([]);
	}

	const SwitchRandom = () => {
		if (playRandom) {
			setPlayRandom(false);
			setPlaying([]);
		} else {
			setPlayRandom(true);
		}
	}


	useEffect(() => {
		if (playRandom)
			NextSong();
	}, [playRandom]);

	useEffect(() => { //atualiza sempre que a música mudar
		if (AudioRef.current !== null) { //se o audio já foi montado na tela
			AudioRef.current.pause(); //pausa a musica
			AudioRef.current.load(); //carrega a musica (verifica se a url mudou e recarrega)
			if (playing.id) {
				AudioRef.current.play();
			}
		}
	}, [playing]);

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
						outlined
						onClick={() => SwitchRandom()}
					>
						{playRandom == true ? 'Parar de tocar' : 'Tocar aleatoriamente'}
					</PlaySequenceButton>
					<audio controls ref={AudioRef} onEnded={() => NextSong()} className='is-hidden'>
						<source src={playing.file_url} />
					</audio>
				</Columns.Column>
			</Columns>
			{songs}
		</>
	);
}
export default Musics;