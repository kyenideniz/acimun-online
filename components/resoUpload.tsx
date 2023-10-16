import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function ResoUpload(){
    return(

    <div className="grid-container">
        <div style={{background:"#5E859E"}}></div>
        <div style={{background:"#8CB1B0"}}></div>
        <div style={{background:"#C2CFE1"}}></div>
        <div className="p-4">

        <div className="mx-[15%]">
            <Card className="w-[100%]">
                <div className="mx-20 ">
                    <div className="text-4xl mt-20 py-2 text-center">Upload Resolutions</div>
                    <hr className="rounded w-[100%]"></hr>
                </div>

                <div className="font-body mx-20 font-body font-thin text-3xl p-4 my-10">
                    <div className="grid grid-cols-2">
                        <div className="py-2 ">Main Submitter:</div>
                        <div className="left py-2 z-10">
                            <Input type="text" placeholder="Main Submitter" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2">
                        <div className="py-2">Committee: </div>
                        <div className="left py-2 z-10">
                            <Input type="text" placeholder="Committee" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="py-2">Resolution No:</div>
                        <div className="left py-2 z-10">
                            <Input type="text" placeholder="Resolution No" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="py-2">Question of:</div>
                        <div className="left py-2 z-10">
                            <Input type="text" placeholder="Question of" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="py-2">Co-Submitters:</div>
                        <div className="left py-2 z-10">
                            <Input type="text" placeholder="Co-Submitters" />
                        </div>
                    </div>
                    <br></br><br></br>
                    <div className="flex items-center justify-center">
                        <Button className="font-body font-thin text-lg bg-[#5E859E]">Upload</Button>
                    </div>
                    <br></br>
                </div>
            </Card>
        </div>
      </div>
    </div>
  )
};

export default ResoUpload;
        
