import { motion } from 'framer-motion';
import './section.css';

type SectionProps = {
  children: React.ReactNode;
}

const SectionContainer: React.FC<SectionProps> = ({ children }) => (
  <section className='section'>{children}</section>
)

type SectionTitleProps = {
  children: React.ReactNode;
}

const Title: React.FC<SectionTitleProps> = ({ children }) => (
  <h3 className='section__title'>{children}</h3>
)

type SectionListProps = {
  children: React.ReactNode;
}

const List: React.FC<SectionListProps> = ({ children }) => (
  <ul className='section__list'>{children}</ul>
)

type SectionBulletListItemProps = {
  children: React.ReactNode;
}

const ListBulletItem: React.FC<SectionBulletListItemProps> = ({ children }) => (
  <motion.li
    whileTap={{ backgroundColor: "#D4D4D4" }}
    transition={{ duration: 0.25, delay: 0.1 }}
    className='section__list__item section__list__bullet-item'>
    {children}
  </motion.li>
)

type SectionNoBulletListItemProps = {
  delay?: number
  children: React.ReactNode;
}

const ListNoBulletItem: React.FC<SectionNoBulletListItemProps> = ({ children, delay }) => (
  <motion.li
    whileTap={{ backgroundColor: "#D4D4D4" }}
    initial={{x: 100}}
    animate={{x: 0}}
    transition={{ duration: 0.3, delay: delay ? delay : .1 }}
    className='section__list__item'>
    {children}
  </motion.li>
)

export const Section = {
  SectionContainer,
  Title,
  List,
  ListBulletItem,
  ListNoBulletItem
}