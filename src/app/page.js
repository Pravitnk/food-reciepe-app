import Link from "next/link";
export default function Home() {
  // https://dummyjson.com/recipes
  return (
    <div className="">
      <h1>Welcome to Recipe App</h1>
      <Link href={"recipe-list"}>Explore Recipes</Link>
    </div>
  );
}
