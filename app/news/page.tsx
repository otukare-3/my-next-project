import NewsList from "../_components/NewsList";
import { getNewsList } from "../_libs/microcms";
import { NEWS_LIST_LIMIT } from "../_constants";
import Pagination from "../_components/Pagination";

export default async function Page() {
    const { contents: news, totalCount } = await getNewsList({
        limit: NEWS_LIST_LIMIT
    }
    );

    return (
        <>
            <NewsList news={news} />
            <Pagination totalCount={totalCount} />
        </>
    );
}