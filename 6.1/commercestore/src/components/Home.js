import Pic1 from './images/Logo3.jpg';
import '../CSS/Home.css';

function Home() {
    return (
      <div className="animate__animated animate__flipInX">
        <h1 className="aboutUs">Welcome To Nice Kicks</h1>
        <p className="aboutUs">Established in '96</p>
        <img src={Pic1} alt="Logo" width="60%" height="60%"/>
      </div>
    )
  }
  
  export default Home