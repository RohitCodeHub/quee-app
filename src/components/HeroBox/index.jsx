import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const HeroBox = () => {
  // const navigate = useNavigate();
  const Theme = useSelector(state => state.ThemeReducer.theme)
  console.log(Theme);
  return (




    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className={`title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 ${Theme === "#fff" ? "text-[#000]" : "text-[#fff]"}`}>Consult A Doctor
        <br className="hidden lg:inline-block"/>
      </h1>
      <p className={`mb-8 leading-relaxed ${Theme === "#fff" ? "text-[#000]" : "text-[#fff]"}`}>Hello. My name is julia.

I have been engaged in all kinds of Surgery (thyroid glands, mammary glands, esophageal diseases, gastrointestinal diseases, hepatobiliary and pancreatic diseases, vascular diseases, and endoscopic surgery), emergency, and anesthesia works for about 20 years.

In addition, I also have the experience as the director of a clinic in a rural area.

My specialty is esophageal diseases, but people could call me a "medical generalist".

Therefore, I am confident in skills to address all kinds of diseases.</p>
      <div className="flex justify-center">
        <Link to="/Admin" className={`inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg ${Theme === "#fff" ? "text-[#000]" : "text-[#fff]"}`}>Company</Link>
        <Link to="/User"  className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg " style={{textDecoration:"none"}}>Token</Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
<img src="https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?w=2000" alt="" />
    </div>
  </div>
</section>
  )
}

export default HeroBox