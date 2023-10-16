import styles from "@/components/mainBannerComps/cornerLines.module.css"
export function CornerLines(){
    return(
        <>
            <div className={styles.leftUpperVar1}></div>
            <div className={styles.leftUpperVar2}></div>
            <div className={styles.leftUpperVar3}></div>
    
            <div className="triangle lower rightLowerVar1"></div>
            <div className="triangle lower rightLowerVar2"></div>
            <div className="triangle lower rightLowerVar3"></div>
        </>
    );
};

export default CornerLines;