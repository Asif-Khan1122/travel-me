import Image from "next/image";
import { ASSET_BASE } from "@/lib/assets";

const columns = [
  {
    title: "Company",
    links: ["About", "Careers", "Mobile"],
  },
  {
    title: "Contact",
    links: ["Help/FAQ", "Press", "Affiliate"],
  },
  {
    title: "More",
    links: ["Airlinefees", "Airline", "Low fare tips"],
  },
];

export default function Footer() {
  return (
    <footer className='bg-white pt-16 pb-8'>
      <div className='container-custom grid sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-12'>
        <div className='lg:col-span-2'>
          <Image
            src='/images/logo2.svg'
            alt='Jadoo'
            width={120}
            height={34}
            className='mb-4'
          />
          <p className='text-60 text-sm max-w-xs'>
            Book your trip in minute, get full Control for much longer.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 className='font-semibold mb-4'>{col.title}</h4>
            <ul className='space-y-2 text-sm text-60'>
              {col.links.map((link) => (
                <li key={link}>
                  <a href='#' className='hover:text-primary transition-colors'>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className='container-custom border-t border-white/10 pt-6 text-sm text-50 text-center'>
        All rights reserved @jadoo.co
      </div>
    </footer>
  );
}
