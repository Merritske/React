//als je maaar 1 prop hebt {props.children}

function Split(props){
    return(
        <div className="span">
            <div className="spanLeft">
                Name
                <br />
                {props.left}
            </div>
            <div className="spanRight">
                Uitspraken <br />
                {props.right}
            </div>
        </div>
    )
}
function SpitPane(){
    return(
        <div>
        <Split 
        left={data} 
        right={uitspraken}/>
        </div>
    )
}
const data = ["Merritske"," ", "An", ""]
  const uitspraken = ["Life is like an ognion, it makes you cry sometimes."," ", "Life is like a patatoe, it's not perfect."," ", "Life is like ..."]
export default SpitPane
