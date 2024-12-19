import Link from 'next/dist/client/link';
import Image from 'next/image';

export default function WorkLayout({ item }) {
  return (
    <>
      <div
        className={
          'relative group bg-[#4388F6] transition cursor-pointer duration-200 rounded-3xl'
        }
      >
        <Link href={`portfolio/${item?.slug}`}>
          <figure>
            <Image
              src={item?.feature}
              alt={item?.title}
              className="group-hover:opacity-70 w-full h-[450px] rounded-3xl object-cover object-top"
              width={450}
              height={400}
            />
          </figure>
        </Link>
        <ul className="cat absolute md:top-10 top-4 left-5 md:flex md:space-x-4 space-x-0 md:space-y-0 space-y-4">
          {item?.features?.map((ser, idx) => {
            return (
              <li
                key={idx}
                className="bg-zinc-700/30 hover:bg-zinc-700/50 rounded-full block text-white p-2 text-base font-normal"
              >
                # {ser?.name}
              </li>
            );
          })}
        </ul>
        <Link href={`portfolio/${item?.slug.current}`}>
          <h2 className="absolute md:bottom-10 bottom-4 left-5 text-4xl font-bold text-white ">
            {item?.title}
          </h2>
        </Link>
      </div>
    </>
  );
}
