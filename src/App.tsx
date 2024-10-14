// import Resume from './resume'


function App() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg">
      <header className="text-center mb-6">
        <h1 className="text-2xl font-bold">JACOB WALDOR</h1>
        <p className="text-sm">New York, NY | P: (973) 951-7500 | jacobwaldor@gmail.com</p>
        <p className="text-sm">https://www.linkedin.com/in/jacob-waldor/</p>
      </header>

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

      <section className="mb-6">
        <h2 className="text-lg font-semibold border-b border-gray-300 mb-2">PROFESSIONAL EXPERIENCE</h2>
        <div className="mb-4">
          <div className="flex justify-between">
            <h3 className="font-semibold">FRACTAL DEVELOPMENT ACCELERATOR</h3>
            <span>Brooklyn, NY</span>
          </div>
          <p className="italic">Software Developer</p>
          <p>8/2024 – Present</p>
          <ul className="list-disc list-inside">
            <li>Building extensive experience shipping code, with over 15 PRs and 56 hours of work per week</li>
            <li>Developing and deploying web applications using modern technologies and best practices</li>
            <li>Collaborating with a team of developers on real-world projects</li>
            <li>Won second place in copilot hackathon for developing FrontendCopilot: a React app with GPT-4o integration, allowing real-time UI modifications via natural language, utilizing TypeScript, Tailwind, Framer Motion, and custom state management</li>
            <li>Won third place in hackathon for co-developing Quipai, a real-time multiplayer party game using React, TypeScript, Tailwind CSS, Socket.IO, and OpenAI's API, featuring dynamic question generation, geolocation, QR code game joining, and global state management</li>
            <li>Externships: Membrane, ApplyAll</li>
          </ul>
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between">
            <div>
              <h3 className="font-semibold">APPLYALL</h3>
              <p className="italic">Software Developer</p>
              <p>9/2024</p>
              <ul className="list-disc list-inside">
                <li>Whipped up a TypeScript app that tears through resumes like a pro recruiter</li>
                <li>Got GPT-4o to do the heavy lifting on analyzing resumes and dishing out advice</li>
                <li>Built it so modular, you could swap out parts blindfolded</li>
                <li>Made PDFs light up like Christmas trees with annotations showing what to fix</li>
                <li>Threw in some fuzzy search magic to nail down exactly where the issues are</li>
                <li>Kept an eye on performance, timing everything to squeeze out every millisecond</li>
                <li>Wrote code so clean you could eat off it - seriously, it's that organized</li>
              </ul>
            </div>
            <span>Brooklyn, NY</span>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between">
            <h3 className="font-semibold">MEMBRANE</h3>
            <span>Remote</span>
          </div>
          <p className="italic">Software Developer</p>
          <p>9/2024 – 10/2024</p>
          <ul className="list-disc list-inside">
            <li>Whipped up integrations for this cool multi-platform system using a bunch of APIs</li>
            <li>Beefed up the GitHub integration to handle org-wide events and PR reviews - way more powerful now</li>
            <li>Got clever with graphql-js to pull types straight from Linear's schema - saved us a ton of time</li>
            <li>Set up Slack to ping people about PR reviews and open issues - no more excuses for missing stuff</li>
            <li>Built this fun Discord bot that keeps our tech community in the loop about upcoming events</li>
            <li>Threw together some wild integrations for Stripe, our CRM, and even Citi Bike - why not, right?</li>
            <li>Spotted and reported a bunch of bugs and UX issues - helped make the whole platform way smoother</li>
            <li>Dove deep into TypeScript and React - learned a ton and wrote some pretty solid code</li>
          </ul>
        </div>
        <div className="mb-4">
          <div className="flex justify-between">
            <h3 className="font-semibold">DASION</h3>
            <span>Remote</span>
          </div>
          <p className="italic">Machine Learning Research & Engineer</p>
          <p>1/2022 - 4/2022, 11/2022 – 3/2023, 1/2024 – 7/2024</p>
          <ul className="list-disc list-inside">
            <li>Head of NLP?
            <ul className="list-disc list-inside ml-4">
                <li>Developed text generation and video generation pipelines for producing video content</li>
                <li>Developed chatbot experiences for interactive lessons, interviews, and medical questionnaires</li>
                <li>Cooked up some slick FastAPI endpoints to serve content from AWS S3 and keep track of user sessions - all running smooth in a Docker container</li>
                <li>Whipped up some JavaScript web apps to show off our product - made it look good and work even better</li>
                <li>Got our hands dirty with the GPT-4 API to build some seriously smart chatbots - crafted some clever prompts to squeeze every drop of potential out of that API</li>
                <li>Played around with a video generation API to bring our avatar chatbots to life - talk about next-level stuff</li>
              </ul>
            </li>
            <li>Machine Learning Researcher & Engineer
              <ul className="list-disc list-inside ml-4">
                <li>Used GPT-3 Completions API for negation detection of conditions in medical documents</li>
                <li>Produced time series plots with Matplotlib indicating evolution in 5 different variables over time</li>
                <li>Developed regular expressions to extract relevant information from medical documents</li>
                <li>Used calls to a medical thesaurus API to produce synonym sets for medical terms</li>
                <li>Identified and installed dependencies for an NLP GitHub repository for processing clinical notes</li>
                <li>Studied and summarized cutting-edge deep learning architectures used in the medical domain, such as DiseaseBERT</li>
                <li>Assisted with crafting venture capital pitch and producing estimates of market potential</li>
              </ul>
            </li>
            <li>Intern
              <ul className="list-disc list-inside ml-4">
                <li>Automated email campaigns, assisted CEO with developing venture capital pitch</li>
              </ul>
            </li>

            <li>CarbonCurve: Developed prototype webapp that enables companies to track path to net-zero emissions</li>
          </ul>
        </div>
        <div className="mb-4">
          <div className="flex justify-between">
            <h3 className="font-semibold">APPLIEDXL</h3>
            <span>Brooklyn, NY</span>
          </div>
          <p className="italic">Machine Learning Intern</p>
          <p>6/2022 – 10/2022</p>
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
            <h3 className="font-semibold">HARVEY MUDD COLLEGE</h3>
            <span>Claremont, CA</span>
          </div>
          <p className="italic">Research Assistant</p>
          <p>10/2021 – 12/2021</p>
          <ul className="list-disc list-inside">
            <li>Assisted Professor S. Martonosi with research that devises algorithms for maximizing the flow through a vertex in a graph</li>
            <li>Formulated proofs and scripted in AMPL for testing different algorithms</li>
          </ul>
        </div>
        <div className="mb-4">
          <div className="flex justify-between">
            <h3 className="font-semibold">MAYAMD.AI</h3>
            <span>Remote</span>
          </div>
          <p className="italic">Data Analyst Intern</p>
          <p>6/2021 – 8/2021</p>
          <ul className="list-disc list-inside">
            <li>Using Python, developed a high-efficiency method of optimizing question-asking for patient intake</li>
            <li>Developed a Python script that processed natural language user input with state-of-the-art accuracy</li>
            <li>Analyzed the front-end application for bugs, tracing them to a misinterpreted response payload</li>
          </ul>
        </div>
        <div className="mb-4">
          <div className="flex justify-between">
            <h3 className="font-semibold">TELLURIDE SCIENCE RESEARCH CENTER</h3>
            <span>Telluride, CO</span>
          </div>
          <p className="italic">Development Intern</p>
          <p>7/2017 – 8/2017</p>
          <ul className="list-disc list-inside">
            <li>Employed Python programming and web scraping techniques to uncover links to potential donors</li>
            <li>Composed captivating narratives based on the interviews to effectively showcase the center's impact and convey the significance of the scientists' work to potential donors</li>
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold border-b border-gray-300 mb-2">SKILLS</h2>
        <p><strong>Technical:</strong> Python, R, Natural Language Processing, Data Analysis, Sklearn, Pandas, Numpy, Java (beginner), C++ (beginner), Docker (beginner), HuggingFace (beginner), SQL (beginner)</p>
        <p><strong>Math:</strong> Theoretical Math, Bayesian Statistics, Operations Research</p>
        <p><strong>Other:</strong> Analytical Philosophy, Mandarin Chinese, Empirical Economics</p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold border-b border-gray-300 mb-2">LANGUAGES</h2>
        <p>English: Native proficiency | Mandarin Chinese: Full conversational proficiency</p>
      </section>
    </div>
  );
}

export default App;
