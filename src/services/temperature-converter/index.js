function conversion(temp, curr, desired) {
  if (curr !== 'kelvin') {
    temp = 273.15 + (curr === 'fahrenheit' ? (temp - 32.0) / 1.8 : temp);
  }
  if (desired !== 'kelvin') {
    temp -= 273.15;
    if (desired === 'fahrenheit') {
      temp = 1.8 * temp + 32.0;
    }
  }
  return temp;
}

const temperatureConverterService = (temp, curr, desired) => {
  temp['units'] = desired;
  if (curr === desired) {
    return temp;
  }
  if (temp.temperature) {
    temp.temperature = conversion(temp.temperature, curr, desired);
  }
  if (temp.feels_like) {
    temp.feels_like = conversion(temp.feels_like, curr, desired);
  }
  if (temp.temp_max) {
    temp.temp_max = conversion(temp.temp_max, curr, desired);
  }
  if (temp.temp_min) {
    temp.temp_min = conversion(temp.temp_min, curr, desired);
  }
  return temp;
};

export default temperatureConverterService;
