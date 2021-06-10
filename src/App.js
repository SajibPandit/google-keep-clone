import { useState } from 'react'
import CreateNote from './components/CreateNote'
import Footer from './components/Footer'
import Header from './components/Header'
import Notes from './components/Notes'

const App =()=> {
  const [addItem,setAddItem] = useState([])

  const addNote = (note)=>{
    //alert('I am clicked')
    setAddItem((prev)=>{
      return[
        ...prev,
        note
      ]
    })
  }

  const deleteItem = (id)=>{
    console.log(addItem)
    const arr = addItem.filter((item,index)=>{
      return index !==id
    })
    setAddItem(arr)
  }

  return (
    <>
      <Header length={addItem.length}/>

      <div className="container w-100">
        <CreateNote passNote={addNote}/>
        <div className="row">

          {addItem.length > 0 ? addItem.map((item,index)=>{
            return(
              <Notes
              key={index}
              id={index}
              title={item.title}
              content={item.content}
              deleteNote={deleteItem}
            />
            )
            }):<h4 className="text-center text-muted my-5">You do not created any note yet!</h4>
          }

        </div>
      </div>
      <Footer/>
    </>
  );
}

export default App;
