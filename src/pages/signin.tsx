import { useState } from 'react';
import Link from 'next/link';
import Page from '@/components/page';

export default function SignIn() {
  const [agreed, setAgreed] = useState(false);

  return (
    <Page>
      <main className="min-h-screen flex items-center justify-center bg-secondary-50 px-6">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg border border-secondary-200 p-8">
          {/* Header */}
          <h1 className="text-3xl font-bold text-secondary-900 text-center mb-2">Sign In</h1>
          <p className="text-secondary-600 text-center mb-8">Welcome back to Halvestor</p>

          {/* Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-1">Email</label>
              <input
                type="email"
                required
                className="w-full rounded-lg border border-secondary-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-1">Password</label>
              <input
                type="password"
                required
                className="w-full rounded-lg border border-secondary-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            {/* TERMS CHECKBOX */}
            <div className="flex items-start gap-3">
              <input
                id="terms"
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-secondary-300 text-primary-600 focus:ring-primary-500"
              />
              <label htmlFor="terms" className="text-sm text-secondary-600">
                By signing in, you agree to our{' '}
                <Link href="/terms-of-service" className="text-primary-600 hover:underline font-medium">
                  Terms of Service
                </Link>
              </label>
            </div>

            {/* SIGN IN BUTTON */}
            <button
              type="submit"
              disabled={!agreed}
              className={`w-full rounded-lg py-3 font-semibold transition-all ${
                agreed
                  ? 'bg-primary-600 text-white hover:bg-primary-700'
                  : 'bg-secondary-300 text-secondary-500 cursor-not-allowed'
              }`}
            >
              Sign In
            </button>
          </form>

          {/* LEGAL NOTE */}
          <p className="mt-6 text-xs text-secondary-500 text-center">
            By continuing, you also acknowledge our{' '}
            <Link href="/privacy-policy" className="text-primary-600 hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </main>
    </Page>
  );
}
