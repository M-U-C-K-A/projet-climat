"use client"
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import { FakeChart } from "@/components/Exemplechart";
export default function Home() {
    return (
        <>
            <Header />
            <main className="relative mt-20 py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px] max-w-screen-2xl m-auto ml-46">
                <div className="prose dark:prose-invert prose-2xl">
                    <h1>Melting of Ice Caps</h1>

                    <h2>Data on ice melting</h2>
                    <p>Scientific data indicates that the rate of ice melting in polar regions has accelerated significantly in recent decades. Satellite observations and field measurements show a marked decrease in ice extent and volume, with the Arctic particularly affected.</p>
                    <p>The Intergovernmental Panel on Climate Change (IPCC) reports that from 1993 to 2017, the Greenland and Antarctic ice sheets lost a combined mass of around 6.4 trillion tonnes.</p>

                    <FakeChart />
                    <h2>Consequences of ice melting on the environment and populations</h2>
                    <h3>Environmental Impact</h3>
                    <p>The melting of ice caps contributes to rising sea levels, posing threats to coastal ecosystems and low-lying communities. Loss of habitat for polar species, disruption of ocean currents, and altered weather patterns are also significant environmental consequences.</p>

                    <h3>Human Impact</h3>
                    <p>Human populations depending on polar regions for livelihoods and resources face profound challenges due to ice melting. Indigenous communities, for instance, experience cultural upheaval and loss of traditional practices as their environment changes rapidly.</p>

                    <h2>Factors contributing to ice melting</h2>
                    <h3>Climate Change</h3>
                    <p>Climate change driven by greenhouse gas emissions is the primary factor behind accelerated ice melting. Warmer temperatures cause glaciers and ice sheets to melt at unprecedented rates, disrupting Earth's natural balance.</p>

                    <h3>Human Activities</h3>
                    <p>Human activities such as industrialization, deforestation, and agriculture contribute to climate change and exacerbate ice melting. Increased carbon dioxide levels in the atmosphere amplify the greenhouse effect, further intensifying global warming.</p>

                    <h2>Strategies to mitigate ice melting and its impacts</h2>
                    <h3>International Agreements</h3>
                    <p>Global initiatives like the Paris Agreement aim to limit global warming and reduce greenhouse gas emissions. Such agreements foster international cooperation in addressing the root causes of ice melting.</p>

                    <h3>Technological Innovations</h3>
                    <p>Advancements in renewable energy technologies and carbon capture and storage offer promising solutions to mitigate climate change. Innovations in ice monitoring and prediction systems help scientists better understand and respond to ice melting.</p>

                </div>
                <Sidebar />
            </main>
            <Footer />
        </>
    );
}
