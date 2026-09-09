import Image from "next/image";
import { ASSET_BASE } from "@/lib/assets";

const logos = ["1.png", "2.png", "3.png", "4.png", "5.png"];

export default function Partners() {
  return (
    <section className="partners-section">
      <div className="container-custom flex flex-wrap items-center justify-between gap-8">
        {logos.map((logo) => (
          <Image
            key={logo}
            src={`${ASSET_BASE}/img/partner/${logo}`}
            alt="Partner logo"
            width={110}
            height={40}
            className="partner-logo h-8 w-auto object-contain"
          />
        ))}
      </div>
    </section>
  );
}
