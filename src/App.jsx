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
                    item.title  
                    }
                  </h1>
                  <h1 style={{ fontSize: '30px' }}>
                  {
                    item .director                  
                  }
                  </h1>
                  <h1 style={{ fontSize: '24px' }}>
                  {
                    item.duration
                  }
                  </h1>
                  <h1 style={{ color: 'green' }}>
                  {
                  item.maturity
                  }
                  </h1>
                  <h1>
                  {
                  item.releaseDate    
                  }
                  </h1>  
                  <h1 style={{ color: 'blue' }}>
                    {
                  item.genres    
                    }
                  </h1>
                  <h1>
                    {
                  item.rating    
                    }
                  </h1>  

                  <img  src={
                   item.poster 
                  }  />
                </div>
              )
            
          )

      }



    </div>
  )
}

export default App


