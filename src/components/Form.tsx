"use client"

import { createUserAction } from "@/utils/actions"
import { useFormState, useFormStatus } from "react-dom"

const SubmitButton = () => {
  const { pending } = useFormStatus()

  return (
    <button className={btnStyle} type="submit" disabled={pending}>
      {pending ? "submitting..." : "submit"}
    </button>
  )
}

function Form() {
  const [message, formAction] = useFormState(createUserAction, null)
  return (
    <form action={formAction} className={formStyle}>
      {message && <p>{message}</p>}
      <h2 className="text-2xl capitalize mb-4">Create User</h2>
      <input
        className={inputStyle}
        type="text"
        name="firstName"
        defaultValue={"peter"}
        required
      />
      <input
        className={inputStyle}
        type="text"
        name="lastName"
        defaultValue={"smith"}
        required
      />

      <SubmitButton />
    </form>
  )
}

export default Form

const formStyle = "max-w-lg flex flex-col gap-y-4  shadow rounded p-8"
const inputStyle = "border shadow rounded py-2 px-3 text-gray-700"
const btnStyle =
  "bg-blue-500 hover:bg-blue-700 disabled:bg-blue-200 text-white font-bold py-2 px-4 rounded capitalize"
