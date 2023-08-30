import { FunctionComponent, useEffect, useState } from "react";

interface DateTimeProps {
  format?: string;
}

export const DateTimeDisplay: FunctionComponent<DateTimeProps> = ({
  format = "HH:mm:ss dd-MM-yyyy",
}) => {
  const [dateTime, setDateTime] = useState<string>("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const formattedDateTime = formatDateTime(now, format);
      setDateTime(formattedDateTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [format]);

  const formatDateTime = (date: Date, format: string) => {
    const options: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      day: "numeric",
      month: "short",
      year: "numeric",
      weekday: "long",
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };
  return <div>{dateTime}</div>;
};
