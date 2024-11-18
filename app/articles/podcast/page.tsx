import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function Podcast() {
  return (
    <article className="p-6">
      <h1 className="text-xl font-bold">參考Podcast</h1>
      <hr className="my-4" />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>議題</TableHead>
            <TableHead>集數</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>運動心理學</TableCell>
            <TableCell>
              怪獸訓練電台 EP112.不完美主義
              <br />
              邱個Podcast #45 居家健身的12個方針
              <br />
              邱個Podcast #46 居家健身的12個方針
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>卡路里理論</TableCell>
            <TableCell>
              怪獸訓練電台 EP112.不完美主義
              <br />
              怪獸訓練電台 EP71.何老師 N=1 的飲食實驗(PART II)
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>神經系統</TableCell>
            <TableCell>
              怪獸訓練電台 EP58.QA時間 230919
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>徒手訓練</TableCell>
            <TableCell>
              邱個Podcast #40 囚徒訓練
              <br />
              邱個Podcast #45 居家健身的12個方針
              <br />
              邱個Podcast #46 居家健身的12個方針
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <div className="border p-4 rounded-lg mt-6 bg-zinc-200 dark:bg-zinc-800">
        居家健身的12個方針：
        <ol className="list-decimal list-inside">
          <li>【找出你的弱點，鍛鍊你的弱點】肌力的弱點</li>
          <li>【動作控制：Motor Control】控制力的弱點</li>
          <li>【肌肉生長｜肌耐力】</li>
          <li>【心肺訓練｜能量系統訓練】遠離靜態生活訓練</li>
          <li>【特殊速度訓練】Super Slow｜Pause</li>
          <li>【受傷復原】Take Care of Your Injury</li>
          <li>【爆發力訓練】Train Power</li>
          <li>訓練『技術』 (各種技術學習)</li>
          <li>控制『身體組成』：以健康與功能表現為目的，不以符合某種美感為目標</li>
          <li>心智訓練</li>
          <li>伸展</li>
          <li>睡眠</li>
        </ol>
      </div>
    </article>
  )
}