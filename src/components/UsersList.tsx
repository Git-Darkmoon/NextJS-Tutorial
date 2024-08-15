import { fetchUsers } from "@/utils/actions"
import DeleteButton from "./DeleteButton"

async function UsersList() {
  const users = await fetchUsers()

  return (
    <div className="mt-4">
      {users.length ? (
        <div>
          {users.map((user) => (
            <h4
              className="capitalize text-lg flex justify-between items-center mb-2"
              key={user.id}
            >
              {user.firstName} {user.lastName}
              <DeleteButton id={user.id} />
            </h4>
          ))}
        </div>
      ) : (
        <p>No users found...</p>
      )}
    </div>
  )
}
export default UsersList
