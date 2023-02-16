import { Link } from "react-router-dom"

function Header() {
    return (
        <header>
            <ul>
                <li><Link to={"/"} />Home</li>
                <li><Link to={"/about"} />About</li>
            </ul>
        </header>
    )
}
export default Header;