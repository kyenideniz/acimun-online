import Image from 'next/image'
import logo from '@/public/logo.png'

import { CornerLines } from "@/components/mainBannerComps/cornerLines"
import  NavButtons  from "@/components/mainBannerComps/Buttons"

export function MainBanner() {

  return ( 
      <div className='grid grid-cols-1 font-body '>
        
        <div className='items-center justify-center flex mt-8'>
          <Image
            src={logo}
            width={488}
            height={488}
            alt="" 
          />
        </div>

        <div className='text-center text-5xl/[43px] m-4'>
            ACIMUN'24
        </div>

        <div className='m-4 text-center italic text-2xl/[43px] textColor' color='#737373'>
        “Promoting Ethical and Transparent Progress in Global Entities”
        </div>

        <NavButtons />
      
      <CornerLines />
    </div>
  );
};
 
export default MainBanner;