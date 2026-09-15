import { getServerSession } from "next-auth";
import { google } from "googleapis";
import { NextResponse } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session?.accessToken) {
    return NextResponse.json(
      { error: "Google Calendar not connected" },
      { status: 401 }
    );
  }

  const auth = new google.auth.OAuth2();

  auth.setCredentials({
    access_token: session.accessToken,
  });

  const calendar = google.calendar({
    version: "v3",
    auth,
  });

  const response = await calendar.events.list({
    calendarId: "primary",
    timeMin: new Date().toISOString(),
    maxResults: 10,
    singleEvents: true,
    orderBy: "startTime",
  });

  return NextResponse.json(response.data.items ?? []);
}