"use client"

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { month: "Jan", income: 4000, expenses: 2400 },
  { month: "Feb", income: 3000, expenses: 1398 },
  { month: "Mar", income: 2000, expenses: 9800 },
  { month: "Apr", income: 2780, expenses: 3908 },
  { month: "May", income: 1890, expenses: 4800 },
  { month: "Jun", income: 2390, expenses: 3800 },
  { month: "Jul", income: 3490, expenses: 4300 },
]

export function FinanceOverviewChart() {
  return (
    <ChartContainer
      config={{
        income: {
          label: "Income",
          color: "hsl(var(--primary))",
        },
        expenses: {
          label: "Expenses",
          color: "hsl(var(--muted-foreground))",
        },
      }}
      className="h-full w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <XAxis dataKey="month" tick={{ fontSize: 14 }} />
          <YAxis tick={{ fontSize: 14 }} />
          <ChartTooltip content={<ChartTooltipContent /> } />
          <Line
            type="monotone"
            dataKey="income"
            stroke="var(--color-income, hsl(var(--primary)))"
            strokeWidth={3}
            activeDot={{ r: 8 }}
            dot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="expenses"
            stroke="var(--color-expenses, hsl(var(--muted-foreground)))"
            strokeWidth={3}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
