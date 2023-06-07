export const fetchGames = async (game: String) => {
  const res = await fetch(`https://www.cheapshark.com/api/1.0/games?title=${game}`)

  if (!res.ok) {
    throw new Error(`Error HTTP: ${res.status}`)
  }

  const data = await res.json()

  console.log(data[0])

  return data[0]
}