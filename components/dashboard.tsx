import { SelectBox } from "@/components/selectBox";
import { Upload } from "@/components/resoUpload/upload";
import { ProfileInfo } from "./messageComponents/profile";
import { delegations, issues } from "@/components/resoUpload/lists";
import { CreateNewMessage } from "@/components/messageComponents/createNewMessage";
;
import NewMessage from "@/components/messageComponents/receivedNewMessage";
import { GetLatestApproved } from "@/components/getResoInfos";

export async function Dashboard(){

  // key properties are needed for items in a list to uniquely identify each item. If you do not have this, you will get a warning in your console.

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
              <SelectBox options={delegations} emptyMessage="Select"/>
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

        <div className="mx-20 w-[100%]">
          <div className="container2">
            
            <div className="text-4xl mt-20 py-2 text-left">&nbsp;&nbsp;Latest Uploaded Resolutions&nbsp;&nbsp;&nbsp;&nbsp;    
              <hr className="rounded w-[90%]"></hr>         
            </div>   
              <Upload />
            </div>
            <GetLatestApproved />
        </div>

        <br></br><br></br><br></br><br></br>

      </div>
    </div>
  )
};

export default Dashboard;

