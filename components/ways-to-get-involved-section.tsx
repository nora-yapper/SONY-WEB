import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export function WaysToGetInvolvedSection() {
  const ways = [
    {
      title: "Become an Athlete",
      image: "/images/home-page/become-athelete.png",
      href: "/competition/become-an-athlete",
      description: "Join our community and compete in Olympic-type sports.",
    },
    {
      title: "Become a Coach",
      image: "/images/home-page/become-coach.png",
      href: "/get-involved/become-a-coach",
      description:
        "Guide and mentor our athletes to reach their full potential.",
    },
    {
      title: "Join as a Volunteer",
      image: "/images/home-page/volunteer.png",
      href: "/get-involved/volunteer",
      description:
        "Support our events, programs, and athletes in countless ways.",
    },
    {
      title: "Other Ways to Get Involved",
      image: "/images/home-page/other-ways.png",
      href: "/get-involved/other-ways",
      description:
        "Sponsor an event, host a fundraiser, become a Unified partner, join our committees, careers, and help us building training clubs.",
    },
  ];

  return (
    <section className="relative py-24 bg-gray-50 px-30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12 uppercase tracking-tight">
          Ways to Get Involved
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ways.map((way) => {
            return (
              <Link key={way.title} href={way.href}>
                <Card className="overflow-hidden !bg-gray-100 hover:!bg-gray-200 hover:scale-105 transition-all cursor-pointer h-full border-none rounded-lg pt-0">
                  <div className="h-[300px] relative overflow-hidden rounded-t-lg">
                    <Image
                      src={way.image}
                      alt={way.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 500px) 100vw, (max-width: 750px) 50vw, 50vw"
                    />
                  </div>
                  <div className="p-3 pb-0">
                    <h3 className="font-bold text-black mb-2">{way.title}</h3>
                    <p className="text-gray-700 text-s leading-relaxed">
                      {way.description}
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
