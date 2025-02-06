import { LandingPage } from "../components/LandingPage"

type Props = {}

export const Home = (props: Props) => {
  return (
    <>
    <LandingPage name="Madhanraj" skill={["React","Nodejs","Typescript","Javascript","HTML","CSS","React Native","SCSS","Flutter","Actix"]}/>
    </>
  )
}