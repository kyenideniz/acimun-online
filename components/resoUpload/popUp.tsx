"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"

import { useState } from "react"
import { SelectBox, Option } from "@/components/selectBox"
import { GA, delegations } from "@/components/resoUpload/lists"

export var isSubmittedVal: boolean;

export function PopUp(){
    const [link, setLink] = useState("");
    const [resolutionNo, setResolutionNO] = useState("");

    const [coSubs, setCoSubs] = useState<Option>();
    const [mainSub, setMainSub] = useState<Option>();
    const [committee, setCommittee] = useState<Option>();
    const [questionOf, setQuestionOf] = useState<Option>();

    const handleSubmit = async () => {
        try {
            const response = await fetch("/api/popUp", {
                method: "POST",
                body: JSON.stringify({
                    mainSub: mainSub?.label ? mainSub: "N/A", 
                    committee: committee?.label ? committee: "N/A",
                    resolutionNo: resolutionNo ? resolutionNo: "N/A",
                    questionOf: questionOf?.label ? questionOf: "N/A",
                    coSubs: coSubs?.label ? coSubs: "N/A",
                    link: link ? link:"N/A",
                }),
                headers:{
                    "Content-Type": "application/json"
                }
            })
            const data = await JSON.stringify(response);
            console.log("data: ", data);
          
            toast({
                title: "You submitted the following values:",
                description: (
                  <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">Submitted</code>
                  </pre>
                ),
              })
        } catch (error) {
            console.log(error, {status: 400})
        }
    }; 
    
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
                            <Input className="w-[200px]" placeholder="Resolution No" value={resolutionNo} onChange={(e) => setResolutionNO(e.target.value)} />
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
                            <Input className="w-[200px]" placeholder="Link" value={link} onChange={(e) => setLink(e.target.value)} />
                        </div>
                    </div>
                    <br></br><br></br>
                    <div className="flex items-center justify-center">
                        <Button className="font-body font-thin text-lg bg-[#5E859E]" type="submit" onClick={handleSubmit}>Upload</Button>
                    </div>
                <br></br>
                </div>
    </div>
    )
}