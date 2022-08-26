// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Note from './components/Note';
import Notes from './components/Note1';
import { SimpleGrid ,Box  } from '@chakra-ui/react'

function CreateNote(n){
  return(

    <Note
    key={n.id}
   title={n.title}
   note={n.note}
  />

  )
}
function App() {
  return (
    <>
    
    <Nav/>
    {/* <Note>
    </Note> */}
{/* 
<SimpleGrid  row={[2, null, 5]} spacing='40px' paddingTop={10} paddingLeft='3px' paddingRight='3px' >
  <Box>  
     </Box>
  </SimpleGrid> */}
  <div className='card1'>
     {Notes.map(CreateNote)}
     </div>

    <Footer/>
    </>
  );
}

export default App;
