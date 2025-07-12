export default function Introduction() {
  return (
    <section id="introduction">
      <h1 className="mb-6 text-4xl font-bold">Welcome to LLM Engineering Documentation</h1>
      <p className="mb-4">
        This is a documentation site that will help you go from beginner to intermediate level. It will cover major aspects and contents revolving around LLM Engineering. Lets dive right in!
      </p>
      <h2 className="mb-4 mt-8 text-2xl font-semibold">The topics that will be covered in here will be:</h2>
      <ul className="mb-4 list-inside list-disc space-y-1">
        <li>Introduction</li>

      </ul>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">What is an LLM?</h2>
      <p className="mb-4">
      A Large Language Model is a type of artificial intelligence model trained on huge amounts of text data to understand and generate human language. Think of it as an know it all model. Examples include ChatGPT, GPT-4, Claude, Gemini, etc. They learn patterns, grammar, facts, reasoning, and even some creativity from text data. They use advanced neural networks (usually transformer architectures) which we will cover in further lessons.
      </p>

      {/* <p>Read the data. </p>

      <pre className="bg-muted p-4 rounded-md mb-4">
        <code>import pandas as pd</code>
        <br></br>
        <code>df = pd.read_csv('path_to_file')</code>
      </pre> */}

      <h2 className="mb-4 mt-8 text-2xl font-semibold">Prompts</h2>
      <p className="mb-4">
        A prompt is nothing but a command that we give to the LLM model. which breaks it down into its own language, understands it and responds accordingly. <br /></p>
      <h2 className="mb-4 mt-8 text-2xl font-semibold">There are 2 types of prompts:</h2>
      <ul className="mb-4 list-inside list-disc space-y-1">
        <li><strong>System Prompt:</strong> Explains the context of the conversation here, tells what task it will be performing overall. Makes the LLM model understand what role it will be playing. e.g. : what tone they should be using, specify if there is any exception they need to know, specify if there are constraints to topics they need to reply to etc.</li>
        <pre className="bg-muted p-4 rounded-md mb-4 whitespace-pre-wrap">
        <code>system_prompt="you are a movie booking system. Reply to the questions politely and clearly. if the user is not ready to book let them know about discounts and other movies. Ask if they have cars with them so let them know about Parking availability. "</code>
      </pre>
      <br />
        <li><strong>User Prompt:</strong> The actual user conversation that the LLM needs to reply to. </li>
        <pre className="bg-muted p-4 rounded-md mb-4 whitespace-pre-wrap">
        <code>user_prompt="Which movies are available for tuesday 12pm"</code>
      </pre>
      </ul>
      <p className="mb-4">
        When AI receives a message it describes it using a python list of dictionary. 
      </p>
      <pre className="bg-muted p-4 rounded-md mb-4 whitespace-pre-wrap">
        <code>[<br />
          &#123;"role"&#125;:"system", &#123;"content"&#125;:"system message goes here"<br />
          ]</code>
      </pre>

      <div>
        <h2>3 Dimensions of LLM Engineering</h2>
      </div>



      
    </section>
  )
}
