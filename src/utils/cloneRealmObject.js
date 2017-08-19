export default function (realmObject, schema) {
  return Object.keys(schema.properties).reduce((prevVal, currentVal, index, arr) => {
    prevVal[currentVal] = realmObject[currentVal]
    return prevVal
  }, {})
}
