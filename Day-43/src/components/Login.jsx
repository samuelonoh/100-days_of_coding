/* eslint-disable react/prop-types */
import Button from "./button";
import Input from "./input";


export default function Login(props) {
  return (
        <form className="flex flex-col items-center justify-center gap-7 w-full">
    <Input
    type="text"
    placeholder="Your Name"
    />
    <Input
    type="password"
    placeholder="Password"
    />
    {!props.isLoggedIn && <Input
    type="password"
    placeholder="Comfirm Password"
    />}
    
    <Button
    isLoggedIn= {props.isLoggedIn}
    />
  </form>

  )
}
