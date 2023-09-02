import MeetupItem from "../components/meetups/MeetupItem";
import { useFetch } from "../util-hooks/useFetch";
import classes from "./../components/meetups/MeetupList.module.css";

export default function AllMeetupsPage() {
  const data = useFetch("/data.json")
  if(!data || data.data.length === 0) return null
  return (
    <section>
      <h1>All Meetups</h1>
      <ul className={classes.list}>
        {data?.data?.map((item) => (
          <li key={item.id}>
            <MeetupItem item={item} />
          </li>
        ))}
        
      </ul>
    </section>
  );
}
