export function Status({ status } : { status: string }) {
  const capitalized = status.charAt(0).toUpperCase() + status.slice(1) 

  if (status === "active") {
    return <span className="text-xs text-green-900 bg-green-100 rounded-full px-2 py-1 font-semibold">{capitalized}</span>
  }

  else if (status === "blocked") {
    return <span className="text-xs text-red-900 bg-red-100 rounded-full px-2 py-1 font-semibold">{capitalized}</span>
  }

  else if (status === "pending") {
    return <span className="text-xs text-yellow-900 bg-yellow-100 rounded-full px-2 py-1 font-semibold">{capitalized}</span>
  }

  else {
    return <span className="text-xs text-gray-900 bg-gray-100 rounded-full px-2 py-1 font-semibold">{capitalized}</span>
  }
 }