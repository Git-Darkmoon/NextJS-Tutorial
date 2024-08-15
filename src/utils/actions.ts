"use server"

import { readFile, writeFile } from "fs/promises"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

type User = {
  id: string
  firstName: string
  lastName: string
}

export const createUserAction = async (prevState: any, formData: FormData) => {
  // const firstName = formData.get("firstName") as string
  // const lastName = formData.get("lastName") as string
  // console.log({ firstName, lastName })

  const rawData = Object.fromEntries(formData)

  const newUser: User = {
    id: Date.now().toString(),
    firstName: rawData.firstName as string,
    lastName: rawData.lastName as string,
  }
  try {
    await saveUser(newUser)

    // This purges the cached data.
    revalidatePath("/actions")

    // some logic
    return "User created successfully..."
  } catch (error) {
    console.log(error)
    return "Failed to create user..."
  }
  // redirect("/") // Redirect cannot be inside the try/catch block
}

export const fetchUsers = async (): Promise<User[]> => {
  const result = await readFile("users.json", { encoding: "utf-8" })
  const users = result ? JSON.parse(result) : []
  return users
}

export const saveUser = async (user: User): Promise<void> => {
  const users = await fetchUsers()

  users.push(user)
  await writeFile("users.json", JSON.stringify(users))
}

export const deleteUserAction = async (formData: FormData) => {
  const id = formData.get("id") as string
  const users = await fetchUsers()
  const filteredUsers = users.filter((user) => user.id !== id)
  await writeFile("users.json", JSON.stringify(filteredUsers))
  revalidatePath("/actions")
}

export const removeUserAction = async (id: string, formData: FormData) => {
  const name = formData.get("name") as string
  console.log(name)

  const users = await fetchUsers()
  const filteredUsers = users.filter((user) => user.id !== id)
  await writeFile("users.json", JSON.stringify(filteredUsers))
  revalidatePath("/actions")
}
