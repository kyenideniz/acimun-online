import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"

import { Button } from "@/components/ui/button";
import { PopUp } from "@/components/resoUpload/popUp";


export function ResoUpload(){
    return(

    <div className="grid-container">
        <div style={{background:"#5E859E"}}></div>
        <div style={{background:"#8CB1B0"}}></div>
        <div style={{background:"#C2CFE1"}}></div>
        <div className="p-4">
        
        <div className="items-center justify-center flex">
            <Popover>
                <PopoverTrigger>
                    <Button variant="custom">Open</Button>
                </PopoverTrigger>
                <PopoverContent>
                    <PopUp />
                </PopoverContent>
            </Popover>
            <PopUp />
        </div>
      </div>
    </div>
  )
};

export default ResoUpload;
        
