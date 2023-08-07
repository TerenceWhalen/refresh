const dummy_data = [
  {
    id: 'm1',
    title: 'This is a first meetup',
    image:
      'https://images.unsplash.com/photo-1626066496359-8a1a2b4e5c9e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVldHVwc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
  {
    id: 'm2',
    title: 'This is a second meetup',
    image:
      'https://images.unsplash.com/photo-1626066496359-8a1a2b4e5c9e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVldHVwc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
];

function AllMeetupsPage() {
  return (
    <section>
      <h1>All Meetups</h1>
      <ul>
        {dummy_data.map((meetup) => {
          return <li key={meetup.id}>{meetup.title}</li>
        })}

      </ul>
    </section>
  );
}

export default AllMeetupsPage;