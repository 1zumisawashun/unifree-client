import styles from './index.module.scss'

const BLOCK_NAME = 'subgrid'

const items = [
  {
    title: 'Conubia odio diam tellus',
    description:
      'Lacus turpis id scelerisque mi viverra eleifend accumsan interdum className elementum gravida ac amet montes',
    tags: ['#hello', '#world'],
    link: 'https://example.com/'
  },
  {
    title: 'Magnis hendrerit praesent platea efficitur duis donec',
    description:
      'Cursus enim facilisi pulvinar dis iaculis neque euismod vestibulum aptent tristique commodo velit magnis morbi accumsan dui nam porta laoreet',
    tags: ['#hello', '#world'],
    link: 'https://example.com/'
  }
]

type Item = (typeof items)[number]

const SubGridItem: React.FC<{ item: Item }> = ({ item }) => {
  return (
    <li className={styles[`${BLOCK_NAME}-card`]}>
      <a className={styles[`${BLOCK_NAME}-link`]} href="https://example.com/">
        <h2 className={styles[`${BLOCK_NAME}-card-title`]}>{item.title}</h2>
        <p className={styles[`${BLOCK_NAME}-card-description`]}>
          {item.description}
        </p>
      </a>
      <p className={styles[`${BLOCK_NAME}-tags`]}>
        {item.tags.map((tag, index) => (
          <a href="https://example.com/hello/" key={index}>
            {tag}
          </a>
        ))}
      </p>
    </li>
  )
}

/**
 * @see https://x.com/ixkaito/status/1772961894107685192?s=12&t=0Bs_ltBYiO3nhiiL9YZAEw
 * @see https://codepen.io/ixkaito/pen/WNWERJg
 * @see https://github.com/w3c/csswg-drafts/issues/3565
 */
export const SubGrid: React.FC = () => {
  return (
    <main>
      <section className={styles[`${BLOCK_NAME}-nested-link-bottom`]}>
        <h2 className={styles[`${BLOCK_NAME}-title`]}>
          Nested links at the bottom
        </h2>
        <ul className={styles[`${BLOCK_NAME}-list`]}>
          {items.map((item, index) => (
            <SubGridItem item={item} key={index} />
          ))}
        </ul>
      </section>

      <section className={styles[`${BLOCK_NAME}-nested-link-between`]}>
        <h2 className={styles[`${BLOCK_NAME}-title`]}>
          Nested links between title and description
        </h2>
        <ul className={styles[`${BLOCK_NAME}-list`]}>
          {items.map((item, index) => (
            <SubGridItem item={item} key={index} />
          ))}
        </ul>
      </section>
    </main>
  )
}
