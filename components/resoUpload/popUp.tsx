"use client"

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SelectBox } from "@/components/selectBox";

import { delegations, GA } from  "@/components/resoUpload/lists"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, useForm } from "react-hook-form";
import { toast } from "@/components/ui/use-toast"

type FormData = {
    mainSub: string;
    committee: string;
    resolutionNo: string;
    questionOf: string;
    coSubs: string;
  };

export function PopUp(){
    const schema: z.ZodType<FormData> = z
    .object({
      mainSub: z.string({required_error: "Please select a 'Main Submitter' to display.",}).min(2).max(30),
      committee: z.string({required_error: "Please select a 'Committee'to display.",}).min(2).max(30),
      resolutionNo: z.string({required_error: "Please type a 'Resolution No' to display.",}).email(),
      questionOf: z.string({required_error: "Please select an 'Issue' to display.",}).min(18).max(70),
      coSubs: z.string({required_error: "Please select 'Co-Submitters' to display.",}).min(5).max(20),
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<FormData>({
        resolver: zodResolver(schema),
      });

    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
      })
    
      function onSubmit(data: z.infer<typeof schema>) {
        toast({
          title: "You submitted the following values:",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">{JSON.stringify(data, null, 2)}</code>
            </pre>
          ),
        })
      }

    return(
        <div className="">
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="mx-20 ">
                    <div className="text-4xl mt-20 py-2 text-center">Upload Resolutions</div>
                    <hr className="rounded w-[100%]"></hr>
                </div>

                <div className="font-body mx-20 font-body font-thin text-3xl p-4 my-10">
                    <div className="grid grid-cols-2">
                        <div className="py-2 ">Main Submitter:</div>
                        <div className="left py-2 z-10">
                            <SelectBox frameworks={delegations} {...register("mainSub")}/>
                        </div>
                    </div>

                    <div className="grid grid-cols-2">
                        <div className="py-2">Committee: </div>
                        <div className="left py-2 z-10">
                            <SelectBox frameworks={GA} {...register("committee")} />
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="py-2">Resolution No:</div>
                        <div className="left py-2 z-10">
                            <Input className="w-[200px]" placeholder="Resolution #No" {...register("resolutionNo")} />
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="py-2">Question of:</div>
                        <div className="left py-2 z-10">
                            <SelectBox frameworks={delegations} {...register("questionOf")} /> 
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="py-2">Co-Submitters:</div>
                        <div className="left py-2 z-10">
                            <SelectBox frameworks={delegations} {...register("coSubs")} />
                        </div>
                    </div>
                    <br></br><br></br>
                    <div className="flex items-center justify-center">
                        <Button className="font-body font-thin text-lg bg-[#5E859E]" type="submit">Upload</Button>
                    </div>
                <br></br>
                </div>
            </form>
        </Form>
    </div>
    )
}

