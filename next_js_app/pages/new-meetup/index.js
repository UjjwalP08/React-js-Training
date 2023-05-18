import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import { useRouter } from "next/router";

const NewMeetUp = () => {
    const router = useRouter();
  async function meetUpHandler(frmDataObj) {
    const response = await fetch('/api/meet-up', {
      method: "POST",
      body: JSON.stringify(frmDataObj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log(frmDataObj);
    const data = await response.json();

    console.log(data);

    router.push('/');
  }

  return <NewMeetupForm onAddMeetup={meetUpHandler} />;
};

export default NewMeetUp;
