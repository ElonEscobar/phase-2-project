import React, { useEffect, useState } from "react"
import Heading from "../../common/Heading"
import "./style.css"

const Location = () => {
  const locationUrl = "https://real-est-ms.herokuapp.com/location"
  const [location, setLocations] = useState([])
  useEffect(()=>{
    const getLocations = async ()=>{
      const res = await fetch(locationUrl);
      const jsonFile = await res.json();
      setLocations(jsonFile)
    }
    getLocations()

  },[])

  return (
    <>
      <section className='location padding'>
        <div className='container'>
          <Heading title='Explore By Location' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />

          <div className='content grid3 mtop'>
            {location.map((item, index) => (
              <div className='box' key={index}>
                <img src={item.cover} alt='' />
                <div className='overlay'>
                  <h5>{item.name}</h5>
                  <p>
                    <label>{item.Villas}</label>
                    <label>{item.Offices}</label>
                    <label>{item.Apartments}</label>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Location