//KAn zo geschreven worden

// const numbers =[1,2,3,4,5];
// const lisItem = numbers.map((number)=> 
// <li>{number}</li>
// )
// function List(){
//     return(
//         <ul>{lisItem}</ul>
//     )
// }

//Kan ook zo geschreven worden
// function List(props){
//     const numbers = props.numbers;
//     const listItem = numbers.map((number) =>
//     <li key={number.toString()}>{number}</li>
//     )
//     return(
//         <ul>{listItem}</ul>
//     )
// }
//beter om key in een array te plaatsen in dit geval in listItem

function ListItem(props) {
    return <li>{props.value}</li>
}
// function List(props){
//     const numbers = props.numbers;
//     const listItem = numbers.map((number)=>
//     <ListItem 
            //key={number.toString()} 
            //value={number}/>)
//     return(
//         <ul>
//             {listItem}
//         </ul>
//     )
// }
//Je kan ook embed an expression gebruiken
// = hetzelfde resultaat als hierboven
function List(props) {
    const numbers = props.numbers;
    return (
        <ul>
            {numbers.map((number) =>
                <ListItem
                    key={number.toString()}
                    value={number}
                />)}
        </ul>
    )
}
//hou de leesbaarheid van de code in de gaten 
//om te beslissen welke manier je gebruikt
export default List