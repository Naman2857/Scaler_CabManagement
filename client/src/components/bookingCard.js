import '../styles/bookingCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';


const BookingCard = (props) => {
  return (
    <div className="booking__cab__card">
        <div className="booking__cab__card__img">
            <img src={require('../assets/images/'+props.ele.cab_image)} style={{width:"100%",height:"100%"}}  alt="car"/>
        </div>
        <div className="booking__cab__card__content">
            <div className="booking__cab__card__content__top">
                <div className="booking__cab__card__content__left">
                    <div className="booking__cab__card__content__left__heading">
                        {props.ele.cab_name}
                    </div>
                    <div className="booking__cab__card__content__left__heading__small">
                        {
                            props.totalTime?(
                                <>
                                {props.totalTime} min
                                </>
                                
                            ):(
                                <>
                                -
                                </>
                            )
                        }
                        
                    </div>
                </div>
                <div className="booking__cab__card__content__right">
                    <div className="booking__cab__card__content__left__heading">
                        {props.totalTime*props.ele.cab_price}/-
                    </div>
                    <div className="booking__cab__card__content__left__heading__small">
                        {props.ele.cab_price}/min
                    </div>
                </div>
            </div>
            <div className="booking__cab__card__content__bottom" onClick={()=>{props.cabBookClicked(props.ele,props.totalTime*props.ele.cab_price,props.totalTime)}}>
                Book{'\u00A0'} <FontAwesomeIcon icon={faArrowRight} size="sm" className='nav__icon' />
            </div>
        </div>
    </div>
  );
}

export default BookingCard;