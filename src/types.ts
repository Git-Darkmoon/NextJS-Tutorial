export type APIResponse = {
  readonly info: Info
  readonly results: Result[]
}

export type Info = {
  readonly count: number
  readonly pages: number
  readonly next: string
  readonly prev: null
}

export type Result = {
  readonly id: number
  readonly name: string
  readonly status: Status
  readonly species: Species
  readonly type: string
  readonly gender: Gender
  readonly origin: Location
  readonly location: Location
  readonly image: string
  readonly episode: string[]
  readonly url: string
  readonly created: Date
}

export type Gender = "Male" | "Female" | "unknown"

export type Location = {
  readonly name: string
  readonly url: string
}

export type Species = "Human" | "Humanoid" | "unknown" | "Alien"

export type Status = "Alive" | "unknown" | "Dead"
