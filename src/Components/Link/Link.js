import './Link.css';

function Link({href, text, children, func}){
    
    return (
        <a href={href}>
            {children(10)}
            {func(10)}
        </a>
    )
}
export default Link;