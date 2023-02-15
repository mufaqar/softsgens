import Link from "next/dist/client/link";
import Image from "next/image";


export default function WorkLayout() {
    return (
        <>
            <div className={"relative group bg-[#4388F6] transition cursor-pointer duration-200 rounded-3xl"}>
                <Link href="portfolio/single-work">
                   <figure >
                   <img
                        src={`/images/work1.png`}
                        alt=""
                        priority="true"
                        layout="fill"
                        className="group-hover:opacity-70 w-full h-[450px] rounded-3xl object-cover object-top"
                    />
                   </figure>
                </Link>
                <ul className="cat absolute md:top-10 top-4 left-5 md:flex md:space-x-4 space-x-0 md:space-y-0 space-y-4">
                    <li className="bg-zinc-700/30 hover:bg-zinc-700/50 rounded-full block text-white p-2 text-base font-normal">
                        <Link href="#" className="  ">#Web Design
                        </Link>
                    </li>
                    <li className="block text-white p-2 text-base font-normal bg-zinc-700/30 hover:bg-zinc-700/50 rounded-full">
                        <Link href="#" >#Web Design
                        </Link>
                    </li>
                    <li className="block text-white p-2 text-base font-normal bg-zinc-700/30 hover:bg-zinc-700/50 rounded-full">
                        <Link href="#" >#Web Design
                        </Link>
                    </li>
                </ul>
                <Link href="/single-work">
                <h2 className="absolute md:bottom-10 bottom-4 left-5 text-4xl font-bold text-white ">Teddington</h2>
                </Link>
            </div>
        </>
    )
}
