import { Icon } from "@/app/svgs/svgs"
import Image from "next/image"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";


export default function Solution() {
    return (
        <div id="solutions" className="w-full relative  grid grid-cols-[minmax(16px,1fr)_minmax(360px,1200px)_minmax(16px,1fr)] pt-20 bg-second-bg pb-20">
            <Image
                src={`${basePath}/town.png`}
                alt="image not loading"
                width={1140}
                height={661}
                className="absolute opacity-20 bottom-0 right-0 z-0 "
            />
            <div className="col-2 w-full flex flex-col z-2">
                <h3 className="text-second-color font-bold font-sans">
                    РЕШЕНИЕ
                </h3>
                <h2 className="text-btn-bg text-4xl font-bold pt-4 pb-3 font-serif">
                    «Второе мнение»
                </h2>
                <p className="text-light-blue text-base pb-8 font-sans">
                    Не заменяет судью, а помогает проверить и обосновать решение до его вынесения.
                </p>
                <div className="w-full grid grid-cols-3 gap-x-4 justify-between items-stretch ">

                    <div className="flex gap-y-2 flex-col p-5 bg-white border border-[#E0E6EF] rounded-2xl font-sans">

                        <div className="mb-2 p-3 bg-second-bg size-fit rounded-xl">
                            <Icon name="user" color="#2A5C9A" size={22} />
                        </div>
                        <p className="font-bold text-btn-bg text-base">
                            Человек в контуре
                        </p>
                        <p className="text-light-blue">
                            Окончательное решение всегда принимает судья
                        </p>
                    </div>

                    <div className="flex gap-y-2 flex-col p-5 bg-white border border-[#E0E6EF] rounded-2xl font-sans">

                        <div className="mb-2 p-3 bg-second-bg size-fit rounded-xl">
                            <Icon name="eye" color="#2A5C9A" size={22} />
                        </div>
                        <p className="font-bold text-btn-bg text-base">
                            Человек в контуре
                        </p>
                        <p className="text-light-blue">
                            Окончательное решение всегда принимает судья
                        </p>
                    </div>

                    <div className="flex gap-y-2 flex-col p-5 bg-white border border-[#E0E6EF] rounded-2xl font-sans">

                        <div className="mb-2 p-3 bg-second-bg size-fit rounded-xl">
                            <Icon name="file-text" color="#2A5C9A" size={22} />
                        </div>
                        <p className="font-bold text-btn-bg text-base">
                            Человек в контуре
                        </p>
                        <p className="text-light-blue">
                            Окончательное решение всегда принимает судья
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}