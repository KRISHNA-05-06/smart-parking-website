import { ParkingLotDetail } from '../types/parking';
import { routeData } from './routeData';

// Create a map for quick lookup
const routeMap = new Map(
  routeData.map((item) => [item.lotName, item])
);

// Import raw data
const rawParkingData = [
  {
    "id": "richard-a-beard-garage",
    "name": "Richard A. Beard Garage",
    "location": "USF Tampa Campus",
    "lotNumber": "Garage",
    "totalSpaces": 2010,
    "availableSpaces": 402,
    "permitTypes": ["D", "R", "S", "GZ08"],
    "floors": 8,
    "hourlyRate": 0,
    "amenities": ["Covered Parking", "Disabled Parking", "EV Charging", "Motorcycle Parking", "Bicycle Parking"],
    "permitAvailability": {
      "D": 500,
      "R": 450,
      "S": 1000,
      "GZ08": 60
    }
  },
  {
    "id": "collins-blvd-garage",
    "name": "Collins Blvd Garage",
    "location": "USF Tampa Campus",
    "lotNumber": "Garage",
    "totalSpaces": 1534,
    "availableSpaces": 307,
    "permitTypes": ["S", "GZ01"],
    "floors": 5,
    "hourlyRate": 0,
    "amenities": ["Covered Parking", "Disabled Parking", "EV Charging", "Motorcycle Parking", "Carpool Parking"],
    "permitAvailability": {
      "S": 1189,
      "GZ01": 231
    }
  },
  {
    "id": "laurel-drive-garage",
    "name": "Laurel Drive Garage",
    "location": "USF Tampa Campus",
    "lotNumber": "Garage",
    "totalSpaces": 1516,
    "availableSpaces": 303,
    "permitTypes": ["D", "E", "HE", "S", "GZ42"],
    "floors": 6,
    "hourlyRate": 0,
    "amenities": ["Covered Parking", "Disabled Parking", "EV Charging", "Motorcycle Parking", "Bicycle Parking"],
    "permitAvailability": {
      "D": 200,
      "E": 250,
      "HE": 50,
      "S": 300,
      "GZ42": 716
    }
  },
  {
    "id": "crescent-hill-garage",
    "name": "Crescent Hill Garage",
    "location": "USF Tampa Campus",
    "lotNumber": "Garage",
    "totalSpaces": 813,
    "availableSpaces": 163,
    "permitTypes": ["D", "E", "S", "R"],
    "floors": 6,
    "hourlyRate": 0,
    "amenities": ["Covered Parking", "Disabled Parking", "Motorcycle Parking"],
    "permitAvailability": {
      "D": 120,
      "E": 120,
      "S": 390,
      "R": 92
    }
  },
  {
    "id": "lot-01",
    "name": "Lot 01",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 01",
    "totalSpaces": 323,
    "availableSpaces": 65,
    "permitTypes": ["E"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking", "Motorcycle Parking", "Timed Spaces"],
    "permitAvailability": {
      "E": 297
    }
  },
  {
    "id": "lot-02a",
    "name": "Lot 02A",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 02A",
    "totalSpaces": 210,
    "availableSpaces": 42,
    "permitTypes": ["GZ02"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking", "Motorcycle Parking", "Timed Spaces"],
    "permitAvailability": {
      "GZ02": 78
    }
  },
  {
    "id": "lot-02c",
    "name": "Lot 02C",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 02C",
    "totalSpaces": 16,
    "availableSpaces": 3,
    "permitTypes": ["GZ02"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking"],
    "permitAvailability": {
      "GZ02": 16
    }
  },
  {
    "id": "lot-03a",
    "name": "Lot 03A",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 03A",
    "totalSpaces": 105,
    "availableSpaces": 21,
    "permitTypes": ["E"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking", "Motorcycle Parking", "Loading Dock", "State Vehicle"],
    "permitAvailability": {
      "E": 99
    }
  },
  {
    "id": "lot-03b",
    "name": "Lot 03B",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 03B",
    "totalSpaces": 115,
    "availableSpaces": 23,
    "permitTypes": ["D", "E", "S"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking", "Motorcycle Parking", "Loading Dock"],
    "permitAvailability": {
      "D": 30,
      "E": 40,
      "S": 40
    }
  },
  {
    "id": "lot-03c",
    "name": "Lot 03C",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 03C",
    "totalSpaces": 194,
    "availableSpaces": 39,
    "permitTypes": ["E", "S"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking", "Motorcycle Parking", "Loading Dock", "State Vehicle", "Timed Spaces"],
    "permitAvailability": {
      "E": 84,
      "S": 84
    }
  },
  {
    "id": "lot-03d",
    "name": "Lot 03D",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 03D",
    "totalSpaces": 107,
    "availableSpaces": 21,
    "permitTypes": ["E", "S"],
    "hourlyRate": 0,
    "amenities": ["Timed Spaces"],
    "permitAvailability": {
      "E": 53,
      "S": 53
    }
  },
  {
    "id": "lot-03e",
    "name": "Lot 03E",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 03E",
    "totalSpaces": 18,
    "availableSpaces": 4,
    "permitTypes": ["E"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking"],
    "permitAvailability": {
      "E": 18
    }
  },
  {
    "id": "lot-04",
    "name": "Lot 04",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 04",
    "totalSpaces": 40,
    "availableSpaces": 8,
    "permitTypes": ["E"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking"],
    "permitAvailability": {
      "E": 26
    }
  },
  {
    "id": "lot-05a",
    "name": "Lot 05A",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 05A",
    "totalSpaces": 123,
    "availableSpaces": 25,
    "permitTypes": ["R"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking", "Motorcycle Parking", "Timed Spaces"],
    "permitAvailability": {
      "R": 77
    }
  },
  {
    "id": "lot-05b",
    "name": "Lot 05B",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 05B",
    "totalSpaces": 29,
    "availableSpaces": 6,
    "permitTypes": ["R"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking", "ParkMobile Timed", "State Vehicle"],
    "permitAvailability": {
      "R": 12
    }
  },
  {
    "id": "lot-05d",
    "name": "Lot 05D",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 05D",
    "totalSpaces": 19,
    "availableSpaces": 4,
    "permitTypes": ["D"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking", "Timed Spaces"],
    "permitAvailability": {
      "D": 19
    }
  },
  {
    "id": "lot-05e",
    "name": "Lot 05E",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 05E",
    "totalSpaces": 168,
    "availableSpaces": 34,
    "permitTypes": ["R"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking"],
    "permitAvailability": {
      "R": 164
    }
  },
  {
    "id": "lot-06",
    "name": "Lot 06",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 06",
    "totalSpaces": 530,
    "availableSpaces": 106,
    "permitTypes": ["D", "E", "S"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking", "Motorcycle Parking", "Loading Dock", "State Vehicle", "30 Minute Timed Space"],
    "permitAvailability": {
      "D": 100,
      "E": 151,
      "S": 151
    }
  },
  {
    "id": "lot-07a",
    "name": "Lot 07A",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 07A",
    "totalSpaces": 179,
    "availableSpaces": 36,
    "permitTypes": ["E"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking", "State Vehicle"],
    "permitAvailability": {
      "E": 163
    }
  },
  {
    "id": "lot-07b",
    "name": "Lot 07B",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 07B",
    "totalSpaces": 118,
    "availableSpaces": 24,
    "permitTypes": ["D", "E"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking", "Timed Spaces"],
    "permitAvailability": {
      "D": 53,
      "E": 53
    }
  },
  {
    "id": "lot-07c",
    "name": "Lot 07C",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 07C",
    "totalSpaces": 30,
    "availableSpaces": 6,
    "permitTypes": ["E"],
    "hourlyRate": 0,
    "amenities": ["Open Air"],
    "permitAvailability": {
      "E": 6
    }
  },
  {
    "id": "lot-08a",
    "name": "Lot 08A",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 08A",
    "totalSpaces": 92,
    "availableSpaces": 18,
    "permitTypes": ["E"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking", "State Vehicle", "Timed Unload"],
    "permitAvailability": {
      "E": 79
    }
  },
  {
    "id": "lot-08b",
    "name": "Lot 08B",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 08B",
    "totalSpaces": 276,
    "availableSpaces": 55,
    "permitTypes": ["D", "E"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking", "Motorcycle Parking", "Loading Dock", "State Vehicle", "Timed Unload"],
    "permitAvailability": {
      "D": 76,
      "E": 76
    }
  },
  {
    "id": "lot-08c",
    "name": "Lot 08C",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 08C",
    "totalSpaces": 245,
    "availableSpaces": 49,
    "permitTypes": ["D", "E", "S"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking", "ParkMobile Timed", "Loading Dock"],
    "permitAvailability": {
      "D": 40,
      "E": 40,
      "S": 41
    }
  },
  {
    "id": "lot-09a",
    "name": "Lot 09A",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 09A",
    "totalSpaces": 417,
    "availableSpaces": 83,
    "permitTypes": ["E", "S", "GZ09"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking", "Motorcycle Parking", "Loading Dock", "Timed Unload"],
    "permitAvailability": {
      "E": 69,
      "S": 121,
      "GZ09": 12
    }
  },
  {
    "id": "lot-09c",
    "name": "Lot 09C",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 09C",
    "totalSpaces": 100,
    "availableSpaces": 20,
    "permitTypes": ["D", "E"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking", "Load/Unload", "Loading Dock"],
    "permitAvailability": {
      "D": 42,
      "E": 42
    }
  },
  {
    "id": "lot-11",
    "name": "Lot 11",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 11",
    "totalSpaces": 67,
    "availableSpaces": 13,
    "permitTypes": ["E"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking"],
    "permitAvailability": {
      "E": 41
    }
  },
  {
    "id": "lot-12",
    "name": "Lot 12",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 12",
    "totalSpaces": 218,
    "availableSpaces": 44,
    "permitTypes": ["D", "E"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking", "Motorcycle Parking", "Police Only"],
    "permitAvailability": {
      "D": 89,
      "E": 89
    }
  },
  {
    "id": "lot-14",
    "name": "Lot 14",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 14",
    "totalSpaces": 83,
    "availableSpaces": 17,
    "permitTypes": ["E"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking", "Motorcycle Parking", "Loading Dock", "State Vehicle", "Golf Cart"],
    "permitAvailability": {
      "E": 49
    }
  },
  {
    "id": "lot-15",
    "name": "Lot 15",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 15",
    "totalSpaces": 16,
    "availableSpaces": 0,
    "permitTypes": ["E"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking", "Load/Unload"],
    "permitAvailability": {
      "E": 16
    }
  },
  {
    "id": "lot-16",
    "name": "Lot 16",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 16",
    "totalSpaces": 189,
    "availableSpaces": 38,
    "permitTypes": ["R"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking"],
    "permitAvailability": {
      "R": 185
    }
  },
  {
    "id": "lot-17a",
    "name": "Lot 17A",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 17A",
    "totalSpaces": 117,
    "availableSpaces": 23,
    "permitTypes": ["R"],
    "hourlyRate": 0,
    "amenities": ["Motorcycle Parking"],
    "permitAvailability": {
      "R": 116
    }
  },
  {
    "id": "lot-17b",
    "name": "Lot 17B",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 17B",
    "totalSpaces": 474,
    "availableSpaces": 95,
    "permitTypes": ["R", "S"],
    "hourlyRate": 0,
    "amenities": ["Open Air"],
    "permitAvailability": {
      "R": 237,
      "S": 237
    }
  },
  {
    "id": "lot-18b",
    "name": "Lot 18B",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 18B",
    "totalSpaces": 427,
    "availableSpaces": 85,
    "permitTypes": ["D", "E", "HE", "GZ", "R", "S", "WB", "Y"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking"],
    "permitAvailability": {
      "D": 52,
      "E": 52,
      "HE": 52,
      "GZ": 52,
      "R": 52,
      "S": 52,
      "WB": 52,
      "Y": 51
    }
  },
  {
    "id": "lot-18t",
    "name": "Lot 18T",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 18T",
    "totalSpaces": 247,
    "availableSpaces": 49,
    "permitTypes": ["D", "E", "HE", "GZ", "R", "S", "WB", "Y"],
    "hourlyRate": 0,
    "amenities": ["Open Air"],
    "permitAvailability": {
      "D": 31,
      "E": 31,
      "HE": 31,
      "GZ": 31,
      "R": 31,
      "S": 31,
      "WB": 31,
      "Y": 30
    }
  },
  {
    "id": "lot-19",
    "name": "Lot 19",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 19",
    "totalSpaces": 505,
    "availableSpaces": 101,
    "permitTypes": ["D", "E", "HE", "S"],
    "hourlyRate": 0,
    "amenities": ["ParkMobile Timed"],
    "permitAvailability": {
      "D": 124,
      "E": 124,
      "HE": 124,
      "S": 124
    }
  },
  {
    "id": "lot-20",
    "name": "Lot 20",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 20",
    "totalSpaces": 222,
    "availableSpaces": 44,
    "permitTypes": ["E", "R", "S"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking", "Motorcycle Parking", "Zipcars", "Meter"],
    "permitAvailability": {
      "E": 68,
      "R": 69,
      "S": 69
    }
  },
  {
    "id": "lot-21",
    "name": "Lot 21",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 21",
    "totalSpaces": 110,
    "availableSpaces": 0,
    "permitTypes": ["E", "S"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking", "Motorcycle Parking", "EV Charging", "Timed Spaces"],
    "permitAvailability": {
      "E": 55,
      "S": 55
    }
  },
  {
    "id": "lot-22a",
    "name": "Lot 22A",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 22A",
    "totalSpaces": 119,
    "availableSpaces": 0,
    "permitTypes": ["E", "S"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking", "State Vehicle", "Timed Spaces"],
    "permitAvailability": {
      "E": 60,
      "S": 59
    }
  },
  {
    "id": "lot-22d",
    "name": "Lot 22D",
    "location": "Near Yuengling Center",
    "lotNumber": "Lot 22D",
    "totalSpaces": 537,
    "availableSpaces": 0,
    "permitTypes": ["D", "E", "S"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking", "Motorcycle Parking", "Timed Spaces"],
    "permitAvailability": {
      "D": 179,
      "E": 179,
      "S": 179
    }
  },
  {
    "id": "lot-22e",
    "name": "Lot 22E",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 22E",
    "totalSpaces": 367,
    "availableSpaces": 0,
    "permitTypes": ["D", "E", "S"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking", "Motorcycle Parking", "30 Minute Timed Space"],
    "permitAvailability": {
      "D": 122,
      "E": 122,
      "S": 123
    }
  },
  {
    "id": "lot-22f",
    "name": "Lot 22F",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 22F",
    "totalSpaces": 198,
    "availableSpaces": 0,
    "permitTypes": ["D", "E", "S"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking", "Motorcycle Parking"],
    "permitAvailability": {
      "D": 66,
      "E": 66,
      "S": 66
    }
  },
  {
    "id": "lot-23a",
    "name": "Lot 23A",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 23A",
    "totalSpaces": 136,
    "availableSpaces": 27,
    "permitTypes": ["E"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking"],
    "permitAvailability": {
      "E": 126
    }
  },
  {
    "id": "lot-23b",
    "name": "Lot 23B",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 23B",
    "totalSpaces": 106,
    "availableSpaces": 21,
    "permitTypes": ["D", "E"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking", "Load/Unload", "Timed Spaces", "EV Charging"],
    "permitAvailability": {
      "D": 38,
      "E": 37
    }
  },
  {
    "id": "lot-23t",
    "name": "Lot 23T",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 23T",
    "totalSpaces": 131,
    "availableSpaces": 26,
    "permitTypes": ["D", "E", "S"],
    "hourlyRate": 0,
    "amenities": ["Open Air"],
    "permitAvailability": {
      "D": 43,
      "E": 44,
      "S": 44
    }
  },
  {
    "id": "lot-24",
    "name": "Lot 24",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 24",
    "totalSpaces": 320,
    "availableSpaces": 64,
    "permitTypes": ["R"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking", "Motorcycle Parking", "State Vehicle"],
    "permitAvailability": {
      "R": 308
    }
  },
  {
    "id": "lot-25",
    "name": "Lot 25",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 25",
    "totalSpaces": 144,
    "availableSpaces": 29,
    "permitTypes": ["E", "R"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking", "Motorcycle Parking", "ParkMobile Timed"],
    "permitAvailability": {
      "E": 14,
      "R": 100
    }
  },
  {
    "id": "lot-26",
    "name": "Lot 26",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 26",
    "totalSpaces": 54,
    "availableSpaces": 11,
    "permitTypes": ["D", "E"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking", "30 Minute Timed Space"],
    "permitAvailability": {
      "D": 9,
      "E": 9
    }
  },
  {
    "id": "lot-28",
    "name": "Lot 28",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 28",
    "totalSpaces": 34,
    "availableSpaces": 7,
    "permitTypes": ["E"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking", "Motorcycle Parking", "ParkMobile Timed"],
    "permitAvailability": {
      "E": 16
    }
  },
  {
    "id": "lot-29a",
    "name": "Lot 29A",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 29A",
    "totalSpaces": 320,
    "availableSpaces": 64,
    "permitTypes": ["S"],
    "hourlyRate": 0,
    "amenities": ["Motorcycle Parking", "State Vehicle"],
    "permitAvailability": {
      "S": 319
    }
  },
  {
    "id": "lot-29b",
    "name": "Lot 29B",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 29B",
    "totalSpaces": 365,
    "availableSpaces": 73,
    "permitTypes": ["S"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking", "Motorcycle Parking", "Timed Spaces", "Loading Dock"],
    "permitAvailability": {
      "S": 311
    }
  },
  {
    "id": "lot-30",
    "name": "Lot 30",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 30",
    "totalSpaces": 76,
    "availableSpaces": 15,
    "permitTypes": ["S", "GZ33"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking", "Load/Unload", "Timed Spaces"],
    "permitAvailability": {
      "S": 33,
      "GZ33": 33
    }
  },
  {
    "id": "lot-31",
    "name": "Lot 31",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 31",
    "totalSpaces": 19,
    "availableSpaces": 4,
    "permitTypes": ["GZ33"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking", "Meter"],
    "permitAvailability": {
      "GZ33": 9
    }
  },
  {
    "id": "lot-32",
    "name": "Lot 32",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 32",
    "totalSpaces": 467,
    "availableSpaces": 93,
    "permitTypes": ["E", "S"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking", "Motorcycle Parking"],
    "permitAvailability": {
      "E": 225,
      "S": 226
    }
  },
  {
    "id": "lot-33",
    "name": "Lot 33",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 33",
    "totalSpaces": 527,
    "availableSpaces": 105,
    "permitTypes": ["S", "GZ33"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking", "Timed Spaces", "State Vehicle"],
    "permitAvailability": {
      "S": 46,
      "GZ33": 279
    }
  },
  {
    "id": "lot-33t",
    "name": "Lot 33T",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 33T",
    "totalSpaces": 98,
    "availableSpaces": 20,
    "permitTypes": ["S"],
    "hourlyRate": 0,
    "amenities": ["Open Air"],
    "permitAvailability": {
      "S": 98
    }
  },
  {
    "id": "lot-34",
    "name": "Lot 34",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 34",
    "totalSpaces": 132,
    "availableSpaces": 26,
    "permitTypes": ["D", "E", "S"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking"],
    "permitAvailability": {
      "D": 26,
      "E": 27,
      "S": 27
    }
  },
  {
    "id": "lot-35",
    "name": "Lot 35",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 35",
    "totalSpaces": 381,
    "availableSpaces": 76,
    "permitTypes": ["R", "S"],
    "hourlyRate": 0,
    "amenities": ["Open Air"],
    "permitAvailability": {
      "R": 190,
      "S": 191
    }
  },
  {
    "id": "lot-36",
    "name": "Lot 36",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 36",
    "totalSpaces": 247,
    "availableSpaces": 49,
    "permitTypes": ["S", "GZ36"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking", "Timed Spaces", "EV Charging", "State Vehicle"],
    "permitAvailability": {
      "S": 73,
      "GZ36": 114
    }
  },
  {
    "id": "lot-37",
    "name": "Lot 37",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 37",
    "totalSpaces": 249,
    "availableSpaces": 50,
    "permitTypes": ["E"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking", "Timed Spaces", "30 Minute Timed Space", "EV Charging", "State Vehicle"],
    "permitAvailability": {
      "E": 229
    }
  },
  {
    "id": "lot-38a",
    "name": "Lot 38A",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 38A",
    "totalSpaces": 111,
    "availableSpaces": 22,
    "permitTypes": ["E", "HE", "S"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking", "Timed Unload", "Motorcycle Parking"],
    "permitAvailability": {
      "E": 34,
      "HE": 34,
      "S": 35
    }
  },
  {
    "id": "lot-38b",
    "name": "Lot 38B",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 38B",
    "totalSpaces": 247,
    "availableSpaces": 49,
    "permitTypes": ["E", "HE"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking", "30 Minute Timed Space", "Motorcycle Parking", "Loading Dock", "State Vehicle"],
    "permitAvailability": {
      "E": 87,
      "HE": 88
    }
  },
  {
    "id": "lot-38c",
    "name": "Lot 38C",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 38C",
    "totalSpaces": 297,
    "availableSpaces": 59,
    "permitTypes": ["E", "HE"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking", "Timed Spaces", "Motorcycle Parking", "State Vehicle"],
    "permitAvailability": {
      "E": 87,
      "HE": 88
    }
  },
  {
    "id": "lot-38d",
    "name": "Lot 38D",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 38D",
    "totalSpaces": 61,
    "availableSpaces": 12,
    "permitTypes": ["D", "E", "S"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking", "Motorcycle Parking"],
    "permitAvailability": {
      "D": 19,
      "E": 19,
      "S": 20
    }
  },
  {
    "id": "lot-38e",
    "name": "Lot 38E",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 38E",
    "totalSpaces": 26,
    "availableSpaces": 5,
    "permitTypes": ["E"],
    "hourlyRate": 0,
    "amenities": ["Load/Unload", "Disabled Parking"],
    "permitAvailability": {
      "E": 19
    }
  },
  {
    "id": "lot-38f",
    "name": "Lot 38F",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 38F",
    "totalSpaces": 111,
    "availableSpaces": 22,
    "permitTypes": ["E", "HE", "S"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking", "EV Charging"],
    "permitAvailability": {
      "E": 35,
      "HE": 35,
      "S": 33
    }
  },
  {
    "id": "lot-38g",
    "name": "Lot 38G",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 38G",
    "totalSpaces": 106,
    "availableSpaces": 21,
    "permitTypes": ["E"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking", "State Vehicle", "EV Charging"],
    "permitAvailability": {
      "E": 95
    }
  },
  {
    "id": "lot-38h",
    "name": "Lot 38H",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 38H",
    "totalSpaces": 21,
    "availableSpaces": 4,
    "permitTypes": ["E"],
    "hourlyRate": 0,
    "amenities": ["Open Air"],
    "permitAvailability": {
      "E": 15
    }
  },
  {
    "id": "lot-38r",
    "name": "Lot 38R",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 38R",
    "totalSpaces": 97,
    "availableSpaces": 19,
    "permitTypes": ["E", "S"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking", "Timed Spaces", "Golf Cart", "State Vehicle", "Loading Dock"],
    "permitAvailability": {
      "E": 10,
      "S": 13
    }
  },
  {
    "id": "lot-38t",
    "name": "Lot 38T",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 38T",
    "totalSpaces": 100,
    "availableSpaces": 20,
    "permitTypes": ["D", "E", "HE", "S"],
    "hourlyRate": 0,
    "amenities": ["Open Air"],
    "permitAvailability": {
      "D": 25,
      "E": 25,
      "HE": 25,
      "S": 25
    }
  },
  {
    "id": "lot-38u",
    "name": "Lot 38U",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 38U",
    "totalSpaces": 147,
    "availableSpaces": 29,
    "permitTypes": ["E", "HE", "S"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking", "Loading Dock"],
    "permitAvailability": {
      "E": 49,
      "HE": 49,
      "S": 49
    }
  },
  {
    "id": "lot-39a",
    "name": "Lot 39A",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 39A",
    "totalSpaces": 133,
    "availableSpaces": 27,
    "permitTypes": ["D", "E", "R", "S"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking", "Motorcycle Parking"],
    "permitAvailability": {
      "D": 10,
      "E": 11,
      "R": 10,
      "S": 11
    }
  },
  {
    "id": "lot-39b",
    "name": "Lot 39B",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 39B",
    "totalSpaces": 97,
    "availableSpaces": 19,
    "permitTypes": ["D", "E", "HE", "S"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking", "Timed Spaces"],
    "permitAvailability": {
      "D": 29,
      "E": 30,
      "HE": 30,
      "S": 30
    }
  },
  {
    "id": "lot-40",
    "name": "Lot 40",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 40",
    "totalSpaces": 24,
    "availableSpaces": 0,
    "permitTypes": ["E", "D", "S"],
    "hourlyRate": 0,
    "amenities": ["30 Minute Timed Space", "Timed Spaces"],
    "permitAvailability": {
      "E": 8,
      "D": 8,
      "S": 8
    }
  },
  {
    "id": "lot-41",
    "name": "Lot 41",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 41",
    "totalSpaces": 61,
    "availableSpaces": 0,
    "permitTypes": ["E"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking"],
    "permitAvailability": {
      "E": 61
    }
  },
  {
    "id": "lot-42",
    "name": "Lot 42",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 42",
    "totalSpaces": 116,
    "availableSpaces": 23,
    "permitTypes": ["D", "E"],
    "hourlyRate": 0,
    "amenities": ["Open Air"],
    "permitAvailability": {
      "D": 58,
      "E": 58
    }
  },
  {
    "id": "lot-43",
    "name": "Lot 43",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 43",
    "totalSpaces": 703,
    "availableSpaces": 141,
    "permitTypes": ["D", "E", "HE", "GZ", "R", "S", "Y"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking", "Loading Dock"],
    "permitAvailability": {
      "D": 55,
      "E": 55,
      "HE": 55,
      "GZ": 55,
      "R": 229,
      "S": 55,
      "Y": 55
    }
  },
  {
    "id": "lot-44",
    "name": "Lot 44",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 44",
    "totalSpaces": 76,
    "availableSpaces": 15,
    "permitTypes": ["D", "E"],
    "hourlyRate": 0,
    "amenities": ["Open Air"],
    "permitAvailability": {
      "D": 38,
      "E": 38
    }
  },
  {
    "id": "lot-45",
    "name": "Lot 45",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 45",
    "totalSpaces": 69,
    "availableSpaces": 14,
    "permitTypes": ["E", "S"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking"],
    "permitAvailability": {
      "E": 14,
      "S": 15
    }
  },
  {
    "id": "lot-46",
    "name": "Lot 46",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 46",
    "totalSpaces": 184,
    "availableSpaces": 37,
    "permitTypes": ["E", "HE"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking"],
    "permitAvailability": {
      "E": 84,
      "HE": 85
    }
  },
  {
    "id": "lot-47",
    "name": "Lot 47",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 47",
    "totalSpaces": 109,
    "availableSpaces": 22,
    "permitTypes": ["D", "E", "R", "S"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking"],
    "permitAvailability": {
      "D": 26,
      "E": 26,
      "R": 26,
      "S": 26
    }
  },
  {
    "id": "lot-47a",
    "name": "Lot 47A",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 47A",
    "totalSpaces": 87,
    "availableSpaces": 17,
    "permitTypes": ["R"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking"],
    "permitAvailability": {
      "R": 79
    }
  },
  {
    "id": "lot-48",
    "name": "Lot 48",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 48",
    "totalSpaces": 190,
    "availableSpaces": 38,
    "permitTypes": ["D", "E", "GZ", "R", "S", "Y"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking", "Motorcycle Parking", "State Vehicle"],
    "permitAvailability": {
      "D": 30,
      "E": 30,
      "GZ": 31,
      "R": 31,
      "S": 31,
      "Y": 30
    }
  },
  {
    "id": "lot-50",
    "name": "Lot 50",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 50",
    "totalSpaces": 30,
    "availableSpaces": 6,
    "permitTypes": ["R"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking"],
    "permitAvailability": {
      "R": 28
    }
  },
  {
    "id": "lot-51",
    "name": "Lot 51",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 51",
    "totalSpaces": 21,
    "availableSpaces": 4,
    "permitTypes": ["R"],
    "hourlyRate": 0,
    "amenities": ["Open Air"],
    "permitAvailability": {
      "R": 21
    }
  },
  {
    "id": "lot-52",
    "name": "Lot 52",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 52",
    "totalSpaces": 196,
    "availableSpaces": 39,
    "permitTypes": ["R", "E"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking", "Motorcycle Parking"],
    "permitAvailability": {
      "R": 158,
      "E": 5
    }
  },
  {
    "id": "lot-52t",
    "name": "Lot 52T",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 52T",
    "totalSpaces": 40,
    "availableSpaces": 8,
    "permitTypes": ["D", "S"],
    "hourlyRate": 0,
    "amenities": ["Open Air"],
    "permitAvailability": {
      "D": 20,
      "S": 20
    }
  },
  {
    "id": "lot-53",
    "name": "Lot 53",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 53",
    "totalSpaces": 43,
    "availableSpaces": 9,
    "permitTypes": ["R"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking"],
    "permitAvailability": {
      "R": 41
    }
  },
  {
    "id": "lot-56",
    "name": "Lot 56",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot 56",
    "totalSpaces": 303,
    "availableSpaces": 61,
    "permitTypes": ["R"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking"],
    "permitAvailability": {
      "R": 287
    }
  },
  {
    "id": "lot-apple",
    "name": "Lot Apple",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot Apple",
    "totalSpaces": 36,
    "availableSpaces": 7,
    "permitTypes": ["D"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking", "Timed Spaces", "Meter"],
    "permitAvailability": {
      "D": 36
    }
  },
  {
    "id": "lot-cic",
    "name": "Lot CIC",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot CIC",
    "totalSpaces": 35,
    "availableSpaces": 7,
    "permitTypes": ["D", "E", "S"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking"],
    "permitAvailability": {
      "D": 9,
      "E": 10,
      "S": 10
    }
  },
  {
    "id": "lot-cedar-drive",
    "name": "Lot Cedar Drive",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot Cedar Drive",
    "totalSpaces": 70,
    "availableSpaces": 14,
    "permitTypes": ["E"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking", "EV Charging", "Timed Unload", "Police Only"],
    "permitAvailability": {
      "E": 70
    }
  },
  {
    "id": "lot-intramural-field",
    "name": "Lot Intramural Field",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot Intramural Field",
    "totalSpaces": 12,
    "availableSpaces": 2,
    "permitTypes": ["E"],
    "hourlyRate": 0,
    "amenities": ["Open Air"],
    "permitAvailability": {
      "E": 12
    }
  },
  {
    "id": "lot-life-science-annex",
    "name": "Lot Life Science Annex",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot Life Science Annex",
    "totalSpaces": 3,
    "availableSpaces": 1,
    "permitTypes": ["E"],
    "hourlyRate": 0,
    "amenities": ["State Vehicle"],
    "permitAvailability": {
      "E": 3
    }
  },
  {
    "id": "lot-morsani-service-area",
    "name": "Lot Morsani Service Area",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot Morsani Service Area",
    "totalSpaces": 3,
    "availableSpaces": 1,
    "permitTypes": ["E"],
    "hourlyRate": 0,
    "amenities": ["Loading Dock", "State Vehicle"],
    "permitAvailability": {
      "E": 3
    }
  },
  {
    "id": "lot-sago-drive",
    "name": "Lot Sago Drive",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot Sago Drive",
    "totalSpaces": 13,
    "availableSpaces": 3,
    "permitTypes": ["E"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking", "Loading Dock"],
    "permitAvailability": {
      "E": 13
    }
  },
  {
    "id": "lot-varsity-tennis-court",
    "name": "Lot Varsity Tennis Court",
    "location": "USF Tampa Campus",
    "lotNumber": "Lot Varsity Tennis Court",
    "totalSpaces": 11,
    "availableSpaces": 2,
    "permitTypes": ["E"],
    "hourlyRate": 0,
    "amenities": ["Disabled Parking"],
    "permitAvailability": {
      "E": 10
    }
  }
];

// Helper function to get specific location based on lot ID/name
function getSpecificLocation(lot: any): string {
  const lotId = lot.id.toLowerCase();
  const lotName = lot.name.toLowerCase();
  
  // Garages - Check garage names first before processing lot numbers
  if (lotName.includes('beard')) return 'Near Engineering';
  if (lotName.includes('collins')) return 'Near Library';
  if (lotName.includes('laurel')) return 'Near USF Health';
  if (lotName.includes('crescent')) return 'Near The Village';
  
  // Extract lot number
  const lotMatch = lotId.match(/lot-(\d+[a-z]?|[a-z-]+)/);
  if (lotMatch) {
    const lotNum = lotMatch[1];
    
    // Named lots (special locations with text-based identifiers)
    if (lotNum === 'apple') return 'Near USF Apple Drive';
    if (lotNum === 'cic') return 'Near Campus Information Center';
    if (lotNum === 'cedar-drive') return 'Near USF Cedar Circle';
    if (lotNum === 'intramural-field') return 'Near Recreation Softball Complex';
    if (lotNum === 'life-science-annex') return 'Near Life Science Annex';
    if (lotNum === 'morsani-service-area') return 'Near Morsani College of Medicine';
    if (lotNum === 'sago-drive') return 'Near USF Sago Drive';
    if (lotNum === 'varsity-tennis-court') return 'Near Varsity Tennis Courts';
    
    // Numbered lots organized by campus area
    // Education & Library area (lots 01-02)
    if (lotNum === '01') return 'Near Education';
    if (lotNum === '02a') return 'Near Library';
    if (lotNum === '02c') return 'Near Multidisciplinary Sciences';
    
    // Marshall Center lots (03-05 series)
    if (lotNum === '03') return 'Near Marshall Student Center';
    if (lotNum === '03a') return 'Near Marshall Student Center';
    if (lotNum === '03b') return 'Near Marshall Student Center';
    if (lotNum === '03c') return 'Near Marshall Student Center';
    if (lotNum === '03d') return 'Near Fine Arts';
    if (lotNum === '03e') return 'Near School of Music';
    if (lotNum === '04') return 'Near Post Office';
    if (lotNum === '05a') return 'Near Marshall Student Center';
    if (lotNum === '05b') return 'Near Argos Center';
    if (lotNum === '05d') return 'Near Maple Hall';
    if (lotNum === '05e') return 'Near Beta Hall';
    
    // Recreation, Science & central campus (06-10 series)
    if (lotNum === '06') return 'Near Recreation Activities Center';
    if (lotNum === '07') return 'Near Marshall Student Center';
    if (lotNum === '07a') return 'Near Behavioral Sciences';
    if (lotNum === '07b') return 'Near Faculty Office Building';
    if (lotNum === '07c') return 'Near Student Services Building';
    if (lotNum === '08') return 'Near Science Center';
    if (lotNum === '08a') return 'Near Science Center';
    if (lotNum === '08b') return 'Near Juniper Poplar Hall';
    if (lotNum === '08c') return 'Near Engineering';
    if (lotNum === '09') return 'Near Psychology & Communication Sciences';
    if (lotNum === '09a') return 'Near Psychology & Communication Sciences';
    if (lotNum === '09c') return 'Near USF Health Faculty Office Building';
    if (lotNum === '10') return 'Near Student Services Building';
    
    // USF Health area (11-14 series)
    if (lotNum === '11') return 'Near Alzheimers Center';
    if (lotNum === '12') return 'Near Psychiatry School of Physical Therapy';
    if (lotNum === '12a') return 'Near Northwest Education Complex';
    if (lotNum === '12b') return 'Near Northwest Education Complex';
    if (lotNum === '13') return 'Near Recreation Activities Center';
    if (lotNum === '14') return 'Near Parking & Transportation Services';
    
    // Campus services & wellness (15-19 series)
    if (lotNum === '15') return 'Near C. W. Bill Young Hall';
    if (lotNum === '15a') return 'Near C. W. Bill Young Hall';
    if (lotNum === '15b') return 'Near C. W. Bill Young Hall';
    if (lotNum === '16') return 'Near The Fit Health & Wellness Center';
    if (lotNum === '17') return 'Near Beach at Castor';
    if (lotNum === '17a') return 'Near Beach at Castor';
    if (lotNum === '17b') return 'Near Social Sciences';
    if (lotNum === '18') return 'Near Baseball Stadium';
    if (lotNum === '18b') return 'Near Baseball Stadium';
    if (lotNum === '18t') return 'Near Porter Family Indoor Performance Facility';
    if (lotNum === '19') return 'Near Hope Lodge';
    if (lotNum === '20') return 'Near Teco Substation';
    if (lotNum === '20a') return 'Near Cypress Apartments';
    if (lotNum === '20b') return 'Near Cypress Apartments';
    if (lotNum === '20c') return 'Near Cypress Apartments';
    if (lotNum === '21') return 'Near C. W. Bill Young Hall';
    if (lotNum === '21a') return 'Near Behavioral Sciences';
    if (lotNum === '21b') return 'Near Behavioral Sciences';
    if (lotNum === '22a') return 'Near Student Health & Wellness Center';
    if (lotNum === '22b') return 'Near Yuengling Center';
    if (lotNum === '22d') return 'Near Yuengling Center';
    if (lotNum === '22e') return 'Near Yuengling Center';
    if (lotNum === '22f') return 'Near Yuengling Center';
    if (lotNum === '23a') return 'Near Alumni Center';
    if (lotNum === '23b') return 'Near Dr. Kiran C. Patel Center for Global Solutions';
    if (lotNum === '23t') return 'Near Alumni Center';
    if (lotNum === '24') return 'Near Juniper Poplar Hall';
    if (lotNum === '25') return 'Near Cypress Apartments';
    if (lotNum === '26') return 'Near University Police Building';
    if (lotNum === '28') return 'Near Post Office';
    if (lotNum === '29') return 'Near USF Muma College of Business';
    if (lotNum === '29a') return 'Near Communication and Information Sciences';
    if (lotNum === '29b') return 'Near Library';
    if (lotNum === '30') return 'Near Shared Student Services';
    if (lotNum === '30a') return 'Near Shared Student Services';
    if (lotNum === '30b') return 'Near Shared Student Services';
    if (lotNum === '30c') return 'Near Shared Student Services';
    if (lotNum === '31') return 'Near Student Group Learning';
    if (lotNum === '32') return 'Near H. Lee Moffitt Cancer Center';
    if (lotNum === '33') return 'Near Moffitt Research Center';
    if (lotNum === '33t') return 'Near Moffitt Parking Garage';
    if (lotNum === '34') return 'Near College of Nursing';
    if (lotNum === '34a') return 'Near USF Health';
    if (lotNum === '34b') return 'Near USF Health';
    if (lotNum === '34c') return 'Near USF Health';
    if (lotNum === '35') return 'Near Varsity Tennis Courts';
    if (lotNum === '36') return 'Near USF Muma College of Business';
    if (lotNum === '37') return 'Near Behavioral Sciences';
    if (lotNum === '38a') return 'Near College of Behavioral & Community Sciences';
    if (lotNum === '38b') return 'Near College of Public Health';
    if (lotNum === '38c') return 'Near Northwest Education Complex';
    if (lotNum === '38d') return 'Near College of Behavioral & Community Sciences';
    if (lotNum === '38e') return 'Near College of Behavioral & Community Sciences';
    if (lotNum === '38f') return 'Near Westside Conference Center';
    if (lotNum === '38g') return 'Near College of Behavioral & Community Sciences';
    if (lotNum === '38h') return 'Near Northwest Education Complex';
    if (lotNum === '38r') return 'Near College of Behavioral & Community Sciences';
    if (lotNum === '38t') return 'Near College of Behavioral & Community Sciences';
    if (lotNum === '38u') return 'Near USF Family Center';
    if (lotNum === '39') return 'Near Health Partnership Complex';
    if (lotNum === '39a') return 'Near Health Partnership Complex';
    if (lotNum === '39b') return 'Near Health Partnership Complex';
    if (lotNum === '40') return 'Near Educational Research Center';
    if (lotNum === '41') return 'Near Human Services Building';
    if (lotNum === '41a') return 'Near Human Services Building';
    if (lotNum === '41b') return 'Near Human Services Building';
    if (lotNum === '41c') return 'Near Human Services Building';
    if (lotNum === '42') return 'Near USF Health Faculty Office Building';
    if (lotNum === '43') return 'Near Alzheimers Center';
    if (lotNum === '44') return 'Near Testbed Assistive Rehabilitative Robotics';
    if (lotNum === '45') return 'Near USF Patel Partnership School';
    if (lotNum === '46') return 'Near Psychology & Communication Sciences';
    if (lotNum === '47') return 'Near Magnolia Field Complex';
    if (lotNum === '47a') return 'Near Magnolia Apartments';
    if (lotNum === '48') return 'Near Bookstore';
    if (lotNum === '50') return 'Near Greek Village';
    if (lotNum === '51') return 'Near Greek Village';
    if (lotNum === '52') return 'Near Greek Village';
    if (lotNum === '52t') return 'Near Greek Village';
    if (lotNum === '53') return 'Near Greek Village';
    if (lotNum === '56') return 'Near The Fit Health & Wellness Center';
  }
  
  return 'USF Tampa Campus';
}

// Helper function to determine peak times based on lot characteristics
function generatePeakTimes(lot: any): string {
  const isGarage = lot.lotNumber?.toLowerCase().includes('garage');
  const permitTypes = lot.permitTypes || [];
  
  if (permitTypes.includes('R')) {
    return 'Weekdays: 6:00 PM - 11:00 PM (Evening residential hours) | Weekends: All day';
  } else if (permitTypes.includes('S') && !permitTypes.includes('E')) {
    return 'Weekdays: 8:00 AM - 4:00 PM (Class hours) | Nearly full during peak academic periods';
  } else if (permitTypes.includes('E') && !permitTypes.includes('S')) {
    return 'Weekdays: 7:30 AM - 5:00 PM (Business hours) | Minimal usage on weekends';
  } else if (permitTypes.includes('D')) {
    return 'Weekdays: 9:00 AM - 3:00 PM (Visitor hours) | Event days: High occupancy';
  } else if (permitTypes.includes('Y')) {
    return 'Weekdays: 7:00 AM - 9:00 AM & 5:00 PM - 7:00 PM (Commuter peak) | Low weekends';
  }
  
  return 'Weekdays: 8:00 AM - 5:00 PM (Standard hours) | Varies by academic schedule';
}

// Helper function to generate Bull Runner transportation info
function generateTransportation(lot: any): { nearestStop: string; weekdayRoutes: string[]; weekendRoutes: string[] } {
  // Look up the lot in the route data
  const routeInfo = routeMap.get(lot.name);
  
  if (routeInfo) {
    // Capitalize the first letter of each route
    const capitalizedRoutes = routeInfo.routes.map((route) => 
      route.charAt(0).toUpperCase() + route.slice(1)
    );
    
    return {
      nearestStop: routeInfo.nearestBullRunnerStop,
      weekdayRoutes: capitalizedRoutes,
      weekendRoutes: capitalizedRoutes // Using same routes for both weekday and weekend
    };
  }
  
  // Fallback if lot not found in route data
  return {
    nearestStop: 'Campus Center',
    weekdayRoutes: ['Red'],
    weekendRoutes: ['Red']
  };
}

// Transform raw data to match application format
// Last updated: 2026-04-01 - Fixed permit totals to sum correctly
export const parkingLots: ParkingLotDetail[] = rawParkingData.map(lot => {
  // Get the permit availability from raw data
  const permitEntries = Object.entries(lot.permitAvailability as Record<string, number>);
  
  // Calculate the sum of all permit totals from raw data
  const sumOfPermitTotals = permitEntries.reduce((sum, [, total]) => sum + total, 0);
  
  // If the sum doesn't equal lot.totalSpaces, we need to adjust the permit totals proportionally
  let adjustedPermitTotals: Array<[string, number]>;
  
  if (sumOfPermitTotals !== lot.totalSpaces) {
    // Log the correction
    console.log(`🔧 Correcting ${lot.name}: Sum ${sumOfPermitTotals} → ${lot.totalSpaces}`);
    
    // Adjust permit totals proportionally to match lot.totalSpaces
    const scaleFactor = lot.totalSpaces / sumOfPermitTotals;
    adjustedPermitTotals = permitEntries.map(([permitType, total]) => {
      const adjustedTotal = Math.round(total * scaleFactor);
      return [permitType, adjustedTotal];
    });
    
    // Fix rounding errors by adjusting the largest permit
    const adjustedSum = adjustedPermitTotals.reduce((sum, [, total]) => sum + total, 0);
    const totalDifference = lot.totalSpaces - adjustedSum;
    
    if (totalDifference !== 0) {
      // Find the largest permit and adjust it
      const largestIndex = adjustedPermitTotals.reduce((maxIdx, curr, idx, arr) => 
        curr[1] > arr[maxIdx][1] ? idx : maxIdx, 0);
      adjustedPermitTotals[largestIndex][1] += totalDifference;
    }
  } else {
    adjustedPermitTotals = permitEntries;
  }
  
  // Now calculate available spaces per permit based on the adjusted totals
  const availabilityRate = lot.availableSpaces / lot.totalSpaces;
  const permitAvailability = adjustedPermitTotals.map(([permitType, total]) => {
    const available = Math.round(total * availabilityRate);
    return {
      permitType: permitType as any,
      total,
      available
    };
  });
  
  // Adjust for rounding errors - ensure sum of available equals lot.availableSpaces
  const sumOfAvailable = permitAvailability.reduce((sum, p) => sum + p.available, 0);
  const availableDifference = lot.availableSpaces - sumOfAvailable;
  
  if (availableDifference !== 0 && permitAvailability.length > 0) {
    // Find permit with largest total
    const largestPermitIndex = permitAvailability.reduce((maxIdx, curr, idx, arr) => 
      curr.total > arr[maxIdx].total ? idx : maxIdx, 0);
    permitAvailability[largestPermitIndex].available += availableDifference;
  }
  
  // Recalculate actual available spaces from permit availability (after rounding adjustments)
  const actualAvailableSpaces = permitAvailability.reduce((sum, p) => sum + p.available, 0);
  
  // Verify final totals
  const finalTotalSum = permitAvailability.reduce((sum, p) => sum + p.total, 0);
  
  if (finalTotalSum !== lot.totalSpaces) {
    console.error(`❌ ERROR: ${lot.name} - Sum of permit totals (${finalTotalSum}) does not equal total spaces (${lot.totalSpaces}). This should never happen!`);
  }
  
  return {
    id: lot.id,
    name: lot.name,
    location: getSpecificLocation(lot),
    lotNumber: lot.lotNumber,
    totalSpaces: lot.totalSpaces,
    availableSpaces: actualAvailableSpaces,
    permitTypes: lot.permitTypes as any[],
    floors: lot.floors,
    hourlyRate: lot.hourlyRate,
    amenities: lot.amenities,
    permitAvailability,
    peakTimes: generatePeakTimes(lot),
    alternativeTransportation: generateTransportation(lot),
    lastUpdated: new Date().toISOString()
  };
});

// Log summary of data corrections
const correctedCount = parkingLots.filter(lot => {
  const sumOfPermitTotals = lot.permitAvailability.reduce((sum, p) => sum + p.total, 0);
  return sumOfPermitTotals === lot.totalSpaces;
}).length;

console.log(`\n✅ Data validation complete: ${correctedCount}/${parkingLots.length} lots verified`);
if (correctedCount === parkingLots.length) {
  console.log('🎉 All parking lots have correct permit totals!\n');
}

export function getUpdatedParkingLots(currentLots?: ParkingLotDetail[]): ParkingLotDetail[] {
  const source = currentLots ?? parkingLots;
  
  // List of lots that should always be full (0 availability)
  const alwaysFullLots = ['Lot 22A', 'Lot 22D', 'Lot 22E', 'Lot 22F', 'Lot 40', 'Lot 15', 'Lot 21', 'Lot 41'];
  
  return source.map(lot => {
    // Check if this lot should always be full
    if (alwaysFullLots.includes(lot.name)) {
      // Set all permit availability to 0
      const fullPermitAvailability = lot.permitAvailability.map(permit => ({
        ...permit,
        available: 0
      }));
      
      return {
        ...lot,
        availableSpaces: 0,
        permitAvailability: fullPermitAvailability,
        lastUpdated: new Date().toISOString()
      };
    }
    
    // Normal update logic for other lots
    const updatedPermitAvailability = lot.permitAvailability.map(permit => {
      const change = Math.floor(Math.random() * 10) - 5;
      const newAvailable = Math.max(0, Math.min(permit.total, permit.available + change));
      return { ...permit, available: newAvailable };
    });

    const availableSpaces = updatedPermitAvailability.reduce((sum, p) => sum + p.available, 0);

    return {
      ...lot,
      availableSpaces,
      permitAvailability: updatedPermitAvailability,
      lastUpdated: new Date().toISOString()
    };
  });
}
