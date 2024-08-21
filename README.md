# Next.js Authentication Template

This is a Next.js template with built-in authentication features, allowing users to sign in using Google, GitHub, or email. The template is set up with Supabase as the backend and Resend for email services.

## Getting Started

### Prerequisites

Before you start, ensure you have the following:

- Node.js (v14 or later)
- A Supabase account
- GitHub OAuth credentials
- Google OAuth credentials
- Resend API key

### Environment Variables

To configure the application, create a `.env.local` file at the root of your project and populate it with the following environment variables:

```env
# Supabase configuration
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key

# Authentication Secret
AUTH_SECRET=your-auth-secret

# Database URL (typically for Supabase or other database connection strings)
DATABASE_URL=your-database-url

# GitHub OAuth
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Resend API Key (for email services)
RESEND_API_KEY=your-resend-api-key
```

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/whiteechocolatee/auth.git
   cd auth
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up the environment variables by filling in the `.env.local` file with your credentials.

### Running the Application

To start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application in action.

### Authentication Providers

This template supports the following authentication methods:

- **Google**: Allows users to sign in using their Google account.
- **GitHub**: Allows users to sign in using their GitHub account.
- **Email**: Allows users to sign in using their email address.

### Deployment

When deploying your Next.js application, make sure to set the environment variables in your hosting provider's dashboard. This template is ready to be deployed on Vercel, Netlify, or any other platform that supports Next.js.

### Additional Configuration

- **Supabase**: Ensure your Supabase project is configured correctly with the necessary authentication providers enabled.
- **OAuth**: Set up your OAuth applications in Google and GitHub developer consoles. Use the provided `CLIENT_ID` and `CLIENT_SECRET` for each platform.
- **Resend**: Resend is used for email-based authentication. Ensure your API key is correctly set.
