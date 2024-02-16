
function Ico_search(props){
    return(
<svg xmlns="http://www.w3.org/2000/svg" role="button" id={props.id} width={props.width} height={props.height} viewBox="0 0 24 24" fill='transparent' stroke={props.fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" onClick={()=>{props.event()}} >
<circle cx="10.5" cy="10.5" r="7.5"></circle>
<line x1="21" y1="21" x2="15.8" y2="15.8"></line>
</svg>
    )
}



export default Ico_search
