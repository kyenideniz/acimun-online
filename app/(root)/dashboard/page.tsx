import { PopUp } from "@/components/resoUpload/popUp";
import { Dashboard } from "@/components/dashboard";
import SecondaryBanner from "@/components/secondaryBanner/secondaryBanner";

export default function Home() {
  
  return (
    
    <div className="bg-white">
      <SecondaryBanner title="Chair Dashboard"/>
      <Dashboard />
    </div>

  )
}
