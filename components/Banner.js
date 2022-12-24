//accept text as prop to display in banner
//optional link?
import Link from "next/link"
import React from 'react'

const Banner = (props) => {
  return (
    <div className="banner">
      {props.bannerText}
      {props.link && <Link href={props.link} className="bannerLink">   Click here.</Link>}
    </div>
  )
}

export default Banner