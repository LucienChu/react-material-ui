import React, { useContext } from 'react';
import { AppContext } from '../../../context/AppContext';
// export const Home = props => {
//     const { homeCounter, setHomeCounter } = useContext(AppContext).homePageContext;
//     const { setUser } = useContext(AppContext).userPageContext;
//     return (
//         <div>
//             <h1>Home</h1>
//             <button onClick={() => setHomeCounter(homeCounter + 1)}>Home counter: {homeCounter}</button>
//             <button onClick={() => setUser(true)}>Click to log in</button>
//         </div>
//     )
// }

export class Home extends React.Component {
    static contextType = AppContext
    state = {
        ready: false
    }
    componentDidMount() {
        const { homeCounter, setHomeCounter } = this.context.homePageContext;
        const { setUser } = this.context.userPageContext;
        this.setState({
            homeCounter,
            setHomeCounter,
            setUser
        }, () => console.log('this.state', this.state))

    }

    render() {
        const { homeCounter, setHomeCounter, setUser } = this.state;
        return (
            <div>
                <h1>Home</h1>
                <button onClick={() => {
                    this.setState(prevState => ({ homeCounter: prevState.homeCounter + 1 }), () => setHomeCounter(this.state.homeCounter))
                    console.log('counter + 1', homeCounter + 1)
                }}>Home counter: {homeCounter}</button>
                <button onClick={() => setUser(true)}>Click to log in</button>
            </div>
        )
    }
}
