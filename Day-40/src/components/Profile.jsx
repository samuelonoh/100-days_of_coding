/* eslint-disable react/prop-types */
export default function Profile(props) {
  return (
    <div>
        <img className="w-[150px] h-[150px] border-4 border-white rounded-full" src={props.img} alt="" />
    </div>
  )
}
