
export default function(props){
    return(
        <button onClick={props.onclick} className={props.classname }>{props.text}</button>
    )
} 