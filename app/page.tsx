async function getPosts() {
  const res = await fetch(`${process.env.BASE_URL}/api/getPosts`);
  if (!res.ok) {
    console.log(res);
  }
  return res.json();
}

export default async function Home() {
  const data: {
    name: string;
    status: string;
    description: string;
    deleted: boolean;
  }[] = await getPosts();
  console.log(data);

  return (
    <main>
      <div>
        <p className="font-bold text-4xl text-indigo-300">Nextjs 13</p>
      </div>
      {data.map((d) => (
        <h1>{d.status} </h1>
      ))}
    </main>
  );
}
