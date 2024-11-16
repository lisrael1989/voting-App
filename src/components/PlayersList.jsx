import { PlayerPreview } from './PlayerPreview.jsx';

export function PlayersList({ players }) {
  if (!players) return <div>No players on the list ...</div>;

  return (
    <ul className="player-list">
      {players.map((player) => (
        <li key={player.id}>
          <PlayerPreview player={player} />
        </li>
      ))}
    </ul>
  );
}
