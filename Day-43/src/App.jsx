
import Login from "./components/Login";



export default function App() {

  let userIsRegistered = false;


  return (
    <div className="bg-[#1ac0c6] h-[100vh] w-[100vw] flex flex-col items-center justify-center gap-10">
      <div className="w-[50%] h-[50%] flex items-center justify-center">
      <Login
      isLoggedIn = {userIsRegistered}
      />
      </div>
    </div>
  )
}