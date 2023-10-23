import ResoContainer from "@/components/resoInfoBox";
import { Button } from "@/components/ui/button";
import { GetLatestApproved, GetApprovedInfo } from "@/components/getResoInfos";

export function ResoInfo(){
   
    return(
    <div className="grid-container">
      <div style={{background:"#5E859E"}}></div>
      <div style={{background:"#8CB1B0"}}></div>
      <div style={{background:"#C2CFE1"}}></div>

      <div className="font-body mx-20 f">
          <div className="w-[26%]">
            <div className="text-4xl mt-20">&nbsp;&nbsp;Resolution Status</div>
            <hr className="rounded --width:200px"></hr>
            <div className="text-3xl my-4 mt-4 font-thin">&nbsp;&nbsp;Approved Resolutions: {GetApprovedInfo()} </div>
            <div className="text-3xl my-4 font-thin">&nbsp;&nbsp;Passed Resolutions:</div>
          </div>
          <div className="w-[30%]">
            <div className="text-4xl mt-20">&nbsp;&nbsp;Search Resolutions</div>
            <hr className="rounded"></hr>
            <div className="text-3xl my-4 font-thin">&nbsp;&nbsp;By Resolution Number:</div>
          </div>

          <div>
            <div className="text-4xl mt-20 w-[35%]">&nbsp;&nbsp;Approved Resolutions</div>
            <hr className="rounded w-[36%]"></hr>
          </div>
          <br></br><br></br><br></br><br></br>
          
          <GetLatestApproved />
          
          <br></br><br></br><br></br><br></br>
          
          <div>
            <div className="text-4xl mt-20 w-[40%]">&nbsp;&nbsp;Latest Passed Resolutions</div>
            <hr className="rounded w-[41%]"></hr>
          </div>
          <br></br><br></br><br></br><br></br>

            <GetLatestApproved />
            
          <br></br><br></br><br></br><br></br>

          <div className="buttonPos37 relative">
            <Button className="font-body font-thin text-lg bg-[#1D4984]">Load More</Button>
          </div>

          <br></br><br></br><br></br><br></br>
      </div>
    </div>
  )
};

export default ResoInfo;
        
