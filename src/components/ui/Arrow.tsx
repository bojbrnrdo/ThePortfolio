type Direction = 'up-right' | 'down-right' | 'left' | 'down';
const angles: Record<Direction, number> = { 'up-right': 0, 'down-right': 90, left: 225, down: 135 };

export function Arrow({ direction = 'up-right' }: { direction?: Direction }) {
  return <svg className="arrow-icon" aria-hidden="true" viewBox="0 0 24 24" focusable="false"><g transform={`rotate(${angles[direction]} 12 12)`}><path d="M5 19 19 5M5 5h14v14"/></g></svg>;
}
