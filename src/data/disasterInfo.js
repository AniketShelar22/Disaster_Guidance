const disasterInfo = [
  {
    id: "earthquake",
    name: "Earthquake",
    icon: "🌀",
    description: "Occurs suddenly due to tectonic movements. Can cause shaking, structural damage, and panic.",
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
    description: "Happens after heavy rain or dam failure. Streets fill with water and power may be lost.",
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
    description: "Triggered by dry weather and wind. Thick smoke and intense heat affect large areas.",
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
    description: "Forms quickly with strong rotating winds. Causes flying debris, destruction, and chaos.",
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
    description: "Brings heavy snow, cold winds, and poor visibility. Roads and power lines may be affected.",
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
    description: "Widespread disease affecting communities. Healthcare burden and social distancing follow.",
    tips: {
      before: ["Stay informed", "Stock essential supplies"],
      during: ["Wear masks", "Avoid crowds"],
      after: ["Follow recovery protocols", "Seek vaccination if needed"]
    }
  }
];

export default disasterInfo;
