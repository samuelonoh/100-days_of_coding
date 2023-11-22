/* eslint-disable react/prop-types */

export default function Button(props) {


  return (
        <button type="submit" className=" text-blue-500 h-[50px] w-[50%] rounded-2xl bg-black">{props.isLoggedIn ? "Login" : "Register"}</button>

  )
}
