/* eslint-disable react/prop-types */
import Info from "./Info";
import Profile from "./profile";

export default function Avatar(props) {
  return (
    <div className="absolute top-[70px]  flex flex-col items-center justify-center w-[90%]">
            <Profile
            img={props.img}
            />
            <Info
            info={props.name}
            style={props.styleName}
            />
            <Info
            info={props.user}
            />
            <Info
            info={props.about}
            />
        </div>
  )
}
