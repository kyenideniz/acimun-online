import prismadb from "@/lib/prismadb";

export async function ResoPage(){
  const reso = await prismadb.approved.findUnique({
    where: {
      id: "6536ba335208349a797318cc",
    },
  })

  return(

    <div className="grid-container">
      <div style={{background:"#5E859E"}}></div>
      <div style={{background:"#8CB1B0"}}></div>
      <div style={{background:"#C2CFE1"}}></div>

      <div className="font-body mx-20 font-body font-thin text-3xl p-4">
          <div className="py-2">Main Submitter: {reso?.mainSub} </div>
          <div className="py-2">Committee: {reso?.committee} </div>
          <div className="py-2">Resolution No: {reso?.resolutionNo} </div>
          <div className="py-2">Question of: {reso?.questionOf} </div>
          <div className="py-2">Co-Submitters: {reso?.coSubs} </div>
          <br></br><br></br><br></br><br></br>

          <iframe src="https://docs.google.com/document/d/e/2PACX-1vScEOCMGhLr3ysC4rHiqJQJOBO-wehidEW4rNijguHdBlaibknRRH_pZwvx7VPYBXkjVfU6oPZw5XcE/pub?embedded=true" className="h-[1050px] w-full shadow-md"></iframe>
          <br></br><br></br>
      
      </div>
    </div>
  )
};

export default ResoPage;
        
