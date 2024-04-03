import '../styles/cabs_style.css';
import taxi2 from '../assets/images/taxi2.jpeg';
import AllUserCard from './Allusercard.js';
import { Ring } from '@uiball/loaders'

const Cabs = (props) => {


  return (
    <>
    <div className="cabs__outer" id="Cabs">
        <div className="cabs__inner">
            <div className="cabs__inner__right">
                <div className="cabs__inner__left__heading">
                        All Cabs
                </div>
                <div style={{border:"none"}} className="cabs__inner__left__display__each">
                    <div className="cabs__inner__left__display__each__sno">
                        SNo.
                    </div>
                    <div className="cabs__inner__left__display__each__sno">
                        Cab Name
                    </div>
                    <div className="cabs__inner__left__display__each__sno">
                        Email
                    </div>
                </div>
                <div className="cabs__inner__left__display">
                    {
                        props.allCabsLoading?(
                            <Ring 
                            size={40}
                            lineWeight={5}
                            speed={2} 
                            color="black" 
                            />
                        ):(
                            props.allCabs.map((ele)=>{
                                return(
                                    <>
                                    <AllUserCard flag={props.flag} ele={ele}/>
                                    </>
                                )
                            })
                        )
                        
                    }

                </div>
            </div>
            <div className="cabs__inner__left">
                <img src={taxi2} style={{width:"100%",height:"100%"}} alt="backgroundImg"/>
            </div>
        </div>
    </div>
    </>
  );
}

export default Cabs;