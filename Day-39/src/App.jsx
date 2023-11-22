import pi, { add, subtract, divide } from "./components/math"
function App() {
  return (
    <ul className="flex items-center justify-around w-[100vw] h-[100vh] ">
      <li className="bg-red-500 w-[20%] h-[25%] flex items-center justify-center text-4xl font-bold">{add(1, 2)}</li>
      <li className="bg-blue-500 w-[20%] h-[25%] flex items-center justify-center text-4xl font-bold">{subtract(3, 4)}</li>
      <li className="bg-green-500 w-[20%] h-[25%] flex items-center justify-center text-4xl font-bold">{divide(4, 2)}</li>
      <li className="bg-black text-white w-[20%] h-[25%] flex items-center justify-center text-4xl font-bold">{pi *3}</li>
    </ul>
  )
}

export default App
