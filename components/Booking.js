import Image from "next/image";
import { ASSET_BASE } from "@/lib/assets";

export default function Booking() {
  return (
    <div className="booking-card relative rounded-3xl overflow-hidden">
        <div className="relative rounded-2xl overflow-hidden">
          <Image
            src={`${ASSET_BASE}/img/steps/booking-img.jpg`}
            alt="Trip to Greece"
            fill
            className="object-cover"
          />
        </div>

        <div className="booking-info">
          <h3 className="font-semibold">Trip To Greece</h3>
          <p className="text-muted text-sm">14-29 June | by Robbin joseph</p>
          <div className="booking-icons">
            <span><Image src={`${ASSET_BASE}/img/steps/leaf.svg`} alt="" width={16} height={16} /></span>
            <span><Image src={`${ASSET_BASE}/img/steps/map.svg`} alt="" width={16} height={16} /></span>
            <span><Image src={`${ASSET_BASE}/img/steps/send.svg`} alt="" width={16} height={16} /></span>
          </div>
          <div className="booking-going">
            <Image
              src={`${ASSET_BASE}/img/steps/building.svg`}
              alt=""
              width={14}
              height={14}
            />
            <span>24 people going</span>
          </div>
        </div>
    </div>
  );
}
