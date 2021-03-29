import React, {Component} from 'react';
import '../CSS/Board.css';
import Item from './Item';
import Pic1 from './images/bredToe.jpg'
import Pic2 from './images/bredToe2.jpg'
import Pic3 from './images/bredToe3.jpg'
import Pic4 from './images/JordanRetro.png'
import Pic5 from './images/JordanRetro2.jpg'
import Pic6 from './images/JordanRetro3.jpg'
import Pic7 from './images/hornetsHat.jpg'
import Pic8 from './images/hornetsHat2.jpg'
import Pic9 from './images/hornetsHat3.jpg'
import Pic10 from './images/bullsHat.jpg'
import Pic11 from './images/bullsHat2.jpg'
import Pic12 from './images/bullsHat3.jpg'
import Pic13 from './images/JordanJersey.jpg'
import Pic14 from './images/JordanJersey2.jpg'
import Pic15 from './images/JordanJersey3.jpg'
import Pic16 from './images/HornetsJersey.jpg'
import Pic17 from './images/HornetsJersey2.jpg'
import Pic18 from './images/HornetsJersey3.jpg'




class Board extends Component {

  render() {
    return (
      <div>

    <div class="jumbotron text-white jumbotron-image shadow">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
  </div>

<div className="div-board">
          <div className="row">
            <Item title="Air Jordan 1 Retro High OG 'Bred Toe'" body="Released in stores on February 2018, this Air Jordan 1 retro is a new spin on a classic design. Inspired by the colorway combination of the 'Bred' and 'Black Toe' edition. Size: 10. Condition: Brand New. Comes with OG box and extra laces. 2-Day Shipping." price="$350.00" pic={[Pic1, Pic2, Pic3]}/>
            <Item title="Air Jordan 5 Retro 'Metallic Black'" body="Released in stores on July 2016, this Air Jordan 5 retro is a remastered version of the original design released in 1990. This sneaker was also retro released in 2000, 2007, 2011 and 2016. Size: 9.5. Condition: Brand New. Comes with OG box and lace locks. 2-Day Shipping." price="$250.00" pic={[Pic4, Pic5, Pic6]}/>
            <Item title="Retro Charlotte Hornets NBA Hat" body="This vintage hat is teal, with the classic Hornets logo of Hugo the Hornet on the front. Size: One size fits all. Condition: Pre-owned 9.5/10. 2-Day Shipping." price="$15.00" pic={[Pic7, Pic8, Pic9]}/>
            <Item title="Retro Chicago Bulls 1996 Championship Snapback Hat" body="This NBA finals hat cements the 96 championship, where the Bulls beat the Supersonics 4 games to 2. Size: One size fits all. Condition: Brand New w/tags. 2-Day Shipping." price="$30.00" pic={[Pic10, Pic11, Pic12]}/>
            <Item title="Jordan Red Bulls 1997-98 Authentic Player Jersey" body="'The Last Dance.' Michael Jordan won his last championship with the Chicago Bulls wearing this jersey colorway in the 97-98 season. Size: 2XL. Condition: Brand New w/tags. 2-Day Shipping." price="$150.00" pic={[Pic13, Pic14, Pic15]}/>
            <Item title="Men's Hornets LaMelo Ball Teal 2020/2021 Jersey" body="LaMelo Ball was the third pick of the first round in the 2020 NBA draft. Size: Medium. Condition: Brand New w/tags. 2-Day Shipping." price="$150.00" pic={[Pic16, Pic17, Pic18]}/>
          </div>
          </div>
      </div>
    );
  }
}

export default Board;