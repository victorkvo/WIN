import PicHere from './images/GroupPic2.png';
import '../CSS/About.css';

function About() {
    return (
      <div>
        <h1 className="aboutUs">About Us</h1>
        <p className="aboutUs squeeze">1988! Victor Vo (Vintage Vic), Phillip Revak (Phly Phill), Wiynter Rodriguez (Frosty), Kate Mejaski (KickBack Kate) and Julian Grant (JumpMan Ju) met in high school. They instantly realized three things that they all have in common, fashion, sports and sneakers. Throughout high school and the city of Charlotte they made a reputation for themselves and were dubbed, "The Get Fresh Crew". In 1996 they opened "Nice Kicks" . For over two decades they have provided Charlotte and surrounding areas with the flyest street fashion , and will continue to into the future.</p>
        <img src={PicHere} alt="Store Founders" height="526" width="610"/>
      </div>
    )
  }
  
  export default About