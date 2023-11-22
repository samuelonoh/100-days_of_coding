/* eslint-disable react/prop-types */
import Avatar from "./avatar";

export default function Card(props) {
  return (
    <div className="relative w-[30%] h-[80%] flex flex-col items-center justify-center">
        <div className="bg-black h-[40%] w-[100%] rounded-t-3xl">

        </div>
        <Avatar
        img={props.img}
        name={props.name}
        styleName={props.styleName}
        user={props.user}
        about={props.about}
        />
        <div className="bg-white w-full h-[60%] rounded-b-3xl flex flex-col items-center justify-center">
            
        </div>
    </div>
  )
}
