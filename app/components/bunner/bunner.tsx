import Image from "next/image"
import { Icon } from "@/app/svgs/svgs"



const url = "https://roollloo35-max.github.io/second_view/"

export default function Bunner() {
    return (
        <div className="bg-btn-bg w-full mt-35 py-19 relative overflow-hidden grid grid-cols-[minmax(16px,1fr)_minmax(360px,1200px)_minmax(16px,1fr)]" id="bunner">
            <img
                src={`${url}hero.png`}
                alt="image not loading"
                width={1140}
                height={661}
                className="absolute bottom-0 right-0 "
            />
            <div className="col-2 relative">
                <div className="absolute bottom-0 right-0 z-1">

                </div>
                <div className="bg-second-blurcolor rounded-full px-8 py-3 text-sm size-fit gap-x-4 text-center flex items-center font-sans text-second-color " >
                    <span className="w-3 rounded-full h-3 block bg-second-color "></span>    Всероссийский конкурс студенческих проектов при Верховном Суде РФ
                </div>
                <h1 className="mt-15 text-5xl leading-14 font-bold text-white w-[50%] font-serif">
                    Цифровой советник судьи:
                    <span className="text-second-color"> второе мнение.</span>
                </h1>
                <p className="mt-15 text-xl  font-normal  w-[70%] font-sans">
                    Прототип ПО, который проверяет назначенное наказание на соответствие санкции статьи УК РФ, правилам Общей части и статистике правоприменительной практики.
                </p>
                <div className="flex gap-3 mt-10">
                    <a  href="public/concept.pdf" download="index.txt" className="flex gap-4 bg-second-color font-sans econd-color items-center px-6 py-4 text-btn-bg font-bold text-base rounded-xl cursor-pointer  "><span>                            
                        <Icon name="download" color="#0B1F3A" size={22} />
                    </span> Скачать концепцию (PDF)</a>

                </div>
                <div className="flex w-[50%] justify-between mt-12 font-sans">
                    <div className="flex items-center gap-x-3">
                        <div className="p-3 bg-[#ffffff10] rounded-xl">
                            <Icon name="users" color="#C29A4B" size={22} />
                        </div>

                        <div>
                            <p className="text-white text-bold">2–5 человек</p>
                            <p>Команда</p>
                        </div>
                        
                    </div>
                  <div className="ml-60 pr-0.5 bg-dark-blue"></div>
                    <div className="flex items-center gap-x-3 ">
                        <div className="p-3 bg-[#ffffff10] rounded-xl">
                            <Icon name="clock" color="#C29A4B" size={22} />

                        </div>

                        <div >
                            <p className="text-white text-bold"> 2 этапа</p>
                            <p className="">Реализация</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}