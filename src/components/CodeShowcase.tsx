import { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-bash";
import "@/styles/prism-synthwave84-custom.css";

const codeExamples = [
  {
    title: "Quick Start",
    comment: `# turbo package manager on the bun runtime`,
    code: `# assuming a docker daemon is running

# clone the repo
git clone https://github.com/imdevan/pypo project_name && cd cd project_name

# turbo repo build manager can run back and frontend :)
bun i && bun dev`
  },

  {
    title: "Backend",
    comment: "# fully dockerized Fast API + SqlAlchemy and PostgreSQL",
    code: `cd app/backend/
docker compose up --build # to seed the db`
  },
  {
    title: "Frontend",
    comment: "# frontend bootstraped on Expo from Inifite Red's Ignite",
    code: `cd app/expo
bun i && bun dev`
  },
  {
    title: "DB",
    comment: "# convient built in scripts",
    code: `# generate db migrations easily
bun db:migrate

# generate frontend queries from python models
bun db:sync`
  }
];

export const CodeShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    Prism.languages.insertBefore('bash', 'function', {
      bun_function: {
        pattern: /\b(?:bun|turbo)\b/,
        alias: 'function'
      }
    });

    // Prism.languages.insertBefore('bash', 'function', {
    //   bun_function: {
    //     pattern: /\bbun\b/,
    //     alias: 'function'
    //   }
    // });
    Prism.highlightAll();
  }, [activeTab]);

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Quick to start
          </h2>
          <p className="text-xl text-muted-foreground">
            Get up and running in seconds with our battle-tested setup
          </p>
        </div>

        <div className="border-2 border-accent hard-shadow-accent bg-card">
          <div className="flex border-b-2 border-accent-border">
            {codeExamples.map((example, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 font-medium transition-colors border-r-2 border-accent-border last:border-r-0 ${activeTab === index
                  ? "bg-foreground text-background"
                  : "bg-card hover:bg-muted"
                  }`}
              >
                {example.title}
              </button>
            ))}
          </div>

          <div className="p-6">
            <div className="text-gradient font-bold mb-3 text-sm">
              {codeExamples[activeTab].comment}
            </div>
            <pre className="!bg-transparent !p-0 !m-0">
              <code className="language-bash !text-sm">
                {codeExamples[activeTab].code}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};
