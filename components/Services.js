import Image from "next/image";
import { ASSET_BASE } from "@/lib/assets";

const services = [
  {
    icon: "icon1.png",
    title: "Calculated Weather",
    desc: "Built Wicket longer admire do barton vanity itself do in it.",
  },
  {
    icon: "icon2.png",
    title: "Best Flights",
    desc: "Engrossed listening. Park gate sell they west hard for the.",
  },
  {
    icon: "icon3.png",
    title: "Local Events",
    desc: "Barton vanity itself do in it. Preferd to men it engrossed listening.",
  },
  {
    icon: "icon4.png",
    title: "Customization",
    desc: "We deliver outsourced aviation services for military customers.",
  },
];

export default function Services() {
  return (
    <section id='service' className='section-space service-section'>
      <div className='container-custom'>
        {/* Section Header */}
        <div className='flex flex-col items-center text-center mb-12'>
          <p className='text-primary font-semibold text-sm tracking-wide mb-2 uppercase'>
            Category
          </p>
          <h2 className='text-3xl md:text-4xl font-bold'>
            We Offer Best Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {services.map((s) => (
            <div
              key={s.title}
              className='service-card rounded-2xl p-8 text-center hover:shadow-lg transition-shadow flex flex-col items-center'
            >
              <Image
                src={`${ASSET_BASE}/img/category/${s.icon}`}
                alt={s.title}
                width={75}
                height={75}
                className='mb-5 mx-auto object-contain'
              />
              <h3 className='font-semibold text-lg mb-2'>{s.title}</h3>
              <p className='text-muted text-sm'>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
