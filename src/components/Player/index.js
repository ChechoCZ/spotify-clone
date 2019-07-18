import React from 'react';
import Slider from 'rc-slider';

import { Container, Current, Volume, Progress, Controls } from './styles';

import VolumeIcon from '../../assets/images/volume.svg';
import ShuffleIcon from '../../assets/images/shuffle.svg';
import BackwardIcon from '../../assets/images/backward.svg';
import PlayIcon from '../../assets/images/play.svg';
import PauseIcon from '../../assets/images/pause.svg';
import ForwardIcon from '../../assets/images/forward.svg';
import RepeatIcon from '../../assets/images/repeat.svg';

import 'rc-slider/assets/index.css';

const Player = () => (
  <Container>
    <Current>
      <img src="data:image/jpeg;base64,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" alt="Cover"/>

      <div>
        <span>Song Name</span>
        <small>Artist</small>
      </div>
    </Current>

    <Progress>
      <Controls>
        <button><img src={ShuffleIcon} alt="Shuffle"/></button>
        <button><img src={BackwardIcon} alt="Backward"/></button>
        <button><img src={PlayIcon} alt="Play"/></button>
        {/* <button><img src={PauseIcon} alt="Pause"/></button> */}
        <button><img src={ForwardIcon} alt="Forward"/></button>
        <button><img src={RepeatIcon} alt="Repeat"/></button>
      </Controls>
    </Progress>

    <Volume>
      <img src={VolumeIcon} alt="Volume"/>
      <Slider
        railStyle={{ background: '#404040', borderRadius: 10 }}
        trackStyle={{ background: '#FFF' }}
        handleStyle={{ display: 'none' }}
        value={50} />
    </Volume>
  </Container>
);

export default Player;