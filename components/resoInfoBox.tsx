"use client"

import { useState } from 'react';

export var idVal: string;

interface ResoContainerProps{
    submitter: string;
    committee: string;
    resolutionNo: string;
    issue: string;
    link: string;
    id:string;
}
const ResoContainer: React.FC<ResoContainerProps> = ({
    submitter, 
    committee,
    resolutionNo,
    issue,
    link,
    id,
}) => {
    const [redirect, setRedirect] = useState("");
    const [idVal1, setIdVal] = useState("");

    const handleSubmit = async () => {
        setRedirect(`/${[id]}/resolution`);
        console.log(typeof(redirect), id)     
        setIdVal(id);   
        idVal = id;
    }

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
                            <button onClick= {handleSubmit} className="text-sm text-blue-400 underline" >Read More </button>
                            <a target="_blank" onClick={handleSubmit} href={redirect} rel="noopener noreferrer">123</a>
      
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ResoContainer;