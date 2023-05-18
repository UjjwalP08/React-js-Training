import Link from "next/link";
import { useRouter } from "next/router";

function Something() {
  const router = useRouter();
  const newsId = router.query.newsId;

  // console.log(newsId);

  return (
    <>
      <h1>The News id page createing dynamically</h1>
      <br />
      <button>
        <Link href='/news'>
            go back to news page
        </Link>
      </button>
      <br />
      <br />
      <button>
        <Link href='/'>
            go back to Home page
        </Link>
      </button>
    </>
  );
}

export default Something;
