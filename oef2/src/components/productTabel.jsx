const products= [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
  ];


function ProductCategoryRow(props){
    const category = props.category;
    return(
        <table>
            <tbody>
        <tr>
            <th colSpan= "2"> {category} </th>
        </tr></tbody>
        </table>
    )
}
function ProductRow(props){
       const product = this.props.product
    const name = product.stocked ? product.name :
    <span style={{color: "red"}}>{product.name}</span>
    return(
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    )
}
// function ProductTable(props){
//     const rows = []
//     let lastCategory = null
// props.products.forEach((product)=>{
//     if(product.category !== lastCategory){
//         rows.push(
//             <ProductCategoryRow
//             category={product.category}
//             key={product.category}
//          />
//         )
//     }
//     rows.push(
//         <ProductRow
//         product = {product}
//         key={product.name} />
//     )
//     lastCategory = product.category
// })
// return(
//     <table>
//         <thead>
//             <tr>
//                 <th>Name</th>
//                 <th>Price</th>
//             </tr>
//         </thead>
//     </table>
// )
// }
export default  ProductRow