import { useState, useEffect } from 'react';
import { PlayersList } from '../PlayersList.jsx';

export function PlayersIndex({ user }) {
  const [players, setPlayers] = useState([]);
  const [votedPlayerId, setVotedPlayerId] = useState(null);

  useEffect(() => {
    const fetchPlayers = async () => {
      const storedVotes = JSON.parse(localStorage.getItem('votes')) || {};
      const storedPlayers = JSON.parse(localStorage.getItem('players')) || [];

      if (storedPlayers.length > 0) {
        setPlayers(storedPlayers);
      } else {
        try {
          const response = await fetch('../../../data/data.json');
          const data = await response.json();
          const playersWithVotes = data.players.map((player) => ({
            ...player,
            vote: 0,
          }));
          setPlayers(playersWithVotes);
          localStorage.setItem('players', JSON.stringify(playersWithVotes));
        } catch (error) {
          console.error('Failed to fetch players:', error);
        }
      }

      if (storedVotes[user.id]) {
        setVotedPlayerId(storedVotes[user.id]);
      }
    };

    fetchPlayers();
  }, [user]);

  const handleVote = (playerId) => {
    let updatedPlayers;
    const storedVotes = JSON.parse(localStorage.getItem('votes')) || {};

    if (votedPlayerId === playerId) {
      updatedPlayers = players.map((player) =>
        player.id === playerId ? { ...player, vote: player.vote - 1 } : player
      );
      setVotedPlayerId(null);
      delete storedVotes[user.id];
    } else {
      updatedPlayers = players.map((player) => {
        if (player.id === playerId) return { ...player, vote: player.vote + 1 };
        if (player.id === votedPlayerId)
          return { ...player, vote: player.vote - 1 };
        return player;
      });
      setVotedPlayerId(playerId);
      storedVotes[user.id] = playerId;
    }

    setPlayers(updatedPlayers);
    localStorage.setItem('votes', JSON.stringify(storedVotes));
    localStorage.setItem('players', JSON.stringify(updatedPlayers));
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
