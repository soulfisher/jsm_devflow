import { auth } from "@/auth";
import ROUTES from "@/constants/routes"

const Home = async () => {
  const session = await auth();

  console.log(session);

  return (
    <>
      <h1 className="text-3xl text-white font-black">Welcome to the world of Next.js</h1>

    
    </>
  );
}

export default Home