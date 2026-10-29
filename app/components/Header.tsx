'use client'

import { Icon } from "../svgs/svgs"
import styles from "@/app/components/header.module.css"
import { useState } from "react"



export default function Header() {

    const[isOpen, setisOpen] = useState(false)

    return (
        <header className="w-full fixed grid grid-cols-[minmax(16px,1fr)_minmax(360px,1200px)_minmax(16px,1fr)] z-100 bg-white">
            <div className="col-2 pt-4 flex w-full justify-between items-center">

                <div className="flex flex-row gap-x-3 items-center">
                    <div className="p-3 bg-btn-bg  rounded-xl">
                        <Icon name="scales" color="#C29A4B" size={22} />
                    </div>
                    <div >
                        <h2 className="text-btn-bg font-bold text-xl">
                            Цифровой советник судьи
                        </h2>
                        <p className="text-light-blue font-light text-sm">
                            Второе мнение
                        </p>
                    </div>
                </div>

                <button  className="bg-btn-bg h-full px-5.5 flex flex-row items-center rounded-xl gap-x-3">
                    <div className="">
                        <Icon name="download" color="#C29A4B" size={22} />

                    </div>
                    <p className="text-white font-bold text-xl">
                        Скачать концепцию
                    </p>
                </button>

            </div>
            <div className={"col-2 overflow-hidden " + `${isOpen ? "h-20 transition-all ease-in-out duration-300": "h-0 transition-all ease-in-out duration-300"}`}>
            <ul className=" flex justify-around mb-6 mt-12 ">
                <a href="#" className={styles.text_header}>Проблема</a> 
                <a href="#" className={styles.text_header}>Решение</a> 
                <a href="#" className={styles.text_header}>Как работает</a> 
                <a href="#" className={styles.text_header}>Архитектура</a> 
                <a href="#" className={styles.text_header}>Методология</a> 
                <a href="#" className={styles.text_header}>Демо</a> 
                <a href="#" className={styles.text_header}>Команда</a> 
            </ul>
            </div>
            <div className="col-2 h-0.5 w-full relative bg-light-blue mt-6">
                <button onClick={() => setisOpen(!isOpen)} className={`${styles.aniburger} m-auto top-1/2 -translate-1/2 absolute w-10 h-10  border-light-blue border-2 left-0 right-0 bg-white rounded-full`}> 
                    <div className={styles.burger}>

                    </div>
                </button>
            </div>
        </header>
    )
}

