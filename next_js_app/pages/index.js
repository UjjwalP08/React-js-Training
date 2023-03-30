import MeetupList from "@/components/meetups/MeetupList";
import { useEffect, useState } from "react";

const DUMMY_DATA = [
  {
    id: "m1",
    image:
      "https://images.unsplash.com/photo-1677616301815-9f446498da3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Buildings",
    address: "Torrento,Canda",
    description: "Sunset time image of buildings",
  },
  {
    id: "m2",
    image:
      "https://images.unsplash.com/photo-1679237526223-8a5cbe0ef7a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM5fE04alZiTGJUUndzfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    title: "Building",
    address: "Baker Street,London",
    description: "night image of building in london",
  },
];

const Homepage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export default Homepage;

export async function getStaticProps()
{
    // above function is use for the fetch data from an API which use page re-rendering and the name must be getStaticProps()
    // we want to pass props on Homepage which contain our data that we want to show
    return {
        props:{
            meetups:DUMMY_DATA
        }
    }
}

// alternate of the getServerSideProps()
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_DATA,
//     },
//   };
// }
