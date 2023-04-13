import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';

import { Section } from '../../layout/Section';
import hotelIcon from '../../assets/hotel.svg'
import historyIcon from '../../assets/history.svg'
import phrasebookIcon from '../../assets/phrasebook.svg';
import './lessonpage.css';

type Goal = {
  id: string;
  ko: string;
  en: string;
}

const GOAL_DATA: Goal = {
  id: "1",
  ko: "친구랑 금요일 저녁에 같이 밥먹기로 하기",
  en: 'Check into the hotel and make sure you know where your room is.',
}

const ALSO_TRY_DATA: Goal[] = [
  {
    id: "2",
    ko: "친구에게 인사하고 오늘 밤에 놀고 싶은지 물어보세요",
    en: "Greet your friend and ask if he or she wants to hang out tonight"
  },
  {
    id: "3",
    ko: "친구가 좋아하는 음식이나 식당이 무엇인지 물어보세요",
    en: "Ask what kind of food or restaurant your friend is interested in"
  },
  {
    id: "4",
    ko: "친구에게 다른 친구를 초대하고 싶은지 물어보세요",
    en: "Ask if your friend wants to invite anyone else"
  }
]

type TaskContent = {
  header: string;
  translation: string;
}

const TaskContent: React.FC<TaskContent> = ({ header, translation }) => (
  <div>
    <p className='section__list__item__header'>{header}</p>
    <p className='section__list__item__translation'>{translation}</p>
  </div>
)

export const LessonPage = () => {

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ x: -100}}
        transition={{ duration: 0.5, delay: 0.5, type: "spring", stiffness: 100 }}
      >
        <motion.header className='header' layout>
          <Link to="/lesson/friday-nights/history">
            <motion.img
              className='header__icon'
              src={historyIcon} alt={`history icon`}
            />
          </Link>
        </motion.header>
        <img className="page__icon" src={hotelIcon} alt={`hotel icon`} />
        <h2 className='page__title'>Hotel Check-in</h2>
        <Section.SectionContainer>
          <Section.Title>Scenario</Section.Title>
          <p>런던의 힐튼 호텔에 온라인으로 2박을 예약했습니다. 호텔 리셉션에 가서 체크인을 해보세요.</p>
        </Section.SectionContainer>

        {/* Goals Section */}
        <Section.SectionContainer>
          <Section.Title>Goal</Section.Title>
          <Section.List>
            <Section.ListBulletItem key={GOAL_DATA.id}>
              <TaskContent
                header={GOAL_DATA.ko}
                translation={GOAL_DATA.en} />
            </Section.ListBulletItem>
          </Section.List>
        </Section.SectionContainer>

        {/* Also Try Section */}
        <Section.SectionContainer>
          <Section.Title>Also Try</Section.Title>
          <Section.List>
            {ALSO_TRY_DATA.map(goal => (
              <Section.ListBulletItem key={goal.id}>
                <TaskContent
                  header={goal.ko}
                  translation={goal.en} />
              </Section.ListBulletItem>
            ))}
          </Section.List>
        </Section.SectionContainer>
        <footer className='footer'>
          <motion.button whileTap={{ scale: 0.95 }} className="footer__button">
            <img className="footer__phrasebook-button" src={phrasebookIcon} alt={`phrasebook icon`} />
            View Phrasebook
          </motion.button>
          <motion.button whileTap={{ scale: 0.95 }} className="footer__button footer__button--blue">Start</motion.button>
        </footer>
      </motion.div>
    </AnimatePresence>
  )
}