import AnimatedDockNavbar from '@/components/ui/animated-dock-navbar'
import React from 'react'
import Image from 'next/image'

export default function Recipe() {
  return (
    <div className="relative w-full h-[95vh] bg-black">
        <AnimatedDockNavbar/>
      
      
        <div>
      <Image
        src="/img2.jpg" // Path gambar
        alt="Image description" // Deskripsi gambar untuk SEO dan aksesibilitas
        width={500} // Lebar gambar dalam piksel
        height={300} // Tinggi gambar dalam piksel
      />
      </div>
    </div>
  )
}
