export function ResoPage(){
    return(

    <div className="grid-container">
      <div style={{background:"#5E859E"}}></div>
      <div style={{background:"#8CB1B0"}}></div>
      <div style={{background:"#C2CFE1"}}></div>

      <div className="font-body mx-20 font-body font-thin text-3xl p-4">
          <div className="py-2">Resolution No:</div>
          <div className="py-2">Main Submitter:</div>
          <div className="py-2">Committee: </div>
          <div className="py-2">Question of:</div>
          <div className="py-2">Co-Submitters:</div>
          <br></br><br></br><br></br><br></br>

          <iframe src="https://docs.google.com/document/d/e/2PACX-1vScEOCMGhLr3ysC4rHiqJQJOBO-wehidEW4rNijguHdBlaibknRRH_pZwvx7VPYBXkjVfU6oPZw5XcE/pub?embedded=true" className="h-[1050px] w-full shadow-md"></iframe>
          <br></br><br></br>
      
      </div>
    </div>
  )
};

export default ResoPage;
        
