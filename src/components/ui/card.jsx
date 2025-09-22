export function Card({ children, className = "" }) {
  return (
    <div className={`rounded-lg border bg-white text-gray-900 shadow-sm ${className}`}>
      {children}
    </div>
  )
}
