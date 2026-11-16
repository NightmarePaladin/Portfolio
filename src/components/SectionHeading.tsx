export default function SectionHeading({
  id,
  label,
  title,
  intro,
}: {
  id: string
  label: string
  title: string
  intro?: string
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="section-label mb-3">{label}</p>
      <h2 id={id} className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>}
    </div>
  )
}
