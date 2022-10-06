/* return an array of posts that have been posted during a specific week day and hour */
function useGetPostsByDayHour(list, day, hour) {
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const newList = list.filter(
    (post) => post.postHour === hour && post.postDay === weekdays.indexOf(day),
  );
  return newList;
}

export default useGetPostsByDayHour;
