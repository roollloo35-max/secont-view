import { Icon } from "@/app/svgs/svgs"
import Image from "next/image"




export default function HowWork() {
    return (
        <div id="how-work" className="w-full relative grid grid-cols-[minmax(16px,1fr)_minmax(360px,1200px)_minmax(16px,1fr)] pt-20 bg-white pb-20 overflow-hidden font-sans">
            <img
                src={`/secont-view/town2.png`}
                alt="image not loading"
                width={1140}
                height={661}
                className="absolute opacity-20 -bottom-4 left-0 z-0 rotate-y-180"
            />
            <div className="col-2 w-full flex flex-col z-2">
                <h3 className="text-second-color font-bold ">
                    КАК ЭТО РАБОТАЕТ
                </h3>
                <h2 className="text-btn-bg text-4xl font-bold pt-4 pb-10 font-serif">
                   От проекта приговора до отчёта за четыре шага
                </h2>
                <div className="w-full grid grid-cols-4 gap-x-4 justify-between items-stretch ">
                    <div className="flex gap-y-2 flex-col p-5 bg-second-bg border border-[#E0E6EF] rounded-2xl">

                        <div className="mb-2 bg-second-bg flex justify-between items-center ">
                          <span className="block p-4 text-base bg-btn-bg rounded-full w-fit relative"><span className="absolute top-1/2 left-1/2 -translate-1/2 text-second-color">1</span></span>  <Icon name="upload" color="#2A5C9A" size={22} />
                        </div>
                        <p className="font-bold text-btn-bg text-base">
                           Загрузка проекта судебного акта
                        </p>
                        <p className="text-light-blue">
                            Файлы в форматах .pdf и .docx
                        </p>
                    </div>


                    <div className="flex gap-y-2 flex-col p-5 bg-second-bg border border-[#E0E6EF] rounded-2xl">

                        <div className="mb-2 bg-second-bg flex justify-between items-center ">
                          <span className="block p-4 text-base bg-btn-bg rounded-full w-fit relative"><span className="absolute top-1/2 left-1/2 -translate-1/2 text-second-color">2</span></span>  <Icon name="crosshair" color="#2A5C9A" size={22} />
                        </div>
                        <p className="font-bold text-btn-bg text-base">
                           Извлечение параметров
                        </p>
                        <p className="text-light-blue">
                            Квалификация, личность, смягчающие и отягчающие обстоятельства, назначенное наказание
                        </p>
                    </div>


                    <div className="flex gap-y-2 flex-col p-5 bg-second-bg border border-[#E0E6EF] rounded-2xl">

                        <div className="mb-2 bg-second-bg flex justify-between items-center ">
                          <span className="block p-4 text-base bg-btn-bg rounded-full w-fit relative"><span className="absolute top-1/2 left-1/2 -translate-1/2 text-second-color">3</span></span>  <Icon name="scales" color="#2A5C9A" size={22} />
                        </div>
                        <p className="font-bold text-btn-bg text-base">
                           Три проверки
                        </p>
                        <p className="text-light-blue">
                            Санкция статьи, правила Общей части, статистика практики
                        </p>
                    </div>


                    <div className="flex gap-y-2 flex-col p-5 bg-second-bg border border-[#E0E6EF] rounded-2xl">

                        <div className="mb-2 bg-second-bg flex justify-between items-center ">
                          <span className="block p-4 text-base bg-btn-bg rounded-full w-fit relative"><span className="absolute top-1/2 left-1/2 -translate-1/2 text-second-color">4</span></span>  <Icon name="file-text" color="#2A5C9A" size={22} />
                        </div>
                        <p className="font-bold text-btn-bg text-base">
                           Отчёт с обоснованием
                        </p>
                        <p className="text-light-blue">
                            Отклонения, ссылки на нормы и похожие дела для судьи
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

