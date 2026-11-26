export function lastPublishedEdit(
  publishedAt: string | null | undefined,
  updatedAt: string | null | undefined,
): string | undefined {
  const times = [publishedAt, updatedAt]
    .filter((value): value is string => Boolean(value))
    .map(value => Date.parse(value))
    .filter(Number.isFinite)

  if (times.length) return new Date(Math.max(...times)).toISOString()
}
