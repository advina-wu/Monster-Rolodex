// import {Component} from 'react';

// import Card from '../card/card.component'
// import './card-list.styles.css'


// class CardList extends Component{

//     render(){

//         const {monsters} = this.props;

//         return(
//             <div className='card-list'>
//                 {monsters.map((monster) => {
//                 return <Card monster={monster}/>
//              })}
//             </div>
//         )
//     };
// }

// // allow other files to import cardList
// export default CardList;


import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = ({ monsters }) => (
  <div className='card-list'>
    {monsters.map((monster) => {
      return <Card key={monster.id} monster={monster} />;
    })}
  </div>
);

export default CardList;