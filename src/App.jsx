import React from 'react'
import  Data from "./data.json"



function App() {
  return (
    <div className='container m-auto'>


      {


          Data?.map(
              (item, index) => (

                <div key={index }>

                  <h1>

                  {
                    item.director
                  }
                  </h1>

                  <img  src={

                    item.poster

                  }   />
                </div>
              )
            
          )

      }



    </div>
  )
}

export default App


