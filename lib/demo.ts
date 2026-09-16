export const venueTypeOptions = [
  { value: "commercial", label: "Commercial fishery" },
  { value: "french", label: "French carp lake" },
  { value: "hire", label: "Exclusive hire lake" },
  { value: "syndicate", label: "Syndicate" },
  { value: "holiday", label: "Fishing holiday venue" },
  { value: "other", label: "Other" },
] as const;

export type VenueType = (typeof venueTypeOptions)[number]["value"];

export const venueTypeValues = new Set<string>(
  venueTypeOptions.map((option) => option.value),
);
