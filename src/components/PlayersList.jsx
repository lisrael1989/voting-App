import { PlayerPreview } from './PlayerPreview.jsx';

export function PlayersList({ players, onVote, votedPlayerId }) {
  if (!players) return <div>No players on the list ...</div>;

  return (
    <ul className="player-list">
      {players.map((player) => (
        <li key={player.id}>
          <PlayerPreview
            player={player}
            isVotedFor={votedPlayerId === player.id}
            isVotingDisabled={
              votedPlayerId !== null && votedPlayerId !== player.id
            }
            onVote={onVote}
          />
        </li>
      ))}
    </ul>
  );
}
