export default function (dataObject, schema) {
  return Object.keys(schema.properties).reduce((prevVal, currentVal, index, arr) => {
    prevVal[currentVal] = dataObject[currentVal]
    return prevVal
  }, {})
}
