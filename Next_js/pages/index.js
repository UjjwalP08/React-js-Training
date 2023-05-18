import Link from "next/link";

function Homepage() {
    
  return (
    <>
      <h1>The Home page</h1>
      <br />

      <ul>
        <li>
            <button>
            <Link href='/news'>
                Go to News page
            </Link>
            </button>
        </li>
      </ul>
    </>
  );
}

export default Homepage;
