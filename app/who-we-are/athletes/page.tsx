import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function AthletesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center pt-4 pb-10 sm:pt-6 sm:pb-16">
            <div className="w-full max-w-4xl mx-auto">
              <Image
                src="/images/athletes-title.png"
                alt="Fierce Athletes"
                width={1200}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>

            <p className="mt-8 max-w-3xl text-center text-xl text-gray-700 text-pretty leading-relaxed">
              Every competitive athlete, no matter what their abilities, shares
              certain qualities. Drive. Perseverance. Confidence. For athletes
              with intellectual disabilities, Special Olympics New York provides
              a training ground where those qualities are refined and given room
              to grow.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className=" container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Stats */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm border border-primary/20 rounded-2xl p-12 text-center">
            <div className="text-6xl md:text-8xl font-bold text-primary mb-4">
              48,000
            </div>
            <p className="text-xl text-gray-700">
              New York athletes are involved annually
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/competition/become-an-athlete">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white"
              >
                Become an Athlete
              </Button>
            </Link>
            <Link href="/get-involved/become-a-coach">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
              >
                Become a Coach
              </Button>
            </Link>
            <Link href="https://specialolympicsnynearyou.org/" target="_blank">
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-500 bg-transparent"
              >
                Find a Training Club
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Athlete Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className=" mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Our Athletes
            </h2>
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto pb-4">
              Every day, our athletes inspire us with their dedication,
              perseverance, and competitive spirit. They are the heart of
              Special Olympics New York.
            </p>
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto pb-2">
              From the Young Athletes program for all children up to age 7, to
              Unified Sports that bring together athletes of all abilities, to
              credible competitions, Special Olympics New York athletes have the
              opportunity to compete on a level playing field.
            </p>
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
              Along the way, athletes develop skills that accompany them through
              every part of life, helping them set an example of what people
              with intellectual disabilities can really do.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
