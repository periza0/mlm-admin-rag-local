
const clubInfo = require("../data/clubInfo");

function selectFixedFacts(question) {
  const q = question.toLowerCase();
  const facts = {};

  if (/court|floor|flooring|surface|wooden subfloor/.test(q)) {
    facts.facilities = {
      badmintonCourts: clubInfo.facilities.badmintonCourts,
      courtSurface: clubInfo.facilities.courtSurface,
      woodenSubfloor: clubInfo.facilities.woodenSubfloor,
    };
  }

  if (/coach|coaching|trainer|training|learn|lesson|class/.test(q)) {
    facts.coaching = clubInfo.coaching;
  }

  if (/membership|member|subscription|join|joining|plan|plans|independent player/.test(q)) {
    facts.membership = clubInfo.membership;
  }

  if (/book|booking|slot|reservation|hourly|rent|hire/.test(q)) {
    facts.courtBooking = clubInfo.courtBooking;
  }

  if (/shop|racket|racquet|shuttlecock|shuttle|equipment|clothing|gear|price matching|preorder/.test(q)) {
    facts.sportsShop = clubInfo.sportsShop;
  }

  if (/accommodation|stay|room|hostel|overnight|outstation/.test(q)) {
    facts.accommodation = clubInfo.accommodation;
  }

  if (/juice|canteen|food|drink/.test(q)) {
    facts.facilities = {
      ...(facts.facilities || {}),
      juiceBar: clubInfo.facilities.juiceBar,
      canteen: clubInfo.facilities.canteen,
    };
  }

  if (/contact|phone|number|call|location|address|where|map|directions/.test(q)) {
    facts.location = clubInfo.location;
    facts.name = clubInfo.name;
    facts.shortName = clubInfo.shortName;
  }

  if (/contact|phone|number|call/.test(q)) {
    if (facts.coaching) {
      facts.coaching = {
        ...facts.coaching,
        contactNumber: clubInfo.coaching.contactNumber,
      };
    }

    if (facts.membership) {
      facts.membership.contactNumbers = clubInfo.membership.contactNumbers;
    }

    if (facts.courtBooking) {
      facts.courtBooking.contactNumbers = clubInfo.courtBooking.contactNumbers;
    }

    if (facts.sportsShop) {
      facts.sportsShop.contactNumber = clubInfo.sportsShop.contactNumber;
    }
  }

  return facts;
}

module.exports = selectFixedFacts;
