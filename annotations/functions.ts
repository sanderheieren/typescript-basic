/**
 * type annotations for func -> what type of args a function will recieve, and what type it will return
 * inference -> TS tries to figure out the type of value a function will return
 */
const add = (a: number, b: number): number => {
  return a + b;
};

// anonymous function
function divide(a: number, b: number): number {
  return a / b;
}
// function saved to variable
const multiple = function (a: number, b: number): number {
  return a * b;
};

// void and never

const logger = (msg: string): void => {
  console.log(msg);
};

const thorwError = (msg: string): never => {
  throw new Error(msg);
};

// destructing
const forecast = {
  date: new Date(),
  weather: "sunny",
};

// const logWeather = (forecast: {date: Date; weather: string}): void => {
//   console.log(forecast.date);
//   console.log(forecast.weather);
// }

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

const logWeatherES2015 = ({ date, weather }) => {
  console.log(date, weather);
};

logWeather(forecast);
