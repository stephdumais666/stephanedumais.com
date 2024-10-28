import { getMonth } from "date-fns";

export const jsonToData = (json) => {
  var result = [];
  for (var i in json) {
    result.push(json[i]);
  }
  return result;
};

export const workPeriod = (startDate, endDate) => {
  const start = new Date(startDate + "-02T00:00:00");
  const end = new Date(endDate + "-01T00:00:00");
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  return years + "." + months;
};

export const calculateDurationInMonths = (start, end) => {
  const startYear = parseInt(start.split("-")[0], 10);
  const startMonth = parseInt(start.split("-")[1], 10);
  let endYear, endMonth;

  if (end === "Present") {
    const today = new Date();
    endYear = today.getFullYear();
    endMonth = today.getMonth() + 1;
  } else {
    endYear = parseInt(end.split("-")[0], 10);
    endMonth = parseInt(end.split("-")[1], 10);
  }

  return (endYear - startYear) * 12 + (endMonth - startMonth);
};

export const formattedDataCalculator = (data, baseYear) => {
  return data.map((job) => {
    const startMonth =
      (parseInt(job.start.split("-")[0], 10) - baseYear) * 12 +
      parseInt(job.start.split("-")[1], 10);
    const duration = calculateDurationInMonths(job.start, job.end);

    return { ...job, startMonth, duration };
  });
};
