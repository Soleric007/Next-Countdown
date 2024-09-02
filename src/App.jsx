import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';
const CHALLENGES = [ 
  {
    id: 1,
    title: 'Substite Soul Reaper',
    targetTime: 1
  },
  {
    id: 2,
    title: 'Soul Reaper',
    targetTime: 5
  },
  {
    id: 1,
    title: 'Lieutenant',
    targetTime: 10
  },
  {
    id: 1,
    title: 'Captain',
    targetTime: 15
  },
]
function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        {
          CHALLENGES.map((challenge) => {
            return <TimerChallenge key={challenge.id} title={challenge.title} targetTime={challenge.targetTime}/>
          }
        )}
      </div>
    </>
  );
}

export default App;
