import axios from "axios";
const sheetId = "11eLK3AhyHKIhRW_NFDpffkEwD79-6UnYn0fafMeoLno";
const URL = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values`;

export default axios.create({
    baseURL: URL
});
