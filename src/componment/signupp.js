import { Link } from "react-router-dom";

function SignUp(){
    return(
        <>
        <div className="from-container">
            <h1>SignUp</h1>
            <form>
              <input placeholder="Name"/> 
              <input placeholder="Email"/> 
              <input type="password" placeholder="Password"/> 
              <input type="password" placeholder="Confirm Password"/> 
              <input type="date" placeholder="DOB"/>
              <Link to="/"><button>SignUp</button></Link>
            </form>
        </div>
        </>
    );
}
export default SignUp