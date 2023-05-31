import Game from "@/interfaces/game"
import Image from "next/image"


const fetchGames = async (game: String) => {
  const res = await fetch(`https://www.cheapshark.com/api/1.0/games?title=${game}`)
  const data = await res.json()

  console.log(data[0])

  return data[0]
}

interface Params {
  params: {
    game: string
  }
}

export default async function Game({ params }: Params) {
  const game: string = params.game

  const games: Game = await fetchGames(game)

  return (
    <div>
      {
        games?.external
      }
      <Image src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${games?.steamAppID}/header.jpg`} width={460} height={215} alt={games?.external} />
    </div>
  )
}