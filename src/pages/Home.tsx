import { Layout } from "../components/Layout";

export const Home = () => {
  return (
    <Layout>
      <main class="container">
        <section class="grid">
          <article class="card">
            <h2>Understanding the Platform</h2>
            <p>
              Welcome to your internal developer platform. This is a unified workspace for managing
              your infrastructure, tools, and services.
            </p>
            <p>
              Our platform provides a centralized hub where you can monitor, deploy, and manage all
              your internal services from one place.
            </p>
            <ul>
              <li>Unified dashboard for all services</li>
              <li>Real-time monitoring and alerts</li>
              <li>Integrated CI/CD pipelines</li>
            </ul>
            <button>Learn More</button>
          </article>

          <article class="card">
            <h2>Using the Platform</h2>
            <p>
              Get started with your developer platform in just a few steps. Whether you're
              deploying services, managing infrastructure, or monitoring systems, we've got you
              covered.
            </p>
            <p>
              Access your dashboard, explore available services, and begin managing your
              infrastructure with ease.
            </p>
            <ul>
              <li>Quick onboarding guide</li>
              <li>API documentation</li>
              <li>Best practices and tutorials</li>
            </ul>
            <button>Get Started</button>
          </article>
        </section>
      </main>
    </Layout>
  );
};
