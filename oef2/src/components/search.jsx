function Search(){
    return(
        <form>
            <label>
                Search input
            </label>
            <input type="text" placeholder="search"/>
            <p>
                <input type="checkbox" />
                {" "}
                Only show products in stock
            </p>
        </form>
    )
}
export default Search