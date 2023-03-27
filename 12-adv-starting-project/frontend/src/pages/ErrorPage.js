import PageContent from "../components/PageContent";
import {useRouteError} from 'react-router-dom';

const ErrorPage = ()=>{
    const error = useRouteError();

    let title = 'An error occurred!!!';
    let msg = 'Something weng wrong....';

    if(error.status === 500)
    {
        msg = JSON.parse(error.data).message
    }

    if(error.status === 404)
    {
        title = 'Not Found!!!!';
        msg = "Could not find resorce you looking"

    }

    return (
        <PageContent title={title}>
            <p> {msg} </p>
        </PageContent>
    )
}

export default ErrorPage;