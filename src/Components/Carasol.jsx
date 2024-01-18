import React, { useContext, useState } from 'react'
import "../assets/Carasol.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { LoginContext } from './LoginProvider'

const Carasol = () => {
const navigate = useNavigate()
const {loginData, setLoginData} = useContext(LoginContext)
  const imageArr = [
    "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  ]
  const [images, setImages] = useState(imageArr[0])

  const logout = () => {
    setLoginData('')
    localStorage.removeItem('credentials')
    navigate('/login')
  }

  const setPrevImage = (event) => {
    const indexOfArr = parseInt(imageArr.indexOf(images))
    const lengthOfArr = imageArr.length
    indexOfArr == 0 ? setImages(imageArr[lengthOfArr - 1]) : setImages(imageArr[indexOfArr - 1])
  }

  const setNextImage = (event) => {
    const indexOfArr = parseInt(imageArr.indexOf(images))
    const lengthOfArr = imageArr.length -1
    indexOfArr == lengthOfArr ? setImages(imageArr[0]) : setImages(imageArr[indexOfArr + 1])
  }

  return (
    <>
      <button onClick={logout}>Logout</button>
      <div className='mainDiv'>
        <FontAwesomeIcon icon={faArrowCircleLeft}  onClick={(e) => setPrevImage(e)} className='icon' name='prevBtn'/>
        <div>
          <img src={images} alt="img" width="300px" height="300px"/>
        </div>
        <FontAwesomeIcon icon={faArrowCircleRight} onClick={(e) => setNextImage(e)} className='icon' name='nextBtn'/>
      </div>
    </>                        
  )
}

export default Carasol