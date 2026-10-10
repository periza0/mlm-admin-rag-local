
const clubInfo = {
  name: "Mohan Lal Memorial Sports Club",
  shortName: "MLM Sports Club",

  location: {
    googleMaps:
      "https://maps.app.goo.gl/u7oVBPh5s8qybUhB9",
  },

  facilities: {
    badmintonCourts: 4,
    courtSurface: "Synthetic court surface by Transformer",
    woodenSubfloor: "Wooden subflooring by Jaipur",
    juiceBar: true,
    canteen: true,
    sportsShop: true,
    accommodation: true,
    physiotherapy: true,
    strengthAndConditioning: true,
  },

  membership: {
    includesCoaching: false,
    durations: ["Monthly", "3 months", "6 months", "Annual"],
    contactNumbers: [
      "+91 62393 90167",
      "+91 9888079568",
    ],
  },

  coaching: {
    availableLevels: ["Beginner", "Intermediate", "Advanced"],
    feesDependOnSkillLevel: true,
    contactNumber: "+91 82848 48226",
  },

  courtBooking: {
    type: "Hourly booking",
    contactNumbers: [
      "+91 62393 90167",
      "+91 9888079568",
    ],
    onlineBooking:
      "https://www.district.in/play/mlm-sports-club-mlm-sports-club-amritsar-slots-booking",
  },

  sportsShop: {
    productCategories: [
      "Badminton rackets",
      "Shuttlecocks",
      "Gym equipment and gear",
      "Sports clothing",
    ],
    contactNumber: "+91 9888079568",
    priceMatching: true,
    preordersAvailableOnEnquiry: true,
  },

  accommodation: {
    shortTerm: true,
    longTerm: true,
  },

  chatbotRules: {
    neverInventPrices: true,
    neverInventAvailability: true,
    neverInventBookingConfirmations: true,
    unknownInformation:
      "Please contact the club to confirm this information.",
  },
};

module.exports = clubInfo;
