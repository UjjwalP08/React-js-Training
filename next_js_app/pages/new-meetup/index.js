import NewMeetupForm from "@/components/meetups/NewMeetupForm";

const NewMeetUp = ()=>{

    const meetUpHandler = (frmDataObj)=>{
        console.log(frmDataObj);
    }

    return <NewMeetupForm onAddMeetup={meetUpHandler} />
};

export default NewMeetUp