/* eslint-disable react/prop-types */
export default function Input(props) {
  return (
    <input type={props.type} placeholder={props.placeholder} className="input:text-ml-3 border-2 border-slate-200 h-[50px] w-[50%] rounded-2xl text-center"/>
  )
}
