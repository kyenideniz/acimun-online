import { PrismaClient } from "@prisma/client"
import { mainSubVal, committeeVal, resolutionNoVal, questionOfVal, coSubsVal, linkVal } from "@/components/resoUpload/popUp"
const prisma = new PrismaClient();

export const getServerSideProps = async () => {
    const Approved = await prisma.approved.create({
        data: {
            mainSub: mainSubVal,
            committee: committeeVal,
            resolutionNo: resolutionNoVal,
            questionOf: questionOfVal,
            coSubs: coSubsVal,
            link: linkVal
        }
    })
  
    return { props: { Approved } }
  }

export async function connect() {
    const Approved = await prisma.approved.create({
        data: {
            mainSub: mainSubVal,
            committee: committeeVal,
            resolutionNo: resolutionNoVal,
            questionOf: questionOfVal,
            coSubs: coSubsVal,
            link: linkVal
        }
    })
    console.log(Approved);
}