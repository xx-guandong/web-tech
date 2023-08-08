export default function StorySummary({
  summary,
}: {
  summary: string | null
}): React.ReactElement {
  return (
    <div className="story__summary">
      <p>{summary}</p>
    </div>
  )
}
