import { Icon } from "@/app/svgs/svgs";
import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";


export default function Checks() {
    return (

        <div id="check" className="w-full relative grid grid-cols-[minmax(16px,1fr)_minmax(360px,1200px)_minmax(16px,1fr)] pt-20 bg-btn-bg pb-20 overflow-hidden font-sans">
            <Image
                src={`${basePath}/town3.png`}
                alt="image not loading"
                width={1140}
                height={661}
                className="absolute opacity-30 bottom-0 right-0 z-0 rotate-y-180"
            />
            <div className="col-2 w-full flex flex-col z-2">
                <h3 className="text-second-color font-bold ">
                    ПРОВЕРКИ
                </h3>
                <h2 className="text-white text-4xl font-bold pt-4 pb-10 font-serif">
                    Три модуля проверки назначенного наказания
                </h2>
                <div className="w-full grid grid-cols-3 gap-x-4 justify-between items-stretch ">

                    <div className="flex gap-y-2 flex-col p-5 backdrop-blur-md bg-[#0d2d5250] border-2 border-[#0343a35e] rounded-2xl">

                        <div className="mb-2 bg-transparent flex justify-between items-center ">
                           <span className="p-2 bg-second-blurcolor border rounded-xl border-second-color"> <Icon name="crosshair" color="#C29A4B" size={24} /> </span> <span className="block p-4 text-base bg-transparent rounded-full w-fit relative"><span className="absolute top-1/2 left-1/2 -translate-1/2 text-[#8A97AB80] font-extrabold tracking-tight text-3xl font-serif">01</span></span>
                        </div>

                        <p className="font-bold text-white text-xl">
                            Соответствие санкции статьи УК РФ
                        </p>
                        <ul className="flex flex-col gap-y-3">
                            <li className="flex gap-3 py-3 items-start  flex-row text-base text-btn-bg">
                                <span className="block p-2 rounded-xl "><Icon name="check" color="#C29A4B" size={20} /></span>
                                <div>
                                  
                                    <p className="text-light-blue">Определение статьи, части и квалифицирующих признаков</p>
                                </div>
                            </li>
                            <li className="flex gap-3 py-3 items-start  flex-row text-base text-btn-bg">
                                <span className="block p-2 rounded-xl "><Icon name="check" color="#C29A4B" size={20} /></span>
                                <div>
                                 
                                    <p className="text-light-blue">Сверка вида и срока наказания с пределами санкции</p>
                                </div>
                            </li>
                            <li className="flex gap-3 py-3 items-start  flex-row text-base text-btn-bg">
                                <span className="block p-2 rounded-xl "><Icon name="check" color="#C29A4B" size={20} /></span>
                                <div>
                                   
                                    <p className="text-light-blue">Подсветка выхода за минимальный или максимальный предел</p>
                                </div>
                            </li>
                        </ul>

                    </div>

                    <div className="flex gap-y-2 flex-col p-5 backdrop-blur-md bg-[#0d2d5250] border-2 border-[#0343a35e] rounded-2xl">

                        <div className="mb-2 bg-transparent flex justify-between items-center ">
                           <span className="p-2 bg-second-blurcolor border rounded-xl border-second-color"> <Icon name="book" color="#C29A4B" size={24} /> </span> <span className="block p-4 text-base bg-transparent rounded-full w-fit relative"><span className="absolute top-1/2 left-1/2 -translate-1/2 text-[#8A97AB80] font-extrabold tracking-tight text-3xl font-serif">02</span></span>
                        </div>

                        <p className="font-bold text-white text-xl">
                           Правила Общей части УК РФ
                        </p>
                        <ul className="flex flex-col gap-y-3">
                            <li className="flex gap-3 py-3 items-start  flex-row text-base text-btn-bg">
                                <span className="block p-2 rounded-xl "><Icon name="check" color="#C29A4B" size={20} /></span>
                                <div>
                                  
                                    <p className="text-light-blue">Ст. 60–72: общие начала и правила назначения наказания</p>
                                </div>
                            </li>
                            <li className="flex gap-3 py-3 items-start  flex-row text-base text-btn-bg">
                                <span className="block p-2 rounded-xl "><Icon name="check" color="#C29A4B" size={20} /></span>
                                <div>
                                 
                                    <p className="text-light-blue">Ст. 62, 64–66: смягчение и пределы наказания</p>
                                </div>
                            </li>
                            <li className="flex gap-3 py-3 items-start  flex-row text-base text-btn-bg">
                                <span className="block p-2 rounded-xl "><Icon name="check" color="#C29A4B" size={20} /></span>
                                <div>
                                   
                                    <p className="text-light-blue">Раздел IV: основания освобождения от ответственности</p>
                                </div>
                            </li>
                        </ul>

                    </div>

                     <div className="flex gap-y-2 flex-col p-5 backdrop-blur-md bg-[#0d2d5250] border-2 border-[#0343a35e] rounded-2xl">

                        <div className="mb-2 bg-transparent flex justify-between items-center ">
                           <span className="p-2 bg-second-blurcolor border rounded-xl border-second-color"> <Icon name="bar-chart" color="#C29A4B" size={24} /> </span> <span className="block p-4 text-base bg-transparent rounded-full w-fit relative"><span className="absolute top-1/2 left-1/2 -translate-1/2 text-[#8A97AB80] font-extrabold tracking-tight text-3xl font-serif">03</span></span>
                        </div>

                        <p className="font-bold text-white text-xl">
                           Статистика правоприменительной практики
                        </p>
                        <ul className="flex flex-col gap-y-3">
                            <li className="flex gap-3 py-3 items-start  flex-row text-base text-btn-bg">
                                <span className="block p-2 rounded-xl "><Icon name="check" color="#C29A4B" size={20} /></span>
                                <div>
                                  
                                    <p className="text-light-blue">Поиск похожих дел по квалификации и обстоятельствам</p>
                                </div>
                            </li>
                            <li className="flex gap-3 py-3 items-start  flex-row text-base text-btn-bg">
                                <span className="block p-2 rounded-xl "><Icon name="check" color="#C29A4B" size={20} /></span>
                                <div>
                                 
                                    <p className="text-light-blue">Медиана и диапазон назначенных наказаний</p>
                                </div>
                            </li>
                            <li className="flex gap-3 py-3 items-start  flex-row text-base text-btn-bg">
                                <span className="block p-2 rounded-xl "><Icon name="check" color="#C29A4B" size={20} /></span>
                                <div>
                                   
                                    <p className="text-light-blue">Отклонения от практики с пояснением</p>
                                </div>
                            </li>
                        </ul>

                    </div>

                </div>
            </div>
        </div>

    )
}
