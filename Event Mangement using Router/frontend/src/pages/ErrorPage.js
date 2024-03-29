import PageContent from "../components/PageContent";
import {useRouteError} from 'react-router-dom';
import MainNavigation from "../components/MainNavigation";

const ErrorPage = ()=>{
    const error = useRouteError();

    let title = 'An error occurred!!!';
    let msg = 'Something went wrong....';

    if(error.status === 500)
    {
        msg = error.data.message
    }

    if(error.status === 404)
    {
        title = 'Not Found!!!!';
        msg = "Could not find resorce you looking"

    }

    return (
        <>
        <MainNavigation />
        <PageContent title={title}>
            <p> {msg} </p>
        </PageContent>
        </>
    )
}

export default ErrorPage;