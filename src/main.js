import relative_time_format from "./relativeTimeFormat.js";
relative_time_format("en-US")(+new Date() - 60000, (time) => {
  console.log(time);
});
