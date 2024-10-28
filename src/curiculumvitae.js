import React from "react";
import experience from "./data/experience.json";
import { formattedDataCalculator, jsonToData } from "./utilities/json";
import {
  ResponsiveContainer,
  Tooltip,
  Bar,
  BarChart,
  XAxis,
  YAxis,
} from "recharts";
import PageTitle from "./pageTitle";

const CuriculumVitae = () => {
  const data = jsonToData(experience);
  const formattedData = formattedDataCalculator(data, 1999);
  console.log(formattedData);

  return (
    <div class="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 h-screen">
      <PageTitle title="Stéphane Dumais - Front End Developer" />

      <ResponsiveContainer width="100%" height={300}>
        <BarChart layout="vertical" data={formattedData}>
          <XAxis
            type="number"
            domain={[0, "dataMax"]}
            tickFormatter={(month) => `Month ${month}`}
          />
          <YAxis type="category" dataKey="name" />
          <Tooltip
            formatter={(value, name, props) =>
              name === "duration" ? `${value} months` : value
            }
          />
          {formattedData.map((job, index) => (
            <Bar
              key={index}
              dataKey="duration"
              fill={job.color}
              stackId="1"
              barSize={20}
              xAxisId={job.startMonth}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CuriculumVitae;
