import { cn } from "@/lib/utils";
import { MouseEventHandler } from "react";
import { Button } from "./button";

interface IconButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    icon: React.ReactElement;
    className?: string;
    disabled?: boolean;
}
const IconButton: React.FC<IconButtonProps> = ({
    onClick,
    icon,
    className,
    disabled,
}) => {
    return ( 
        <div>
            <button 
            disabled={disabled}
            onClick={onClick}
            className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition", 
                className
            )}
             >
            {icon}
        </button>
        </div>
     );
}
 
export default IconButton;