import { useState } from "react"
import rawgClient from "../api/rawg"
import Header from "./components/Header";
import GameList from "./components/GameList";
import AdvancedSearch from "./components/AdvancedSearch";

function App() {
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  function handleSearch(e) {
    e.preventDefault();
    if (!search) return;
    rawgClient.get("/games", { params: { search } })
      .then(res => setGames(res.data.results))
      .catch(err => console.error(err));
    setSearch('');
  }

  const advancedSearch = games.filter(game => {
    if (filter === '') return true;
    return game.genres.some(genre => genre.name == filter);
  }).filter(game => game.name.toLowerCase().includes(search.toLowerCase()));

  function handleFilter(e) {
    setFilter(e.target.value)
  }

  const genres = [
    "Action",
    "Indie",
    "Adventure",
    "RPG",
    "Strategy",
    "Shooter",
    "Casual",
    "Simulation",
    "Puzzle",
    "Arcade",
    "Platformer",
    "Massively Multiplayer",
    "Racing",
    "Sports",
    "Fighting",
    "Family",
    "Board Games",
    "Card",
    "Educational"
  ];

  return (
    <>
      <Header handleSearch={handleSearch} search={search} setSearch={setSearch} />
      <GameList games={games} advancedSearch={advancedSearch} />
      <AdvancedSearch genres={genres}filter={filter} setFilter={setFilter} handleFilter={handleFilter} />
    </>
  )
}

export default App
