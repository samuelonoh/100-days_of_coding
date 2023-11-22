import Card from "./components/Card"
import Info from "./components/Info"
import Profile from "./components/profile"
import details from "./details.js"

function App() {

function card(detail) {
  return <Card
  img = {detail.img}
  name = {detail.Name}
  user = {detail.Username}
  about = {detail.About}
  />
}

  return (
    <div className="flex flex-col items-center justify-center w-[100vw] h-[100vh] bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className="flex flex-col items-center justify-center text-white">
      <Profile
      img="https://shorturl.at/BDGPT"
      />
      <Info
      info="@SammyOnoh"
      />
      </div>
      <div className="w-[90%] h-[50%] flex items-center justify-evenly ">

        {details.map(card)}
        {/* <Card
        img="https://shorturl.at/hrKSW"
        name="John Wick"
        styleName="text-2xl font-semibold"
        user="@John"
        about="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        />

<Card
        img="https://t.ly/LY9b4"
        name="david J. Malan"
        styleName="text-2xl font-semibold"
        user="@David"
        about="eiusmod tempor incididunt rem ipsum dolor sit amet, csectetur adipiscing elit, sed do."
        />

<Card
        img="https://rb.gy/nax2ia"
        name="Cristiano"
        styleName="text-2xl font-semibold"
        user="@Ronaldo"
        about="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        /> */}
      </div>
    </div>
  )
}

export default App
