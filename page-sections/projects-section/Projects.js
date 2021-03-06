
import PropTypes from 'prop-types';
import SectionTitle from '@/components/common/SectionTitle';
import ProjectCardType1 from './ProjectCardType1.js';
import ProjectCardType2 from './ProjectCardType2.js';
import styles from './Projects.module.css';

function Projects(props) {
  return (
    <section id={props.id} className={styles.overallContainer}>
      <SectionTitle className={styles.sectionTitle}>
        My Works
      </SectionTitle>
      <div className={styles.contentContainer}>
        <ProjectCardType2
          title={`HelloFriend!`}
          devStatus='in-progress'
          buttonList={[
            { icon: 'github', text: 'GitHub', link: 'https://github.com/canneth/hello-friend' },
            { icon: 'extlink', text: 'Try It!', link: 'https://hello-friend-chat.vercel.app' }
          ]}
          techList={['ts', 'vue', 'mobx', 'expressjs', 'postgresql', 'jest']}
          posterSrc='/posters/projects-section/hello-friend-poster.png'
          posterAlt='Landing page of HelloFriend!'
        >
          {`A humble chat app. This is primarily a learning project where I
          get my hands dirty with Vue and WebSockets.`}
        </ProjectCardType2>
        <ProjectCardType1
          title={`JustGo!`}
          devStatus='kiv'
          buttonList={[
            { icon: 'github', text: 'GitHub', link: 'https://github.com/canneth/just-go-frontend' },
            { icon: 'extlink', text: 'Try It!', link: 'https://justgo.dev' }
          ]}
          techList={['ts', 'nextjs', 'mobx', 'jest']}
          posterSrc='/posters/projects-section/just-go-poster.png'
          posterAlt='Landing page of JustGo!'
        >
          {`Ever felt like getting out of the house,
          but couldn't decide where to go? This app helps
          you find that perfect spot!`}
        </ProjectCardType1>
        <ProjectCardType2
          title={`Personal Site v1`}
          devStatus='complete'
          buttonList={[
            { icon: 'github', text: 'GitHub', link: 'https://github.com/canneth/personal-website-v1' }
          ]}
          techList={['js', 'nextjs']}
          posterSrc='/posters/projects-section/personal-website-v1-poster.png'
          posterAlt='Landing page of personal website v1'
        >
          {`The website you're currently viewing is my
          first tango with React and NextJS. It was an exercise
          in efficient implementation without compromising on
          visitor experience.`}
        </ProjectCardType2>
        <ProjectCardType1
          title={`Personal Site v0`}
          devStatus='complete'
          buttonList={[
            { icon: 'github', text: 'GitHub', link: 'https://github.com/canneth/canneth.github.io' },
            { icon: 'extlink', text: 'View It!', link: 'https://canneth.github.io/' }
          ]}
          techList={['html5', 'css3', 'js']}
          posterSrc='/posters/projects-section/personal-website-v0-poster.png'
          posterAlt='Landing page of personal website v0'
        >
          {`First ever feeble attempts at HTML, CSS
          and JS. The cracks show, but we all start
          somewhere!`}
        </ProjectCardType1>
      </div>
    </section>
  );
}

Projects.propTypes = {
  id: PropTypes.string.isRequired
}

export default Projects;