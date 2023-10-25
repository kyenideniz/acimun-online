import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"

import { PopUp } from "@/components/resoUpload/popUp";
import { PlusIcon } from "lucide-react";

export function Upload (){
    return(
        <div className="items-center justify-center flex">
            <Dialog>
                <DialogTrigger className="w-10 h-10 rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition" >
                    {<PlusIcon className="items-baseline justify-baseline flex"/>}
                </DialogTrigger>
                <DialogContent>
                    <PopUp />      
                </DialogContent>
            </Dialog>
        </div>
    )
}