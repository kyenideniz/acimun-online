"use client"

import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

import { mainSubVal, committeeVal, resolutionNoVal, questionOfVal, coSubsVal, linkVal } from "@/components/resoUpload/form"

export const InfoToast = ({
}) => {

  const { toast } = useToast()

  return (
    <Button
      variant="outline"
      onClick={() => {
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
      }}
    >
      Add to calendar
    </Button>
  )
}
