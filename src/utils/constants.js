
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

export const EVENTS = [
  {
    name: "Engagement",
    venue: "Street Park",
    date: "25/06/2024",
    expected_weather: "Sunny"
  },
  {
    name: "Dinner",
    venue: "Sakura Restaurant",
    date: "02/07/2024",
    expected_weather: "Snowing"
  },
  {
    name: "Birthday",
    venue: "Paradise Hotel",
    date: "15/07/2024",
    expected_weather: "Any"
  }
]

export const GPT_SUGGESTION = [
  {
  event: "Engagement",
  venue: "Street Park",
  date: "25/06/2024",
  alert: "Hey there! 🌦️ Heads up! It looks like the weather is about to pull a fast one on us, shifting from sunny skies to a rainy downpour just in time for your big engagement event next week - 25/06/2024",
  tip: "Set up a beautiful, elegant shelter to cover the venue. Think along the lines of a clear tent or a stylish marquee – it’ll keep everyone dry and still let you enjoy the outdoor vibe. You might want to add some chic fairy lights, cozy rugs, and maybe even some heaters if it gets chilly. This way, the event stays gorgeous and comfortable, rain or shine.",
  new_weather: "Rainy"
},
{
  event: "Dinner",
  venue: "Sakura Restaurant",
  date: "02/07/2024",
  alert: "Hey there! 🌦️ Heads up! It looks like the weather is about to pull a fast one on us, shifting from snowy skies to a rainy downpour just in time for your dinner event next week - 02/07/2024",
  tip: "Take an umbrella along with you. Or don't forget to cover yourself with raincoat.",
  new_weather: "Rainy"
}
]
