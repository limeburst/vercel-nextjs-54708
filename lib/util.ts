import { google } from 'googleapis'

export function dummy() {
    return 'dummy'
}

export async function getGoogleSheetClient() {
  const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(atob(process.env.GOOGLE_SERVICE_ACCOUNT_KEYFILE_BASE64!)),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  const authClient: any = await auth.getClient();
  return google.sheets({ version: 'v4', auth: authClient });
}

export async function getGoogleDriveClient() {
  const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(atob(process.env.GOOGLE_SERVICE_ACCOUNT_KEYFILE_BASE64!)),
      scopes: ['https://www.googleapis.com/auth/drive.file'],
  });
  const authClient: any = await auth.getClient();
  return google.drive({ version: 'v3', auth: authClient });
}
