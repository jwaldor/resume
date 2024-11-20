// import Resume from './resume'


function App() {
  return (
    <div className="w-full mx-auto p-6 bg-white shadow-lg">
      <header className="text-center mb-6">
        <h1 className="text-2xl font-bold">JACOB WALDOR</h1>
        <p className="text-sm">New York, NY | P: (973) 951-7500 | jacobwaldor@gmail.com | https://www.linkedin.com/in/jacob-waldor/</p>
      </header>

      <section className="mb-6">
        <h2 className="text-lg font-semibold border-b border-gray-300 mb-2">EXPERIENCE</h2>
        <div className="mb-4">
          <div className="flex justify-between">
            <h3 className=""><strong>Software Developer</strong> | Fractal Development Accelerator</h3>
            <span>Brooklyn, NY</span>
          </div>
          <p>August 2024 – Present</p>
          <ul className="list-disc list-inside">
            Shipped code prolifically, with more than 15 PRs and 56 hours of work per week. Secured second place in a hackathon for copilot that lets you tweak UI in real-time using AI, and third place for co-developing Quipai, a fun multiplayer party game
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex justify-between">
            <h3 className=""><strong>Software Developer</strong> | ApplyAll</h3>
            <span>Brooklyn, NY</span>
          </div>
          <p>September 2024</p>
          <ul className="list-disc list-inside custom-list">
            <li>Built a TypeScript service that goes through resumes like a pro recruiter and annotates the resume with specific feedback, leveraging LLMs</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex justify-between">
            <h3 className=""><strong>Software Developer</strong> | Membrane</h3>
            <span>Remote</span>
          </div>
          <p>September 2024 – October 2024</p>
          <ul className="list-disc list-inside">
            <li>Augmented the GitHub integration to handle org-wide events and PR reviews</li>
            <li>Got clever with graphql-js to pull types straight from Linear's schema, saving us a ton of time</li>
            <li>Observed, reported, and tracked bugs and UX issues</li>
            <li>Used platform to create integrations to illustrate its power</li>
          </ul>
        </div>
        <div className="mb-4">
          <div className="flex justify-between">
            <h3 className=""><strong>Machine Learning Research & Engineer</strong> | Dasion</h3>
            <span>Remote</span>
          </div>
          <p>January 2024 – July 2024 (Full-time)</p>
          <ul className="list-disc list-inside">
            <li>Developed text generation and video generation pipelines for producing video content</li>
            <li>Built FastAPI endpoints for AWS S3 content serving and session management in Docker</li>
            <li>Engineered GPT-4 powered chatbots with agentic behavior for interactive lessons and medical questionnaires</li>
            <li>Developed JavaScript web apps and integrated video generation API for avatar-based chatbot interfaces</li>
            <li>Got our hands dirty with the GPT-4 API to build some seriously smart chatbots - crafted some clever prompts to squeeze every drop of potential out of that API, including enabling agentic behavior</li>
            <li>Played around with a video generation API to bring our avatar chatbots to life - talk about next-level stuff</li>
          </ul>

          <p className="mt-2">November 2022 – March 2023 (Part-time)</p>
          <ul className="list-disc list-inside">
            <li>Implemented GPT-3 based negation detection and regex extraction for medical documents</li>
            <li>Created time series visualizations and integrated medical thesaurus API for term standardization</li>
            <li>Researched and documented deep learning architectures like DiseaseBERT for medical applications</li>
          </ul>

          <p className="mt-2">January 2022 - April 2022 (Intern)</p>
          <ul className="list-disc list-inside">
            <li>Automated email campaigns and supported venture capital pitch development</li>
          </ul>
        </div>
        <div className="mb-4">
          <div className="flex justify-between">
            <h3 className=""><strong>Machine Learning Intern</strong> | AppliedXL</h3>
            <span>Brooklyn, NY</span>
          </div>
          <p>June 2022 – October 2022</p>
          <ul className="list-disc list-inside">
            <li>Researched the potential for generating trading signals from proprietary company data</li>
            <li>Enhanced the accuracy of a core NLP model by 10% by utilizing cutting-edge deep learning techniques</li>
            <li>Exploited hierarchical relationships in labels to optimize feature generation for text classification</li>
            <li>Developed classifiers for extracting key paragraphs from text using supervised learning</li>
            <li>Identified optimal text embedding methods for improving model performance</li>
            <li>Optimized HuggingFace models and scikit-learn models using hyperparameters</li>
            <li>Provided team with thorough evaluations of ML models training, including key metrics and examples of predictions</li>
            <li>Produced function to log performance of experiments in terms of various key metrics on MLflow</li>
          </ul>
        </div>
        <div className="mb-4">
          <div className="flex justify-between">
            <h3 className=""><strong>Research Assistant</strong> | Harvey Mudd College</h3>
            <span>Claremont, CA</span>
          </div>
          <p>October 2021 – December 2021</p>
          <ul className="list-disc list-inside">
            <li>Assisted Professor S. Martonosi with research that devises algorithms for maximizing the flow through a vertex in a graph</li>
            <li>Formulated proofs and scripted in AMPL for testing different algorithms</li>
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold border-b border-gray-300 mb-2">SKILLS</h2>
        <p><strong>Technical:</strong> Python, R, Natural Language Processing, Data Analysis, Sklearn, Pandas, Numpy, Java (beginner), C++ (beginner), Docker (beginner), HuggingFace (beginner), SQL (beginner), TypeScript, Tailwind CSS, Framer Motion, Socket.IO, Prompt Engineering, Structured LLM Outputs</p>
        <p><strong>Math:</strong> Theoretical Math, Bayesian Statistics, Operations Research</p>
        <p><strong>Other:</strong> Analytical Philosophy, Empirical Economics, Mandarin Chinese (full conversational)</p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold border-b border-gray-300 mb-2">EDUCATION</h2>
        <div className="mb-2">
          <div className="flex justify-between">
            <h3 className="font-semibold">POMONA COLLEGE</h3>
            <span>Claremont, CA</span>
          </div>
          <p>Class of 2022</p>
          <p>B.A. in Mathematics, Magna Cum Laude</p>
          <p>Phi Beta Kappa member | GPA: 3.96 | GRE: 168/170 Verbal, 167/170 Quantitative</p>
          <p>Pomona College Scholar (3x)</p>
        </div>
      </section>
    </div>
  );
}

export default App;
