export default function GettingStartedSection() {
  return (
    <section id="getting-started" className="scroll-mt-20">
      <h1 className="text-4xl font-bold mb-6">Data Cleaning</h1>
      <p className="text-sm mb-4">
        The csv data file that we have doesnt always contain complete and reliable values. It is important that we make note of these values remove or change them before we start our data analysing process. 
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Junk or no Data</h2>
      <p className="mb-4">To avoid problems later on we can look for values that contain NAN (Not a Number). These can contain null values or just NAN which is a string value. It may contain duplicate, wrong, null or data values with different datatypes. It is important to handle all these for smooth data analysis further. </p>
      <pre className="bg-muted p-4 rounded-md mb-4">
        <code>df.isna()</code>
      </pre>
      <img src="/missing.png" />
      <img className="h-[200px] w=[300px]" src="/isna.png"/>
      <p className="mb-4">It is a method to see if there is a blank value in the data frame. If the cell value is na this method will show it to be as true.</p>
      <p className="mb-4">One of the ways of cleaning the data can be by simply deleting it. we can use the method <strong>df.dropna()</strong> and all the rows with the value NAN will be deleted.</p>
      <br />
      <h3 className="text-2xl font-bold mb-6">Methods of Data Cleaning</h3>
      <ul className="mb-4 list-inside list-disc space-y-1">
        <li>
          <strong>df.dropna()</strong>: Simply deletes the rows that contain the missing value
        </li>
        <li>
          <strong>df.dropna(inplace=True)</strong>: it won’t return a new DataFrame; instead, it modifies df_btc_price in place
        </li>
        <img src="/dropna.png" />
        <li>
          <strong>df.fillna(0)</strong>: Fills the missing values with the value 0. 
        </li>
        <li>
          <strong>df.isnull().sum()</strong>: Shows the count of missing values per column.
          <div className="flex justify-center">
            <img className="h-[200px] w=[300px]" src="/isnullsum.png"/>
          </div>
        </li>
        <li>
          <strong>df.replace('?', np.nan)</strong>:  Here, it replaces '?' with NaN
        </li>
        <li>
          <strong>df.drop_duplicates()</strong>: Keeps only the first occurrence.
        </li>
        <li>
          <strong>df['col'] = df['col'].astype(int)</strong>: Converts column to integer type.
        </li>
        <li>
          <strong>df['col'] = df['col'].str.strip()</strong>: Removes leading/trailing spaces.
        </li>
        <li>
          <strong>df.rename(columns={'old'}:'new'{"}"})</strong>: Renames columns
        </li>
        <li>
          <strong>df = df[df['age'] {'>'} 18]</strong>: Filter rows. Keeps only rows where age {'>'} 18
        </li>
      </ul>
      

      <h2 className="text-2xl font-semibold mt-8 mb-4">Important Tips</h2>
      <ul className="mb-4 list-inside list-disc space-y-1">
        <li>Always <strong>inspect</strong> data first before cleaning (use df.head(), df.info(), df.describe())</li>
        <li>Keep a <strong>copy</strong> of the original data before cleaning.</li>
        <li>Choose a method thoughtfully: <strong>dropping vs. filling</strong> missing values can change your analysis.</li>
        <li>Check <strong>Incorrect data types</strong>(e.g., numbers stored as strings)</li>
        <li><strong>Outliers</strong> (unrealistically high/low values)</li>
        <li><strong>Inconsistent formatting</strong> (e.g., "Yes", "yes", "YES") should be handled.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4"> Converting Strings to DateTime Objects</h2>
       <p className="mb-4">
        All the date data in our columns are in the form of strings. To convert this into a Datetime object we're going to use the Pandas .to_datetime() function.
      </p>
      <p className="mb-4">
        check the datatype of the DATE or MONTH column 
      </p>

      <pre className="bg-muted p-4 rounded-md mb-4">
        <code>{`type(df_btc_search.MONTH[0])`}</code>
      </pre>

      <p>output : str</p>
      <br />

      <h3 className="text-xl font-semibold mt-8 mb-4">Use datetime</h3>
      <pre className="bg-muted p-4 rounded-md mb-4">
        <code>df_tesla.MONTH = pd.to_datetime(df_tesla.MONTH)</code>
      </pre>
      <img src="/datetime.png" />
      <br />

      <p className="mb-4">
        The resample() function is used to change the frequency of time-series data. It's like a groupby for time-based data, allowing you to aggregate data over new time intervals (e.g., daily, monthly, yearly).When to use resample()- You have data collected at high frequency (e.g., every minute). You want to see trends at lower frequency (e.g., daily, monthly averages)
      </p>

      <pre className="bg-muted p-4 rounded-md mb-4">
        <code>df.resample('M').mean()</code>
      </pre>

      <p className="mb-4">
        'M' → new frequency (monthly)
      </p>
      

    </section>
  )
}
