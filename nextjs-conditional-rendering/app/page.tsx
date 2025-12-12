import UserTable from "./components/UserTable";

export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-4">
        Conditional Rendering in Next.js + TypeScript
        </h1>
        <UserTable/> 
    </main>
  );
}
