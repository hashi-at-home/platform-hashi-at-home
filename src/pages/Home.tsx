import { Layout } from "../components/Layout";

export const Home = () => {
  return (
    <Layout>
      <main class="container">
        <section class="grid">
          <article class="card">
            <h2>Hashi@Home Platform</h2>
            <p>
              Welcome to the front page of a home-made platform.
            </p>
            <p>
              My platform is deployed at home, using whatever parts I like.
              This is a place for me to practice my art. Professional and personal feedback and discussion is welcomed, in the discussion forum.
            </p>
            <button>Learn More</button>
          </article>

          <article class="card">
            <h2>Using the Platform</h2>
            <p>
              Design and deploy workloads into the platform. Follow this path to understand how to get your workloads running.
            </p>
            <ul>
              <li>Quick onboarding guide</li>
              <li>Documentation</li>
              <li>Best practices and tutorials</li>
            </ul>
            <button>Get Started</button>
          </article>
        </section>
      </main>
    </Layout>
  );
};
