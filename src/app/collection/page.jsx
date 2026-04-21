import CollectionPage from "./CollectionPage";

const filterButton = ["All", "Cakes", "Biscuits", "Cookies", "Custom"];

export default function Page({ searchParams }) {
  const categoryFromURL = searchParams?.category;

  const initialFilter =
    categoryFromURL && filterButton.includes(categoryFromURL)
      ? categoryFromURL
      : "All";

  return <CollectionPage initialFilter={initialFilter} />;
}