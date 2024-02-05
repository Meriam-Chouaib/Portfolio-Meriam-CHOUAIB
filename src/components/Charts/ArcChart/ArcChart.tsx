import { PieChart } from '@mui/x-charts/PieChart'
import { Ichart } from 'components/Charts/ArcChart/ArcChart.type'
import { useGetBooksQuery } from 'redux/api/books/booksApi'

function ArcChart() {
  const { data } = useGetBooksQuery(null)
  const dataChart: Ichart[] = []
  data
    ?.slice(0, 10)
    .map((item, index) =>
      dataChart.push({ id: index, value: index, label: item.author })
    )

  return (
    <PieChart
      series={[
        {
          data: dataChart,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
      height={200}
    />
  )
}
export default ArcChart
