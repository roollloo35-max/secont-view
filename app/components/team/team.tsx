import { Icon } from "@/app/svgs/svgs";

export default function Team() {
    return (
        <div id="team" className=" w-full relative grid grid-cols-[minmax(16px,1fr)_minmax(360px,1200px)_minmax(16px,1fr)] pt-20 bg-white pb-20 overflow-hidden font-sans">

            <div className="col-2 w-full flex flex-col z-2">
                <h3 className="text-second-color font-bold ">
                    КОМАНДА
                </h3>
                <h2 className="text-btn-bg text-4xl font-bold pt-4 pb-10 font-serif">
                    Команда проекта
                </h2>
                <div className="w-full grid grid-cols-5 gap-x-4 justify-between items-stretch text-center">

                    <div className="flex gap-y-2 flex-col p-5 bg-second-bg border border-[#E0E6EF] rounded-2xl">

                        <div className="mb-2 bg-transparent flex justify-center items-center ">
                            <div className="p-5 bg-white rounded-full"> <Icon name="user" color="#2A5C9A" size={32} /></div>
                        </div>
                        <p className="font-bold text-btn-bg text-base">
                            Имя Фамилия
                        </p>
                        <p className="text-light-blue">
                            Руководитель проекта, юридическое направление
                        </p>
                    </div>

                    <div className="flex gap-y-2 flex-col p-5 bg-second-bg border border-[#E0E6EF] rounded-2xl">

                        <div className="mb-2 bg-transparent flex justify-center items-center ">
                            <div className="p-5 bg-white rounded-full"> <Icon name="user" color="#2A5C9A" size={32} /></div>
                        </div>
                        <p className="font-bold text-btn-bg text-base">
                            Козинец Никита Сергеевич
                        </p>
                        <p className="text-light-blue">
                            AI / ML, Data Science
                        </p>
                    </div>

                    <div className="flex gap-y-2 flex-col p-5 bg-second-bg border border-[#E0E6EF] rounded-2xl">

                        <div className="mb-2 bg-transparent flex justify-center items-center ">
                            <div className="p-5 bg-white rounded-full"> <Icon name="user" color="#2A5C9A" size={32} /></div>
                        </div>
                        <p className="font-bold text-btn-bg text-base">
                            Щербин Леонид Александрович
                        </p>
                        <p className="text-light-blue">
                            Backend-разработчик
                        </p>
                    </div>

                    <div className="flex gap-y-2 flex-col p-5 bg-second-bg border border-[#E0E6EF] rounded-2xl">

                        <div className="mb-2 bg-transparent flex justify-center items-center ">
                            <div className="p-5 bg-white rounded-full"> <Icon name="user" color="#2A5C9A" size={32} /></div>
                        </div>
                        <p className="font-bold text-btn-bg text-base">
                            Драган Алексей Дмитриевич
                        </p>
                        <p className="text-light-blue">
                            Fontend-разработчик
                        </p>
                    </div>

                    <div className="flex gap-y-2 flex-col p-5 bg-second-bg border border-[#E0E6EF] rounded-2xl">

                        <div className="mb-2 bg-transparent flex justify-center items-center ">
                            <div className="p-5 bg-white rounded-full"> <Icon name="user" color="#2A5C9A" size={32} /></div>
                        </div>
                        <p className="font-bold text-btn-bg text-base">
                            Доля Егор Дмитриевич
                        </p>
                        <p className="text-light-blue">
                            Дизайнер
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}