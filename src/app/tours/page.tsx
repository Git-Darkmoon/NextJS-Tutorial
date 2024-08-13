import { APIResponse } from "@/types"

type Tour = {
  id: string
  name: string
  info: string
  image: string
  price: string
}
const url = "https://rickandmortyapi.com/api/character"

const fetchCharacters = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000))

  const response = await fetch(url)
  const data: APIResponse = await response.json()

  console.log(data)

  return data
}

async function ToursPage() {
  const data = await fetchCharacters()

  return (
    <section>
      <h1 className="text-3xl mb-4">Tours</h1>
      {data.results.map((character) => {
        return <h2 key={character.id}>{character.name}</h2>
      })}
    </section>
  )
}
export default ToursPage
