import { link } from "fs";
import Link from "next/link";

interface ResoContainerProps{
    submitter: string;
    committee: string;
    resolutionNo: string;
    issue: string;
    link: string;
}
const ResoContainer: React.FC<ResoContainerProps> = ({
    submitter, 
    committee,
    resolutionNo,
    issue,
    link
}) => {

    return(
        <div className="p-4">
        <div className="w-[70%] rounded-lg bg-[#1D4984] z-3 p-1">
            <div className="rounded-lg z-2 bg-white m-1 p-2">
                <div className="rounded-lg bg-[#1D4984] z-3 p-3">
                    <div className="rounded-lg z-2 bg-white padding1 --padding:3.5rem">
                        <div className="font-body font-thin text-2xl p-4">
                            <div>Main Submitter: {submitter}</div>
                            <div>Committee: {committee} </div>
                            <div>Resolution No: {resolutionNo} </div>
                            <div>Question of: {issue} </div>
                            <Link href={link} className="text-sm text-blue-400 underline" >Read More </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ResoContainer;