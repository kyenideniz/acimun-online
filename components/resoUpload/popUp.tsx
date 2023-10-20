"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"


import { connect } from "@/api/server"
import { useState } from "react"
import { ToastAction } from "@/components/ui/toast"
import { SelectBox, Option } from "@/components/selectBox"
import { GA, delegations } from "@/components/resoUpload/lists"

export var mainSubVal: string;
export var committeeVal: string;
export var resolutionNoVal:string;
export var questionOfVal: string;
export var coSubsVal: string;
export var linkVal: string;

export function PopUp(){
    const [link, setLink] = useState("");
    const [resolutionNo, setResolutionNO] = useState("");

    const [coSubs, setCoSubs] = useState<Option>()
    const [mainSub, setMainSub] = useState<Option>()
    const [committee, setCommittee] = useState<Option>()
    const [questionOf, setQuestionOf] = useState<Option>()

    linkVal = link
    resolutionNoVal = resolutionNo

    mainSubVal = JSON.stringify(mainSub?.label)
    committeeVal = JSON.stringify(committee?.label)
    resolutionNoVal = JSON.stringify(resolutionNo)
    questionOfVal = JSON.stringify(questionOf?.label)
    coSubsVal = JSON.stringify(coSubs?.label)

    function onClick() {
        connect();
        toast({
            title: "Submitted",
            description: 
                <code className="text-black font-body">
                    <div>Main Submitter: {mainSubVal ? mainSubVal:"Select"}</div> 
                    <div>Comittee: {committeeVal ? committeeVal:"Select"} </div>
                    <div>Resolution No: {resolutionNoVal ? resolutionNoVal:"Select"} </div>
                    <div>Question of: {questionOfVal ? questionOfVal:"Select"} </div>
                    <div>Co-Submitters: {coSubsVal ? coSubsVal:"Select"} </div>
                    <div>Link: {linkVal ? linkVal:"Select"} </div>
                </code>,
            action: (
                <ToastAction altText="Close">Close</ToastAction>
            ),
        })
    }

    return(
        <div className="space-y-8">
                <div className="mx-20 ">
                    <div className="text-4xl mt-20 py-2 text-center">Upload Resolutions</div>
                    <hr className="rounded w-[100%]"></hr>
                </div>

                <div className="font-body mx-20 font-body font-thin text-3xl p-4 my-10">
                    <div className="grid grid-cols-2">
                        <div className="py-2 ">Main Submitter:</div>
                        <div className="left py-2 z-10">
                            <SelectBox options={delegations} emptyMessage=""  onValueChange={setMainSub} val={mainSub}/>            
                        </div>
                    </div>

                    <div className="grid grid-cols-2">
                        <div className="py-2">Committee: </div>
                        <div className="left py-2 z-10">
                            <SelectBox options={GA} emptyMessage=""  onValueChange={setCommittee} val={committee}/>
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="py-2">Resolution No:</div>
                        <div className="left py-2 z-10">
                            <Input className="w-[200px]" placeholder="Resolution No" value={resolutionNo} onChange={e => setResolutionNO(e.target.value)} />
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="py-2">Question of:</div>
                        <div className="left py-2 z-10">
                            <SelectBox options={delegations} emptyMessage=""  onValueChange={setQuestionOf} val={questionOf}/>
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="py-2">Co-Submitters:</div>
                        <div className="left py-2 z-10">
                            <SelectBox options={delegations} emptyMessage=""  onValueChange={setCoSubs} val={coSubs}/>
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="py-2">Link:</div>
                        <div className="left py-2 z-10">
                            <Input className="w-[200px]" placeholder="Link" value={link} onChange={e => setLink(e.target.value)} />
                        </div>
                    </div>
                    <br></br><br></br>
                    <div className="flex items-center justify-center">
                        <Button className="font-body font-thin text-lg bg-[#5E859E]" type="submit" onClick={onClick}>Upload</Button>
                    </div>
                <br></br>
                </div>
    </div>
    )
}