import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";

export const GoogleSheetsSetup = () => {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Google Sheets Integration Setup</CardTitle>
        <CardDescription>
          Follow these steps to connect form submissions to Google Sheets
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Option 1: Google Apps Script (Free)</strong>
            <ol className="mt-2 ml-4 list-decimal space-y-2">
              <li>Create a new Google Sheet</li>
              <li>Go to Extensions → Apps Script</li>
              <li>Paste the following code:</li>
            </ol>
          </AlertDescription>
        </Alert>

        <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
{`function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    data.timestamp,
    data.name,
    data.email,
    data.problems
  ]);
  
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}`}
        </pre>

        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription>
            <ol className="ml-4 list-decimal space-y-2" start={4}>
              <li>Deploy as Web App (Anyone can access)</li>
              <li>Copy the Web App URL</li>
              <li>Replace <code className="bg-muted px-1 rounded">YOUR_GOOGLE_SHEETS_WEBHOOK_URL</code> in Index.tsx with your URL</li>
            </ol>
          </AlertDescription>
        </Alert>

        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Option 2: Zapier (Easier, Premium)</strong>
            <ol className="mt-2 ml-4 list-decimal space-y-2">
              <li>Create a Zap with "Webhooks by Zapier" trigger</li>
              <li>Add "Google Sheets" action to add row</li>
              <li>Copy the webhook URL to Index.tsx</li>
            </ol>
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
};
