"use client"
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Globe from "@/components/magicui/globe";

export const Hero = () => (
  <div className="w-full">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-4 flex-col">
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
            Let's take action for the planet !
            </h1>
            <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
            The challenges of climate change are many and urgent. Together, let's protect our environment and improve our consumption patterns. This site aims to provide information, through hard-hitting data and visuals, on the dangers threatening our planet.
            </p>
          </div>
        </div>
        <div className="bg-muted rounded-md aspect-square">
          <Globe />
        </div>
      </div>
    </div>
  </div>
);