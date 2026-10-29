import { Icon } from "@/app/svgs/svgs"


export default function About() {
    return (
        <div id="about" className="w-full  grid grid-cols-[minmax(16px,1fr)_minmax(360px,1200px)_minmax(16px,1fr)] pt-20 bg-white pb-20">
            <div className="col-2 w-full flex flex-col">
                <h3 className="text-second-color font-bold font-sans">
                    ПРОБЛЕМА
                </h3>
                <h2 className="text-btn-bg text-4xl font-bold pt-4 pb-3 font-serif">
                    Риск судебных ошибок при назначении наказания
                </h2>
                <p className="text-light-blue text-base pb-8 font-sans">Ошибки возникают из-за несоблюдения положений Общей и Особенной части УК РФ, неучёта оснований освобождения от ответственности и расхождений с судебной практикой.</p>

                <div className="w-full grid grid-cols-4 gap-x-4 justify-between items-stretch ">

                    <div className="flex gap-y-2 flex-col p-5 bg-[#F4F6FA] border border-[#E0E6EF] rounded-2xl">

                        <div className="mb-2 p-3 bg-[#FBEAE6] size-fit rounded-xl">
                            <Icon name="alert-triangle" color="#C29A4B" size={22} />
                        </div>
                        <p className="font-bold text-btn-bg text-base font-sans">
                            Выход за пределы санкции
                        </p>
                        <p className="text-light-blue font-sans">
                            Наказание не соответствует санкции статьи Особенной части УК РФ
                        </p>
                    </div>

                    <div className="flex gap-y-2 flex-col p-5 bg-[#F4F6FA] border border-[#E0E6EF] rounded-2xl">

                        <div className="mb-2 p-3 bg-[#E8EFF9] size-fit rounded-xl">
                            <Icon name="book" color="#C29A4B" size={22} />
                            
                        </div>
                        <p className="font-bold text-btn-bg text-base font-sans">
                            Нарушение правил Общей части
                        </p>
                        <p className="text-light-blue font-sans">
                            Ошибки применения ст. 60–72 УК РФ при назначении наказания
                        </p>
                    </div>


                    <div className="flex gap-y-2 flex-col p-5 bg-[#F4F6FA] border border-[#E0E6EF] rounded-2xl">

                        <div className="mb-2 p-3 bg-[#E8EFF9] size-fit rounded-xl">
                            <Icon name="shield-check" color="#C29A4B" size={22} />
                            
                        </div>
                        <p className="font-bold text-btn-bg text-base font-sans">
                            Неучёт оснований освобождения
                        </p>
                        <p className="text-light-blue font-sans">
                            Раздел IV УК РФ: освобождение от ответственности и наказания
                        </p>
                    </div>


                    <div className="flex gap-y-2 flex-col p-5 bg-[#F4F6FA] border border-[#E0E6EF] rounded-2xl font-sans">
                        
                        <div className="mb-2 p-3 bg-[#E8EFF9] size-fit rounded-xl">
                            <Icon name="bar-chart" color="#C29A4B" size={22} />
                            
                        </div>
                        <p className="font-bold text-btn-bg text-base">
                            Расхождения с практикой
                        </p>
                        <p className="text-light-blue">
                            Постановления Пленума и решения Президиума ВС РФ
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}