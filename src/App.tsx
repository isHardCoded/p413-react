function App() {
  return <div className="flex flex-col m-4 gap-2">
    <div className="p-4 shadow-md hover:shadow-lg rounded-md transition-all hover:translate-y-1">
    <div className="flex items-center justify-between">
      <div className="relative flex items-center gap-4">
          <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="size-10 rounded-full" />
          <div className="text-sm">
            <p className="font-semibold text-gray-900">
              <a href="#">
                Lindsay Walton
              </a>
            </p>
            <p className="text-gray-600">Front-end Developer</p>
          </div>
        </div>
      <span className="text-xs text-green-900 bg-green-100 rounded-full px-2 py-1 font-semibold">Online</span>
    </div>
  </div>
  </div>
}

export default App