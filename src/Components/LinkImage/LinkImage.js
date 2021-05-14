


function Linkimage({href, src}){
    const styles = {
        width: '100px',
        verticalAlign: 'top'
    }
    
    return (
        <>
            <a href={href}>
                <img 
                    alt='Mario'
                    src={src} 
                    style={styles} 
                    onClick={()=>alert(src)}
                />
            </a>
        </>
    )
}

export default Linkimage;