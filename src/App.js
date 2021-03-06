import styled from "styled-components";
import {Lip} from "./components/Lip";
import {Eye} from "./components/Eye";
import {Box} from "./components/UI/Box";

const getWeek = () => {
    const today = new Date()
    const firstOfJan = new Date(today.getFullYear(), 0, 1);
    const numberOfDays = Math.floor((today - firstOfJan) / (24 * 60 * 60 * 1000));
    return Math.floor(numberOfDays / 7);
}

const App = () => {
    const date = new Date();
    const day = date.getDay() === 0 ? 7 : date.getDay();
    const week = getWeek();
    const dailyHappiness = ((week + day) * 7) % 10;
    const dailyEye = (week * day * 7 * 11) % 100;

    return (
        <Container>
            <Box direction='column'>
                <Box direction='row' justify='space-between'>
                    <Box justify='center' align='center'><Eye orientation={dailyEye}/></Box>
                    <Box justify='center' align='center'><Eye orientation={dailyEye}/></Box>
                </Box>
                <Box justify='center' align='center' xsAlign='flex-start'>
                    <Lip happinessLevel={dailyHappiness}/>
                </Box>
            </Box>
        </Container>
    );
}

const Container = styled.div`
  display: flex;
  flex-grow: 1;
  background-color: #f6d87a;
`

export default App;
