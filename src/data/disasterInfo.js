// /src/data/disasterInfo.js

const disasterInfo = [
  {
    id: "earthquake",
    name: "Earthquake",
    icon: "🌀",
    tips: {
      before: ["Secure heavy items", "Prepare emergency kit"],
      during: ["Drop, Cover, and Hold on", "Stay away from windows"],
      after: ["Check for injuries", "Expect aftershocks"]
    }
  },
  {
    id: "flood",
    name: "Flood",
    icon: "🌊",
    tips: {
      before: ["Know flood zones", "Prepare sandbags"],
      during: ["Evacuate if advised", "Avoid walking or driving through floodwaters"],
      after: ["Stay away from damaged areas", "Clean everything safely"]
    }
  },
  {
    id: "wildfire",
    name: "Wildfire",
    icon: "🔥",
    tips: {
      before: ["Create defensible space", "Prepare go-bag"],
      during: ["Evacuate early", "Stay updated via radio"],
      after: ["Avoid hotspots", "Check air quality"]
    }
  },
  {
    id: "tornado",
    name: "Tornado",
    icon: "🌪",
    tips: {
      before: ["Know shelter locations", "Emergency kit ready"],
      during: ["Go to basement or interior room", "Protect head"],
      after: ["Wait for all-clear", "Watch for hazards"]
    }
  },
  {
    id: "blizzard",
    name: "Blizzard",
    icon: "❄",
    tips: {
      before: ["Stock food and water", "Avoid travel plans"],
      during: ["Stay indoors", "Dress in layers"],
      after: ["Shovel safely", "Check on neighbors"]
    }
  },
  {
    id: "pandemic",
    name: "Pandemic",
    icon: "☣",
    tips: {
      before: ["Stay informed", "Stock essential supplies"],
      during: ["Wear masks", "Avoid crowds"],
      after: ["Follow recovery protocols", "Seek vaccination if needed"]
    }
  }
];

export default disasterInfo;
