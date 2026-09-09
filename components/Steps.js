import Image from "next/image";
import { ASSET_BASE } from "@/lib/assets";
import Booking from "@/components/Booking";

const steps = [
  {
    icon: "selection.svg",
    title: "Choose Destination",
    desc: "Choose your favourite place. No matter where you travel inside the World.",
  },
  {
    icon: "water-sport.svg",
    title: "Make Payment",
    desc: "After find your perfect spot, make your payment and get ready to travel.",
  },
  {
    icon: "taxi.svg",
    title: "Reach Airport on Selected Date",
    desc: "Lastly, you have to arrive at the airport on time and enjoy the vacation.",
  },
];

export default function Steps() {
  return (
    <section id="booking" className="section-space steps-section">
      <div className="container-custom steps-layout">
        <div className="steps-copy">
        <div className="text-left mb-10">
        <p className="text-primary font-semibold text-sm tracking-wide mb-2">
          Easy and Fast
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">
          Book your next trip in 3 easy steps
        </h2>
        </div>

        <div className="steps-list">
        {steps.map((s, index) => (
          <div key={s.title} className="step-item flex items-start gap-4">
            <div className={`step-icon step-icon-${index + 1} flex items-center justify-center rounded-xl`}>
              <Image
                src={`${ASSET_BASE}/img/steps/${s.icon}`}
                alt=""
                width={28}
                height={28}
              />
            </div>
            <div>
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-muted text-sm">{s.desc}</p>
            </div>
          </div>
        ))}
        </div>
        </div>
        <Booking />
      </div>
    </section>
  );
}
