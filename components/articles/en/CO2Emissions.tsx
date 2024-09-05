"use client"

import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Area, AreaChart, BarChart, CartesianGrid, XAxis, Bar, Line, Tooltip, Legend } from "recharts";
import { ChartConfig, ChartContainer,ChartLegend,ChartLegendContent,ChartTooltip,ChartTooltipContent } from "@/components/ui/chart"

const historicalData = [
  { year: "1990", US: 5570, China: 2150, India: 590, UE: 4200 },
  { year: "2000", US: 5920, China: 3200, India: 850, UE: 4000 },
  { year: "2010", US: 5400, China: 8000, India: 1800, UE: 3500 },
  { year: "2020", US: 4570, China: 10065, India: 2654, UE: 2850 },
];

const chartData = [
  { sector: 'Manufacturing', China: 50, India: 35, US: 20 },
  { sector: 'Energy', China: 30, India: 45, US: 40 },
  { sector: 'Agriculture', China: 5, India: 15, US: 10 },
  { sector: 'Transportation', China: 10, India: 5, US: 30 },
];

const chartConfig = {
  China: {
    label: "China",
    color: "hsl(var(--chart-1))",
  },
  India: {
    label: "India",
    color: "hsl(var(--chart-2))",
  },
  US: {
    label: "United States",
    color: "hsl(var(--chart-3))",
  },
  UE: {
    label: "European Union",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig

const CO2Emissions: React.FC = () => {
  return (
    <div>
      <h1>CO₂ Emissions: Emergence of New Actors</h1>

      <h2>Introduction</h2>
      <p>
        The landscape of global CO₂ emissions has dramatically shifted in recent decades. Historically dominated by Western countries, such as the United States and European nations, the balance has now shifted towards emerging economies. Countries like China and India have seen rapid increases in their CO₂ emissions, reflecting their accelerating industrialization and economic growth.
      </p>

      <h2>Historical CO₂ Emissions Data</h2>
      <p>
        The following table provides an overview of CO₂ emissions from key countries across different years. This historical perspective highlights the shifts in global emissions and the role of emerging economies.
      </p>

      <Table>
        <TableCaption>Historical CO₂ Emissions Data (in Mt)</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Country</TableHead>
            <TableHead>CO₂ Emissions (Mt) - 1990</TableHead>
            <TableHead>CO₂ Emissions (Mt) - 2020</TableHead>
            <TableHead>Growth (%)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">United States</TableCell>
            <TableCell>5,570</TableCell>
            <TableCell>4,570</TableCell>
            <TableCell>-18%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">China</TableCell>
            <TableCell>2,150</TableCell>
            <TableCell>10,065</TableCell>
            <TableCell>368%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">India</TableCell>
            <TableCell>590</TableCell>
            <TableCell>2,654</TableCell>
            <TableCell>349%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">European Union</TableCell>
            <TableCell>4,200</TableCell>
            <TableCell>2,850</TableCell>
            <TableCell>-32%</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">-</TableCell>
          </TableRow>
        </TableFooter>
      </Table>

      <h2>Chart: Growth of CO₂ Emissions by Country</h2>
      <p>
        The following line chart illustrates the growth of CO₂ emissions from key countries over the past decades. This visualization highlights the substantial increase in emissions from emerging economies such as China and India compared to the more stable or declining emissions from developed regions.
      </p>
        
      <ChartContainer config={chartConfig} className="max-h-[300px] w-full">
          <AreaChart
            accessibilityLayer
            data={historicalData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="year"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 4)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="US"
              type="natural"
              fill="var(--color-US)"
              fillOpacity={0.4}
              stroke="var(--color-US)"
              stackId="a"
            />
            <Area
              dataKey="China"
              type="natural"
              fill="var(--color-China)"
              fillOpacity={0.4}
              stroke="var(--color-China)"
              stackId="a"
            />
            <Area
              dataKey="India"
              type="natural"
              fill="var(--color-India)"
              fillOpacity={0.4}
              stroke="var(--color-India)"
              stackId="a"
            />
            <Area
              dataKey="UE"
              type="natural"
              fill="var(--color-UE)"
              fillOpacity={0.4}
              stroke="var(--color-UE)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>

      <h2>Sectoral Contribution to Emissions</h2>
      <p>
        Different sectors contribute varying levels of CO₂ emissions in different countries. The table below outlines the percentage contributions of key sectors in China, India, and the United States. This data provides insight into the primary sources of emissions and the varying economic drivers behind them.
      </p>

      <Table>
        <TableCaption>Sectoral Contribution to CO₂ Emissions (%)</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Sector</TableHead>
            <TableHead>China (%)</TableHead>
            <TableHead>India (%)</TableHead>
            <TableHead>United States (%)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Manufacturing</TableCell>
            <TableCell>50%</TableCell>
            <TableCell>35%</TableCell>
            <TableCell>20%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Energy</TableCell>
            <TableCell>30%</TableCell>
            <TableCell>45%</TableCell>
            <TableCell>40%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Agriculture</TableCell>
            <TableCell>5%</TableCell>
            <TableCell>15%</TableCell>
            <TableCell>10%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Transportation</TableCell>
            <TableCell>10%</TableCell>
            <TableCell>5%</TableCell>
            <TableCell>30%</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <h2>Bar Chart: Sector Contribution to CO₂ Emissions</h2>
      <p>
        The bar chart below visualizes the sectoral contributions to CO₂ emissions in China, India, and the United States. It highlights the major contributors such as manufacturing and energy, and provides a clear comparison of the relative impact of each sector across these countries.
      </p>
        
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
      <XAxis
      dataKey="sector"
      tickLine={false}
      tickMargin={10}
      axisLine={false}
      tickFormatter={(value) => value}
    />
            <ChartLegend content={<ChartLegendContent />} />
            <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="US" fill="var(--color-US)" radius={4} />
        <Bar dataKey="China" fill="var(--color-China)" radius={4} />
        <Bar dataKey="India" fill="var(--color-India)" radius={4} />
      </BarChart>
    </ChartContainer>

      <h2>Environmental Impact</h2>
      <p>
        The increasing CO₂ emissions from emerging economies have significant environmental consequences. As these countries industrialize, their contributions to global CO₂ levels have risen sharply. This trend underscores the importance of international climate agreements and the need for effective policies to manage emissions across all nations.
      </p>

      <h2>Conclusion</h2>
      <p>
        The emergence of new actors like China and India in global CO₂ emissions represents a crucial shift in the climate change narrative. As these nations continue to grow economically, their emissions are expected to play a significant role in future climate policies. Balancing economic development with sustainability will be key to addressing global climate challenges.
      </p>

      <h2>References</h2>
      <ul>
        <li>International Energy Agency (IEA). (2023). "Global CO₂ Emissions Overview." Retrieved from <a href="https://www.iea.org/reports/co2-emissions-overview">IEA Website</a></li>
        <li>World Resources Institute (WRI). (2023). "Sectoral Emissions in Emerging Economies." Retrieved from <a href="https://www.wri.org/publications/sectoral-emissions">WRI Website</a></li>
      </ul>
    </div>
  );
}

export default CO2Emissions;