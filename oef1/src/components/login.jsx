//werkt niet!!!
function UserGreet() {
    return (
        <>
            <h1>your username </h1>
        </>
    )
}
function GuestGreet() {
    return (<div>
        <form >
            <input type="text" placeholder="username" />
        </form>
    </div>)
}
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreet />
    }
    return <GuestGreet />
}
function LoginButton(props) {
    return <button onClick={<LogoutButton/>} >Login</button>
}
function LogoutButton(props) {
    return <button onClick={<LoginButton/>}>Logout</button>
}
function LoginControl(props) {
 
    const isLoggedIn = props.isLoggedIn;
    let button;
//   function HandleLogout () {
//       this.HandleLogout = this.HandleLogout(this)
//         props.setState({ isLoggedIn: true })
//     }
// function HandleLogin () {
//     this.HandleLogin = this.HandleLogin(this)
//        this.setState({ isLoggedIn: false })
//     }
    if (isLoggedIn)
     {button = <LogoutButton onClick={<LoginButton/>} />

    } else {
                button = <LoginButton onClick={<LogoutButton/>} />
    }
    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {button}
        </div>
    )
}








export default LoginControl
