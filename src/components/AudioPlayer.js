import useAudio from "../hooks/useAudio";
import {Slider} from "antd";
import 'antd/dist/antd.css';
import { Text, HStack,VStack,Center,Box } from "@chakra-ui/react";
import "./AudioPlayer.css";
import { SoundOutlined, StepBackwardOutlined, StepForwardOutlined, PlayCircleFilled, PauseCircleFilled} from "@ant-design/icons";


const Player = ({ content }) => {
  const [
    playing,
    duration,
    toggle,
    toNextTrack,
    toPrevTrack,
    trackProgress,
    onSearch,
    onSearchEnd,
    onVolume,
    trackIndex
  ] = useAudio(content);

  
  const minSec = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnMin = minutes < 10 ? `0${minutes}` : minutes;
    const seconds = Math.floor(secs % 60);
    const returnSec = seconds < 10 ? `0${seconds}` : seconds;

    return `${returnMin}:${returnSec}`;
  };

  return (
    <>
    <HStack>
      <Text className="songTitle">{content[trackIndex].title}</Text>
      <Box flex='1'>
      <Center className="hepButton">
        <VStack>
        <HStack>
        <StepBackwardOutlined className="forback" onClick={toPrevTrack} />
          {playing ? 
              <PauseCircleFilled className="pauseplay" onClick={toggle} /> :
              <PlayCircleFilled className="pauseplay" onClick={toggle} />
          }
        <StepForwardOutlined className="forback" onClick={toNextTrack} />
        </HStack>
          <HStack>
            <Text>{minSec(trackProgress)}</Text>
            <Slider
              value={trackProgress}
              step={1}
              min={0}
              max={duration ? duration : 0}
              className="progress" 
              tooltipVisible={false}
              onChange={(value) => onSearch(value)}
              onAfterChange={onSearchEnd}
            />
            <Text>{duration ? minSec(Math.round(duration)) : "00:00"}</Text>
          </HStack>
        </VStack>
      </Center>
      </Box>
      <HStack width={"100px"}>
        <Center>
      <SoundOutlined />
          <Slider 
            className="volume" 
            defaultValue={100} 
            tooltipVisible={false}
            onChange={(value) => onVolume(value/100)}
          />
          </Center>
      </HStack>
    </HStack>
    </>
  );
};

export default Player;
