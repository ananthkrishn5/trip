import "./contactform.css"

function Contactform(){
    return(
        <div className="from-container">
            <h1>Send a message to us!</h1>
            <form>
              <input placeholder="Name"/> 
              <input placeholder="Subject"/> 
              <input placeholder="Email"/> 
              <textarea placeholder="Message" rows="4"/>  
              <button>Send Message</button>
            </form>
        </div>
    );
}
export default Contactform