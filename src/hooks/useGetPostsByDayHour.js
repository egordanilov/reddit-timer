import { weekdays } from '../sharedVariables';
/* return an array of posts that have been posted during a specific week day and hour */
function useGetPostsByDayHour(list, day, hour) {
  const newList = list.filter(
    (post) => post.postHour === hour && post.postDay === weekdays.indexOf(day),
  );
  return newList;
}

export default useGetPostsByDayHour;
