import MeetupDetail from "@/components/meetups/MeetupDetail";

const MeetupIds = () => {
  return (
    <MeetupDetail
      image="https://images.unsplash.com/photo-1679237526223-8a5cbe0ef7a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM5fE04alZiTGJUUndzfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
      title="Building"
      address="Baker Street,London"
      descripton="night image of building in london"
    />
  );
};

export default MeetupIds;

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "https://images.unsplash.com/photo-1679237526223-8a5cbe0ef7a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM5fE04alZiTGJUUndzfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
        title: "Building",
        address: "Baker Street,London",
        descripton: "night image of building in london",
      },
    },
  };
}
