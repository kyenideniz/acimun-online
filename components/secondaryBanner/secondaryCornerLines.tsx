import styles from "@/components/secondaryBanner/secondaryCornerLines.module.css"

export function CornerLines(){
    return(
        <div>
            <div className="">
                <div className={styles.rightUpperVar1}></div>
                <div className={styles.rightUpperVar2}></div>
                <div className={styles.rightUpperVar3}></div>
        
                <div className={styles.leftLowerVar1}></div>
                <div className={styles.leftLowerVar2}></div>
                <div className={styles.leftLowerVar3}></div>
            </div>
            
        </div>
    );
};

export default CornerLines;