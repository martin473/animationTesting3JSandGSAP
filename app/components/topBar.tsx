import ButtonRow from "./buttonRow";
import Image from "next/image";

export default function TopBar({url, bgCol="bg-gray-300/20", textCol=""}:{url: string; textCol: string; bgCol: string}){
    return(
        <div>
            <ButtonRow/>
            <div className={`flex items-center justify-between ${bgCol} border-black/10 border-t border-b h-5`}>
                <Image 
                    className="m-1"
                    src="/icons/info-circle.png"
                    alt="broken"
                    width="10"
                    height="10"/>
                <p className={`ml-1 w-50 truncate ${textCol} font-thin text-xs font-[Open_Sans]`}>
                    { url }
                </p>
                <Image
                    className="m-1"
                    src="/icons/magnifying-glass.png"
                    alt="broken"
                    width="10"
                    height="10"/>
            </div>
        </div>
    )
}