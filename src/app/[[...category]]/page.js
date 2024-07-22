import HomeContainer from "@/containers/home";

import { getSingleCategory,getCategories,getTopRatedMovies,getPopularMovies } from "@/../services/movie";


export default async function HomePage({ params }) {
  
  const [{results : topRatedMovies},{results : popularMovies}, {genres:categories}] = await Promise.all([getTopRatedMovies(),getPopularMovies(),getCategories()])


  let selectedCategory;

  if (params.category?.length > 0) {
    const { results } = await getSingleCategory(params.category[0]);
    selectedCategory = results;
  }

  return (
    <HomeContainer
      topRatedMovies={topRatedMovies}
      popularMovies={popularMovies}
      categories={categories}
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategory ? selectedCategory.slice(0, 7) : [],
      }}
    />
  );
}
