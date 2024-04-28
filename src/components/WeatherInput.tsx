import { useState } from "react";

type INPUT_PROPS = {
  handleInput: (value: string) => void;
  fetchWeatherData: () => void;
};

const WeatherInput = ({ handleInput, fetchWeatherData }: INPUT_PROPS) => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    handleInput(newValue);
  };

  const handleSearch = () => {
    fetchWeatherData();
    setValue("");
  };

  return (
    <div className="flex gap-x-2 flex-row">
      <input
        className="border border-gray-300 w-1/2 p-2 rounded-lg"
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Enter city name"
      />
      <button
        className="bg-blue-500 text-white p-2 rounded-lg"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default WeatherInput;