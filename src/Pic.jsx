import Myheart from './myheart.jpg'; 




function Pic(){
    return(

        <div className="Card">

            <img className="Pic" src={Myheart} alt="the main pic" />
            <h2>Davanagere</h2>
            <p>The Heart of Karnataka</p>
        </div>
    );
}
export default Pic;