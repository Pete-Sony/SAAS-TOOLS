'use server'

import getGoogleSheetsClient from "@/lib/googleSheets"

export default async function updateSheets() {      

    const sheets = await getGoogleSheetsClient()
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
        range: "Sheet1!A1"
    })

    console.log(response.data.values)

}

