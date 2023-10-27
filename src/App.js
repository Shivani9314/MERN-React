
//import ButtonComp from './1st-3rd/buttonn';
// import ButtonComponent from './components/button';
// import CardComponent from './components/card';
// import ImageComponent from './components/image';
// import './App2.css';
// import CardComp from './1st-3rd/crd';
// import ButtonComps from './1st-3rd/buttonn';
// import HeadingComp from './1st-3rd/heading';
import React, { useState, } from 'react';
// import {Route, Routes } from 'react-router-dom';                                                                     
// import Bitcoin from './3rd-lecture/cryptoCon/Bitcoin';
import { nanoid } from 'nanoid';
import AddNote from './Notes-Site/AddNote';
import Search from './Notes-Site/Search'
import Header from './Notes-Site/Header'
import NotesList from './Notes-Site/NotesList';
// import NewsApp from './3rd-lecture/NewsApp';
// import Home from './Routing/1st/Home';
// import Login from './Routing/1st/Login';
// import Logout from './Routing/1st/Logout';
// import SignUp from './Routing/1st/SignUp';
// import HomePage from './Routing/2nd/HomePage/HomePage';
// import Zomato from './Routing/2nd/Zomato';
// import CurrentLoaction from './weather-site/currentLocation';
import './App.css';
import './Notes-Site/indexx.css';



// function App() {
//   return (
//     <div className='big-box'>
//     <ButtonComponent/>
//     <div className='videos-box'>
//     <CardComponent name = "Anuj"  image = "https://i.ytimg.com/vi/XG02yn-OAWM/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB3DzvSKHiYyguya6Lbslqkk_GnWw"  timer= "36:02" title = "How to Start Web Development Correctly to Actually Make Money & Land a Job?" views= "34.8k" duration ="3days ago"/>
//     <CardComponent name = "Anuj"  image = "https://i.ytimg.com/vi/XG02yn-OAWM/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB3DzvSKHiYyguya6Lbslqkk_GnWw"  timer= "36:02" title = "How to Start Web Development Correctly to Actually Make Money & Land a Job?" views= "34.8k" duration ="3days ago"/>
//     <CardComponent name = "Anuj"  image = "https://i.ytimg.com/vi/XG02yn-OAWM/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB3DzvSKHiYyguya6Lbslqkk_GnWw"  timer= "36:02" title = "How to Start Web Development Correctly to Actually Make Money & Land a Job?" views= "34.8k" duration ="3days ago"/>
//     <CardComponent name = "Anuj"  image = "https://i.ytimg.com/vi/XG02yn-OAWM/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB3DzvSKHiYyguya6Lbslqkk_GnWw"  timer= "36:02" title = "How to Start Web Development Correctly to Actually Make Money & Land a Job?" views= "34.8k" duration ="3days ago"/>
//     <CardComponent name = "Anuj"  image = "https://i.ytimg.com/vi/XG02yn-OAWM/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB3DzvSKHiYyguya6Lbslqkk_GnWw"  timer= "36:02" title = "How to Start Web Development Correctly to Actually Make Money & Land a Job?" views= "34.8k" duration ="3days ago"/>
//     <CardComponent name = "Anuj"  image = "https://i.ytimg.com/vi/XG02yn-OAWM/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB3DzvSKHiYyguya6Lbslqkk_GnWw"  timer= "36:02" title = "How to Start Web Development Correctly to Actually Make Money & Land a Job?" views= "34.8k" duration ="3days ago"/>
//     <CardComponent name = "Anuj"  image = "https://i.ytimg.com/vi/XG02yn-OAWM/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB3DzvSKHiYyguya6Lbslqkk_GnWw"  timer= "36:02" title = "How to Start Web Development Correctly to Actually Make Money & Land a Job?" views= "34.8k" duration ="3days ago"/>
//     <CardComponent name = "Anuj"  image = "https://i.ytimg.com/vi/XG02yn-OAWM/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB3DzvSKHiYyguya6Lbslqkk_GnWw"  timer= "36:02" title = "How to Start Web Development Correctly to Actually Make Money & Land a Job?" views= "34.8k" duration ="3days ago"/>
//     <CardComponent name = "Anuj"  image = "https://i.ytimg.com/vi/XG02yn-OAWM/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB3DzvSKHiYyguya6Lbslqkk_GnWw"  timer= "36:02" title = "How to Start Web Development Correctly to Actually Make Money & Land a Job?" views= "34.8k" duration ="3days ago"/>
//     <CardComponent name = "Anuj"  image = "https://i.ytimg.com/vi/XG02yn-OAWM/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB3DzvSKHiYyguya6Lbslqkk_GnWw"  timer= "36:02" title = "How to Start Web Development Correctly to Actually Make Money & Land a Job?" views= "34.8k" duration ="3days ago"/>
//     </div>
//     </div>
//   )
// }

// function App(){
//     return(
//         <div>
//             <HeadingComp/>
//             <div className='videos-box'>
//             <CardComp title ="Card Sorting" descp = "Discover how people group and lable information"/>
//             <CardComp title ="Card Sorting" descp = "Discover how people group and lable information"/>
//             <CardComp title ="Card Sorting" descp = "Discover how people group and lable information"/>
//             <CardComp title ="Card Sorting" descp = "Discover how people group and lable information"/>
//             <CardComp title ="Card Sorting" descp = "Discover how people group and lable information"/>
//             <CardComp title ="Card Sorting" descp = "Discover how people group and lable information"/>
//             </div>
            
//         </div>
//     );
// }

function App(){
    const [notes , setNotes] = useState([
        {
            id: nanoid(),
            text: 'This is my 1st Note',
            date: '15/01/2023'
        },
        {
            id: nanoid(),
            text: 'Notes...',
            date: '15/01/2023'
        },
        {
            id: nanoid(),
            text: 'Hello...',
            date: '15/01/2023'
        },
        {
            id: nanoid(),
            text: 'Remeberings....',
            date: '15/01/2023'
        },
    ]);
    const [searchText, setSearchText] = useState('');

	const [darkMode, setDarkMode] = useState(false);

    function addNote(text){
        const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
}

const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
};


return (
    <div className={`${darkMode && 'dark-mode'}`}>
        <div className='container'>
            <Header handleToggleDarkMode={setDarkMode} />
            <Search handleSearchNote={setSearchText} />
            <NotesList
                notes={notes.filter((note) =>
                    note.text.toLowerCase().includes(searchText)
                )}
                handleAddNote={addNote}
                handleDeleteNote={deleteNote}
            />
        </div>
    </div>
);
}

//export default App;

//import UnitConvertor from './2ndlec-unit/UnitConvertor';

// function App() {
//   return (
//     <div>
//         <UnitConvertor/>
//     </div>
//   )
// }

// export default App;


//function App() {
//   return (
//     <div>
//       {/* <NewsApp/> */}
//       {/* <Bitcoin/> */}
//     </div>
//   )

// return(
//    // <div>
//    //  {/* <Home/>
//    //  <Routes>
//    //   <Route path="/login" element ={<Login/>}> </Route>
//    //   <Route path="/logout" element ={<Logout/>}/>    
//    //   <Route path="/signup" element ={<SignUp/>}/>    
//    // </Routes> */}
   
//    // </div>
    
//    
   
// )
//  }

// function App(){

//     return(
//     <>
//       {/* <Zomato/> */}
//       {/* <CurrentLoaction/> */}
//      </>
//     )

// }


export default App;

