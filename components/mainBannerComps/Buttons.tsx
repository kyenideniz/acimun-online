import { Button } from "@/components/ui/button"
import Link from "next/link";

const NavButtons = () => {
    return ( 
        <div className='grid-rows-3 text-center m-8'>
          <Button className='mx-4 font-body text-lg text-slate-100' variant="custom" size="lg"><Link href="/resolutions">Resolutions</Link></Button>
          <Button className='mx-4 font-body text-lg text-slate-100' variant="custom" size="lg"><Link href="https://acimun.com">ACIMUN.com</Link></Button>
          <Button className='mx-4 font-body text-lg text-slate-100' variant="custom" size="lg"><Link href="/login">Note Pass</Link></Button>
        </div>
    );
}
 
export default NavButtons;