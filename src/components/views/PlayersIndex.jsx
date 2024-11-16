import { useState, useEffect } from 'react';
import { PlayersList } from '../PlayersList.jsx';
import PlayersData from '../../../data/data.json';

export function PlayersIndex() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    setPlayers(PlayersData.players);
  }, []);

  return (
    <section className="players">
      <PlayersList players={players} />
    </section>
  );
}
