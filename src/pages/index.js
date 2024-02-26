import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ pageData }) {
  console.log(pageData);
  return (
    <main>
      {/* Use the fetched data here */}
    </main>
  );
}

export async function getStaticProps() {
  try {
    const response = await fetch('http://localhost:3000/api/fetchPageData');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const pageData = await response.json();
    return {
      props: {
        pageData,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        data: null, 
      },
    };
  }
}
