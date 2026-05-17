import FaqSec from "@/components/FaqSec";
import FeaturedDoctorSec from "@/components/RatedDoctorSec";
import FeaturedSec from "@/components/FeaturesSec";
import HeroBanner from "@/components/HeroSec";
import RatedDoctorSec from "@/components/RatedDoctorSec";


export default function Home() {
  return (
    <>
    <HeroBanner/>
    <RatedDoctorSec/>
    <FeaturedSec/>
    <FaqSec/>
    </>
  );
}
