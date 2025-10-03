import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white font-bomber-escort-expand flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-green-400 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Event Not Found</h2>
        <p className="text-gray-400 mb-8 max-w-md">
          The event you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/#events">
          <Button className="bg-green-600 hover:bg-green-700 text-black font-bold px-8 py-3">
            Back to Events
          </Button>
        </Link>
      </div>
    </div>
  )
}