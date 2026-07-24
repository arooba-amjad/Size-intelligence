import DocsHero from "./DocsHero/DocsHero";
import DocsTabs from "./Navigation/DocsTabs";

const Docs = () => {
  return (
    <main className="bg-white min-h-screen">

      <DocsHero />

      <DocsTabs />

      {/* Dynamic documentation content will come here */}

      <div className="max-w-305 mx-auto py-20"></div>

    </main>
  );
};

export default Docs;