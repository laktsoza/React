

function CustomBtn({text, submit, func}){
    return (
        <>
            <p>{text}</p>
            <button onClick={func}>{submit}</button>
        </>
    )
}

export default CustomBtn;