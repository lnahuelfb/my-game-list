import Game from "@/interfaces/game"
import Image from "next/image"
import { fetchGames } from "@/helpers/fetching"

interface Params {
  params: {
    game: string
  }
}

interface Games {
  game: string
}


export default async function Game({ params }: Params) {
  const { game }: Games = params

  const data: Game = await fetchGames(game)

  return (
    <div>
      {
        data?.external
      }
      <Image
        src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${data?.steamAppID}/header.jpg`}
        width={460}
        height={215}
        alt={data?.external}
      />
    </div>
  )
}