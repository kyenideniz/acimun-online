import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"


import { Button } from "@/components/ui/button";
import { PopUp } from "@/components/resoUpload/popUp";
import { PlusIcon } from "lucide-react";
import IconButton from "@/components/ui/iconButton";

export function Upload (){
    return(
        <Popover>
            <PopoverTrigger>
                <IconButton icon={<PlusIcon className="items-baseline justify-baseline flex"/>} />
            </PopoverTrigger>
            <PopoverContent>
                <PopUp />
            </PopoverContent>
        </Popover>
    )
}