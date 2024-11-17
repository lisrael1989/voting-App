import { useState, useEffect } from 'react';
import { PlayersList } from '../PlayersList.jsx';
import PlayersData from '../../../data/data.json';

export function PlayersIndex() {
  const [players, setPlayers] = useState([]);
  const [votedPlayerId, setVotedPlayerId] = useState(null);

  useEffect(() => {
    const playersWithVotes = PlayersData.players.map((player) => ({
      ...player,
      vote: 0,
    }));
    setPlayers(playersWithVotes);
  }, []);

  const handleVote = (playerId) => {
    if (votedPlayerId === playerId) {
      setVotedPlayerId(null);
      const updatedPlayers = players.map((player) =>
        player.id === playerId ? { ...player, vote: player.vote - 1 } : player
      );
      setPlayers(updatedPlayers);
    } else {
      if (votedPlayerId === null) {
        const updatedPlayers = players.map((player) =>
          player.id === playerId ? { ...player, vote: player.vote + 1 } : player
        );
        setPlayers(updatedPlayers);
      }
      setVotedPlayerId(playerId);
    }
  };

  return (
    <section className="players">
      <PlayersList
        players={players}
        votedPlayerId={votedPlayerId}
        onVote={handleVote}
      />
    </section>
  );
}
