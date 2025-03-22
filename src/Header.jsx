import logo from './logo.png';
export default function Content(){
    return(
        <header className="nav">
            <img className="image" src={logo} width="40px" alt="react logo"></img>
            <h2 className="title">ReactFacts</h2>
        </header>
    )
}