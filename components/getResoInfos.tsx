import prismadb from "@/lib/prismadb";
import ResoContainer from "@/components/resoInfoBox";

export async function GetApprovedInfo(){
  const approvedNumber = await prismadb.approved.aggregate({
    _count: {
      id: true,
    },
  })
  return (approvedNumber._count.id);
}
export async function GetLatestApproved(){
    const approvedLates = await prismadb.approved.findMany({
        orderBy: {
          updatedAt:'desc',
        },
        take:4
      })
    return(
        <div className="grid grid-cols-2">
            <ResoContainer submitter={approvedLates[0].mainSub} committee={approvedLates[0].committee} resolutionNo={approvedLates[0].resolutionNo} issue={approvedLates[0].questionOf} link={approvedLates[0].link} id={approvedLates[0].id} />
            <ResoContainer submitter={approvedLates[1].mainSub} committee={approvedLates[1].committee} resolutionNo={approvedLates[1].resolutionNo} issue={approvedLates[1].questionOf} link={approvedLates[1].link} id={approvedLates[1].id} />
            <ResoContainer submitter={approvedLates[2].mainSub} committee={approvedLates[2].committee} resolutionNo={approvedLates[2].resolutionNo} issue={approvedLates[2].questionOf} link={approvedLates[2].link} id={approvedLates[2].id} />
            <ResoContainer submitter={approvedLates[3].mainSub} committee={approvedLates[3].committee} resolutionNo={approvedLates[3].resolutionNo} issue={approvedLates[3].questionOf} link={approvedLates[3].link} id={approvedLates[3].id} />
        </div>
    )
}

export async function getInfo( id:string ) {
  // fetch data from database with id
  const reso = await prismadb.approved.findUnique({
    where: {
      id: id,
    },
  })

  return {
    reso,  // will be passed to the page component as props
  }
}