import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

import loadingScoreIcon from '../../assets/loading-score.svg';
import backIcon from '../../assets/back-icon.svg'
import hotel from '../../assets/hotel.svg'
import { Section } from "../../layout/Section";
import { StarRating } from "../../components/StarRating";

import "./historypage.css";


type History = {
  id: string;
  icon: string;
  header: string;
  description: string;
  loading: boolean;
  stars?: number;
  score?: string;
}

const HISTORY_DATA: History[] = [
  {
    id: "1",
    icon: hotel,
    header: "Calculating Score",
    description: "Just Now",
    loading: true,
    stars: undefined,
    score: undefined,
  },
  {
    id: "2",
    icon: hotel,
    header: "Hotel Check-in",
    description: "Today 1:07pm",
    loading: false,
    stars: 3,
    score: '98%',
  },
  {
    id: "3",
    icon: hotel,
    header: "Hotel Check-in",
    description: "Yesterday 12:30pm",
    loading: false,
    stars: 2,
    score: '72%',
  },
  {
    id: "4",
    icon: hotel,
    header: "Hotel Check-in",
    description: "Wednesday 11:43am",
    loading: false,
    stars: 1,
    score: '58%',
  },
  {
    id: "5",
    icon: hotel,
    header: "Hotel Check-in",
    description: "Last week",
    loading: false,
    stars: 0,
    score: 'Incomplete',
  },
]

type TaskContent = {
  header: string;
  description: string;
  loading?: boolean;
  stars?: number;
  score?: string;
}

const TaskContent: React.FC<TaskContent> = ({ header, description, loading, stars, score }) => (
  <div className="section__list__item--grid-container">
    <div className="section__list__item__icon-container">
      <img className="section__list__item__icon" src={hotel} alt={`hotel icon`} />
    </div>
    <div className="section__list__item__grid-item">
      <p className='section__list__item__header'>{header}</p>
      <p className='section__list__item__translation'>{description}</p>
    </div>
    {loading ?
      <div className="section__list__item__grid-item section__list__item__loading-score-icon-container">
        <img className="section__list__item__loading-score-icon" src={loadingScoreIcon} alt='loading score icon' />
      </div> :
      <div className="section__list__item__grid-item">
        <div className="section__list__item__header text-right">
          <StarRating stars={stars} />
        </div>
        <p className='section__list__item__translation' >{score}</p>
      </div>
    }
  </div>
)

export function HistoryPage() {
  const navigate = useNavigate();
  const goBack = useCallback(() => {
    navigate(-1);
  }, [])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: .25 }}
      >
        <motion.header 
        className="header flex" 
        initial={{opacity:0 }} 
        animate={{opacity:1}}
        transition={{duration: .5, delay: .5}}
        >
          <LazyLoadImage onClick={goBack} className='header__icon' src={backIcon} alt={`back icon`} height={10} width={10}/>
          <h3 className="history-title">Lesson History</h3>
        </motion.header>
        <Section.SectionContainer>
          <Section.List>
            {HISTORY_DATA.map((history, idx) => {
              return (
                <>
                  <Section.ListNoBulletItem key={`history-${history.id}`} delay={idx * .2}>
                    <TaskContent
                      header={history.header}
                      description={history.description}
                      loading={history.loading}
                      score={history.score}
                      stars={history.stars}
                    />
                  </Section.ListNoBulletItem>
                </>)
            })}
          </Section.List>
        </Section.SectionContainer>

      </motion.div>
    </AnimatePresence>

  );
}
