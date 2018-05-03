export function sein(n) {
  return n === 1 ? 'ist' : 'sind';
}

export function compare(fraction) {
  if(fraction < .9) {
    return 'nicht vergleichbar mit';
  } else if(fraction < .95) {
    return 'weniger als';
  } else if(fraction < 1.) {
    return 'etwas weniger als'
  } else if(fraction < 1.05) {
    return 'etwas mehr als'
  } else {
    'mehr als'
  }
}