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
                  <h1>
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
                  <h1 style={{
                  color:
                   item.metascore >= 0 && item.metascore <= 49
                  ? 'red'
                    : item.metascore >= 50 && item.metascore <= 59
                  ? 'yellow'
                  : item.metascore >= 60 && item.metascore <= 100
                  ? 'green'
                  : 'black'
                  }}>
                 {item.metascore}
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


