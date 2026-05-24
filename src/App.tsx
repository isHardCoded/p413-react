import { useEffect, useState } from "react"
import { type User } from "./types/user"
import { ClipLoader } from "react-spinners"
import { Status } from "./components/ui/status/Status"

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function getUsers() {
      try {
        setLoading(true)
        const response = await fetch("https://67096832af1a3998baa16c52.mockapi.io/users")
        const data = await response.json()
        setUsers(data)
      } catch (e) {
        setError(e as any)
      } finally {
        setLoading(false)
      }
    }
    getUsers()
  }, [])

  if (error) {
    return <div>Error: {error}</div>
  }
  
  return <div className="flex flex-col m-4 gap-2">
    <div className="flex items-center justify-center">
      <ClipLoader loading={loading} />
      
      {!loading && users.length === 0 && (
        <div className="text-center text-sm text-gray-500 mt-4">Not found users</div>
      )}
    </div>
    {users.map((user) => (
      <div className="p-4 shadow-md hover:shadow-lg rounded-md transition-all hover:translate-y-1">
      <div className="flex items-center justify-between">
        <div className="relative flex items-center gap-4">
            <img src={user.avatarUrl} alt="" className="size-10 rounded-full" />
            <div className="text-sm">
              <p className="font-semibold text-gray-900">
                <a href="#">
                  {user.firstName} {user.lastName}
                </a>
              </p>
              <p className="text-gray-600">{user.pos}</p>
            </div>
          </div>
          <Status status={user.status} />
      </div>
      </div>
    ))}
  </div>
}

export default App