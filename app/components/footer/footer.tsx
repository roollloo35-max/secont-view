import { Icon } from "@/app/svgs/svgs";

export default function Footer() {
    return(
        <footer id="footer" className="w-full pt-16 pb-16 grid grid-cols-[minmax(16px,1fr)_minmax(360px,1200px)_minmax(16px,1fr)] z-100 bg-btn-bg">
            <div className="col-2  flex w-full justify-between items-center">

                <div className="flex flex-row gap-x-3 items-center">
                    <div className="p-3 bg-second-blurcolor  rounded-xl">
                        <Icon name="scales" color="#C29A4B" size={22} />
                    </div>
                    <div >
                        <h2 className="text-white font-bold text-xl font-sans">
                            Цифровой советник судьи
                        </h2>
                   
                    </div>
                </div>

                <a href="public/concept.pdf" download="index.txt"  className="bg-white h-full px-5.5 flex flex-row items-center rounded-xl gap-x-3 cursor-pointer ">
                    <div className="">
                        <Icon name="download" color="#0B1F3A" size={22} />

                    </div>
                    <p className="text-btn-bg font-bold text-xl font-sans ">
                        Скачать концепцию
                    </p>
                </a>

            </div>
           
            <div className="col-2 w-full bg-light-blue opacity-30 pt-0.5 mt-8 mb-8"></div>

            <div className="col-2 flex flex-row justify-between">
                <p className="text-dark-blue">Политика конфиденциальности</p>
                <p className="text-dark-blue">© 2026 Цифровой советник судьи</p>

            </div>
        </footer>
    )
}