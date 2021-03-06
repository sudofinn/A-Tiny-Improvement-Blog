import React from 'react'
import Link from "next/link"
import {useRouter} from "next/router"

import {MdOutlineWork} from "react-icons/md"
import {AiFillBook} from "react-icons/ai"
import{BsCodeSlash} from "react-icons/bs"
import { GiMeditation} from "react-icons/gi"
import {IoMdChatbubbles} from "react-icons/io"
import {GiFlowerEmblem} from "react-icons/gi" 
import {GiWideArrowDunk} from "react-icons/gi"

const Topics: React.FC  = () => {
  const techs = [
    {
      id: 1,
      child  : (
        <>
           <MdOutlineWork size={30} />
        </>
      ),
      href: "/productivity",
      title: "Productivity",
      style: "shadow-white",
    },
    {
      id: 2,
      src: AiFillBook,
      child  : (
        <>
           <AiFillBook size={30} />
        </>
      ),
      href: "/books",
      title: "All about books",
      style: "shadow-white",
    },
    {
      id: 3,
      child  : (
        <>
           <BsCodeSlash size={30} />
        </>
      ),
      href: "/programming",
      src: BsCodeSlash,
      title: "Programming",
      style: "shadow-white",
    },
    {
      id: 4,
      src: GiMeditation,
      child  : (
        <>
           <GiMeditation size={30} />
        </>
      ),
      href: "/meditationpeace",
      title: "Meditation & Peace",
      style: "shadow-white",
    },
    {
      id: 5,
      src: IoMdChatbubbles,
      child  : (
        <>
           <IoMdChatbubbles size={30} />
        </>
      ),
      href: "/whatithink",
      title: "Me and what I think",
      style: "shadow-white",
    },
    {
      id: 6,
      src: GiFlowerEmblem,
      child  : (
        <>
           <GiFlowerEmblem size={30} />
        </>
      ),
      href: "/climatechange",
      title: "Climate change",
      style: "shadow-white ",
    }
   
  ];
 
   /*
  const router = useRouter() 

  const transferNewIdeaPage = () => {
    router.push("/newidea")

  }
  */

return (
    <section className="bubble relative ">
      
      <div className="max-w-screen-lg mx-auto pt-[370px] mb-16 flex flex-col justify-center text-center w-full h-full">
        <div>
          <p  data-aos="fade-up" className="  text-5xl sm:text-6xl  mt-32 text-white font-bold
           border-b-4 border-white p-2 inline">
            Topics
          </p>
          <p data-aos="fade-up" className="hidden md:flex justify-center py-8 text-2xl text-white ">Lets have a look at what I write</p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-16 text-center mb-8 py-12 px-20 sm:px-8">
          {techs.map(({ id, href, child, title, style }) => (
            <div
              key={id}
              
              className={`shadow-md hover:scale-105 duration-500 py-2 text-white hover:text-black
               hover:bg-white rounded-lg ${style}`}
            >
               <a href={href} target="_blank"
              rel="noreferrer"
              className='flex justify-center items-center'
              ><a>{child}</a></a>
              <p className="mt-4 text-2xl">{title}</p>
            </div>
          ))}
        </div>
      </div> 
    </section>

  )
}


export default Topics