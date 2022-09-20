export default function(props){
    return(
        <div className="form-floating">
            <input onChange={(e)=>{props.onTyped(e.target.value)}} type={props.type} className="form-control" id={props.id} name={props.name} placeholder={props.placeholder}/>
            <label htmlFor={props.id}>{props.text}</label>
        </div>
    )
}