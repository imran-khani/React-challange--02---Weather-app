type Location = {
  weatherData: any;
};

const WeatherDetails = ({ weatherData }: Location) => {
  const { location, current } = weatherData;

  if (!location || !current) {
    return <div>Enter City or Country Name...</div>;
  }

  const { name, region, localtime_epoch } = location;
  const { temp_c, condition } = current;
  const { text, icon } = condition;
  const date = new Date(localtime_epoch * 1000);

  return (
    <div className="flex flex-col gap-y-5">
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2">
          <h1 className="text-4xl font-bold">
            {name}, {region}
          </h1>
          <p className="text-lg text-gray-500">
            {date.toLocaleDateString()} {date.toLocaleTimeString()}
          </p>
        </div>
        <div className="flex flex-col items-end">
          <img
            className="w-20 h-20"
            src={icon ?? ""}
            alt={text ?? "Weather Icon"}
          />
          <p className="text-xl font-bold">{temp_c}°C</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
