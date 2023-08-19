import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);
  console.log('render');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterMonsters(newFilteredMonsters);
    console.log('effect is firing')
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>

      <SearchBox
        className='monsters-search-box'
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;




// import { useState, useEffect } from 'react';

// import CardList from './components/card-list/card-list.component';
// import SearchBox from './components/search-box/search-box.component';
// import './App.css';

// const App = () => {
//   const [searchField, setSearchField] = useState('');
//   const [monsters, setMonsters] = useState([]);
//   const [filteredMonsters, setFilterMonsters] = useState(monsters); 
//   console.log('render');

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => setMonsters(users));
//   }, []);

//   useEffect(() => {
//     const newFilteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     setFilterMonsters(newFilteredMonsters);

//     console.log('effect is firing')
//     console.log(filteredMonsters);

//   }, [monsters, searchField]);

//   const onSearchChange = (event) => {
//     const searchFieldString = event.target.value.toLocaleLowerCase();
//     setSearchField(searchFieldString);
//   };

//   return (
//     <div className='App'>
//       <h1 className='app-title'>Monsters Rolodex</h1>

//       <SearchBox
//         className='monsters-search-box'
//         onChangeHandler={onSearchChange}
//         placeholder='search monsters'
//       />
//       <CardList monsters={filteredMonsters} />
//     </div>
//   );
// };

// export default App;

// // // encapsulate local state in a functional component
// // import {useState, useEffect} from 'react';

// // import './App.css';

// // // // allow all class component have access to fufnctionalities in default react
// // // import {Component} from 'react';
// // import CardList from './components/card-list/card-list.component';
// // import SearchBox from './components/search-box/search-box.component';



// // const App = () => {
// //   // useState gives an array with two values [value, setValue]
// //   const [searchField, setSearchField] = useState('');
// //   const [monsters, setMonsters] = useState([]);
// //   const [filteredMonsters, setFilterMonsters] = useState(monsters);
// //   console.log('render');


// //   useEffect(()=> {
// //     fetch('https://jsonplaceholder.typicode.com/users')
// //     .then((response) => response.json())
// //     .then((users) => setMonsters(users));
// //   }, []); 
  

// //   useEffect(()=>{
// //     const newFilteredMonsters = monsters.filter((monster) => {
// //       return monster.name.toLocaleLowerCase().includes(searchField);
// //     }); 

// //     setFilterMonsters(newFilteredMonsters);

// //     console.log('effect is firing')
// //   }, [monsters, searchField])
  


// //   const onSearchChange = (event) =>{
// //     const searchFieldString = event.target.value.toLocaleLowerCase();
// //     setSearchField(searchFieldString);
// //   };


// //   return(
// //     <div className="App">
// //       <h1 className='app-title'>Monsters Rolodex</h1>
    
// //       <SearchBox 
// //         className = {'monsters-search-box'}
// //         onChangeHandler = {onSearchChange} 
// //         placeholder = {'search monsters'} 
// //       />
// //       <CardList monsters={filteredMonsters} />

// //     </div>
// //   )
// // }


// // // class App extends Component {

// // //   constructor(){
// // //     super();
// // //     this.state = {
// // //       monsters: [],
// // //       searchField : ''
// // //     }

// // //     console.log('constructor')
// // //   }

// // //   // used when class component API call to extract data for UI
// // //   componentDidMount(){
// // //     fetch('https://jsonplaceholder.typicode.com/users')
// // //       .then((response) => response.json())
// // //       .then((users) => this.setState(()=>{
// // //           return {monsters: users};
// // //       }
// // //     ));
// // //     console.log('componentDidMount')

// // //   }

// // //   onSearchChange = (event)=>{
// // //     this.setState(() => {return {searchField: event.target.value.toLowerCase()};});
// // //   }

// // //   render(){

// // //     // cast the values and functions into variables
// // //     const {monsters, searchField} = this.state;
// // //     const {onSearchChange} = this;

// // //     const filteredMonster = monsters.filter((monster) => {
// // //       return monster.name.toLowerCase().includes(searchField);
// // //     }); 

// // //     return (
// // //       <div className="App">
// // //         <h1 className='app-title'>Monsters Rolodex</h1>
        
// // //         <SearchBox 
// // //           onSearchHandler = {onSearchChange} 
// // //           placeholder = {'search monsters'} 
// // //           className = {'search-box'}/>
// // //         <CardList monsters = {filteredMonster} />
// // //       </div>
// // //     );
// // //   }
// // // }

// // export default App;
