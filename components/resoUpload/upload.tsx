import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"


import { Button } from "@/components/ui/button";
import { PopUp } from "@/components/resoUpload/popUp";
import { PlusIcon } from "lucide-react";
import IconButton from "../ui/iconButton";

export function Upload (){
    return(
        <Popover>
            <PopoverTrigger>
                <IconButton icon={<PlusIcon />}/>
            </PopoverTrigger>
            <PopoverContent>
                <PopUp />
            </PopoverContent>
        </Popover>
    )
}