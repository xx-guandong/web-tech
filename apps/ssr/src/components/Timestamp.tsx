import * as React from 'react'

export default function Timestamp({ time }: { time: string | null }) {
  if (time == null) {
    return null
  }
  return <span className="timestamp">{new Date(time).toDateString()}</span>
}
