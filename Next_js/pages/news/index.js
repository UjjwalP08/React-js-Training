import Link from "next/link";

function News() {
  return (
    <>
      <h1>The News page</h1>
      <br />
      <button>
        <Link href='/'>
        Back to Home page
        </Link>
      </button>
      <br />
      <br />
      <button>
        <Link href='/news/newsItem'>
            go to news id page
        </Link>
      </button>
    </>
  );
}

export default News;
