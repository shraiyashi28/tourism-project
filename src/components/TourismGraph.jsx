import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { year: "2019", tourists: 1600 },
  { year: "2020", tourists: 410 },
  { year: "2021", tourists: 670 },
  { year: "2022", tourists: 1000 },
  { year: "2023", tourists: 1345 },
  { year: "2024", tourists: 1500 },
];

function TourismGraph() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-white rounded-3xl shadow-2xl p-4 sm:p-6 min-h-[560px] h-full flex flex-col"
    >
      {/* Heading */}

      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-3xl sm:text-4xl font-bold text-center text-blue-700"
      >
        📈 Tourism Growth
      </motion.h2>

      {/* Statistics */}

      <div className="flex flex-wrap justify-center gap-8 sm:gap-16 w-full">

        <div className="text-center">
          <p className="text-gray-500 text-lg">
            Latest Visitors
          </p>

          <h1 className="text-5xl font-bold text-blue-600">
            <CountUp
              end={1500}
              duration={3}
              separator=","
            />
          </h1>
        </div>

        <div className="text-center">
          <p className="text-gray-500 text-lg">
            Growth
          </p>

          <h1 className="text-5xl font-bold text-green-500">
            <CountUp
              end={26}
              duration={3}
              suffix="%"
            />
          </h1>
        </div>

      </div>

      {/* Chart */}

      <div className="flex-1">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 20,
              bottom: 10,
            }}
          >

            {/* Gradient */}

            <defs>
              <linearGradient
                id="tourismLine"
                x1="0"
                y1="0"
                x2="1"
                y2="0"
              >
                <stop offset="0%" stopColor="#06B6D4" />
                <stop offset="100%" stopColor="#2563EB" />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="5 5"
              stroke="#d1d5db"
            />

            <XAxis
              dataKey="year"
              tick={{ fontSize: 14 }}
            />

            <YAxis
              tick={{ fontSize: 14 }}
            />

            <Tooltip
              contentStyle={{
                borderRadius: "15px",
                border: "none",
                boxShadow: "0 10px 25px rgba(0,0,0,.2)",
              }}
            />

            <Legend />

            <Line
              type="monotone"
              dataKey="tourists"
              stroke="url(#tourismLine)"
              strokeWidth={5}
              animationDuration={3000}
              animationEasing="ease-in-out"
              dot={{
                r: 7,
                fill: "#2563EB",
                stroke: "#fff",
                strokeWidth: 3,
              }}
              activeDot={{
                r: 11,
                fill: "#06B6D4",
                stroke: "#000",
                strokeWidth: 2,
              }}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>
    </motion.div>
  );
}

export default TourismGraph;