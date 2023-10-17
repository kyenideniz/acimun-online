import { Skeleton } from "@/components/ui/skeleton"

export function ProfileInfo() {
  return (
    <div className="flex items-center space-x-4 py-6">
      <Skeleton className="h-20 w-20 rounded-full" />
      <div className="space-y-2 font-body font-thin text-2xl">
        1 New Message
      </div>
    </div>
  )
}
