// Bull Runner Transportation Data
// Updated manually based on USF parking routes data - April 2026
// This contains the nearest stops and available routes for each parking facility

export const routeData = [
  // Main Campus Garages
  {
    lotName: "Richard A. Beard Garage",
    primaryArea: "Engineering",
    nearestBullRunnerStop: "00206 - University Technology Center",
    routes: ["green", "red"]
  },
  {
    lotName: "Collins Blvd Garage",
    primaryArea: "Library",
    nearestBullRunnerStop: "00102 - Library",
    routes: ["brown", "green", "orange", "purple", "red"]
  },
  {
    lotName: "Laurel Drive Garage",
    primaryArea: "USF Health",
    nearestBullRunnerStop: "00326 - Laurel Dr Parking Garage",
    routes: ["blue", "orange"]
  },
  {
    lotName: "Crescent Hill Garage",
    primaryArea: "The Village",
    nearestBullRunnerStop: "00418 - The Village Holly Dr entrance",
    routes: ["orange", "purple"]
  },

  // 00-series lots - Education & Library Area
  {
    lotName: "Lot 01",
    primaryArea: "Education",
    nearestBullRunnerStop: "00102 - Library",
    routes: ["brown", "green", "orange", "purple", "red"]
  },
  {
    lotName: "Lot 02A",
    primaryArea: "Library",
    nearestBullRunnerStop: "00101 - Math & Engineering",
    routes: ["brown", "green", "orange", "purple", "red"]
  },
  {
    lotName: "Lot 02C",
    primaryArea: "Multidisciplinary Sciences",
    nearestBullRunnerStop: "00101 - Math & Engineering",
    routes: ["purple", "green", "brown", "orange", "red"]
  },

  // 03-series lots - Marshall Center area
  {
    lotName: "Lot 03A",
    primaryArea: "Marshall Student Center",
    nearestBullRunnerStop: "00401 - Marshall Student Center",
    routes: ["blue", "green", "orange", "purple", "red"]
  },
  {
    lotName: "Lot 03B",
    primaryArea: "Marshall Student Center",
    nearestBullRunnerStop: "00401 - Marshall Student Center",
    routes: ["blue", "green", "orange", "purple", "red"]
  },
  {
    lotName: "Lot 03C",
    primaryArea: "Marshall Student Center",
    nearestBullRunnerStop: "00304 - Marshall Student Center",
    routes: ["blue", "green", "orange", "red"]
  },
  {
    lotName: "Lot 03D",
    primaryArea: "Fine Arts",
    nearestBullRunnerStop: "00303 - Fine Arts Studio",
    routes: ["blue", "green", "orange", "red"]
  },
  {
    lotName: "Lot 03E",
    primaryArea: "School of Music",
    nearestBullRunnerStop: "00305 - School of Music",
    routes: ["blue", "green", "orange", "red"]
  },

  // Lot 04 - Post Office
  {
    lotName: "Lot 04",
    primaryArea: "Post Office",
    nearestBullRunnerStop: "00302 - Post Office",
    routes: ["green", "red"]
  },

  // 05-series lots - North campus residential
  {
    lotName: "Lot 05A",
    primaryArea: "Marshall Student Center",
    nearestBullRunnerStop: "00401 - Marshall Student Center",
    routes: ["blue", "green", "orange", "purple", "red"]
  },
  {
    lotName: "Lot 05B",
    primaryArea: "Argos Center",
    nearestBullRunnerStop: "00421 - North Campus Mail Center",
    routes: ["orange", "purple"]
  },
  {
    lotName: "Lot 05D",
    primaryArea: "Maple Hall",
    nearestBullRunnerStop: "00425 - Holly Dr at Maple Suites",
    routes: ["orange", "purple"]
  },
  {
    lotName: "Lot 05E",
    primaryArea: "Beta Hall",
    nearestBullRunnerStop: "00115 - Genshaft Dr at Maple Suites",
    routes: ["purple"]
  },

  // Recreational area
  {
    lotName: "Lot 06",
    primaryArea: "Recreation Activities Center",
    nearestBullRunnerStop: "00162 - Baseball Field",
    routes: ["orange"]
  },

  // 07-series - Central campus academic buildings
  {
    lotName: "Lot 07A",
    primaryArea: "Behavioral Sciences",
    nearestBullRunnerStop: "00121 - Sessums Mall",
    routes: ["purple"]
  },
  {
    lotName: "Lot 07B",
    primaryArea: "Faculty Office Building",
    nearestBullRunnerStop: "00121 - Sessums Mall",
    routes: ["purple"]
  },
  {
    lotName: "Lot 07C",
    primaryArea: "Student Services Building",
    nearestBullRunnerStop: "00121 - Sessums Mall",
    routes: ["purple"]
  },

  // 08-series - Science and Engineering area
  {
    lotName: "Lot 08A",
    primaryArea: "Science Center",
    nearestBullRunnerStop: "00209 - Science Center",
    routes: ["green"]
  },
  {
    lotName: "Lot 08B",
    primaryArea: "Juniper Poplar Hall",
    nearestBullRunnerStop: "00209 - Science Center",
    routes: ["green"]
  },
  {
    lotName: "Lot 08C",
    primaryArea: "Engineering",
    nearestBullRunnerStop: "00204 - Research Park",
    routes: ["green", "red"]
  },

  // 09-series - Health sciences area
  {
    lotName: "Lot 09A",
    primaryArea: "Psychology & Communication Sciences",
    nearestBullRunnerStop: "00221 - Psychology to MSC",
    routes: ["green"]
  },
  {
    lotName: "Lot 09C",
    primaryArea: "USF Health Faculty Office Building",
    nearestBullRunnerStop: "00226 - Moffit Office Building",
    routes: ["green"]
  },

  // 11-12 series - Health area
  {
    lotName: "Lot 11",
    primaryArea: "Alzheimers Center",
    nearestBullRunnerStop: "00348 - USF Health Therapy Building",
    routes: ["blue"]
  },
  {
    lotName: "Lot 12",
    primaryArea: "Psychiatry School of Physical Therapy",
    nearestBullRunnerStop: "00348- USF Health Therapy Building",
    routes: ["blue"]
  },

  // Lots 14-16 - Services & Wellness
  {
    lotName: "Lot 14",
    primaryArea: "Parking & Transportation Services",
    nearestBullRunnerStop: "00326 - Laurel Dr Parking Garage",
    routes: ["blue", "orange"]
  },
  {
    lotName: "Lot 15",
    primaryArea: "C. W. Bill Young Hall",
    nearestBullRunnerStop: "00120 - CW Bill Young Hall",
    routes: ["purple"]
  },
  {
    lotName: "Lot 16",
    primaryArea: "The Fit Health & Wellness Center",
    nearestBullRunnerStop: "00970 - Parking Lot 56",
    routes: ["blue", "green", "orange", "purple"]
  },

  // 17-series - Beach/Castor area
  {
    lotName: "Lot 17A",
    primaryArea: "Beach at Castor",
    nearestBullRunnerStop: "00116 - Genshaft Dr at Parking Lot 35",
    routes: ["purple"]
  },
  {
    lotName: "Lot 17B",
    primaryArea: "Social Sciences",
    nearestBullRunnerStop: "00116 - Genshaft Dr at Parking Lot 35",
    routes: ["purple"]
  },

  // 18-series - Athletics facilities
  {
    lotName: "Lot 18B",
    primaryArea: "Baseball Stadium",
    nearestBullRunnerStop: "00161 - Lee Roy Selmon Athletics Center",
    routes: ["orange"]
  },
  {
    lotName: "Lot 18T",
    primaryArea: "Porter Family Indoor Performance Facility",
    nearestBullRunnerStop: "00154 - SycamoreDr - Stadium",
    routes: ["orange"]
  },

  // Lots 19-21 - Various campus locations
  {
    lotName: "Lot 19",
    primaryArea: "Hope Lodge",
    nearestBullRunnerStop: "00230 - Magnolia Dr at Parking Lot 19",
    routes: ["green"]
  },
  {
    lotName: "Lot 20",
    primaryArea: "Teco Substation",
    nearestBullRunnerStop: "00411 - Palm Dr at Laurel Dr",
    routes: ["green", "purple"]
  },
  {
    lotName: "Lot 21",
    primaryArea: "CW Bill Young Hall",
    nearestBullRunnerStop: "00120 - CW Bill Young Hall",
    routes: ["purple"]
  },

  // 22-series - Yuengling Center area
  {
    lotName: "Lot 22A",
    primaryArea: "Yuengling Center",
    nearestBullRunnerStop: "00126 - Yuengling Center west entrance",
    routes: ["purple"]
  },
  {
    lotName: "Lot 22D",
    primaryArea: "Student Health & Wellness Center",
    nearestBullRunnerStop: "00126 - Yuengling Center west entrance",
    routes: ["purple"]
  },
  {
    lotName: "Lot 22E",
    primaryArea: "Yuengling Center",
    nearestBullRunnerStop: "00165 - Yuengling Center east entrance",
    routes: ["orange"]
  },
  {
    lotName: "Lot 22F",
    primaryArea: "Yuengling Center",
    nearestBullRunnerStop: "00165 - Yuengling Center east entrance",
    routes: ["orange"]
  },

  // 23-series - Alumni & Patel Center
  {
    lotName: "Lot 23A",
    primaryArea: "Alumni Center",
    nearestBullRunnerStop: "00110 - Patel Center",
    routes: ["orange"]
  },
  {
    lotName: "Lot 23B",
    primaryArea: "Dr. Kiran C. Patel Center for Global Solutions",
    nearestBullRunnerStop: "00110 - Patel Center",
    routes: ["orange"]
  },
  {
    lotName: "Lot 23T",
    primaryArea: "Alumni Center",
    nearestBullRunnerStop: "00110 - Patel Center",
    routes: ["orange"]
  },

  // Lots 24-26 - Residential & Services
  {
    lotName: "Lot 24",
    primaryArea: "Juniper Poplar Hall",
    nearestBullRunnerStop: "00214 - Juniper - Poplar",
    routes: ["green"]
  },
  {
    lotName: "Lot 25",
    primaryArea: "Cypress Apartments",
    nearestBullRunnerStop: "00970 - Parking Lot 56",
    routes: ["blue", "green", "orange", "purple"]
  },
  {
    lotName: "Lot 26",
    primaryArea: "University Police Building",
    nearestBullRunnerStop: "00970 - Parking Lot 56",
    routes: ["blue", "green", "orange", "purple"]
  },

  // Lot 28 - Post Office
  {
    lotName: "Lot 28",
    primaryArea: "Post Office",
    nearestBullRunnerStop: "00302 - Post Office",
    routes: ["green", "red"]
  },

  // 29-series - Library & Business area
  {
    lotName: "Lot 29A",
    primaryArea: "Communication and Information Sciences",
    nearestBullRunnerStop: "00102 - Library",
    routes: ["brown", "green", "orange", "purple", "red"]
  },
  {
    lotName: "Lot 29B",
    primaryArea: "Library",
    nearestBullRunnerStop: "00102 - Library",
    routes: ["purple", "red", "orange", "brown", "green"]
  },

  // 30-33 series - Moffitt area
  {
    lotName: "Lot 30",
    primaryArea: "Shared Student Services",
    nearestBullRunnerStop: "00311 - Moffit Research Center",
    routes: ["red"]
  },
  {
    lotName: "Lot 31",
    primaryArea: "Student Group Learning",
    nearestBullRunnerStop: "00311 - Moffit Research Center",
    routes: ["red"]
  },
  {
    lotName: "Lot 32",
    primaryArea: "H. Lee Moffitt Cancer Center",
    nearestBullRunnerStop: "00311 - Moffit Research Center",
    routes: ["red"]
  },
  {
    lotName: "Lot 33",
    primaryArea: "Moffitt Research Center",
    nearestBullRunnerStop: "00311 - Moffit Research Center",
    routes: ["red"]
  },
  {
    lotName: "Lot 33T",
    primaryArea: "Moffitt Parking Garage",
    nearestBullRunnerStop: "00226 - Moffit Office Building",
    routes: ["green"]
  },

  // 34-37 - Health & Business areas
  {
    lotName: "Lot 34",
    primaryArea: "College of Nursing",
    nearestBullRunnerStop: "00348 - USF Health Therapy Building",
    routes: ["blue"]
  },
  {
    lotName: "Lot 35",
    primaryArea: "Varsity Tennis Courts",
    nearestBullRunnerStop: "00445 - Parking Lot 35",
    routes: ["orange"]
  },
  {
    lotName: "Lot 36",
    primaryArea: "USF Muma College of Business",
    nearestBullRunnerStop: "00125 - Muma College of Buisness",
    routes: ["purple"]
  },
  {
    lotName: "Lot 37",
    primaryArea: "Behavioral Sciences",
    nearestBullRunnerStop: "00120 - CW Bill Young Hall",
    routes: ["purple"]
  },

  // 38-series - Large health sciences complex
  // These lots serve the College of Behavioral & Community Sciences and related facilities
  {
    lotName: "Lot 38A",
    primaryArea: "College of Behavioral & Community Sciences",
    nearestBullRunnerStop: "00346 - Chiles Center",
    routes: ["blue"]
  },
  {
    lotName: "Lot 38B",
    primaryArea: "College of Public Health",
    nearestBullRunnerStop: "00352 - Morsani Advanced Healthcare",
    routes: ["blue"]
  },
  {
    lotName: "Lot 38C",
    primaryArea: "Northwest Education Complex",
    nearestBullRunnerStop: "00342 - College of Public Health",
    routes: ["blue"]
  },
  {
    lotName: "Lot 38D",
    primaryArea: "College of Behavioral & Community Sciences",
    nearestBullRunnerStop: "00305 - School of Music",
    routes: ["orange", "red", "blue", "green"]
  },
  {
    lotName: "Lot 38E",
    primaryArea: "College of Behavioral & Community Sciences",
    nearestBullRunnerStop: "00344 - Northwest Education Complex",
    routes: ["blue"]
  },
  {
    lotName: "Lot 38F",
    primaryArea: "Westside Conference Center",
    nearestBullRunnerStop: "00340 - Westside Conference Center",
    routes: ["blue"]
  },
  {
    lotName: "Lot 38G",
    primaryArea: "College of Behavioral & Community Sciences",
    nearestBullRunnerStop: "00346 - Chiles Center",
    routes: ["blue"]
  },
  {
    lotName: "Lot 38H",
    primaryArea: "Northwest Education Complex",
    nearestBullRunnerStop: "00346 - Chiles Center",
    routes: ["blue"]
  },
  {
    lotName: "Lot 38R",
    primaryArea: "College of Behavioral & Community Sciences",
    nearestBullRunnerStop: "00346 - Chiles Center",
    routes: ["blue"]
  },
  {
    lotName: "Lot 38T",
    primaryArea: "College of Behavioral & Community Sciences",
    nearestBullRunnerStop: "00346 - Chiles Center",
    routes: ["blue"]
  },
  {
    lotName: "Lot 38U",
    primaryArea: "USF Family Center",
    nearestBullRunnerStop: "00352 - Morsani Advanced Healthcare",
    routes: ["blue"]
  },

  // 39-series - Health Partnership Complex
  {
    lotName: "Lot 39A",
    primaryArea: "Health Partnership Complex",
    nearestBullRunnerStop: "00352 - Morsani Advanced Healthcare",
    routes: ["blue"]
  },
  {
    lotName: "Lot 39B",
    primaryArea: "Health Partnership Complex",
    nearestBullRunnerStop: "00352 - Morsani Advanced Healthcare",
    routes: ["blue"]
  },

  // 40-series lots
  {
    lotName: "Lot 40",
    primaryArea: "Educational Research Center",
    nearestBullRunnerStop: "00165 - Yuengling Center east entrance",
    routes: ["orange"]
  },
  {
    lotName: "Lot 41",
    primaryArea: "Human Services Building",
    nearestBullRunnerStop: "00121 - Sessums Mall",
    routes: ["purple"]
  },
  {
    lotName: "Lot 42",
    primaryArea: "USF Health Faculty Office Building",
    nearestBullRunnerStop: "00312 - USF Health Faculty Office Building",
    routes: ["red", "blue"]
  },
  {
    lotName: "Lot 43",
    primaryArea: "Alzheimers Center",
    nearestBullRunnerStop: "00328 - Park and Ride Lot 43 West",
    routes: ["orange", "blue"]
  },
  {
    lotName: "Lot 44",
    primaryArea: "Testbed Assistive Rehabilitative Robotics",
    nearestBullRunnerStop: "00328 - Park and Ride Lot 43 West",
    routes: ["orange", "blue"]
  },
  {
    lotName: "Lot 45",
    primaryArea: "USF Patel Partnership School",
    nearestBullRunnerStop: "00165 - Yuengling Center east entrance",
    routes: ["orange"]
  },
  {
    lotName: "Lot 46",
    primaryArea: "Psychology & Communication Sciences",
    nearestBullRunnerStop: "00230 - Magnolia Dr at Parking Lot 19",
    routes: ["green"]
  },
  {
    lotName: "Lot 47",
    primaryArea: "Magnolia Field Complex",
    nearestBullRunnerStop: "00239 - Magnolia Field Complex",
    routes: ["red"]
  },
  {
    lotName: "Lot 47A",
    primaryArea: "Magnolia Apartments",
    nearestBullRunnerStop: "00239 - Magnolia Field Complex",
    routes: ["red"]
  },
  {
    lotName: "Lot 48",
    primaryArea: "Botanical Garden",
    nearestBullRunnerStop: "00241 - Botanical Gardens to Library",
    routes: ["red"]
  },

  // 50-53 series - Greek Village area
  {
    lotName: "Lot 50",
    primaryArea: "Greek Village",
    nearestBullRunnerStop: "00446 - Greek Park",
    routes: ["orange"]
  },
  {
    lotName: "Lot 51",
    primaryArea: "Greek Village",
    nearestBullRunnerStop: "00446 - Greek Park",
    routes: ["orange"]
  },
  {
    lotName: "Lot 52",
    primaryArea: "Greek Village",
    nearestBullRunnerStop: "00446 - Greek Park",
    routes: ["orange"]
  },
  {
    lotName: "Lot 52T",
    primaryArea: "Greek Village",
    nearestBullRunnerStop: "00446 - Greek Park",
    routes: ["orange"]
  },
  {
    lotName: "Lot 53",
    primaryArea: "Greek Village",
    nearestBullRunnerStop: "00446 - Greek Park",
    routes: ["orange"]
  },

  // Lot 56 - Wellness Center
  {
    lotName: "Lot 56",
    primaryArea: "The Fit Health & Wellness Center",
    nearestBullRunnerStop: "00970 - Parking Lot 56",
    routes: ["purple", "orange", "blue", "green"]
  },

  // Named lots (not numbered)
  {
    lotName: "Lot Apple",
    primaryArea: "USF Apple Drive",
    nearestBullRunnerStop: "00102 - Library",
    routes: ["brown", "green", "orange", "purple", "red"]
  },
  {
    lotName: "Lot CIC",
    primaryArea: "Campus Information Center",
    nearestBullRunnerStop: "00108 - Alumni Center",
    routes: ["orange", "purple"]
  },
  {
    lotName: "Lot Cedar Drive",
    primaryArea: "USF Cedar Circle",
    nearestBullRunnerStop: "00401 - Marshall Student Center",
    routes: ["blue", "green", "orange", "purple", "red"]
  },
  {
    lotName: "Lot Intramural Field",
    primaryArea: "Recreation Softball Complex",
    nearestBullRunnerStop: "00161 - Lee Roy Selmon Athletics Center",
    routes: ["orange"]
  },
  {
    lotName: "Lot Life Science Annex",
    primaryArea: "Life Science Annex",
    nearestBullRunnerStop: "00209 - Science Center",
    routes: ["green"]
  },
  {
    lotName: "Lot Morsani Service Area",
    primaryArea: "Morsani College of Medicine",
    nearestBullRunnerStop: "00352 - Morsani Advanced Healthcare",
    routes: ["blue"]
  },
  {
    lotName: "Lot Sago Drive",
    primaryArea: "USF Sago Drive",
    nearestBullRunnerStop: "00108 - Alumni Center",
    routes: ["purple", "orange"]
  },
  {
    lotName: "Lot Varsity Tennis Court",
    primaryArea: "Varsity Tennis Courts",
    nearestBullRunnerStop: "00445 - Parking Lot 35",
    routes: ["orange"]
  }
];