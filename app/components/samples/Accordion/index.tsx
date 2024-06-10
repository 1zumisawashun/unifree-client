import initializeDetailsAccordion, {
  type AccordionOptions
} from '@/functions/hooks/useAccordion'
import styles from './index.module.scss'

/**
 * @see https://www.tak-dcxi.com/article/accordion-implementation-example-using-the-name-attribute-of-details/
 */
export const Accordion: React.FC = () => {
  const options: AccordionOptions = {
    duration: 500,
    easing: 'linear'
  }

  return (
    <>
      <section aria-labelledby="title">
        <h1 id="title">アコーディオンの実装例テストテストテストテスト</h1>
        <details
          className={styles.accordion}
          name="sample"
          open
          ref={(el) => (el ? initializeDetailsAccordion(el, options) : null)}
        >
          <summary className={styles.summary}>
            Details 1<span className={styles.icon} aria-hidden="true"></span>
          </summary>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.Lorem ipsum dolor sit amet, consectetur adipisicing el
            </p>
          </div>
        </details>
        <details
          className={styles.accordion}
          name="sample"
          ref={(el) => (el ? initializeDetailsAccordion(el, options) : null)}
        >
          <summary className={styles.summary}>
            Details 2<span className={styles.icon} aria-hidden="true"></span>
          </summary>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.Lorem ipsum dolor sit amet, consectetur adipisicing el
            </p>
          </div>
        </details>
        <details
          className={styles.accordion}
          name="sample"
          ref={(el) => (el ? initializeDetailsAccordion(el, options) : null)}
        >
          <summary className={styles.summary}>
            Details 3<span className={styles.icon} aria-hidden="true"></span>
          </summary>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.Lorem ipsum dolor sit amet, consectetur adipisicing el
            </p>
          </div>
        </details>
      </section>
    </>
  )
}
