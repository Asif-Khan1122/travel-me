import Image from "next/image";
import { ASSET_BASE } from "@/lib/assets";

const destinations = [
  {
    img: "dest1.jpg",
    name: "Rome, Italy",
    price: "$5,42k",
    trip: "10 Days Trip",
  },
  {
    img: "dest2.jpg",
    name: "London, UK",
    price: "$4.2k",
    trip: "12 Days Trip",
  },
  {
    img: "dest3.jpg",
    name: "Full Europe",
    price: "$15k",
    trip: "28 Days Trip",
  },
];

export default function Destinations() {
  return (
    <section id='destination' className='section-space destination-section'>
      <div className='text-center mb-14'>
        <p className='text-primary font-semibold text-sm tracking-wide mb-2'>
          Top Selling
        </p>
        <h2 className='text-3xl md:text-4xl font-bold'>Top Destinations</h2>
      </div>

      <div className='container-custom grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {destinations.map((d) => (
          <a
            key={d.name}
            href='#'
            className='destination-card group rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow block'
          >
            <div className='relative h-72 w-full overflow-hidden'>
              <Image
                src={`${ASSET_BASE}/img/dest/${d.img}`}
                alt={d.name}
                fill
                className='object-cover group-hover:scale-105 transition-transform duration-300'
              />
            </div>
            <div className='p-5 flex items-center justify-between'>
              <div>
                <h3 className='font-semibold'>{d.name}</h3>
                <div className='flex items-center gap-1.5 text-muted text-sm mt-1'>
                  <Image
                    src={`${ASSET_BASE}/img/dest/navigation.svg`}
                    alt=''
                    width={14}
                    height={14}
                  />
                  {d.trip}
                </div>
              </div>
              <span className='text-primary font-bold'>{d.price}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
