import getPostMetadata from "@/utils/getPostMetadata";



export default function Home() {
  const postMetadata = getPostMetadata('recipes')
  console.log(postMetadata)
  return (
    <main>

    </main>
  );
}
