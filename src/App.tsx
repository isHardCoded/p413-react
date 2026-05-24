import { useEffect, useState } from "react"

type User = {
  id: string
  firstName: string
  lastName: string
  pos: string
  status: string
  avatarUrl: string
}

function App() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    async function getUsers() {
      const response = await fetch("https://67096832af1a3998baa16c52.mockapi.io/users")
      const data = await response.json()
      setUsers(data)
    }
    getUsers()
  }, [])

  if (users.length === 0) {
    return <div className="text-center text-sm text-gray-500 mt-4">Not found users</div>
  }
  
  return <div className="flex flex-col m-4 gap-2">
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
        <span className="text-xs text-green-900 bg-green-100 rounded-full px-2 py-1 font-semibold">{user.status}</span>
      </div>
      </div>
    ))}
  </div>
}

export default App