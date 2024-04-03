
import "../styles/Errorcard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ErrorCard = (props) => {
  return(
    <>
    <div className="error__outer" style={{display:props.errorDisplay}}>
        <div className="error__inner">
        <FontAwesomeIcon icon={props.errorIcon} size="xl" color={props.errorColor} className='nav__icon' /> {props.errorText}
        </div>
    </div>
    </>
  );
};
 
export default ErrorCard;