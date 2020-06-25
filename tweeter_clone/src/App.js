import React from 'react';
import Nav from './components/Nav';
import Sidebar from './components/SideBar'
import './App.css'



class App extends React.Component {
  render() {

    return (
      <React.Fragment>



        <div className="flexContainer">

          <Nav />
          <Sidebar />


          <div className="NewsfeedWrapper">
            <Sidebar Maintitle={"What's Happening"} />
            {/* <Sidebar Title1={"Premier League . 2 hours ago"} Title2={"Arsenal's `new` signings leave some fans a little underwhelmed"} Title3={<img className="twitImg" src={borisjohnson} alt="boris" />} /> */}
            <Sidebar Title1={"Trending in United Kingdom"} Title2={"Mia Khalifa"} Title3={"153kK Tweets"} />
            <Sidebar Title1={"Football . Trending"} Title2={"Thiago"} Title3={"28.1K Tweets"} />
            {/* <Sidebar Title1={"Sport . live"} Title2={"Fans wish Lionel Messi a happy birthday"} Title3={<img className="twitImg" src={messi} alt="messi" width="100px" />} /> */}
            <Sidebar Title1={"Trending in United Kingdom"} Title2={"15th of July"} Title3={"153K Tweets"} />
            <Sidebar Title1={"Trending in United States"} Title2={"Donald Trump"} Title3={"153K Tweets"} />
            <Sidebar Foottitle={"Show More"} />
          </div>


        </div>
      </React.Fragment>
    )

  }


}


export default App