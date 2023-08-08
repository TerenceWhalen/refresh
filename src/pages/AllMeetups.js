import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first mash-up",
    image:
      "https://media.npr.org/assets/img/2013/03/21/liturgy_wide-b0db450374d1862cacfb1fd49a54360db58aaefc.jpg",

    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing mashup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second melt-up",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Burnout_ops_on_Mangum_Fire_McCall_Smokejumpers.jpg/300px-Burnout_ops_on_Mangum_Fire_McCall_Smokejumpers.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is another amazing meetup where we will toast marshmellows around an open fire. It will be a lot of fun!",
  },
];

function AllMeetupsPage() {
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={DUMMY_DATA} />
    </section>
  );
}

export default AllMeetupsPage;
