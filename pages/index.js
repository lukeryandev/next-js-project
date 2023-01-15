import { useRouter } from "next/router";
import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";
import EventsSearch from "../components/events/events-search";

function HomePage() {
  const featuredEvents = getFeaturedEvents();
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    //adds the props of year and month to the url as displayed above from the events-search component
    //have to use 2 parameters here because /events/anything would point at [eventId]
    router.push(fullPath);
  }

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={featuredEvents} />
    </>
  );
}

export default HomePage;
