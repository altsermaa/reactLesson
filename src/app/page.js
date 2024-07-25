import styles from "./page.module.css";
import { Card } from "../components/Card"
import { GridContainer } from "../components/GridContainer"
// const s = require("../components/Card");

// export default function Home() {
//   const arr = new Array(10).fill(0);

//     return (
//       <div className={styles.container}>
//         {arr.map((item) => (
//           <Card />
//         ))}
//     </div>
//     )
// }

const data = [
  {
    title: "1",
    comment:"first" 
  },
  {
    title: "2",
    description:"second" 
  },  
  {
    title: "3",
    description:"third" 
  },
  {
    title: "4",
    description:"fouth" 
  },
  {
    title: "5",
    description:"fifth" 
  },
  {
    title: "6",
    description:"sixth" 
  },

];

export default function Home() {
  return (
    <GridContainer>
      {data.map(({title, description}) => (
        <Card key={title} title={title} description={description} />
      ))}
    </GridContainer>
    
  )
}