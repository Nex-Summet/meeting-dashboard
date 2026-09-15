# MeetPlan Dashboard

MeetPlan is a meeting dashboard built as part of a frontend/full-stack development assignment.

The dashboard allows users to connect their Google Calendar and view their upcoming meetings directly inside the application.

## Live Demo

https://meeting-dashboard-sigma.vercel.app/

## GitHub Repository

https://github.com/Nex-Summet/meeting-dashboard

## What I Built

* Meeting dashboard with responsive UI
* Google login using NextAuth.js
* Connect Google Calendar option
* Google Calendar API integration
* Upcoming Google Calendar events displayed on the dashboard
* Calendar section with today's schedule
* Dashboard statistics cards
* Responsive layout for desktop, tablet and mobile
* Reusable React components

## Technologies Used

* Next.js
* React
* TypeScript
* Tailwind CSS
* NextAuth.js
* Google Calendar API
* Google OAuth
* Lucide React

## Main Pages / Components

The main dashboard contains:

* Sidebar navigation
* Header with search and profile section
* Welcome section
* Statistics cards
* Upcoming meetings
* Calendar
* Google Calendar connection button

## Google Calendar Integration

The Google Calendar integration works through Google OAuth.

After clicking **Connect Google Calendar**, the user signs in with Google and gives calendar permission. The application then uses the Google Calendar API to get upcoming events and displays them in the **Upcoming Meetings** section.

## Run Locally

Clone the repository:

```bash
git clone https://github.com/Nex-Summet/meeting-dashboard.git
cd meeting-dashboard
```

Install the dependencies:

```bash
npm install
```

Create a `.env.local` file in the project root:

```env
AUTH_SECRET=your_auth_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

Start the development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Google OAuth Setup

For Google Calendar integration, a Google Cloud project with the Google Calendar API enabled is required.

For local development, use:

```text
http://localhost:3000/api/auth/callback/google
```

For production, add the Vercel callback URL in the Google OAuth client's authorized redirect URIs.

## Environment Variables

| Variable               | Purpose                             |
| ---------------------- | ----------------------------------- |
| `AUTH_SECRET`          | Used by NextAuth for authentication |
| `GOOGLE_CLIENT_ID`     | Google OAuth client ID              |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret          |

Keep these values private and do not commit `.env.local` to the repository.

## Project Structure

```text
meeting-dashboard/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   └── calendar/
│   └── page.tsx
├── components/
│   ├── CalendarCard.tsx
│   ├── ConnectCalendarButton.tsx
│   ├── Header.tsx
│   ├── Sidebar.tsx
│   ├── StatsCards.tsx
│   ├── UpcomingMeetings.tsx
│   └── WelcomeSection.tsx
├── types/
│   └── next-auth.d.ts
├── package.json
└── README.md


 Author

Sumeet Kannoji

Full Stack Developer
