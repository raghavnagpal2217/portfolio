import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="font-mono text-accent-light">404</p>
      <h1 className="font-display text-3xl font-semibold text-ink">Page not found</h1>
      <p className="max-w-sm text-ink-muted">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn-primary mt-4">
        Back to Home
      </Link>
    </div>
  )
}
