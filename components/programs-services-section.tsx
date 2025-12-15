import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export function ProgramsServicesSection() {
  const programs = [
    {
      title: "Young Athletes",
      image: "/images/home-page/young-athletes.png",
      href: "#",
      description:
        "A sport-and-play introduction builds fundamental skills for children up to age seven while involving families and communities in early inclusive activity.",
    },
    {
      title: "Athlete Leadership Council",
      image: "/images/home-page/leadership-council.png",
      href: "#",
      description:
        "A structured leadership track equips experienced athletes to advise organizational decisions, represent peers, and take on public-facing roles.",
    },
    {
      title: "Unified Champion Schools",
      image: "/images/home-page/unified-schools.png",
      href: "/unified-champion-schools",
      description:
        "An inclusion-driven school model connects students with and without intellectual disabilities through shared sports and unified engagement.",
    },
    {
      title: "Health and Wellness",
      image: "/images/home-page/health-wellness.png",
      href: "#",
      description:
        "A health initiative confronts unequal access and improves care quality for people with intellectual disabilities across the state.",
    },
    {
      title: "Law Enforcement Torch Run",
      image: "/images/home-page/letr.png",
      href: "#",
      description:
        "A statewide partnership with law enforcement drives mission awareness, year-round volunteer support, and critical fundraising for free athlete programs.",
      fullWidth: true,
    },
  ];

  return (
    <section className="relative py-16 bg-white px-40">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 uppercase tracking-tight">
          Programs and Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {programs.map((program) => {
            return (
              <Link
                key={program.title}
                href={program.href}
                className={`${program.fullWidth ? "md:col-span-2" : ""} ${
                  program.title === "Law Enforcement Torch Run" ? "px-20" : ""
                }`}
              >
                <Card className="overflow-hidden !bg-gray-100 hover:!bg-gray-200 hover:scale-105 transition-all cursor-pointer h-full border-none rounded-lg pt-0">
                  <div
                    className={`relative overflow-hidden rounded-t-lg ${
                      program.title === "Law Enforcement Torch Run"
                        ? "aspect-[5/2]"
                        : "aspect-[5/3]"
                    }`}
                  >
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 500px) 100vw, (max-width: 750px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-lg font-bold text-black mb-2">
                      {program.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
