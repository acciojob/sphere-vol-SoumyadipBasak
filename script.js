function volume_sphere() {
  // Get the radius input value as string
  const radiusInput = document.getElementById('radius');
  const radiusValue = radiusInput ? radiusInput.value : '';

  // Try to parse as a number
  const r = parseFloat(radiusValue);

  // Validate: non-negative number
  // isFinite covers NaN and Infinity checks
  let volume;
  if (Number.isFinite(r) && r >= 0) {
    volume = (4 / 3) * Math.PI * Math.pow(r, 3);
    // Round to four decimal places
    volume = Math.round(volume * 10000) / 10000;
  } else {
    // Invalid input: return NaN (and display as NaN)
    volume = NaN;
  }

  // Display the result in the designated output field
  const volumeOutput = document.getElementById('volume');
  if (volumeOutput) {
    volumeOutput.value = volume;
  }

  // Optional: return value for further use
  return volume;
}
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
