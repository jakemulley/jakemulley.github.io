module.exports = (date) => {
  return new Date(date).toLocaleString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
