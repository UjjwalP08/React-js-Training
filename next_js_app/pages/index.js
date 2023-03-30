import MeetupList from "@/components/meetups/MeetupList";
import { MongoClient } from "mongodb";



const Homepage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export default Homepage;

export async function getStaticProps()
{

  const client = await MongoClient.connect('mongodb+srv://Ujjwal_TST:Ujjwal123@cluster0.qii00ha.mongodb.net/meetups?retryWrites=true&w=majority');
       const db = client.db();

       const meetupCollection = db.collection('meetups');

       const meetups = await meetupCollection.find().toArray();

       client.close();
    return {
        props:{
            meetups:(meetups).map(meetup => ({
              title:meetup.title,
              image:meetup.image,
              address:meetup.address,
              description:meetup.description,
              id:meetup._id.toString()
            }))
        },
        revalidate:1
    }
}


