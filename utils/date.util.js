import dayjs from "dayjs";

export const YEAR_MONTH_DATE = "YYYY-MM-DD";
export const MONTH_DATE_YEAR = 'MM-DD-YYYY';

export const convertYearMonthDateToMonthDateYear = (value) => dayjs(value, {
    format: YEAR_MONTH_DATE
}).format(MONTH_DATE_YEAR);