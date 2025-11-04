import { useState, useEffect, useCallback } from "react";

export function LiveInfo() {
  const [time, setTime] = useState(new Date());
  const [temperature, setTemperature] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const updateTime = useCallback(() => {
    setTime(new Date());
  }, []);

  // Fetch real temperature from Open-Meteo API (free, no API key required)
  const fetchTemperature = useCallback(async () => {
    try {
      // Madrid coordinates: 40.4168° N, 3.7038° W
      const response = await fetch(
        'https://api.open-meteo.com/v1/forecast?latitude=40.4168&longitude=-3.7038&current_weather=true'
      );
      const data = await response.json();
      
      if (data.current_weather && data.current_weather.temperature !== undefined) {
        setTemperature(Math.round(data.current_weather.temperature));
      }
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching temperature:', error);
      setTemperature(22); // Fallback to default temperature
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, [updateTime]);

  useEffect(() => {
    // Fetch temperature immediately
    fetchTemperature();
    
    // Update temperature every 10 minutes
    const temperatureTimer = setInterval(fetchTemperature, 10 * 60 * 1000);
    
    return () => clearInterval(temperatureTimer);
  }, [fetchTemperature]);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Europe/Madrid",
    });
  };

  return (
    <div className="text-[10px] md:text-xs tracking-widest text-gray-600 uppercase font-medium">
      <div className="mb-1">{formatTime(time)} Madrid</div>
      <div>
        {isLoading ? '...' : temperature !== null ? `${temperature}°C` : '--°C'}
      </div>
    </div>
  );
}