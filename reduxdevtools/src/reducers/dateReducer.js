import {
  selectedYear,
  selectedMonth,
  monthDays,
  daysInMonth,
} from "../utils/dateUtils";
import { getDays } from "../utils/CalenderUtil";

const startDay = monthDays(`${selectedMonth + 1}-01-${selectedYear}`);
const endDay = daysInMonth(selectedMonth, selectedYear);

const initialState = {
  selectedMonth,
  selectedYear,
  startDay,
  endDay,
  days: getDays(startDay, endDay),
};

export 