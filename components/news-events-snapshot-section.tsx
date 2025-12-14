import { Button } from "@/components/ui/button";
import { Droplet } from "lucide-react";
import Image from "next/image";

export function NewsEventsSnapshotSection() {
  return (
    <section className="relative py-16 overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl bg-white p-8 md:p-12 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.2),transparent_50%)]" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 border border-red-200 mb-4">
                <Droplet className="h-4 w-4 text-red-500" />
                <span className="text-sm font-semibold text-red-600 uppercase tracking-wider">
                  Splash for Inclusion
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">
                Make a splash for inclusion!
              </h2>
              <p className="text-gray-700 text-lg mb-6 text-pretty leading-relaxed">
                Every year, amazing people come together to empower Special
                Olympics athletes. Join the movement — make a splash for a great
                cause!
              </p>
              <Button
                asChild
                className="rounded-full bg-red-600 px-8 py-6 text-base font-semibold text-white hover:bg-red-700 hover:shadow-lg hover:scale-[1.02] transition-all"
              >
                <a
                  href="https://events.nyso.org/site/TR?fr_id=2190&pg=entry"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click to learn more!
                </a>
              </Button>
              <p className="text-xs text-gray-500 mt-4">
                See <a href="https://specialolympics.org/sweepstakes-rules" className="text-red-500 underline">specialolympics.org/sweepstakes-rules</a> for details.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Splash for Inclusion Image"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
