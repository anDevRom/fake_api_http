module.exports = {
  id: 1,
  simTypeId: 1, // simTypeId = 1 (SIM), simTypeId = 2 (eSIM)
  icc: "01010101010101010123",
  branchId: "branchId",
  partyTypeId: 2, // (partyTypeId === 2 || partyTypeId === 4) -> Untemplated SIM
  tariff: {
    name: "Black",
    abonentFee: 100,
    abonentFeePeriod: "month",
    callsPackageOtherRussia: 10,
    callsPackageOtherRussiaUom: "min",
    smsPackageRussia: 500,
    internetPackage: 1,
    internetPackageUom: "gb",
    unlimitedPhoneCallsTele2: 123,
  },
  number: "79112223344",
  hasBeautifulNumber: false,
  balance: 1000,
};
