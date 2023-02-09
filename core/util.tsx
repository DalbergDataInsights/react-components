export function mergeDicts(a, b, path = undefined) {
  if (!path) {
    path = []
  }
  for (const key in b) {
    if (key in a) {
      if (a[key] instanceof Object && b[key] instanceof Object) {
        path.push(JSON.stringify(key))
        mergeDicts(a[key], b[key], path)
      } else {
      }
    } else {
      a[key] = b[key]
    }
  }
  return a
}
