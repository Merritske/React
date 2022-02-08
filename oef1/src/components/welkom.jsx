function Welcome(props){
    return (<h1>Welkom here  
        { props.name} 
   
        </h1>)
}

function Names(){
    return(
        <div>
            Hello Hello
            <Welcome name="Sara" />
            <Welcome name=" Sara" />
            <Welcome name=" Jos" />
        </div>
    )
}

export default Names;
