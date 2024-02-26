import BlogHeroSection from "@/components/BlogHeroSection";
import TechImageListSection from "@/components/TechImageListSection";
import TechStoriesSection from "@/components/TechStoriesSection";
import BlogInsightsSection from "@/components/BlogInsightsSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function Home({ pageData }) {
  return (
    <main>
      {pageData && pageData
    .filter((page) => page.slug === '/')
    .map((page, index) => {
      console.log(page)
      return (
        <div key={index}>
       <Header block={page.header} />
        {
          page.pageBuilder && page.pageBuilder.map((sections) => (
            sections.content && sections.content.map((block,index) => {
              console.log(block._type)
              switch (block._type) {
                
                case "blogHeroSection":
                  return <BlogHeroSection key={index} block={block} />;
                case "techImageListSection":
                  return <TechImageListSection key={index} block={block} />;
                case "techStoriesSection":
                  return <TechStoriesSection key={index} block={block} />;
                case "blogInsightsSection":
                  return <BlogInsightsSection key={index} block={block} />;
                default:
                  return null; 
              }
            })
          ))
        }
          <Footer block={page.footer} />
        
        </div>
      )
    }
    )
}
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
