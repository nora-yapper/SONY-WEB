import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function FindYourRegionSection() {
  const regions = [
    {
      name: "Capital District",
      counties:
        "Albany, Columbia, Greene, Rensselaer, Saratoga, Schenectady, Warren, Washington",
      image: "/images/CapitalDistrictNY.png",
      href: "/regions",
    },
    {
      name: "Central New York",
      counties:
        "Broome, Cayuga, Chenango, Cortland, Herkimer, Jefferson, Lewis, Madison, Oneida, Onondaga, Oswego, St. Lawrence, Tioga, Tompkins",
      image: "/images/CentralNY.png",
      href: "/regions",
    },
    {
      name: "Genesee Region",
      counties:
        "Genesee, Livingston, Monroe, Ontario, Orleans, Seneca, Wayne, Wyoming, Yates",
      image: "/images/GeneseeNY.png",
      href: "/regions",
    },
    {
      name: "Hudson Valley",
      counties:
        "Dutchess, Orange, Putnam, Rockland, Sullivan, Ulster, Westchester",
      image: "/images/HudsonValleyNY.png",
      href: "/regions",
    },
    {
      name: "Long Island",
      counties: "Nassau, Suffolk",
      image: "/images/LongIslandNY.png",
      href: "/regions",
    },
    {
      name: "New York City",
      counties: "Bronx, Kings, New York, Queens, Richmond",
      image: "/images/NewYorkCityNY.png",
      href: "/regions",
    },
    {
      name: "North Country",
      counties:
        "Clinton, Essex, Franklin, Fulton, Hamilton, Montgomery, Saratoga (Northern), Schoharie, Warren",
      image: "/images/NorthContryNY.png",
      href: "/regions",
    },
    {
      name: "Southern Tier",
      counties: "Allegany, Cattaraugus, Chautauqua, Chemung, Schuyler, Steuben",
      image: "/images/SouthernTierNY.png",
      href: "/regions",
    },
    {
      name: "Western New York",
      counties: "Erie, Niagara",
      image: "/images/WestNY.png",
      href: "/regions",
    },
  ];

  return (
    <section className="relative py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 uppercase tracking-tight">
          Find Your Region
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regions.map((region) => (
            <Link key={region.name} href={region.href}>
              <div className="group bg-white border border-gray-200 rounded-xl hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer h-full overflow-hidden flex flex-col">
                <div className="p-6 h-44">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {region.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {region.counties}
                  </p>
                  <Button
                    variant="outline"
                    className="rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-all"
                  >
                    Learn More
                  </Button>
                </div>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-white mt-auto">
                  <Image
                    src={region.image}
                    alt={region.name}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
