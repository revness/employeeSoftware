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
const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

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
  startDate: z.string().regex(dateRegex, "Invalid date format. Use yyyy-mm-dd"),
  endDate: z
    .union([
      z.string().regex(dateRegex, "Invalid date format. Use yyyy-mm-dd"),
      z.null(),
    ])
    .optional(),
});

export type EmployeeFormData = z.infer<typeof schema>;
