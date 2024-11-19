import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type TrainDetail = {
  name: string
  example: string
  desc: string
  time: string
}

type Movement = {
  category: string
  value: string
  items?: {
    title: string
    movements: string[]
  }[]
  grid?: TrainDetail[]
}

export default function Movements() {
  const movementList: Movement[] = [
    {
      category: '🔥 爆發力訓練',
      value: 'explosive',
      grid: [
        {
          name: '爆發式重量訓練',
          example: '速度深蹲、蹲跳、速度硬舉、爆發式臥推',
          desc: '將傳統肌力訓練動作加速度',
          time: '30~80%\n3~10組\n1~3次'
        },
        {
          name: '奧林匹克舉重衍生動作',
          example: '單手抓舉、窄抓舉、上膊、爆發上推',
          desc: '著重瞬間發力的能力',
          time: '60~90%\n3~10組\n1~3次'
        },
        {
          name: '增強式訓練',
          example: '跳箱、欄架',
          desc: '強化伸展收縮循環(SSC)',
          time: '依照專項需求'
        },
        {
          name: '彈震式訓練',
          example: '藥球、鐵槌',
          desc: '只加速不減速的動作',
          time: '依照專項需求'
        },
        {
          name: '複合式訓練',
          example: '深蹲+垂直跳、RDL+立定跳遠、法式對比訓練(四項動作:重、快、次重、超級快)',
          desc: '結合大重量和高速度(PAP: 活化後增益效果)',
          time: '大重量:75~95%\n高速度:徒手\n3~10組\n1~3次(配對)'
        },
        {
          name: '變動強度訓練',
          example: '彈力帶深蹲、鐵鍊硬舉、彈力帶臥推',
          desc: '利用變動強度誘發身體加速度',
          time: '槓鈴重量:50%\n變動強度:20~30%\n組數:8~12\n次數:1~3'
        },
        {
          name: '靜態啟動訓練',
          example: '箱上蹲',
          desc: '針對發力率的訓練',
          time: ''
        }
      ]
    },
    {
      category: '🥵 爆發耐力訓練',
      value: 'ee',
      grid: [
        {
          name: '高反覆爆發式重量訓練',
          example: '連續速度深蹲、連續蹲跳、連續速度硬舉、連續爆發式臥推',
          desc: '低強度高反覆爆發力',
          time: '30~60%\n3~6組\n5~10次'
        },
        {
          name: '團組式訓練 cluster training',
          example: '奧林匹克舉重衍生動作+次數間短休息',
          desc: '利用短暫的次動作間休息，在有能量系統負荷的情況下訓練爆發力',
          time: '30~60%\n每次1~3下\n次數間休息15~60秒\n重複10~20次'
        },
        {
          name: '連續增強式訓練',
          example: '連續跳箱、欄架',
          desc: '高反覆SSC',
          time: '依照專項需求'
        },
        {
          name: '連續彈震式訓練',
          example: '連續藥球、鐵槌、壺鈴擺盪',
          desc: '只加速不減速的動作',
          time: '依照專項需求'
        },
        {
          name: '連續複合式訓練',
          example: '連續高強度+連續高速度',
          desc: '連續PAP',
          time: '依照專項需求'
        },
      ]
    },
    {
      category: '🏃 肌耐力訓練',
      value: 'endurance',
      grid: [
        {
          name: '高反覆重量訓練',
          example: '連續深蹲、連續臥推(動作不鎖死)',
          desc: '考驗相同動作的肌耐力',
          time: ''
        },
        {
          name: '循環訓練',
          example: '屈體划船、RDL、高拉、上膊、前蹲、肩 推、背蹲、抓舉',
          desc: '利用連續不同的動作，考驗在高能量系統負荷之下的肌耐力',
          time: '每個動作8下，反覆3循環(like CrossFit)'
        },
        {
          name: '等長肌力訓練',
          example: '靜態支撐、靜態懸吊',
          desc: '維持高壓力姿勢，延長張力時間',
          time: ''
        }
      ]
    },
    {
      category: '😵‍💫 重耐力訓練',
      value: 'he',
      grid: [
        {
          name: '呼吸式深蹲',
          example: '阿良:一般在背槓蹲舉的經驗，低槓位背蹲舉可以比高槓位稍微更有力量，所以在Super Squat時下意識的就選擇低背槓來蹲10RM 20下。\n但其實Super Squat的表現限制因素往往不會是下肢力量，而是能力系統跟「喘」。\n如果20下都用閥式操作、閉氣的方式蹲，直接背離了「單次不宜過久、連續不宜過多」的原則，不但可能出現頭暈、耳鳴、眼前漆黑甚至頭痛等症狀，到後面幾下會因為喘到不行，無法好好閉氣，影響核心穩定。\n低槓背蹲舉有更大的背屈角度，對脊椎穩定影響較大；又喘、又累、核心受挑戰、要略往前傾再使力的站起來在整個過程中實在很痛苦，也可能因為穩定性與活動度的交互作用，讓身體在不自覺的情況下，還沒達到應有的深度就自己站起來了。\n因此老師提到的呼吸式深蹲+「高槓位」背法，有機會讓上述的狀況改善一些。\n\nVicky:高槓位，離心時吸氣，過髖低於膝時微憋氣，過了最低點往上時開始鞏固核心的吐氣 ，越來越沒有腦壓升高的感覺',
          desc: '每次深蹲過後，做數次深呼恢復體力，重量不放下，連續做20次深蹲',
          time: '目標:以10RM重量完成20次'
        }
      ]
    },
    {
      category: '🦾 非傳統訓練器材 (避免累積性的局部壓力)',
      value: 'non-traditional',
      items: [
        {
          title: '安全深蹲槓',
          movements: [
            '深蹲',
            '分腿蹲',
            '後腳抬高蹲',
            '握把蹲',
            '握把式分腿蹲',
            '握把式後腳抬高蹲',
            '早安運動'
          ]
        },
        {
          title: '滾木槓',
          movements: [
            '滾木槓臥推',
            '滾木槓硬舉',
            '滾木槓划船',
            '滾木槓行走',
            '滾木槓肩推',
            '滾木槓前蹲',
            '滾木槓前抱式深蹲',
            '滾木槓上搏',
            '膝上直推*(隱藏版)'
          ]
        },
        {
          title: '農夫槓',
          movements: [
            '單邊農夫走路',
            '雙邊農夫走路',
            '單手硬舉'
          ]
        },
        {
          title: '六角槓/U型槓',
          movements: [
            '高握把六角槓硬舉',
            '低握把六角槓硬舉',
            '六角槓RDL',
            '六角槓前後腳RDL',
            '六角槓屈體划船',
            '六角槓深蹲',
            '六角槓蹲跳',
            '六角槓短分腿蹲',
            '六角槓聳肩',
            '六角槓負重行走'
          ]
        },
        {
          title: '地震槓',
          movements: [
            '地震槓深蹲',
            '地震槓臥推'
          ]
        },
        {
          title: '龍門架',
          movements: [
            '龍門架背負式行走',
            '龍門架前抱式行走',
            '龍門架深蹲(沒有槓的時候，直接把龍門架調低練蹲舉，不是常用的訓練)',
            '龍門架臥推',
            '龍門架前推',
            '龍門架划船'
          ]
        },
        {
          title: '雪橇',
          movements: [
            '雪橇行走',
            '推雪橇',
            '低推雪橇',
            '退拉雪橇',
            '全蹲退拉雪橇',
            '雪橇深蹲',
            '雪橇硬舉',
            '雪橇胸推',
            '雪橇划船'
          ]
        },
        {
          title: '輪胎(雪橇替代工具)',
          movements: []
        },
        {
          title: '藥球',
          movements: [
            '藥球胸前拋',
            '藥球下拋',
            '藥球後拋',
            '藥球轉體側拋',
            '藥球拋接'
          ]
        },
        {
          title: '沙包',
          movements: [
            '沙包深蹲',
            '沙包硬舉',
            '沙包上推',
            '沙包上膝',
            '沙包上搏',
            '沙包上肩',
            '沙包過槓',
            '沙包後拋',
            '沙包負重行走',
            '臥把式沙包前推',
            '臥把式沙包後拋',
            '沙包單邊負重行走'
          ]
        },
        {
          title: '怪獸槓',
          movements: [
            '怪獸行走',
            '負重擺盪',
            '相撲硬舉'
          ]
        },
        {
          title: '壺鈴',
          movements: [
            '壺鈴酒杯式深蹲',
            '單邊壺鈴前蹲舉',
            '雙邊壺鈴前蹲舉',
            '壺鈴硬舉',
            '壺鈴擺盪',
            '單手壺鈴擺盪',
            '壺鈴單手抓舉',
            '壺鈴單手外側擺盪',
            '壺鈴單肩推',
            '壺鈴肩推',
            '單邊壺鈴爆發上推',
            '雙邊壺鈴爆發上推'
          ]
        },
        {
          title: '腰帶蹲',
          movements: []
        },
        {
          title: '負重繩',
          movements: []
        },
        {
          title: '地雷管',
          movements: [
            '地雷管爆發前推',
            '地雷管爆發轉體'
          ]
        }
      ]
    },
    {
      category: '✋ 徒手訓練',
      value: 'cath',
      items: [
        {
          title: '伏地挺身',
          movements: [
            '墊高伏地挺身',
            '伏地挺身',
            '弓箭手伏地挺身',
            '槓桿式伏地挺身',
            '單手伏地挺身'
          ]
        },
        {
          title: '深蹲',
          movements: [
            '輔助深蹲',
            '深蹲',
            '輔助坐箱單腳蹲',
            '坐箱單腳蹲',
            '單腳深蹲'
          ]
        }
      ]
    },
    {
      category: '🐍 違常姿勢訓練',
      value: 'weird',
      items: [
        {
          title: '翻滾',
          movements: [
            '核心側翻',
            '前滾翻',
            '後滾翻'
          ]
        },
        {
          title: '爬行',
          movements: [
            '蜥蜴爬',
            '熊爬',
            '狗爬',
            '蛇行'
          ]
        },
        {
          title: '懸吊移動',
          movements: [
            '靜態懸吊（單、雙手）',
            '單槓橫移',
            '單槓換手',
            '懸吊移動'
          ]
        }
      ]
    }
  ]
  return (
    <section className="p-6">
      <Accordion type="multiple" className="w-full">
        {
          movementList.map(el => 
            <AccordionItem value={el.value} key={el.value}>
              <AccordionTrigger>{el.category}</AccordionTrigger>
              <AccordionContent>
                {
                  el.grid
                  &&
                  <Table className="max-md:w-max">
                    <TableHeader>
                      <TableRow>
                        <TableHead className="max-sm:w-[120px]">名稱</TableHead>
                        <TableHead className="max-sm:w-[160px]">範例</TableHead>
                        <TableHead className="max-sm:w-[120px]">特性</TableHead>
                        <TableHead className="max-sm:w-[160px]">強度x組數x次數</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {el.grid.map((item) => (
                        <TableRow key={item.name}>
                          <TableCell>{item.name}</TableCell>
                          <TableCell className="whitespace-pre-wrap">{item.example}</TableCell>
                          <TableCell className="whitespace-pre-wrap">{item.desc}</TableCell>
                          <TableCell className="whitespace-pre-wrap">{item.time}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                }
                {
                  el.items
                  &&
                  <Accordion type="multiple" className="w-full">
                    {
                      el.items.map((item, index) =>
                        item.movements.length > 0 
                        ?
                        <AccordionItem value={`${el.value}-${index}`} key={`${el.value}-${index}`}>
                          <AccordionTrigger>{item.title}</AccordionTrigger>
                          <AccordionContent>
                            <ul className="list-disc list-inside">
                              {item.movements.map(movement => <li key={movement}>{movement}</li>)}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                        :
                        <div className="border-b py-4" key={item.title}>{item.title}</div>
                      )
                    }
                  </Accordion>
                }
              </AccordionContent>
            </AccordionItem>
          )
        }
      </Accordion>
    </section>
  )
}