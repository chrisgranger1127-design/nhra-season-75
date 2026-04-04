/* ─────────────────────────────────────────────
   NHRA 2026 PWA — App Logic
   ───────────────────────────────────────────── */

// ── RACE DATA ──────────────────────────────────────────────────────────────
// All event times are stored in LOCAL venue time zone.
// The app converts them to Eastern Time (ET) for display.

const RACES = [
  {
    id: 1,
    name: "NHRA Gatornationals",
    fullName: "AMALIE Motor Oil NHRA Gatornationals",
    venue: "Gainesville Raceway",
    city: "Gainesville, FL",
    timezone: "America/New_York",
    startDate: "2026-03-05",
    endDate:   "2026-03-08",
    tv: "FS1",
    phase: "regular",
    tags: ["season-opener"],
    classes: ["Top Fuel","Funny Car","Pro Stock","Pro Stock Motorcycle","Pro Mod"],
    itinerary: [
      { day: "Thursday, Mar 5",   sessions: [
        { time: "9:00 AM",  event: "Gates Open / Tech Inspection", key: false },
        { time: "12:00 PM", event: "Qualifying — Pro Stock / PSM (Q1)", key: true },
        { time: "3:00 PM",  event: "Qualifying — Top Fuel / Funny Car (Q1)", key: true },
        { time: "6:00 PM",  event: "Nitro Qualifying — Top Fuel / Funny Car (Q2, Night Show)", key: true },
      ]},
      { day: "Friday, Mar 6", sessions: [
        { time: "8:00 AM",  event: "Gates Open", key: false },
        { time: "9:00 AM",  event: "Lucas Oil Series Eliminations", key: false },
        { time: "1:30 PM",  event: "Qualifying — Pro Stock / PSM (Q3)", key: true },
        { time: "4:00 PM",  event: "Qualifying — Top Fuel / Funny Car (Q3, Nitro Afternoon)", key: true },
        { time: "6:30 PM",  event: "Qualifying — Top Fuel / Funny Car (Q4, Night Show)", key: true },
      ]},
      { day: "Saturday, Mar 7", sessions: [
        { time: "8:00 AM",  event: "Gates Open", key: false },
        { time: "9:00 AM",  event: "Lucas Oil Series Eliminations", key: false },
        { time: "11:00 AM", event: "Pit Party & Autographs (Midway)", key: false },
        { time: "12:00 PM", event: "Qualifying — Top Fuel (Mission 2Fast2Tasty Challenge)", key: true },
        { time: "12:35 PM", event: "Qualifying — Funny Car (Mission 2Fast2Tasty Challenge)", key: true },
        { time: "1:15 PM",  event: "Qualifying — Pro Stock / PSM (Mission 2Fast2Tasty Challenge)", key: true },
        { time: "3:30 PM",  event: "Final Qualifying Session — All Pro Classes (Q4)", key: true },
      ]},
      { day: "Sunday, Mar 8", sessions: [
        { time: "9:00 AM",  event: "Gates Open", key: false },
        { time: "10:00 AM", event: "SealMaster Track Walk & Driver Introductions", key: false },
        { time: "11:00 AM", event: "Mission Foods Drag Racing Eliminations Begin", key: true },
        { time: "All Day",  event: "Top Fuel → Funny Car → Pro Stock → PSM → Pro Mod", key: false },
      ]},
    ]
  },
  {
    id: 2,
    name: "NHRA Arizona Nationals",
    fullName: "FMP NHRA Arizona Nationals Presented by NGK Spark Plugs",
    venue: "Firebird Motorsports Park",
    city: "Chandler, AZ",
    timezone: "America/Phoenix",
    startDate: "2026-03-20",
    endDate:   "2026-03-22",
    tv: "FS1",
    phase: "regular",
    tags: [],
    classes: ["Top Fuel","Funny Car","Pro Stock","Pro Mod"],
    itinerary: [
      { day: "Friday, Mar 20", sessions: [
        { time: "10:00 AM", event: "Gates Open / Tech", key: false },
        { time: "1:00 PM",  event: "Qualifying — Pro Stock (Q1)", key: true },
        { time: "3:00 PM",  event: "Qualifying — Top Fuel / Funny Car (Q1)", key: true },
        { time: "5:30 PM",  event: "Qualifying — Top Fuel / Funny Car (Q2, Night Show)", key: true },
      ]},
      { day: "Saturday, Mar 21", sessions: [
        { time: "9:00 AM",  event: "Gates Open", key: false },
        { time: "11:00 AM", event: "Qualifying — Top Fuel / Funny Car (Q3, Mission 2Fast2Tasty)", key: true },
        { time: "12:00 PM", event: "Qualifying — Pro Stock (Q3, Mission 2Fast2Tasty)", key: true },
        { time: "2:00 PM",  event: "Qualifying — Top Fuel / Funny Car (Q4)", key: true },
        { time: "3:00 PM",  event: "Qualifying — Pro Stock (Q4)", key: true },
        { time: "4:30 PM",  event: "Autograph Session", key: false },
      ]},
      { day: "Sunday, Mar 22", sessions: [
        { time: "9:00 AM",  event: "Gates Open", key: false },
        { time: "9:30 AM",  event: "Track Walk & Driver Introductions", key: false },
        { time: "10:30 AM", event: "Mission Foods Drag Racing Eliminations Begin", key: true },
        { time: "All Day",  event: "Top Fuel → Funny Car → Pro Stock → Pro Mod", key: false },
      ]},
    ]
  },
  {
    id: 3,
    name: "NHRA Winternationals",
    fullName: "66th annual Lucas Oil NHRA Winternationals",
    venue: "In-N-Out Burger Pomona Dragstrip",
    city: "Pomona, CA",
    timezone: "America/Los_Angeles",
    startDate: "2026-04-09",
    endDate:   "2026-04-12",
    tv: "FS1",
    phase: "regular",
    tags: [],
    classes: ["Top Fuel","Funny Car","Pro Stock","Pro Stock Motorcycle"],
    itinerary: [
      { day: "Thursday, Apr 9", sessions: [
        { time: "9:00 AM",  event: "Gates Open / Tech Inspection", key: false },
        { time: "12:00 PM", event: "Qualifying — Pro Stock / PSM (Q1)", key: true },
        { time: "3:00 PM",  event: "Qualifying — Top Fuel / Funny Car (Q1)", key: true },
        { time: "6:00 PM",  event: "Qualifying — Top Fuel / Funny Car (Q2, Night Show)", key: true },
      ]},
      { day: "Friday, Apr 10", sessions: [
        { time: "9:00 AM",  event: "Gates Open", key: false },
        { time: "1:00 PM",  event: "Qualifying — Pro Stock / PSM (Q3)", key: true },
        { time: "3:30 PM",  event: "Qualifying — Top Fuel / Funny Car (Q3)", key: true },
        { time: "6:00 PM",  event: "Qualifying — Top Fuel / Funny Car (Q4, Night Show)", key: true },
      ]},
      { day: "Saturday, Apr 11", sessions: [
        { time: "9:00 AM",  event: "Gates Open", key: false },
        { time: "11:00 AM", event: "Qualifying — Top Fuel / Funny Car (Q5, Mission 2Fast2Tasty)", key: true },
        { time: "12:00 PM", event: "Qualifying — Pro Stock / PSM (Q5)", key: true },
        { time: "3:00 PM",  event: "Qualifying — All Pro Classes (Q6, Final)", key: true },
        { time: "5:00 PM",  event: "Sportsman Eliminations", key: false },
      ]},
      { day: "Sunday, Apr 12", sessions: [
        { time: "8:30 AM",  event: "Gates Open", key: false },
        { time: "9:30 AM",  event: "Track Walk & Driver Introductions", key: false },
        { time: "10:30 AM", event: "Mission Foods Drag Racing Eliminations Begin", key: true },
        { time: "All Day",  event: "Top Fuel → Funny Car → Pro Stock → PSM", key: false },
      ]},
    ]
  },
  {
    id: 4,
    name: "NHRA 4-Wide Nationals",
    fullName: "16th annual American Rebel Light NHRA 4-Wide Nationals",
    venue: "zMAX Dragway",
    city: "Concord, NC",
    timezone: "America/New_York",
    startDate: "2026-04-24",
    endDate:   "2026-04-26",
    tv: "FS1",
    phase: "regular",
    tags: ["4-wide"],
    classes: ["Top Fuel","Funny Car","Pro Stock","Pro Stock Motorcycle","Pro Mod"],
    itinerary: [
      { day: "Friday, Apr 24", sessions: [
        { time: "9:00 AM",  event: "Gates Open", key: false },
        { time: "1:00 PM",  event: "Qualifying — Pro Stock / PSM (Q1)", key: true },
        { time: "4:00 PM",  event: "Qualifying — Top Fuel / Funny Car (Q1, Night Show)", key: true },
        { time: "6:30 PM",  event: "Qualifying — Top Fuel / Funny Car (Q2, Night Show)", key: true },
      ]},
      { day: "Saturday, Apr 25", sessions: [
        { time: "9:00 AM",  event: "Gates Open", key: false },
        { time: "12:00 PM", event: "Qualifying — Top Fuel 4-Wide (Q3, Mission 2Fast2Tasty)", key: true },
        { time: "1:00 PM",  event: "Qualifying — Funny Car 4-Wide (Q3)", key: true },
        { time: "2:00 PM",  event: "Qualifying — Pro Stock / PSM 4-Wide (Q3)", key: true },
        { time: "3:30 PM",  event: "Qualifying — All Classes 4-Wide (Q4, Final)", key: true },
        { time: "5:00 PM",  event: "Autograph Session (Midway)", key: false },
      ]},
      { day: "Sunday, Apr 26", sessions: [
        { time: "9:00 AM",  event: "Gates Open", key: false },
        { time: "9:30 AM",  event: "Track Walk & Driver Introductions", key: false },
        { time: "10:30 AM", event: "4-Wide Eliminations Begin — All Pro Classes", key: true },
        { time: "Note",     event: "4-Lane format: Race 1 → Race 2 → Race 3 → Race 4 → Semis → Finals", key: false },
      ]},
    ]
  },
  {
    id: 5,
    name: "NHRA Southern Nationals",
    fullName: "NHRA Southern Nationals",
    venue: "South Georgia Motorsports Park",
    city: "Adel, GA",
    timezone: "America/New_York",
    startDate: "2026-05-01",
    endDate:   "2026-05-03",
    tv: "FS1",
    phase: "regular",
    tags: ["new-venue"],
    classes: ["Top Fuel","Funny Car","Pro Stock","Pro Stock Motorcycle","Pro Mod"],
    itinerary: [
      { day: "Friday, May 1", sessions: [
        { time: "9:00 AM",  event: "Gates Open — Inaugural SGMP National Event", key: false },
        { time: "1:00 PM",  event: "Qualifying — Pro Stock / PSM (Q1)", key: true },
        { time: "4:00 PM",  event: "Qualifying — Top Fuel / Funny Car (Q1)", key: true },
        { time: "7:00 PM",  event: "Qualifying — Top Fuel / Funny Car (Q2, Night Show)", key: true },
      ]},
      { day: "Saturday, May 2", sessions: [
        { time: "9:00 AM",  event: "Gates Open", key: false },
        { time: "12:00 PM", event: "Qualifying — Top Fuel / Funny Car (Q3, Mission 2Fast2Tasty)", key: true },
        { time: "1:30 PM",  event: "Qualifying — Pro Stock / PSM (Q3)", key: true },
        { time: "3:30 PM",  event: "Final Qualifying — All Classes (Q4)", key: true },
        { time: "5:30 PM",  event: "Autograph Session", key: false },
      ]},
      { day: "Sunday, May 3", sessions: [
        { time: "9:00 AM",  event: "Gates Open", key: false },
        { time: "9:30 AM",  event: "Track Walk & Driver Introductions", key: false },
        { time: "10:30 AM", event: "Mission Foods Drag Racing Eliminations Begin", key: true },
        { time: "All Day",  event: "Top Fuel → Funny Car → Pro Stock → PSM → Pro Mod", key: false },
      ]},
    ]
  },
  {
    id: 6,
    name: "Route 66 NHRA Nationals",
    fullName: "Gerber Collision & Glass Route 66 NHRA Nationals Presented by PEAK",
    venue: "Route 66 Raceway",
    city: "Joliet, IL",
    timezone: "America/Chicago",
    startDate: "2026-05-14",
    endDate:   "2026-05-17",
    tv: "FS1",
    phase: "regular",
    tags: [],
    classes: ["Top Fuel","Funny Car","Pro Stock","Pro Stock Motorcycle"],
    itinerary: [
      { day: "Thursday, May 14", sessions: [
        { time: "9:00 AM",  event: "Gates Open / Tech", key: false },
        { time: "1:00 PM",  event: "Qualifying — Pro Stock / PSM (Q1)", key: true },
        { time: "4:00 PM",  event: "Qualifying — Top Fuel / Funny Car (Q1)", key: true },
        { time: "7:00 PM",  event: "Qualifying — Top Fuel / Funny Car (Q2, Night Show)", key: true },
      ]},
      { day: "Friday, May 15", sessions: [
        { time: "9:00 AM",  event: "Gates Open", key: false },
        { time: "2:00 PM",  event: "Qualifying — Pro Stock / PSM (Q3)", key: true },
        { time: "4:30 PM",  event: "Qualifying — Top Fuel / Funny Car (Q3)", key: true },
        { time: "7:00 PM",  event: "Qualifying — Top Fuel / Funny Car (Q4, Night Show)", key: true },
      ]},
      { day: "Saturday, May 16", sessions: [
        { time: "9:00 AM",  event: "Gates Open", key: false },
        { time: "11:00 AM", event: "Qualifying — All Classes (Mission 2Fast2Tasty)", key: true },
        { time: "2:30 PM",  event: "Qualifying — All Classes (Final Q)", key: true },
        { time: "5:00 PM",  event: "Pit Party & Autographs", key: false },
      ]},
      { day: "Sunday, May 17", sessions: [
        { time: "9:00 AM",  event: "Gates Open", key: false },
        { time: "9:30 AM",  event: "Track Walk & Driver Introductions", key: false },
        { time: "10:30 AM", event: "Mission Foods Drag Racing Eliminations Begin", key: true },
      ]},
    ]
  },
  {
    id: 7,
    name: "NHRA Potomac Nationals",
    fullName: "Inaugural NHRA Potomac Nationals",
    venue: "Maryland International Raceway",
    city: "Mechanicsville, MD",
    timezone: "America/New_York",
    startDate: "2026-05-29",
    endDate:   "2026-05-31",
    tv: "FOX",
    phase: "regular",
    tags: ["new-venue"],
    classes: ["Top Fuel","Funny Car","Pro Stock","Pro Stock Motorcycle"],
    itinerary: [
      { day: "Friday, May 29", sessions: [
        { time: "9:00 AM",  event: "Gates Open — MIR's first NHRA National Event", key: false },
        { time: "1:00 PM",  event: "Qualifying — Pro Stock / PSM (Q1)", key: true },
        { time: "4:30 PM",  event: "Qualifying — Top Fuel / Funny Car (Q1, Night Show)", key: true },
        { time: "7:00 PM",  event: "Qualifying — Top Fuel / Funny Car (Q2, Night Show)", key: true },
      ]},
      { day: "Saturday, May 30", sessions: [
        { time: "9:00 AM",  event: "Gates Open", key: false },
        { time: "12:00 PM", event: "Qualifying — All Classes (Q3, Mission 2Fast2Tasty)", key: true },
        { time: "3:00 PM",  event: "Qualifying — All Classes (Q4, Final)", key: true },
        { time: "5:30 PM",  event: "Autograph Session", key: false },
      ]},
      { day: "Sunday, May 31", sessions: [
        { time: "9:00 AM",  event: "Gates Open", key: false },
        { time: "9:30 AM",  event: "Track Walk & Driver Introductions", key: false },
        { time: "10:30 AM", event: "Mission Foods Drag Racing Eliminations Begin", key: true },
      ]},
    ]
  },
  {
    id: 8,
    name: "NHRA New England Nationals",
    fullName: "13th annual NHRA New England Nationals",
    venue: "New England Dragway",
    city: "Epping, NH",
    timezone: "America/New_York",
    startDate: "2026-06-05",
    endDate:   "2026-06-07",
    tv: "FOX",
    phase: "regular",
    tags: [],
    classes: ["Top Fuel","Funny Car","Pro Stock"],
    itinerary: [
      { day: "Friday, Jun 5", sessions: [
        { time: "9:00 AM",  event: "Gates Open", key: false },
        { time: "1:00 PM",  event: "Qualifying — Pro Stock (Q1)", key: true },
        { time: "4:30 PM",  event: "Qualifying — Top Fuel / Funny Car (Q1, Night Show)", key: true },
        { time: "7:00 PM",  event: "Qualifying — Top Fuel / Funny Car (Q2, Night Show)", key: true },
      ]},
      { day: "Saturday, Jun 6", sessions: [
        { time: "9:00 AM",  event: "Gates Open", key: false },
        { time: "11:30 AM", event: "Qualifying — All Classes (Q3, Mission 2Fast2Tasty)", key: true },
        { time: "3:00 PM",  event: "Qualifying — All Classes (Q4, Final)", key: true },
        { time: "5:30 PM",  event: "Pit Party & Autographs", key: false },
      ]},
      { day: "Sunday, Jun 7", sessions: [
        { time: "9:00 AM",  event: "Gates Open", key: false },
        { time: "9:30 AM",  event: "Track Walk & Driver Introductions", key: false },
        { time: "10:30 AM", event: "Mission Foods Drag Racing Eliminations Begin", key: true },
      ]},
    ]
  },
  {
    id: 9,
    name: "NHRA Thunder Valley Nationals",
    fullName: "25th annual Super Grip NHRA Thunder Valley Nationals",
    venue: "Bristol Dragway",
    city: "Bristol, TN",
    timezone: "America/New_York",
    startDate: "2026-06-12",
    endDate:   "2026-06-14",
    tv: "FS1",
    phase: "regular",
    tags: [],
    classes: ["Top Fuel","Funny Car","Pro Stock","Pro Stock Motorcycle","Pro Mod"],
    itinerary: [
      { day: "Friday, Jun 12", sessions: [
        { time: "9:00 AM",  event: "Gates Open", key: false },
        { time: "1:00 PM",  event: "Qualifying — Pro Stock / PSM (Q1)", key: true },
        { time: "4:30 PM",  event: "Qualifying — Top Fuel / Funny Car (Q1, Night Show)", key: true },
        { time: "7:00 PM",  event: "Qualifying — Top Fuel / Funny Car (Q2, Night Show)", key: true },
      ]},
      { day: "Saturday, Jun 13", sessions: [
        { time: "9:00 AM",  event: "Gates Open", key: false },
        { time: "12:00 PM", event: "Qualifying — All Classes (Q3, Mission 2Fast2Tasty)", key: true },
        { time: "3:00 PM",  event: "Qualifying — All Classes (Q4, Final)", key: true },
      ]},
      { day: "Sunday, Jun 14", sessions: [
        { time: "9:00 AM",  event: "Gates Open", key: false },
        { time: "9:30 AM",  event: "Track Walk & Driver Introductions", key: false },
        { time: "10:30 AM", event: "Mission Foods Drag Racing Eliminations Begin", key: true },
      ]},
    ]
  },
  {
    id: 10,
    name: "Summit Racing Equipment NHRA Nationals",
    fullName: "20th annual Summit Racing Equipment NHRA Nationals",
    venue: "Summit Motorsports Park",
    city: "Norwalk, OH",
    timezone: "America/New_York",
    startDate: "2026-06-25",
    endDate:   "2026-06-28",
    tv: "FOX",
    phase: "regular",
    tags: [],
    classes: ["Top Fuel","Funny Car","Pro Stock","Pro Stock Motorcycle"],
    itinerary: [
      { day: "Thursday, Jun 25", sessions: [
        { time: "9:00 AM",  event: "Gates Open / Tech", key: false },
        { time: "1:00 PM",  event: "Qualifying — Pro Stock / PSM (Q1)", key: true },
        { time: "4:00 PM",  event: "Qualifying — Top Fuel / Funny Car (Q1)", key: true },
        { time: "7:00 PM",  event: "Qualifying — Top Fuel / Funny Car (Q2, Night Show)", key: true },
      ]},
      { day: "Friday, Jun 26", sessions: [
        { time: "9:00 AM",  event: "Gates Open", key: false },
        { time: "2:00 PM",  event: "Qualifying — Pro Stock / PSM (Q3)", key: true },
        { time: "4:30 PM",  event: "Qualifying — Top Fuel / Funny Car (Q3)", key: true },
        { time: "7:00 PM",  event: "Qualifying — Top Fuel / Funny Car (Q4, Night Show)", key: true },
      ]},
      { day: "Saturday, Jun 27", sessions: [
        { time: "9:00 AM",  event: "Gates Open", key: false },
        { time: "11:00 AM", event: "Qualifying — All Classes (Mission 2Fast2Tasty)", key: true },
        { time: "3:00 PM",  event: "Qualifying — All Classes (Final Q)", key: true },
      ]},
      { day: "Sunday, Jun 28", sessions: [
        { time: "9:00 AM",  event: "Gates Open", key: false },
        { time: "9:30 AM",  event: "Track Walk & Driver Introductions", key: false },
        { time: "10:30 AM", event: "Mission Foods Drag Racing Eliminations Begin", key: true },
      ]},
    ]
  },
  {
    id: 11,
    name: "DENSO NHRA Sonoma Nationals",
    fullName: "38th annual DENSO NHRA Sonoma Nationals",
    venue: "Sonoma Raceway",
    city: "Sonoma, CA",
    timezone: "America/Los_Angeles",
    startDate: "2026-07-17",
    endDate:   "2026-07-19",
    tv: "FS1",
    phase: "regular",
    tags: [],
    classes: ["Top Fuel","Funny Car","Pro Stock","Pro Stock Motorcycle"],
    itinerary: [
      { day: "Friday, Jul 17", sessions: [
        { time: "9:00 AM",  event: "Gates Open", key: false },
        { time: "1:00 PM",  event: "Qualifying — Pro Stock / PSM (Q1)", key: true },
        { time: "4:00 PM",  event: "Qualifying — Top Fuel / Funny Car (Q1, Night Show)", key: true },
        { time: "6:30 PM",  event: "Qualifying — Top Fuel / Funny Car (Q2, Night Show)", key: true },
      ]},
      { day: "Saturday, Jul 18", sessions: [
        { time: "9:00 AM",  event: "Gates Open", key: false },
        { time: "12:00 PM", event: "Qualifying — All Classes (Q3, Mission 2Fast2Tasty)", key: true },
        { time: "3:00 PM",  event: "Qualifying — All Classes (Q4, Final)", key: true },
      ]},
      { day: "Sunday, Jul 19", sessions: [
        { time: "9:00 AM",  event: "Gates Open", key: false },
        { time: "9:30 AM",  event: "Track Walk & Driver Introductions", key: false },
        { time: "10:30 AM", event: "Mission Foods Drag Racing Eliminations Begin", key: true },
      ]},
    ]
  },
  {
    id: 12,
    name: "NHRA Northwest Nationals",
    fullName: "37th annual Muckleshoot Casino Resort NHRA Northwest Nationals",
    venue: "Pacific Raceways",
    city: "Kent, WA",
    timezone: "America/Los_Angeles",
    startDate: "2026-07-24",
    endDate:   "2026-07-26",
    tv: "FOX",
    phase: "regular",
    tags: [],
    classes: ["Top Fuel","Funny Car","Pro Stock"],
    itinerary: [
      { day: "Friday, Jul 24", sessions: [
        { time: "9:00 AM",  event: "Gates Open", key: false },
        { time: "1:00 PM",  event: "Qualifying — Pro Stock (Q1)", key: true },
        { time: "4:30 PM",  event: "Qualifying — Top Fuel / Funny Car (Q1, Night Show)", key: true },
        { time: "7:00 PM",  event: "Qualifying — Top Fuel / Funny Car (Q2, Night Show)", key: true },
      ]},
      { day: "Saturday, Jul 25", sessions: [
        { time: "9:00 AM",  event: "Gates Open", key: false },
        { time: "12:00 PM", event: "Qualifying — All Classes (Q3, Mission 2Fast2Tasty)", key: true },
        { time: "3:00 PM",  event: "Qualifying — All Classes (Q4, Final)", key: true },
      ]},
      { day: "Sunday, Jul 26", sessions: [
        { time: "9:00 AM",  event: "Gates Open", key: false },
        { time: "9:30 AM",  event: "Track Walk & Driver Introductions", key: false },
        { time: "10:30 AM", event: "Mission Foods Drag Racing Eliminations Begin", key: true },
      ]},
    ]
  },
  {
    id: 13,
    name: "NHRA Brainerd Nationals",
    fullName: "44th annual NHRA Brainerd Nationals",
    venue: "Brainerd International Raceway",
    city: "Brainerd, MN",
    timezone: "America/Chicago",
    startDate: "2026-08-20",
    endDate:   "2026-08-23",
    tv: "TBD",
    phase: "regular",
    tags: [],
    classes: ["Top Fuel","Funny Car","Pro Stock"],
    itinerary: [
      { day: "Thursday, Aug 20", sessions: [
        { time: "9:00 AM",  event: "Gates Open / Sportsman Qualifying", key: false },
        { time: "12:00 PM", event: "Qualifying — Top Alcohol Sessions", key: false },
        { time: "4:30 PM",  event: "Qualifying — Pro Stock (Q1)", key: true },
        { time: "6:30 PM",  event: "Qualifying — Top Fuel / Funny Car (Q1, Night Show)", key: true },
      ]},
      { day: "Friday, Aug 21", sessions: [
        { time: "9:00 AM",  event: "Sportsman Eliminations", key: false },
        { time: "2:00 PM",  event: "Qualifying — Pro Stock (Q3)", key: true },
        { time: "4:30 PM",  event: "Qualifying — Top Fuel / Funny Car (Q3)", key: true },
        { time: "6:45 PM",  event: "Qualifying — Top Fuel / Funny Car (Q4, Night Show)", key: true },
      ]},
      { day: "Saturday, Aug 22", sessions: [
        { time: "9:00 AM",  event: "Sportsman Eliminations", key: false },
        { time: "12:00 PM", event: "Qualifying — Top Fuel (Q5, Mission 2Fast2Tasty)", key: true },
        { time: "12:35 PM", event: "Qualifying — Funny Car (Q5)", key: true },
        { time: "1:15 PM",  event: "Qualifying — Pro Stock (Q5)", key: true },
        { time: "3:30 PM",  event: "Final Qualifying — All Classes (Q6)", key: true },
        { time: "8:30 PM",  event: "Concert (The Zoo Band Shell)", key: false },
      ]},
      { day: "Sunday, Aug 23", sessions: [
        { time: "9:30 AM",  event: "SealMaster Track Walk & Driver Introductions", key: false },
        { time: "10:30 AM", event: "Mission Foods Drag Racing Eliminations Begin", key: true },
      ]},
    ]
  },
  {
    id: 14,
    name: "Cornwell Tools NHRA U.S. Nationals",
    fullName: "72nd annual Cornwell Quality Tools NHRA U.S. Nationals — The Big Go",
    venue: "Lucas Oil Indianapolis Raceway Park",
    city: "Brownsburg, IN",
    timezone: "America/Indiana/Indianapolis",
    startDate: "2026-09-02",
    endDate:   "2026-09-07",
    tv: "FS1 & FOX",
    phase: "regular",
    tags: ["big-go"],
    classes: ["Top Fuel","Funny Car","Pro Stock","Pro Stock Motorcycle","Pro Mod","Top Alcohol","Sportsman"],
    itinerary: [
      { day: "Wednesday, Sep 2", sessions: [
        { time: "8:30 AM",  event: "Gates Open — Lucas Oil Series Eliminations", key: false },
        { time: "6:15 PM",  event: "Pro Series Qualifying (Q1) — Night Show", key: true },
      ]},
      { day: "Thursday, Sep 3", sessions: [
        { time: "8:00 AM",  event: "Lucas Oil Series Eliminations", key: false },
        { time: "6:15 PM",  event: "Pro Series Qualifying (Q2) — Night Show", key: true },
      ]},
      { day: "Friday, Aug 29 (preview)", sessions: [
        { time: "8:00 AM",  event: "Lucas Oil Series Eliminations", key: false },
        { time: "6:15 PM",  event: "Pro Series Qualifying (Q3) — Night Show", key: true },
      ]},
      { day: "Saturday, Sep 5", sessions: [
        { time: "8:00 AM",  event: "Lucas Oil Series Eliminations", key: false },
        { time: "12:30 PM", event: "Pro Series Qualifying (Q4, Mission 2Fast2Tasty)", key: true },
        { time: "3:15 PM",  event: "Pro Series Qualifying (Q5, Final)", key: true },
        { time: "7:15 PM",  event: "Lucas Oil Series Evening Eliminations", key: false },
      ]},
      { day: "Sunday, Sep 6", sessions: [
        { time: "8:00 AM",  event: "Lucas Oil Series Eliminations", key: false },
        { time: "12:00 PM", event: "PlayNHRA All-Star Funny Car Callout Elims", key: true },
        { time: "12:45 PM", event: "Pro Series Qualifying (Q6)", key: true },
        { time: "2:45 PM",  event: "Pro Series Final Qualifying (Q7)", key: true },
        { time: "5:45 PM",  event: "Lucas Oil Series Evening Eliminations", key: false },
      ]},
      { day: "Monday, Sep 7", sessions: [
        { time: "9:00 AM",  event: "SealMaster Track Walk & Driver Introductions", key: false },
        { time: "10:00 AM", event: "Mission Foods Drag Racing Eliminations Begin — THE BIG GO", key: true },
        { time: "All Day",  event: "Top Fuel → Funny Car → Pro Stock → PSM → Pro Mod", key: false },
      ]},
    ]
  },

  // ── COUNTDOWN TO THE CHAMPIONSHIP ──
  {
    id: 15,
    name: "NHRA Great Lakes Nationals",
    fullName: "41st annual NHRA Great Lakes Nationals",
    venue: "U.S. 131 Motorsports Park",
    city: "Martin, MI",
    timezone: "America/New_York",
    startDate: "2026-09-17",
    endDate:   "2026-09-20",
    tv: "FS1",
    phase: "countdown",
    tags: [],
    classes: ["Top Fuel","Funny Car","Pro Stock","Pro Stock Motorcycle"],
    itinerary: [
      { day: "Thursday, Sep 17", sessions: [
        { time: "9:00 AM",  event: "Gates Open", key: false },
        { time: "1:00 PM",  event: "Qualifying — Pro Stock / PSM (Q1)", key: true },
        { time: "4:30 PM",  event: "Qualifying — Top Fuel / Funny Car (Q1)", key: true },
        { time: "7:00 PM",  event: "Qualifying — Top Fuel / Funny Car (Q2, Night Show)", key: true },
      ]},
      { day: "Friday, Sep 18", sessions: [
        { time: "9:00 AM",  event: "Gates Open", key: false },
        { time: "2:00 PM",  event: "Qualifying — Pro Stock / PSM (Q3)", key: true },
        { time: "4:30 PM",  event: "Qualifying — Top Fuel / Funny Car (Q3)", key: true },
        { time: "7:00 PM",  event: "Qualifying — Top Fuel / Funny Car (Q4, Night Show)", key: true },
      ]},
      { day: "Saturday, Sep 19", sessions: [
        { time: "9:00 AM",  event: "Gates Open", key: false },
        { time: "12:00 PM", event: "Qualifying — All Classes (Mission 2Fast2Tasty)", key: true },
        { time: "3:30 PM",  event: "Qualifying — All Classes (Final)", key: true },
      ]},
      { day: "Sunday, Sep 20", sessions: [
        { time: "9:00 AM",  event: "Gates Open", key: false },
        { time: "9:30 AM",  event: "Track Walk & Driver Introductions", key: false },
        { time: "10:30 AM", event: "Countdown Eliminations Begin (Race 1 of 6)", key: true },
      ]},
    ]
  },
  {
    id: 16,
    name: "NHRA Nationals at The Rock",
    fullName: "NHRA Nationals at The Rock",
    venue: "Rockingham Dragway",
    city: "Rockingham, NC",
    timezone: "America/New_York",
    startDate: "2026-09-25",
    endDate:   "2026-09-27",
    tv: "FS1",
    phase: "countdown",
    tags: [],
    classes: ["Top Fuel","Funny Car","Pro Stock","Pro Stock Motorcycle","Pro Mod"],
    itinerary: [
      { day: "Friday, Sep 25", sessions: [
        { time: "9:00 AM",  event: "Gates Open", key: false },
        { time: "1:00 PM",  event: "Qualifying — Pro Stock / PSM (Q1)", key: true },
        { time: "4:30 PM",  event: "Qualifying — Top Fuel / Funny Car (Q1, Night Show)", key: true },
        { time: "7:00 PM",  event: "Qualifying — Top Fuel / Funny Car (Q2, Night Show)", key: true },
      ]},
      { day: "Saturday, Sep 26", sessions: [
        { time: "9:00 AM",  event: "Gates Open", key: false },
        { time: "12:00 PM", event: "Qualifying — All Classes (Q3)", key: true },
        { time: "3:30 PM",  event: "Qualifying — All Classes (Q4, Final)", key: true },
      ]},
      { day: "Sunday, Sep 27", sessions: [
        { time: "9:00 AM",  event: "Gates Open", key: false },
        { time: "9:30 AM",  event: "Track Walk & Driver Introductions", key: false },
        { time: "10:30 AM", event: "Countdown Eliminations Begin (Race 2 of 6)", key: true },
      ]},
    ]
  },
  {
    id: 17,
    name: "NAPA Auto Parts NHRA Midwest Nationals",
    fullName: "15th annual NAPA Auto Parts NHRA Midwest Nationals",
    venue: "World Wide Technology Raceway",
    city: "Madison, IL",
    timezone: "America/Chicago",
    startDate: "2026-10-02",
    endDate:   "2026-10-04",
    tv: "FS1 / FOX",
    phase: "countdown",
    tags: [],
    classes: ["Top Fuel","Funny Car","Pro Stock","Pro Stock Motorcycle"],
    itinerary: [
      { day: "Friday, Oct 2", sessions: [
        { time: "9:00 AM",  event: "Gates Open", key: false },
        { time: "1:00 PM",  event: "Qualifying — Pro Stock / PSM (Q1)", key: true },
        { time: "4:30 PM",  event: "Qualifying — Top Fuel / Funny Car (Q1, Night Show)", key: true },
        { time: "7:00 PM",  event: "Qualifying — Top Fuel / Funny Car (Q2, Night Show)", key: true },
      ]},
      { day: "Saturday, Oct 3", sessions: [
        { time: "9:00 AM",  event: "Gates Open", key: false },
        { time: "12:00 PM", event: "Qualifying — All Classes (Q3)", key: true },
        { time: "3:30 PM",  event: "Qualifying — All Classes (Q4, Final)", key: true },
      ]},
      { day: "Sunday, Oct 4", sessions: [
        { time: "9:00 AM",  event: "Gates Open", key: false },
        { time: "9:30 AM",  event: "Track Walk & Driver Introductions", key: false },
        { time: "10:30 AM", event: "Countdown Eliminations Begin (Race 3 of 6)", key: true },
      ]},
    ]
  },
  {
    id: 18,
    name: "Texas NHRA FallNationals",
    fullName: "41st annual Texas NHRA FallNationals",
    venue: "Texas Motorplex",
    city: "Ennis, TX",
    timezone: "America/Chicago",
    startDate: "2026-10-14",
    endDate:   "2026-10-18",
    tv: "FS1 / FOX",
    phase: "countdown",
    tags: [],
    classes: ["Top Fuel","Funny Car","Pro Stock","Pro Stock Motorcycle"],
    itinerary: [
      { day: "Wednesday, Oct 14", sessions: [
        { time: "9:00 AM",  event: "Gates Open / Tech / Media Day", key: false },
      ]},
      { day: "Thursday, Oct 15", sessions: [
        { time: "9:00 AM",  event: "Gates Open / Tech", key: false },
        { time: "1:00 PM",  event: "Qualifying — Pro Stock / PSM (Q1)", key: true },
        { time: "4:30 PM",  event: "Qualifying — Top Fuel / Funny Car (Q1, Night Show)", key: true },
        { time: "7:00 PM",  event: "Qualifying — Top Fuel / Funny Car (Q2, Night Show)", key: true },
      ]},
      { day: "Friday, Oct 16", sessions: [
        { time: "9:00 AM",  event: "Gates Open", key: false },
        { time: "2:00 PM",  event: "Qualifying — Pro Stock / PSM (Q3)", key: true },
        { time: "4:30 PM",  event: "Qualifying — Top Fuel / Funny Car (Q3, Night Show)", key: true },
        { time: "7:00 PM",  event: "Qualifying — Top Fuel / Funny Car (Q4, Night Show)", key: true },
      ]},
      { day: "Saturday, Oct 17", sessions: [
        { time: "8:00 AM",  event: "Sportsman Eliminations", key: false },
        { time: "12:00 PM", event: "Qualifying — Top Fuel / Funny Car (Q5, Mission 2Fast2Tasty)", key: true },
        { time: "1:00 PM",  event: "Qualifying — Pro Stock / PSM (Q5)", key: true },
        { time: "3:30 PM",  event: "Qualifying — All Classes (Final Q)", key: true },
      ]},
      { day: "Sunday, Oct 18", sessions: [
        { time: "8:30 AM",  event: "Track Walk & Driver Introductions", key: false },
        { time: "10:00 AM", event: "Countdown Eliminations Begin (Race 4 of 6)", key: true },
      ]},
    ]
  },
  {
    id: 19,
    name: "NHRA Nevada Nationals",
    fullName: "26th annual NHRA Nevada Nationals",
    venue: "Las Vegas Motor Speedway",
    city: "Las Vegas, NV",
    timezone: "America/Los_Angeles",
    startDate: "2026-10-29",
    endDate:   "2026-11-01",
    tv: "FS1",
    phase: "countdown",
    tags: [],
    classes: ["Top Fuel","Funny Car","Pro Stock","Pro Stock Motorcycle"],
    itinerary: [
      { day: "Thursday, Oct 29", sessions: [
        { time: "9:00 AM",  event: "Gates Open / Tech", key: false },
        { time: "1:00 PM",  event: "Qualifying — Pro Stock / PSM (Q1)", key: true },
        { time: "4:30 PM",  event: "Qualifying — Top Fuel / Funny Car (Q1, Night Show)", key: true },
        { time: "7:00 PM",  event: "Qualifying — Top Fuel / Funny Car (Q2, Night Show)", key: true },
      ]},
      { day: "Friday, Oct 30", sessions: [
        { time: "9:00 AM",  event: "Gates Open", key: false },
        { time: "2:00 PM",  event: "Qualifying — Pro Stock / PSM (Q3)", key: true },
        { time: "4:30 PM",  event: "Qualifying — Top Fuel / Funny Car (Q3, Night Show)", key: true },
        { time: "7:00 PM",  event: "Qualifying — Top Fuel / Funny Car (Q4, Night Show)", key: true },
      ]},
      { day: "Saturday, Oct 31", sessions: [
        { time: "9:00 AM",  event: "Gates Open — Halloween at the Races", key: false },
        { time: "12:00 PM", event: "Qualifying — All Classes (Q5, Mission 2Fast2Tasty)", key: true },
        { time: "3:30 PM",  event: "Qualifying — All Classes (Final Q)", key: true },
      ]},
      { day: "Sunday, Nov 1", sessions: [
        { time: "9:00 AM",  event: "Gates Open", key: false },
        { time: "9:30 AM",  event: "Track Walk & Driver Introductions", key: false },
        { time: "10:30 AM", event: "Countdown Eliminations Begin (Race 5 of 6)", key: true },
      ]},
    ]
  },
  {
    id: 20,
    name: "In-N-Out Burger NHRA Finals",
    fullName: "61st annual In-N-Out Burger NHRA Finals — 75th Anniversary Season Finale",
    venue: "In-N-Out Burger Pomona Dragstrip",
    city: "Pomona, CA",
    timezone: "America/Los_Angeles",
    startDate: "2026-11-12",
    endDate:   "2026-11-15",
    tv: "FS1",
    phase: "countdown",
    tags: ["season-finale"],
    classes: ["Top Fuel","Funny Car","Pro Stock","Pro Stock Motorcycle"],
    itinerary: [
      { day: "Thursday, Nov 12", sessions: [
        { time: "9:00 AM",  event: "Gates Open — 75th Anniversary Season Finale", key: false },
        { time: "1:00 PM",  event: "Qualifying — Pro Stock / PSM (Q1)", key: true },
        { time: "4:30 PM",  event: "Qualifying — Top Fuel / Funny Car (Q1, Night Show)", key: true },
        { time: "7:00 PM",  event: "Qualifying — Top Fuel / Funny Car (Q2, Night Show)", key: true },
      ]},
      { day: "Friday, Nov 13", sessions: [
        { time: "9:00 AM",  event: "Gates Open", key: false },
        { time: "2:00 PM",  event: "Qualifying — Pro Stock / PSM (Q3)", key: true },
        { time: "4:30 PM",  event: "Qualifying — Top Fuel / Funny Car (Q3, Night Show)", key: true },
        { time: "7:00 PM",  event: "Qualifying — Top Fuel / Funny Car (Q4, Night Show)", key: true },
      ]},
      { day: "Saturday, Nov 14", sessions: [
        { time: "9:00 AM",  event: "Gates Open", key: false },
        { time: "12:00 PM", event: "Qualifying — All Classes (Q5, Mission 2Fast2Tasty)", key: true },
        { time: "3:30 PM",  event: "Qualifying — All Classes (Final Q)", key: true },
        { time: "5:30 PM",  event: "Championship Celebration Events", key: false },
      ]},
      { day: "Sunday, Nov 15", sessions: [
        { time: "9:00 AM",  event: "Gates Open", key: false },
        { time: "9:30 AM",  event: "Track Walk & Driver Introductions", key: false },
        { time: "10:30 AM", event: "Championship Eliminations Begin (Race 6 of 6 — World Titles On The Line)", key: true },
      ]},
    ]
  },
];

// ── TIME ZONE CONVERSION ────────────────────────────────────────────────────
// Parse local time string + venue timezone → convert to Eastern Time display
function convertToET(timeStr, dateStr, venueTz) {
  // Skip non-time entries
  if (!timeStr.match(/^\d+:\d+\s*(AM|PM)$/i)) return timeStr;

  try {
    const [, hr, min, ampm] = timeStr.match(/^(\d+):(\d+)\s*(AM|PM)$/i);
    let hour = parseInt(hr, 10);
    if (ampm.toUpperCase() === 'PM' && hour !== 12) hour += 12;
    if (ampm.toUpperCase() === 'AM' && hour === 12) hour = 0;

    // Build an ISO datetime string and parse in venue timezone
    const localStr = `${dateStr}T${String(hour).padStart(2,'0')}:${min}:00`;

    // Use Intl to get the UTC offset for this date/time in the venue tz
    const venueDt = new Date(localStr);
    const venueOffset = getTimezoneOffset(localStr, venueTz);
    const utcMs = venueDt.getTime() - venueOffset * 60000;

    const etDate = new Date(utcMs);
    return etDate.toLocaleTimeString('en-US', {
      hour: 'numeric', minute: '2-digit', hour12: true, timeZone: 'America/New_York'
    });
  } catch {
    return timeStr;
  }
}

function getTimezoneOffset(localDateStr, tz) {
  // Use Intl DateTimeFormat trick to get offset in minutes
  const dt = new Date(localDateStr);
  const tzDate = new Date(dt.toLocaleString('en-US', { timeZone: tz }));
  const utcDate = new Date(dt.toLocaleString('en-US', { timeZone: 'UTC' }));
  return (tzDate - utcDate) / 60000;
}

// ── DATE HELPERS ───────────────────────────────────────────────────────────
function parseDate(str) {
  const [y, m, d] = str.split('-').map(Number);
  return new Date(y, m - 1, d);
}
function today() {
  const n = new Date();
  return new Date(n.getFullYear(), n.getMonth(), n.getDate());
}
function formatDateRange(start, end) {
  const s = parseDate(start), e = parseDate(end);
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  if (s.getMonth() === e.getMonth()) {
    return `${months[s.getMonth()]} ${s.getDate()}–${e.getDate()}, ${s.getFullYear()}`;
  }
  return `${months[s.getMonth()]} ${s.getDate()} – ${months[e.getMonth()]} ${e.getDate()}, ${e.getFullYear()}`;
}

// ── STATUS HELPERS ─────────────────────────────────────────────────────────
function getRaceStatus(race) {
  const t = today();
  const start = parseDate(race.startDate);
  const end = parseDate(race.endDate);
  if (t > end)   return 'completed';
  if (t >= start) return 'live';
  return 'upcoming';
}

// ── STATS BAR ──────────────────────────────────────────────────────────────
function updateStats() {
  const t = today();
  let remaining = 0, completed = 0, nextRace = null;

  RACES.forEach(r => {
    const end = parseDate(r.endDate);
    const start = parseDate(r.startDate);
    if (t > end) {
      completed++;
    } else {
      remaining++;
      if (!nextRace && t <= start) nextRace = r;
    }
  });

  document.getElementById('stat-remaining').textContent = remaining;
  document.getElementById('stat-completed').textContent = completed;

  if (nextRace) {
    const city = nextRace.city.split(',')[1]?.trim() || nextRace.city;
    document.getElementById('stat-next').textContent = city;
  } else {
    document.getElementById('stat-next').textContent = 'Season Complete';
  }
}

// ── RENDER SCHEDULE ────────────────────────────────────────────────────────
let activeFilter = 'all';

function renderSchedule() {
  const list = document.getElementById('schedule-list');
  list.innerHTML = '';

  const t = today();
  let nextFound = false;

  // Find overall next race
  const nextRace = RACES.find(r => parseDate(r.endDate) >= t);

  let regularRendered = false;
  let countdownRendered = false;

  const filtered = RACES.filter(r => {
    const status = getRaceStatus(r);
    if (activeFilter === 'upcoming')  return status === 'upcoming' || status === 'live';
    if (activeFilter === 'completed') return status === 'completed';
    if (activeFilter === 'countdown') return r.phase === 'countdown';
    return true;
  });

  if (filtered.length === 0) {
    list.innerHTML = `
      <div class="empty-state">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
        </svg>
        <p>No races in this category</p>
      </div>`;
    return;
  }

  filtered.forEach(race => {
    const status = getRaceStatus(race);
    const isNext = race === nextRace && (activeFilter === 'all' || activeFilter === 'upcoming');

    // Phase headers
    if (race.phase === 'regular' && !regularRendered && (activeFilter === 'all' || activeFilter === 'completed')) {
      const ph = document.createElement('div');
      ph.className = 'phase-header regular';
      ph.innerHTML = `<span class="phase-label">Regular Season</span><div class="phase-line"></div>`;
      list.appendChild(ph);
      regularRendered = true;
    }
    if (race.phase === 'countdown' && !countdownRendered && (activeFilter === 'all' || activeFilter === 'countdown' || activeFilter === 'completed')) {
      const ph = document.createElement('div');
      ph.className = 'phase-header countdown';
      ph.innerHTML = `<span class="phase-label">Countdown to the Championship</span><div class="phase-line"></div>`;
      list.appendChild(ph);
      countdownRendered = true;
    }

    const card = document.createElement('div');
    card.className = `race-card ${status} ${race.phase === 'countdown' ? 'countdown-race' : ''} ${isNext ? 'next-race' : ''}`;
    card.setAttribute('role', 'listitem');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `${race.name}, ${race.city}, ${formatDateRange(race.startDate, race.endDate)}`);

    const sDate = parseDate(race.startDate);
    const eDate = parseDate(race.endDate);
    const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
    const sameMonth = sDate.getMonth() === eDate.getMonth();

    let statusLabel = '';
    if (isNext) statusLabel = `<span class="card-status status-next">Next Race</span>`;
    else if (status === 'completed') statusLabel = `<span class="card-status status-completed">Completed</span>`;
    else if (status === 'live') statusLabel = `<span class="card-status status-next">Live</span>`;

    let tagsHtml = race.tags.map(t => {
      const cls = t === '4-wide' ? 'tag-4wide' : t === 'big-go' ? 'tag-biggo' : '';
      const labels = { '4-wide': '4-Wide', 'big-go': 'The Big Go', 'season-opener': 'Season Opener', 'season-finale': 'Season Finale', 'new-venue': 'New Venue' };
      return `<span class="card-tag ${cls}">${labels[t] || t}</span>`;
    }).join('');

    card.innerHTML = `
      ${isNext ? '<div class="next-race-banner">UP NEXT</div>' : ''}
      <div class="card-date-col">
        <span class="card-month">${months[sDate.getMonth()]}</span>
        <span class="card-day">${sDate.getDate()}</span>
        ${!sameMonth ? `<span class="card-day-end">–${months[eDate.getMonth()]} ${eDate.getDate()}</span>` : `<span class="card-day-end">–${eDate.getDate()}</span>`}
      </div>
      <div class="card-content">
        <div class="card-top-row">
          <span class="card-event-num">Race ${race.id} of 20</span>
          ${statusLabel}
        </div>
        <div class="card-name">${race.name}</div>
        <div class="card-venue">${race.venue} · ${race.city}</div>
        <div class="card-footer-row">
          <span class="card-tv">${race.tv}</span>
          ${tagsHtml}
        </div>
      </div>
      <div class="card-arrow">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
      </div>
    `;

    card.addEventListener('click', () => openModal(race));
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(race); } });
    list.appendChild(card);
  });
}

// ── FILTER TABS ────────────────────────────────────────────────────────────
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    renderSchedule();
  });
});

// ── MODAL ──────────────────────────────────────────────────────────────────
const modalBackdrop = document.getElementById('modal-backdrop');
const modalSheet    = document.getElementById('modal-sheet');
const modalClose    = document.getElementById('modal-close');

function openModal(race) {
  // Header
  document.getElementById('modal-event-num').textContent = `Race ${race.id} of 20 · ${race.phase === 'countdown' ? 'Countdown to the Championship' : 'Regular Season'}`;
  document.getElementById('modal-title').textContent = race.name;
  document.getElementById('modal-location').textContent = `${race.venue} — ${race.city}`;
  document.getElementById('modal-dates').textContent = formatDateRange(race.startDate, race.endDate);
  document.getElementById('modal-tv').textContent = `📺 ${race.tv}`;

  // Classes
  const proClasses = ['Top Fuel','Funny Car','Pro Stock','Pro Stock Motorcycle','Pro Mod'];
  document.getElementById('modal-classes').innerHTML = race.classes.map(c =>
    `<span class="class-pill ${proClasses.includes(c) ? 'pro' : ''}">${c}</span>`
  ).join('');

  // Itinerary with ET conversion
  const itinContainer = document.getElementById('itinerary-content');
  itinContainer.innerHTML = '';

  race.itinerary.forEach(day => {
    const dayEl = document.createElement('div');
    dayEl.className = 'itin-day';

    const dayLabel = document.createElement('div');
    dayLabel.className = 'itin-day-label';
    dayLabel.textContent = day.day;
    dayEl.appendChild(dayLabel);

    day.sessions.forEach(sess => {
      const row = document.createElement('div');
      row.className = `itin-row ${sess.key ? 'key-session' : ''}`;

      // Convert time to ET using the first day of the event
      const etTime = convertToET(sess.time, race.startDate, race.timezone);

      row.innerHTML = `
        <span class="itin-time">${etTime}</span>
        <span class="itin-event ${sess.key ? '' : 'muted'}">${sess.event}</span>
      `;
      dayEl.appendChild(row);
    });

    itinContainer.appendChild(dayEl);
  });

  // Tickets link
  document.getElementById('modal-tickets').href = `https://www.nhra.com/schedule/2026`;

  // Show
  modalBackdrop.removeAttribute('hidden');
  modalSheet.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';

  requestAnimationFrame(() => {
    modalBackdrop.classList.add('visible');
    modalSheet.classList.add('open');
  });

  modalClose.focus();
}

function closeModal() {
  modalBackdrop.classList.remove('visible');
  modalSheet.classList.remove('open');
  document.body.style.overflow = '';

  setTimeout(() => {
    modalBackdrop.setAttribute('hidden', '');
    modalSheet.setAttribute('hidden', '');
  }, 300);
}

modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// Touch-to-dismiss sheet (swipe down)
let touchStartY = 0;
modalSheet.addEventListener('touchstart', e => { touchStartY = e.touches[0].clientY; }, { passive: true });
modalSheet.addEventListener('touchend', e => {
  const dy = e.changedTouches[0].clientY - touchStartY;
  if (dy > 80) closeModal();
}, { passive: true });

// ── THEME TOGGLE ───────────────────────────────────────────────────────────
(function() {
  const html = document.documentElement;
  const btn  = document.querySelector('[data-theme-toggle]');
  const icon = document.getElementById('theme-icon');

  let theme = html.getAttribute('data-theme') ||
    (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  html.setAttribute('data-theme', theme);
  updateIcon(theme);

  btn.addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', theme);
    updateIcon(theme);
    try { localStorage.setItem('nhra-theme', theme); } catch {}
  });

  try {
    const saved = localStorage.getItem('nhra-theme');
    if (saved) { theme = saved; html.setAttribute('data-theme', theme); updateIcon(theme); }
  } catch {}

  function updateIcon(t) {
    if (t === 'dark') {
      icon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
      btn.setAttribute('aria-label', 'Switch to light mode');
    } else {
      icon.innerHTML = '<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>';
      btn.setAttribute('aria-label', 'Switch to dark mode');
    }
  }
})();

// ── PWA INSTALL (Android/Chrome) ──────────────────────────────────────────
let deferredPrompt = null;
const installBanner = document.getElementById('install-banner');
const installBtn    = document.getElementById('install-btn');
const installDismiss = document.getElementById('install-dismiss');

window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredPrompt = e;
  installBanner.removeAttribute('hidden');
});

installBtn.addEventListener('click', async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  deferredPrompt = null;
  installBanner.setAttribute('hidden', '');
});

installDismiss.addEventListener('click', () => {
  installBanner.setAttribute('hidden', '');
});

window.addEventListener('appinstalled', () => {
  installBanner.setAttribute('hidden', '');
  deferredPrompt = null;
});

// ── SERVICE WORKER ─────────────────────────────────────────────────────────
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}

// ── INIT ───────────────────────────────────────────────────────────────────
updateStats();
renderSchedule();
