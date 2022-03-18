import './SocialCard.css';
import Location from './Location';
import Email from './Email';

const SocialCard=({userData})=>{
    return(
        <div className="card">
                <div className="card_image">
                    <img src={userData.picture.medium} />
                </div>
            <div className="card_title">
            {userData.name.first} {userData.name.last} | {userData.dob.age}
            <div className="card_body">
            <Email type={userData.email} ></Email>
            
            <Location location ={userData.location}></Location>
            
                
                
            </div>
            </div>
            
        </div>
    )
};

export default SocialCard;