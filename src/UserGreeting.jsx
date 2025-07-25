
import PropTypes from "prop-types";
export default function UserGreeting(props) {
  
    

        // if (props.isLoggedIn) {
        //     return <h2>
        //         welcome {props.username}
        //     </h2>
            
        // }
        // else{
        //     <h2>
        //         Please loin to continue
        //     </h2>
        // }

        const welcome =<h2 className="welcome">Welcome {props.username}</h2>
        const back =<h2 className="back">Please login to continue</h2>
        return(
            // props.isLoggedIn ? <h2 className="welcome">Welcome {props.username}</h2>:
            // <h2 className="back">Please login to continue</h2>
                    props.isLoggedIn? welcome:back

        );

      
    
  
}
UserGreeting.propType={
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
};
// UserGreeting.defaultProps = {
//     isLoggedIn: false,
//     username: "Guest"
// };
