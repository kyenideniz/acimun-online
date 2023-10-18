import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"

import { PopUp } from "@/components/resoUpload/popUp";
import { PlusIcon } from "lucide-react";
import IconButton from "@/components/ui/iconButton";

export function Upload (){
    return(
        <div className="items-center justify-center flex">
            <Dialog>
                <DialogTrigger>
                    <IconButton icon={<PlusIcon className="items-baseline justify-baseline flex"/>} />
                </DialogTrigger>
                <DialogContent>
                    <PopUp />
                </DialogContent>
            </Dialog>
        </div>
    )
}