function FormatName (){
 
        return user.firstName + " "+ user.lastName
  
}
const user = {
    firstName: "John",
    lastName: "Piep"
}
const elem = (
    <h1>
        Hello, {FormatName(user)}
    </h1>
)
export default FormatName