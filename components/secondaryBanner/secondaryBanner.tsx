import Image from 'next/image'
import logo from '@/public/logo.png'

import { CornerLines } from "@/components/secondaryBanner/secondaryCornerLines"
import Container from '../ui/container';


export function SecondaryBanner() {

  return ( 
    <>
    <div className=''>
        <Container>
        <div className='font-body'>

            <div className='items-center justify-center flex mt-8'>
                <Image
                    src={logo}
                    width={488}
                    height={488}
                    alt="" />
            </div>

            <div className='text-center text-7xl/[43px] m-4 font-thin'>
                Resolutions
            </div>
            <div className=''>
                <CornerLines />
            </div>
            
        </div>
        </Container>
        <div className=''>
            <Container>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            </Container>
        </div>
    </div>
    </>
  );
};
 
export default SecondaryBanner;