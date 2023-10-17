import { Upload } from "@/components/resoUpload/upload";
import NewMessage from "@/components/messageComponents/receivedNewMessage";
import { SelectBox } from "@/components/selectBox";
import { delegations } from "@/components/resoUpload/lists";
import { CreateNewMessage } from "@/components/messageComponents/createNewMessage";
import { ProfileInfo } from "./messageComponents/profile";
import { PopUp } from "./resoUpload/popUp";

export function Dashboard(){
    return(

    <div className="grid-container">
        <div style={{background:"#5E859E"}}></div>
        <div style={{background:"#8CB1B0"}}></div>
        <div style={{background:"#C2CFE1"}}></div>
        <div className="p-4">
        
        <div className="font-body mx-20 ">
          <div className="w-[26%]">
            <div className="text-4xl mt-20">&nbsp;&nbsp;Messages</div>
            <hr className="rounded --width:200px"></hr>
          </div>
            <NewMessage />
        </div>

        <div className="font-body mx-20 ">
          <div className="w-[26%]">
            <div className="text-4xl mt-20">&nbsp;&nbsp;New Message</div>
            <hr className="rounded --width:200px"></hr>
          </div>

          <div className="text-3xl my-4 mt-4 font-thin">&nbsp;&nbsp;From: Germany</div>

          <div className="grid-cols-2 grid">
            <div className="text-3xl my-4 font-thin">&nbsp;&nbsp;To:&nbsp;&nbsp;&nbsp;&nbsp;
              <SelectBox frameworks={delegations} placeholder="Search..."/>
            </div>
          </div> 
          <div className="m-4">
            <CreateNewMessage />
          </div>
        </div>

        <div className="font-body mx-20 w-[26%]">
            <div className="text-4xl mt-20">&nbsp;&nbsp;Approve Messages</div>
            <hr className="rounded --width:200px pb-4"></hr>
            <ProfileInfo />
            <ProfileInfo />
        </div>

        <div className="mx-20 w-[52%]">
          <div className="grid grid-cols-2">
            <div className="text-4xl mt-20 py-2 text-center">Upload Resolutions&nbsp;&nbsp;&nbsp;&nbsp;</div>                
            <div className="bottom-0 left-0">
              <Upload />
            </div>
          </div>
          <hr className="rounded w-[52%]"></hr>
        </div>

        <br></br><br></br><br></br><br></br>

      </div>
    </div>
  )
};

export default Dashboard;
        
