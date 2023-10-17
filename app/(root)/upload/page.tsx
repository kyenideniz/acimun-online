import { PopUp } from "@/components/resoUpload/popUp";
import { ResoUpload } from "@/components/resoUpload/resoUpload";
import SecondaryBanner from "@/components/secondaryBanner/secondaryBanner";

export default function Home() {
  
  return (
    
    <div className="bg-white">
      <SecondaryBanner title="Chair Dashboard"/>
      <ResoUpload />
    </div>

  )
}
