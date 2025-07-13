export default function ComponentsSection() {
  return (
    <section id="components" className="scroll-mt-20">
      <h1 className="text-4xl font-bold mb-6">Grouping Values</h1>
      <p className="text-xl mb-4">
        One of the most important sections here is groupby
      </p>
      <p className="mb-4">This is of the file salaries_by_college_major.csv </p>

      <img alt="head " src="/business.png" />
      

      <ul className="mb-4 list-inside list-disc space-y-1">
        <li>
          <strong>df.sort_values('Total Profit')</strong>: 	Sorts by 'Total Profit' in ascending order
        </li>
        <li>
          <strong>df.sort_values('Total Profit', ascending=False)</strong>: Sorts by 'Total Profit' in descending order
        </li>
        <li>
          <strong>	df.sort_values(['Year', 'Total Profit'])</strong>: Sorts by 'Year', then by 'Total Profit' within each year
        </li>
        <li>
          <strong>df.sort_values(['Year', 'Total Profit'], ascending=[True, False])</strong>: Sorts 'Year' ascending, 'Total Profit' descending
        </li>
        <li>
          <strong>df.sort_index()</strong>: Sorts by index
        </li>
        <li>
          <strong>df.sort_index(ascending=False)</strong>: Sorts by index in descending order 
        </li>
      </ul>

      <img src="/sorting.png" />


       <h2 className="text-2xl font-semibold mt-8 mb-4">Button</h2>
       <p className="mb-4">
        This refers to the analysing of the data based on their values being largest, smallest or average, which refers to the calculations of Maximum, Minimum, Aggregate or etc.
      </p>
      <p className="mb-4">
        This refers to the analysing of the data based on their values being largest, smallest or average, which refers to the calculations of Maximum, Minimum, Aggregate or etc.
      </p>

      <pre className="bg-muted p-4 rounded-md mb-4">
        <code>{`import { Button } from '@our-company/package';

<Button variant="primary" onClick={() => console.log('Clicked!')}>
  Click me
</Button>`}</code>
      </pre>


      <h2 className="text-2xl font-semibold mt-8 mb-4">Card</h2>
      <p className="mb-4">The Card component is used to display content in a box with a consistent style.</p>
      <pre className="bg-muted p-4 rounded-md mb-4">
        <code>{`import { Card, CardHeader, CardContent } from '@our-company/package';

<Card>
  <CardHeader>Card Title</CardHeader>
  <CardContent>This is the card content.</CardContent>
</Card>`}</code>
      </pre>

    </section>
  )
}
