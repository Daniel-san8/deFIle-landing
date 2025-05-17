'use server';

import { google } from 'googleapis';

export async function sendToSheets({
  name,
  email,
  contact,
}: {
  name: string;
  email: string;
  contact: string;
}): Promise<{ success: true } | { success: false; error: string }> {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });
  const spreadsheetId = process.env.SPREADSHEET_ID;

  try {
    const getResponse = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'Leads!B:B',
    });

    const rows = getResponse.data.values || [];
    const emailExists = rows.some((row) => row[0] === email);

    if (emailExists) {
      return { success: false, error: 'Email já cadastrado' };
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Leads',
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [[name, email, contact]],
      },
    });

    return { success: true };
  } catch (error) {
    console.error('Erro ao enviar para Sheets:', error);
    return { success: false, error: 'Erro interno ao enviar dados' };
  }
}
