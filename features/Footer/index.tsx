import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer >
        <a>
        Made with 🖤 by 
        <span className="logo">
            <Image src="/DH-Logo.png" alt="DH Logo" width={92} height={16} />
        </span>
        </a>
    </footer>
  )
}

export default Footer