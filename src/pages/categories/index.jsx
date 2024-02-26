import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoriesListeningSection from "@/components/CategoriesListeningSection";


export default function CategoriesPage({ pageData }) {
    return (
        <main>
            {pageData && pageData
                .filter((page) => page.slug === 'categories')
                .map((page, index) => {
                    return (
                        <div key={index}>
                            <Header block={page.header} />
                            {
                                page.pageBuilder && page.pageBuilder.map((sections) => (
                                    sections.content && sections.content.map((block, index) => {
                                        switch (block._type) {
                                            case "categoriesListeningSection":
                                                return <CategoriesListeningSection key={index} block={block} />;
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
