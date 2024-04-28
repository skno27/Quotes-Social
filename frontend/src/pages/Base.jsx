import { useNavigate } from "react-router-dom"
import '../styles/Base.css'

function SeeUsers() {
    const navigate = useNavigate()
    navigate('/users')
}
function GoToLogin() {
    const navigate = useNavigate()
    useNavigate('/login')
}

function GoToRegister() {
    const navigate = useNavigate()
    useNavigate('/register')
}

function Base() {

    return (
        <div className="base-container">
            <div id="base-intro">

                <h1>Welcome to the Quote Machine!</h1>
                <h2>Here you can view uploaded Quotes on everyone's profiles.</h2>
                <h2>You can also create a profile of your own then upload and favorite profiles of your own</h2>
                <p>Thanks for Visiting!</p>
                <p>-Deshon</p>

            </div>

            <div className='base-routing'>
                {/* <button onClick={SeeUsers}>Profiles</button>
                <button></button>
                <button></button> */}
                <nav className="navbar">
                    <a href="/users/" className="navigation">Profiles</a>
                    <a href="/login/" className="navigation">Login</a>
                    <a href="/register/" className="navigation">Register</a>
                </nav>
            </div>

        </div>
    )

}

export default Base