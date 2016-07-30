/** Created by ge on 7/30/16. */
export default function arrayRemove (array, action) {
  const {type, index, segment} = action;
  if (type !== "arrayRemove") return array;
  if (!segment.length) return array;
  return [
    ...array.slice(0, index),
    ...segment,
    ...array.slice(index)
  ]
}
