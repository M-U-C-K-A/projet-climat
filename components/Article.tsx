import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export const Article = () => (
    <div className="w-full">
        <div className="container mx-auto">
            <div className="flex flex-col gap-10">
                <div className="flex gap-4 flex-col items-start">
                    <div>
                        <Badge>Climate Issues</Badge>
                    </div>
                    <div className="flex gap-2 flex-col">
                        <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                            Addressing Climate Distress
                        </h2>
                        <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                            Here are articles our team has created to highlight the urgent climate distress we face today.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Link href="/articles/en/melting-of-ice-caps" className="flex flex-col gap-2">
                        <div className="bg-muted rounded-md aspect-video mb-2">
                            <img src="/ice.jpg" alt="melting of ice caps" className="w-full aspect-video object-cover" />
                        </div>
                        <h3 className="text-xl tracking-tight">Melting of Ice Caps</h3>
                        <p className="text-muted-foreground text-base">
                            Current statistics and trends,
                            consequences on the environment and populations,
                            contributing factors, and strategies for mitigation.
                        </p>
                    </Link>
                    <Link href="/articles/en/loss-of-biodiversity" className="flex flex-col gap-2">
                        <div className="bg-muted rounded-md aspect-video mb-2">

                            <img src="/biodiversity.jpg" alt="Loss of Biodiversity" className="w-full aspect-video object-cover" />
                        </div>
                        <h3 className="text-xl tracking-tight">Loss of Biodiversity</h3>
                        <p className="text-muted-foreground text-base">
                            Data on biodiversity decline,
                            ecological and economic repercussions, causes,
                            and solutions for conservation and restoration.
                        </p>
                    </Link>

                    <Link href="/articles/en/world-hunger" className="flex flex-col gap-2">

                        <div className="bg-muted rounded-md aspect-video mb-2">

                            <img src="/hunger.jpg" alt="World Hunger" className="w-full aspect-video object-cover" />
                        </div>
                        <h3 className="text-xl tracking-tight">World Hunger</h3>
                        <p className="text-muted-foreground text-base">
                            Statistics on global hunger, effects of climate change,
                            underlying causes, and initiatives to enhance food security.
                        </p>
                    </Link>

                    <Link href="/articles/en/climate-types" className="flex flex-col gap-2">
                        <div className="bg-muted rounded-md aspect-video mb-2">
                            <img src="/climat.jpg" alt="Climate Types" className="w-full aspect-video object-cover" />
                        </div>
                        <h3 className="text-xl tracking-tight">Climate Types</h3>
                        <p className="text-muted-foreground text-base">
                            Characteristics of climate types, impact of climate change,
                            and necessary adaptations.
                        </p>
                    </Link>

                    <Link href="/articles/en/co2-emissions" className="flex flex-col gap-2">
                        <div className="bg-muted rounded-md aspect-video mb-2">
                            <img src="/co2.jpg" alt="CO₂ Emissions" className="w-full aspect-video object-cover" />
                        </div>
                        <h3 className="text-xl tracking-tight">CO₂ Emissions</h3>
                        <p className="text-muted-foreground text-base">
                            Global emission trends, impact of emerging economies, key sectors, and strategies for reduction.
                        </p>
                    </Link>

                    <Link href="/articles/en/drought-in-africa" className="flex flex-col gap-2">
                        <div className="bg-muted rounded-md aspect-video mb-2">
                            <img src="/drought.jpg" alt="Drought in Africa" className="w-full aspect-video object-cover" />
                        </div>
                        <h3 className="text-xl tracking-tight">Drought in Africa</h3>
                        <p className="text-muted-foreground text-base">
                            Prevalence, consequences, climate factors,
                            and measures to enhance resilience in African communities.
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    </div >
);