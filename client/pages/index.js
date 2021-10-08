import buildClient from "./api/build-client";

export default function Home({ currentUser }) {
  return currentUser ? (
    <div>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <h1 className=" text-5xl font-bold  ">Anda Telah SignIn</h1>
      </div>
    </div>
  ) : (
    <div>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <h1 className="bg-red-500 text-5xl font-bold  ">Anda belum SignIn</h1>
      </div>
    </div>
  );
}

Home.getInitialProps = async (context) => {
  console.log("Landing Page");
  const client = buildClient(context);
  const { data } = await client.get("/api/users/currentuser");
  return data;
};
