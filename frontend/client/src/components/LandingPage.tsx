import { Typewriter } from 'react-simple-typewriter';
type Props = {
  name: string;
  skill: string[];
};

export const LandingPage = ({ name, skill }: Props) => {
  return (
    <>
      <p>{name}</p>
      <Typewriter
        words={skill}
        loop={-1}
        cursor
        cursorStyle={
          <sub
            style={{
              height: '15px',
              width: '1px',
              background: 'black',
              display: 'inline-block',
            }}
          ></sub>
        }
        typeSpeed={100}
        deleteSpeed={100}
        delaySpeed={1000}
      />
    </>
  );
};
