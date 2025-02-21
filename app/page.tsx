

export default function Home() {
  const buildId = process.env.NEXT_PUBLIC_BUILD_ID;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold">Hello Build ID is {buildId} </h1>
    </main>
  );
}
