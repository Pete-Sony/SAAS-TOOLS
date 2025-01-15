'use server'

import getGoogleSheetsClient from "@/lib/googleSheets"

const getFields = async (field) => {      
    const sheets = await getGoogleSheetsClient()
    const rowCol = field === "rows" ? "B:B" : "1:1"
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
        range: `SAAS daily standup!${rowCol}`
    })
    return response.data.values
}

const findRow = async (rows, date) => {
    if (!rows) return null
    const rowIndex = rows.findIndex(row => row[0] === date);
    if (rowIndex === -1) return null;
    return rowIndex + 1;
}

const findColumn = async (user) => {
    if (!user) return null
    const colMap = {"JOEL": "C", "PRITHVI": "D", "MUBARIS": "E", "JACOB": "F"}
    return colMap[user];
}

export async function readSheets(user) {
    const currentDate = new Date();
    const date = currentDate.toLocaleDateString("en-CA");
    const rows = await getFields("rows")
    const rowIndex = await findRow(rows, date)
    const column = await findColumn(user)
    const sheets = await getGoogleSheetsClient()
    const range = `SAAS daily standup!${column}${rowIndex}`

    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
        range: range
    })
    if (!response.data.values) return ""
    else return response.data.values[0][0]

    // return response.data.values[0][0] ? response.data.values.length > 0 : ""
}

export async function updateSheets(text, user) {
    const currentDate = new Date();
    const date = currentDate.toLocaleDateString("en-CA");
    const rows = await getFields("rows")
    const row = await findRow(rows, date)
    const column = await findColumn(user)
    const sheets = await getGoogleSheetsClient()
    const range = `SAAS daily standup!${column}${row}`
    
    const response = await sheets.spreadsheets.values.update({
        spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
        range: range,
        valueInputOption: 'RAW',
        requestBody: {
            values: [[text]]
        }
    })

    console.log(`Updated ${range} with ${text}`);
}

