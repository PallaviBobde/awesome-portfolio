import React from 'react'


export default function ContactButton({link,Icon}) {
  return (
    <a className="m-5 h-12 w-12 rounded-full border flex justify-center items-center bg-black z-30 hover:bg-gradient-to-t hover:from-[#330867]  hover:to-[#0072ff] hover:dark:from-[#330867] hover:dark:to-[#0072ff]" href={link}>
        <Icon/>
    </a>
  )
}
