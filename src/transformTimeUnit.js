export default function transform_time_unit(locale) {
  const Milliseconds_in_a_second = 1000;
  const Seconds_in_a_minute = 60;
  const Minutes_in_an_hour = 60;
  const Minutes_in_a_day = 24 * Minutes_in_an_hour;

  return (time_stamp, format) => {
    let minute_pass =
      (time_stamp - +new Date()) /
      Milliseconds_in_a_second /
      Seconds_in_a_minute;
    let minute_abs = Math.abs(minute_pass);
    if (minute_abs < Minutes_in_an_hour) {
      format(
        new Intl.RelativeTimeFormat(locale).format(
          Math.trunc(minute_pass),
          "minutes"
        )
      );
    }
    if (minute_abs >= Minutes_in_an_hour && minute_abs < Minutes_in_a_day) {
      format(
        new Intl.RelativeTimeFormat(locale).format(
          Math.trunc(minute_pass / Minutes_in_an_hour),
          "hours"
        )
      );
    }
    if (minute_abs >= Minutes_in_a_day) {
      format(
        new Intl.RelativeTimeFormat(locale).format(
          Math.trunc(minute_pass / Minutes_in_a_day),
          "days"
        )
      );
    }
  };
}
