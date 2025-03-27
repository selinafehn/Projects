<script setup lang="ts">
import {
  LineChart,
  DonutChart,
  type BulletLegendItemInterface,
  CurveType,
  LegendPosition,
  AreaChart,
} from 'vue-chrts'

type chartDataItem = {
  month: string
  desktop: number
  mobile: number
}

const chartData = [
  { month: 'January', desktop: 186, mobile: 186 },
  { month: 'February', desktop: 305, mobile: 305 },
  { month: 'March', desktop: 237, mobile: 237 },
  { month: 'April', desktop: 260, mobile: 209 },
  { month: 'May', desktop: 209, mobile: 209 },
  { month: 'June', desktop: 250, mobile: 214 },
]

const categories1: Record<string, BulletLegendItemInterface> = {
  desktop: { name: 'Desktop', color: '#ac0028' },
  mobile: { name: 'Mobile', color: '#ec9191' },
}

const xFormatter1 = (item: chartDataItem): string | number => `${item?.month}`

interface AreaChartItem {
  date: Date
  desktop: number
  mobile: number
}

const categories2: Record<string, BulletLegendItemInterface> = {
  desktop: { name: 'Desktop', color: '#156F36' },
  mobile: { name: 'Mobile', color: '#4ade80' },
}

const AreaChartData: AreaChartItem[] = [
  { date: new Date('2024-04-01'), desktop: 222, mobile: 150 },
  { date: new Date('2024-04-02'), desktop: 180, mobile: 97 },
  { date: new Date('2024-04-03'), desktop: 167, mobile: 120 },
  { date: new Date('2024-04-04'), desktop: 260, mobile: 240 },
  { date: new Date('2024-04-05'), desktop: 240, mobile: 290 },
]

const xFormatter2 = (item: AreaChartItem): string | number => `${item?.date}`

const DonutData = [
  {
    color: '#60A5FA',
    name: 'Blue',
    value: 50,
  },
  {
    color: '#CBD5E1',
    name: 'Gray',
    value: 20,
  },
  {
    color: '#00DC82',
    name: 'Green',
    value: 30,
  },
]
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-10 px-6">
    <div class="max-w-screen-xl mx-auto">
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-800 dark:text-white mb-2">📊 Dashboard Übersicht</h1>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card class="p-6 bg-white dark:bg-gray-900 shadow-xl rounded-xl hover:shadow-2xl transition duration-300 border border-gray-200 dark:border-gray-700">
          <div class="mb-4">
            <h2 class="text-lg font-semibold text-gray-800 dark:text-white">📈 Besucher (Monate)</h2>
            <p class="text-sm text-gray-500">Desktop vs Mobile</p>
          </div>
          <LineChart
          :data="chartData"
          x-key="month"
          :height="200"
          y-label="Anzahl Besucher"
          :x-num-ticks="2"
          :categories="categories1"
          :x-formatter="xFormatter1"
          :grid-line-y="true"
          :curve-type="CurveType.MonotoneX"
          :pagination-position="LegendPosition.Top"
          />
        </Card>

        <!-- Donut Chart Card -->
        <Card class="p-6 bg-white dark:bg-gray-900 shadow-xl rounded-xl hover:shadow-2xl transition duration-300 border border-gray-200 dark:border-gray-700 relative">
          <div class="mb-4">
            <h2 class="text-lg font-semibold text-gray-800 dark:text-white"> Anteile (Live)</h2>
          </div>
          <DonutChart
              :data="DonutData.map((i) => i.value)"
              :height="200"
              :labels="DonutData"
              :hide-legend="true"
              :radius="0"
          />
          <div class="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          </div>
        </Card>

        <!-- Area Chart Card -->
        <Card class="p-6 bg-white dark:bg-gray-900 shadow-xl rounded-xl hover:shadow-2xl transition duration-300 border border-gray-200 dark:border-gray-700">
          <div class="mb-4">
            <h2 class="text-lg font-semibold text-gray-800 dark:text-white">📊 Verlauf (Woche)</h2>
          </div>
          <AreaChart
              :data="AreaChartData"
              :height="275"
              x-key="date"
              :categories="categories2"
              :grid-line-y="true"
              :x-formatter="xFormatter2"
              :curve-type="CurveType.MonotoneX"
          />
        </Card>
      </div>
    </div>
  </div>
</template>

