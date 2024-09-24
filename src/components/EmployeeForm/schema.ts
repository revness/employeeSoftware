import * as z from "zod";

const EMPLOYMENT_TYPES = [
  "FULL_TIME",
  "CONTRACTOR",
  "PART_TIME",
  "PROBATION",
] as const;
const STATE_CODES = [
  "NSW",
  "VIC",
  "ACT",
  "QLD",
  "NT",
  "WA",
  "TAS",
  "SA",
] as const;

export const schema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phone: z.string(),
  address: z.string(),
  suburb: z.string(),
  state: z.enum(STATE_CODES),
  postcode: z.string(),
  role: z.string(),
  employmentType: z.enum(EMPLOYMENT_TYPES),
  startDate: z.string().date(),
  endDate: z.string().date(),
});

export type EmployeeFormData = z.infer<typeof schema>;
