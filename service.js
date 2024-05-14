import TrackPlayer from 'react-native-track-player';
// module.exports =async function (){
//     TrackPlayer.addEventListener('remote-play',()=>TrackPlayer.play());
//     TrackPlayer.addEventListener('remote-pause',()=>TrackPlayer.pause());
   

// }
import { useEffect } from 'react'; // Import useEffect hook

const useTrackPlayerService = () => {
  useEffect(() => {
    TrackPlayer.addEventListener('remote-play', () => TrackPlayer.play());
    TrackPlayer.addEventListener('remote-pause', () => TrackPlayer.pause());

    return () => {
      TrackPlayer.removeEventListener('remote-play', () => TrackPlayer.play());
      TrackPlayer.removeEventListener('remote-pause', () => TrackPlayer.pause());
    };
  }, []); // Empty dependency array to run effect only once

  // Return any cleanup function or additional logic if needed
};
export default useTrackPlayerService;