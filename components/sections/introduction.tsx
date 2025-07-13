export default function Introduction() {
  return (
    <section id="introduction">
      <h1 className="mb-6 text-4xl font-bold">Welcome to Data Science Documentation</h1>
      <p className="mb-4">
        This is a documentation site that will help you go from beginner to intermediate level. It will cover major aspects and contents revolving around Data Science. Lets get started !
      </p>
      <h2 className="mb-4 mt-8 text-2xl font-semibold">The topics that will be covered in here will be:</h2>
      <ul className="mb-4 list-inside list-disc space-y-1">
        <li>Introduction</li>
        <li>Data Cleaning</li>

      </ul>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">Getting Started</h2>
      <p className="mb-4">
        These are the few basic commands that help you to get the overall view of the .csv data. 
        These are the initial steps to get to know the data :
      </p>
      <p>Read the data. </p>
      <pre className="bg-muted p-4 rounded-md mb-4">
        <code>import pandas as pd</code>
        <br></br>
        <code>df = pd.read_csv('path_to_file')</code>
      </pre>
      <p>These are the few basic commands that help you to get the overall view of the .csv data. </p>
      <br />
      <ul className="mb-4 list-inside list-disc space-y-1">
        <li>
          <strong>df.head()</strong>: Displays Top 5 rows
        </li>
        <li>
          <strong>df.tail()</strong>: Displays Last 5 rows
        </li>
        <li>
          <strong>df.shape</strong>: Prints number of Rows and Columns e.g : (100, 14)
          {/* <img src="" alt="" /> */}
        </li>
        <li>
          <strong>df.sample(5)</strong>: Displays any random 5 rows
        </li>
        <li>
          <strong>df.columns()</strong>: Prints all the columns e.g., Index(['col1', 'col2', ...])
        </li>
        <li>
          <strong>df.index</strong>: Shows the index (row labels) e.g.,RangeIndex(start=0, stop=100, step=1)
        </li>
         <li>
          <strong>df.info</strong>:	Summary of DataFrame: number of non-null entries, data types, memory usage
        </li>
        <li>
          <strong>df.describe()</strong>:	Statistical summary for numerical columns (mean, std, min, max, etc.)
        </li>
        <li>
          <strong>df.dtypes</strong>: Shows data types of each column
        </li>
      </ul>
      <p className="mb-4">
        If you have any questions or need further assistance, don&apos;t hesitate to reach out to our support team.
      </p>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">Contributing</h2>
      <p className="mb-4">
        We welcome contributions to our documentation. If you find any errors or have suggestions for improvement,
        please open an issue or submit a pull request on our GitHub repository.
      </p>

      
    </section>
  )
}
