import { Label } from '@/components/elements/Label'
import styles from './index.module.scss'
const BLOCK_NAME = 'subgrid'

const items = [
  {
    title: 'Conubia odio diam tellus',
    date: '2024.05.31',
    label: 'Conubia odio',
    description:
      'Lacus turpis id scelerisque mi viverra eleifend accumsan interdum className elementum gravida ac amet montes',
    tags: ['#hello', '#world'],
    link: 'https://example.com/'
  },
  {
    title: 'Magnis hendrerit praesent platea efficitur duis donec',
    date: '2024.06.21',
    label: 'Magnis hendrerit',
    description:
      'Cursus enim facilisi pulvinar dis iaculis neque euismod vestibulum aptent tristique commodo velit magnis morbi accumsan dui nam porta laoreet',
    tags: ['#hello', '#world'],
    link: 'https://example.com/'
  }
]

/**
 * @see https://x.com/tak_dcxi/status/1799018469599711586
 */
export const SubGridV2: React.FC<{ type: 'column' | 'row' }> = ({
  type = 'column'
}) => {
  return (
    <ul className={styles[`${BLOCK_NAME}-ul`]}>
      {items.map((item, index) => (
        <li key={index} className={styles[`${BLOCK_NAME}-${type}`]}>
          <p>{item.date}</p>
          <div>
            <Label>{item.label}</Label>
          </div>
          <p>{item.description}</p>
        </li>
      ))}
    </ul>
  )
}
