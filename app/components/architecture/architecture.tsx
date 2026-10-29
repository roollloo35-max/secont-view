import { Icon } from "@/app/svgs/svgs"
import styles from "@/app/components/architecture/archet.module.css"
import Image from "next/image"

export default function Architecture() {
    return (
        <div className="w-full relative grid grid-cols-[minmax(16px,1fr)_minmax(360px,1200px)_minmax(16px,1fr)] pt-20 bg-second-bg pb-20">
            <div className="col-2 w-full flex flex-col">
                <h3 className="text-second-color font-bold ">
                    АРХИТЕКТУРА
                </h3>
                <h2 className="text-btn-bg text-4xl font-bold pt-4 pb-10">
                    Архитектура системы
                </h2>
                <div className="w-full flex gap-x-2 justify-between items-stretch ">
                    <div className="flex flex-row items-center">
                        <div className="flex p-5 border  rounded-2xl border-[#E0E6EF] bg-white flex-col justify-center items-center">

                            <div className="mb-2  flex justify-center items-center ">
                                <div className=" p-4 bg-second-bg size-fit rounded-full">
                                    <Icon name="upload" color="#2A5C9A" size={24} />
                                </div>
                            </div>
                            <p className="font-bold mt-4 text-center text-btn-bg text-base">
                                Загрузка документа
                            </p>

                        </div>
                        <div className="flex -gap-x-2">
                            <span className={`${styles.arrow}  +  ${styles.arrow_left}`}></span>
                            <span className={styles.arrow}></span>
                            <span className={`${styles.arrow}  +  ${styles.arrow_right}`}></span>
                        </div>
                    </div>
                    <div className="flex flex-row items-center">
                        <div className="flex p-5 border  rounded-2xl border-[#E0E6EF] bg-white flex-col justify-center items-center">

                            <div className="mb-2  flex justify-center items-center ">
                                <div className=" p-4 bg-second-bg size-fit rounded-full">
                                    <Icon name="crosshair" color="#2A5C9A" size={24} />
                                </div>
                            </div>
                            <p className="font-bold mt-4 text-center text-btn-bg text-base">
                                Извлечение параметров
                            </p>

                        </div>
                        <div className="flex -gap-x-2">
                            <span className={`${styles.arrow}  +  ${styles.arrow_left}`}></span>
                            <span className={styles.arrow}></span>
                            <span className={`${styles.arrow}  +  ${styles.arrow_right}`}></span>
                        </div>
                    </div>
                    <div className="flex flex-row items-center">
                        <div className="flex p-5 border  rounded-2xl border-[#E0E6EF] bg-white flex-col justify-center items-center">

                            <div className="mb-2  flex justify-center items-center ">
                                <div className=" p-4 bg-second-bg size-fit rounded-full">
                                    <Icon name="scales" color="#2A5C9A" size={24} />
                                </div>
                            </div>
                            <p className="font-bold mt-4 text-center text-btn-bg text-base">
                                Проверка по нормам
                            </p>

                        </div>
                        <div className="flex -gap-x-2">
                            <span className={`${styles.arrow}  +  ${styles.arrow_left}`}></span>
                            <span className={styles.arrow}></span>
                            <span className={`${styles.arrow}  +  ${styles.arrow_right}`}></span>
                        </div>
                    </div>
                    <div className="flex flex-row items-center">
                        <div className="flex p-5 border  rounded-2xl border-[#E0E6EF] bg-white flex-col justify-center items-center">

                            <div className="mb-2  flex justify-center items-center ">
                                <div className=" p-4 bg-second-bg size-fit rounded-full">
                                    <Icon name="search" color="#2A5C9A" size={24} />
                                </div>
                            </div>
                            <p className="font-bold mt-4 text-center text-btn-bg text-base">
                                Поиск похожих дел
                            </p>

                        </div>
                        <div className="flex -gap-x-2">
                            <span className={`${styles.arrow}  +  ${styles.arrow_left}`}></span>
                            <span className={styles.arrow}></span>
                            <span className={`${styles.arrow}  +  ${styles.arrow_right}`}></span>
                        </div>
                    </div>
                    <div className="flex flex-row items-center">
                        <div className="flex p-5 border  rounded-2xl border-[#E0E6EF] bg-white flex-col justify-center items-center">

                            <div className="mb-2  flex justify-center items-center ">
                                <div className=" p-4 bg-second-bg size-fit rounded-full">
                                    <Icon name="file-text" color="#2A5C9A" size={24} />
                                </div>
                            </div>
                            <p className="font-bold mt-4 text-center text-btn-bg text-base">
                                Объяснение и отчёт
                            </p>

                        </div>

                    </div>

                </div>
                <div className="w-full grid grid-cols-3 grid-wrap items-start gap-x-3 pt-8">
                    <div className="flex-col gap-y-18 p-7 border border-[#E0E6EF] rounded-2xl bg-white">
                        <p className="text-2xl text-btn-bg font-bold pb-5">
                            Технологический стек
                        </p>
                        <table className="rounded-2xl overflow-hidden">
                            <thead className="bg-[#E8EFF9] text-[#2A5C9A]">
                                <tr>
                                    <th scope="col " className="px-3 py-2.5 text-left">
                                        Компонент
                                    </th>
                                    <th scope="col " className="px-3 py-2.5 text-left">
                                        Технология
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="">
                                <tr className="border-b-2 border-light-blue">
                                    <td className="text-dark-blue px-3 py-2.5">Frontend</td>
                                    <td className="text-btn-bg px-3 py-2.5">Next.js, TypeScript</td>
                                </tr>
                                <tr className="border-b-2 border-light-blue ">
                                    <td className="text-dark-blue px-3 py-2.5">Backend</td>
                                    <td className="text-btn-bg px-3 py-2.5">Python, FastAPI</td>
                                </tr>
                                <tr className="border-b-2 border-light-blue ">
                                    <td className="text-dark-blue px-3 py-2.5">NLP / ML</td>
                                    <td className="text-btn-bg px-3 py-2.5">DeepPavlov, GigaChat / YandexGPT</td>
                                </tr>
                                <tr className="border-b-2 border-light-blue ">
                                    <td className="text-dark-blue px-3 py-2.5">Векторный поиск</td>
                                    <td className="text-btn-bg px-3 py-2.5">Qdrant</td>
                                </tr>
                                <tr className="border-b-2 border-light-blue ">
                                    <td className="text-dark-blue px-3 py-2.5">База данных</td>
                                    <td className="text-btn-bg px-3 py-2.5">PostgreSQL</td>
                                </tr>
                                <tr className="">
                                    <td className="text-dark-blue px-3 py-2.5">Контейнеризация</td>
                                    <td className="text-btn-bg px-3 py-2.5">Docker</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>




                    <div className="flex-col gap-y-18  p-7 border border-[#E0E6EF] rounded-2xl bg-white">
                        <p className="text-2xl text-btn-bg font-bold pb-5">
                            Правовая методология
                        </p>
                        <ul className="flex flex-col gap-y-3">
                            <li className="flex gap-3 px-3.5 py-3 items-center  flex-row text-base text-btn-bg"><span className="block p-1.5 rounded-full bg-second-color"></span>УК РФ: Общая, Особенная часть, Раздел IV</li>
                            <li className="flex gap-3 px-3.5 py-3 items-center  flex-row text-base text-btn-bg"><span className="block p-1.5 rounded-full bg-second-color"></span>УПК РФ</li>
                            <li className="flex gap-3 px-3.5 py-3 items-center  flex-row text-base text-btn-bg"><span className="block p-1.5 rounded-full bg-second-color"></span>Постановления Пленума ВС РФ</li>
                            <li className="flex gap-3 px-3.5 py-3 items-center  flex-row text-base text-btn-bg"><span className="block p-1.5 rounded-full bg-second-color"></span>Решения Президиума ВС РФ</li>
                            <li className="flex gap-3 px-3.5 py-3 items-center  flex-row text-base text-btn-bg"><span className="block p-1.5 rounded-full bg-second-color"></span>Редакции норм на момент совершения преступления</li>

                            <li className="flex rounded-2xl gap-3 px-3.5 py-3 items-start flex-row text-base text-second-color bg-second-blurcolor"><span className="block"><Icon name="shield-check" color="#C29A4B" size={18} /></span>Санкции и правила проверяются по редакции, действовавшей на момент совершения преступления.</li>
                        </ul>

                    </div>

                    <div className="flex-col gap-y-18  p-7 border border-[#E0E6EF] rounded-2xl bg-white">
                        <p className="text-2xl text-btn-bg font-bold pb-5">
                            Этика и данные
                        </p>
                        <ul className="flex flex-col gap-y-3">
                            <li className="flex gap-3 py-3 items-start  flex-row text-base text-btn-bg">
                                <span className="block p-2 rounded-xl bg-[#E8EFF9]"><Icon name="lock" color="#2A5C9A" size={20} /></span>
                                <div>
                                    <p className="text-btn-bg font-bold"> Российские технологии</p>
                                    <p className="text-light-blue">GigaChat / YandexGPT, DeepPavlov, PostgreSQL, Qdrant</p>
                                </div>
                            </li>
                            <li className="flex gap-3 py-3 items-start  flex-row text-base text-btn-bg">
                                <span className="block p-2 rounded-xl bg-[#E8EFF9]"><Icon name="shield-check" color="#2A5C9A" size={20} /></span>
                                <div>
                                    <p className="text-btn-bg font-bold"> Персональные данные </p>
                                    <p className="text-light-blue">Соответствие ФЗ № 152-ФЗ «О персональных данных»</p>
                                </div>
                            </li>
                            <li className="flex gap-3 py-3 items-start  flex-row text-base text-btn-bg">
                                <span className="block p-2 rounded-xl bg-[#E8EFF9]"><Icon name="eye" color="#2A5C9A" size={20} /></span>
                                <div>
                                    <p className="text-btn-bg font-bold"> Этика ИИ </p>
                                    <p className="text-light-blue">Справедливость, объяснимость, безопасность</p>
                                </div>
                            </li>
                            <li className="flex gap-3 py-3 items-start  flex-row text-base text-btn-bg">
                                <span className="block p-2 rounded-xl bg-[#E8EFF9]"><Icon name="user" color="#2A5C9A" size={20} /></span>
                                <div>
                                    <p className="text-btn-bg font-bold">Ограничения </p>
                                    <p className="text-light-blue">Система не заменяет судью и не принимает решений</p>
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

        </div>
    )
}