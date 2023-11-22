/* eslint-disable react/prop-types */
export default function Info(props) {
  return (
    <div >
        <p className={props.style}>{props.info}</p>
    </div>
  )
}
