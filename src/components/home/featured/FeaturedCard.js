import React, { useEffect, useState } from "react"

const FeaturedCard = () => {
  const featuredApi = "https://real-est-ms.herokuapp.com/featured"
  const [ featured, setFeatured] = useState([])
  useEffect(()=>{
    const getFeatured = async() =>{
      const res = await fetch(featuredApi);
      const jsonFile = await res.json()
      setFeatured(jsonFile)
    }
    getFeatured();
  },[])
  console.log(featured)
  return (
    <>
      <div className='content grid5 mtop'>
        {featured.map((items, index) => (
          <div className='box' key={index}>
            <img src={items.cover} alt='' />
            <h4>{items.name}</h4>
            <label>{items.total}</label>
          </div>
        ))}
      </div>
    </>
  )
}

export default FeaturedCard