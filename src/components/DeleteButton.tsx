import { deleteUserAction, removeUserAction } from "@/utils/actions"

function DeleteButton({ id }: { id: string }) {
  const removeUserWithId = removeUserAction.bind(null, id)
  return (
    <form action={removeUserWithId}>
      {/* <input type="hidden" name="id" value={id} className="" /> */}
      <input type="hidden" name="name" value="shakeAndBake" className="" />
      <button
        type="submit"
        className="bg-red-500 text-white text-xs rounded p-2"
      >
        delete
      </button>
    </form>
  )
}
export default DeleteButton
