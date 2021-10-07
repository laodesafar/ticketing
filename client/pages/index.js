import buildClient from "./api/build-client";

export default function Home({ currentUser }) {
  console.log(currentUser);

  return currentUser ? (
    <div>
      <div className="container mx-auto">
        <h1 className="bg-green-500 text-5xl font-bold  ">Anda Telah SignIn</h1>
      </div>
    </div>
  ) : (
    <div>
      <div className="container mx-auto">
        <h1 className="bg-red-500 text-5xl font-bold  ">Anda belum SignIn</h1>
      </div>
    </div>
  );
}

Home.getInitialProps = async (context) => {
  const client = buildClient(context);
  const { data } = await client.get("/api/users/currentuser");
  return data;
};
