import { useState } from "react"
import rawgClient from "../api/rawg"
import Header from "./components/Header";
import GameList from "./components/GameList";

function App() {
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState('');

  function handleSearch(e) {
    e.preventDefault();
    if (!search) return;
    rawgClient.get("/games", { params: { search } })
      .then(res => setGames(res.data.results))
      .catch(err => console.error(err));
    setSearch('');
  }

  return (
    <>
      <Header handleSearch={handleSearch} search={search} setSearch={setSearch} />
      <GameList games={games} />
    </>
  )
}

export default App
