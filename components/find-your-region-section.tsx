import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function FindYourRegionSection() {
  const regions = [
    {
      name: "Capital District",
      counties:
        "Albany, Columbia, Greene, Rensselaer, Saratoga, Schenectady, Warren, Washington",
      color: "bg-white",
      textColor: "text-black",
      href: "/regions",
      image: "/images/CapitalDistrictNY.png",
    },
    {
      name: "Central New York",
      counties:
        "Broome, Cayuga, Chenango, Cortland, Herkimer, Jefferson, Lewis, Madison, Oneida, Onondaga, Oswego, St. Lawrence, Tioga, Tompkins",
      color: "bg-white",
      textColor: "text-black",
      href: "/regions",
      image: "/images/CentralNY.png",
    },
    {
      name: "Genesee Region",
      counties:
        "Genesee, Livingston, Monroe, Ontario, Orleans, Seneca, Wayne, Wyoming, Yates",
      color: "bg-white",
      textColor: "text-black",
      href: "/regions",
      image: "/images/GeneseeNY.png",
    },
    {
      name: "Hudson Valley",
      counties:
        "Dutchess, Orange, Putnam, Rockland, Sullivan, Ulster, Westchester",
      color: "bg-white",
      textColor: "text-black",
      href: "/regions",
      image: "/images/HudsonValleyNY.png",
    },
    {
      name: "Long Island",
      counties: "Nassau, Suffolk",
      color: "bg-white",
      textColor: "text-black",
      href: "/regions",
      image: "/images/LongIslandNY.png",
    },
    {
      name: "New York City",
      counties: "Bronx, Kings, New York, Queens, Richmond",
      color: "bg-white",
      textColor: "text-black",
      href: "/regions",
      image: "/images/NewYorkCityNY.png",
    },
    {
      name: "North Country",
      counties:
        "Clinton, Essex, Franklin, Fulton, Hamilton, Montgomery, Saratoga (Northern), Schoharie, Warren",
      color: "bg-white",
      textColor: "text-black",
      href: "/regions",
      image: "/images/NorthContryNY.png",
    },
    {
      name: "Southern Tier",
      counties: "Allegany, Cattaraugus, Chautauqua, Chemung, Schuyler, Steuben",
      color: "bg-white",
      textColor: "text-black",
      href: "/regions",
      image: "/images/SouthernTierNY.png",
    },
    {
      name: "Western New York",
      counties: "Erie, Niagara",
      color: "bg-white",
      textColor: "text-black",
      href: "/regions",
      image: "/images/WestNY.png",
    },
  ];

  return (
    <section className="relative py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12 uppercase tracking-tight">
          Find Your Region
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {regions.map((region) => (
            <Link key={region.name} href={region.href} className="group">
              <Card
                className={`p-8 ${region.color} ${region.textColor} hover:opacity-90 hover:border-red-600 hover:scale-105 transition-all cursor-pointer h-full border-2 relative overflow-hidden`}
              >
                {region.image && (
                  <div className="absolute right-2 top-2 bottom-2 w-auto flex items-center opacity-40 pointer-events-none">
                    <Image
                      src={region.image}
                      alt={region.name}
                      width={200}
                      height={300}
                      className="h-full w-auto object-contain"
                    />
                  </div>
                )}
                <div className="absolute inset-0 bg-white opacity-40"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-red-600 transition-colors">
                    {region.name}
                  </h3>
                  <p className="text-sm mb-6 opacity-90">{region.counties}</p>
                  <Button
                    variant="outline"
                    className="rounded-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                  >
                    Learn More
                  </Button>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
