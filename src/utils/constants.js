
export const HOURS = [
  "Now",
  "12PM",
  "1PM",
  "2PM",
  "3PM",
  "4PM",
  "5PM",
  "6PM",
  "7PM",
  "8PM",
  "9PM",
  "10PM",
];
export const HOURLY_WEATHER = [
  "27°C",
  "27°C",
  "27°C",
  "28°C",
  "28°C",
  "27°C",
  "27°C",
  "27°C",
  "26°C",
  "26°C",
  "26°C",
  "26°C",
];
export const HOURLY_EMOJIS = [
  {
    src: new URL("/src/assets/cloudy_sun.png", import.meta.url).href,
  },
  {
    src: new URL("/src/assets/sun.png", import.meta.url).href,
  },
  {
    src: new URL("/src/assets/sun.png", import.meta.url).href,
  },
  {
    src: new URL("/src/assets/sun.png", import.meta.url).href,
  },
  {
    src: new URL("/src/assets/sun.png", import.meta.url).href,
  },
  {
    src: new URL("/src/assets/cloudy_sun.png", import.meta.url).href,
  },
  {
    src: new URL("/src/assets/cloudy_sun.png", import.meta.url).href,
  },
  {
    src: new URL("/src/assets/night.png", import.meta.url).href,
  },
  {
    src: new URL("/src/assets/night.png", import.meta.url).href,
  },
  {
    src: new URL("/src/assets/night.png", import.meta.url).href,
  },
  {
    src: new URL("/src/assets/night.png", import.meta.url).href,
  },
  {
    src: new URL("/src/assets/night.png", import.meta.url).href,
  },
];
  
//DATA FOR LINE GRAPH

export const LINECHARTDATA = {
  labels: [
    "Now",
    "Today",
    "Tomorrow",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu"
  ],
  datasets: [
    {
      label: "",
      data: [27, 26.8, 27, 27.5, 28, 28, 28.6, 28.7, 28.4, 28, 27.7, 27.4, 27, 27],
      borderColor: "orange",
      tension: 0.4 // This makes the line curvy
    }
  ]
}
