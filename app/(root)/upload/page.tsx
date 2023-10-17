import { PopUp } from "@/components/popUp";
import { ResoUpload } from "@/components/resoUpload";
import SecondaryBanner from "@/components/secondaryBanner/secondaryBanner";

export default function Home() {
  
  return (
    
    <div className="bg-white">
      <SecondaryBanner />
        <ResoUpload />
      <PopUp />
      <br></br><br></br>
    </div>

  )
}
