import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import ResoUpload from "./resoUpload"
import { Button } from "./ui/button"

export function PopUp(){
    return(
        <div className="items-center justify-center flex">
        <Popover>
            <PopoverTrigger>
                <Button variant="custom">Open</Button>
            </PopoverTrigger>
            <PopoverContent>
                <ResoUpload />
            </PopoverContent>
        </Popover>
        
        </div>
    )
}

