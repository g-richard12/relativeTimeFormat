import transform_time_unit from "./transformTimeUnit.js";
transform_time_unit("en-US")(+new Date() - 60000, (time) => {
  console.log(time);
});
