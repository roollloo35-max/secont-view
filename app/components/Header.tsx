'use client'

import { Icon } from "../svgs/svgs"
import styles from "@/app/components/header.module.css"
import Link from "next/link"
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
                        <h2 className="text-btn-bg font-bold text-xl font-sans">
                            Цифровой советник судьи
                        </h2>
                        <p className="text-light-blue font-light text-sm font-sans">
                            Второе мнение
                        </p>
                    </div>
                </div>

                <a href="public/concept.pdf" download="concept.pdf" className="bg-btn-bg h-full px-5.5 flex flex-row items-center rounded-xl gap-x-3 cursor-pointer block">
                    <div className="">
                        <Icon name="download" color="#C29A4B" size={22} />

                    </div>
                    <p className="text-white font-bold text-xl font-sans">
                        Скачать концепцию
                    </p>
                </a>

            </div>
            <div className={"col-2 overflow-hidden " + `${isOpen ? "h-20 transition-all ease-in-out duration-300": "h-0 transition-all ease-in-out duration-300"}`}>
            <nav className=" flex justify-around mb-6 mt-12 font-sans">
                <Link href="#about" className={styles.text_header}>Проблема</Link> 
                <Link href="#solutions" className={styles.text_header}>Решение</Link> 
                <Link href="#how-work" className={styles.text_header}>Как работает</Link> 
                <Link href="#check" className={styles.text_header}>Методология</Link> 
                <Link href="#architecture" className={styles.text_header}>Архитектура</Link> 
                
                <Link href="#team" className={styles.text_header}>Команда</Link> 
            </nav>
            </div>
            <div className="col-2 h-0.5 w-full relative bg-light-blue mt-6 font-sans">
                <button onClick={() => setisOpen(!isOpen)} className={`${styles.aniburger} m-auto top-1/2 -translate-1/2 absolute w-10 h-10  border-light-blue border-2 left-0 right-0 bg-white rounded-full`}> 
                    <div className={styles.burger}>

                    </div>
                </button>
            </div>
        </header>
    )
}

