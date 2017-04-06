const React = require('react');
const Tweet = require('./Tweet');

class TweetWall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    };
  }
  componentWillMount(){
      this.setState({
        tweets: this.props.newTweets
      })

  }

  shouldComponentUpdate(newProps){
    debugger
    return (newProps.newTweets.length > 0)
  }

  componentWillReceiveProps(newProps){
      this.setState({
        tweets: [...newProps.newTweets, ...this.state.tweets]

    })
  }


  // TODO: shouldComponentUpdate()

  // TODO: componentWillReceiveProps()

  render() {
    const tweets = this.state.tweets.map((tweet, index) => {
      return <Tweet text={tweet.text} key={index} />
    });
    return (
      <div>{tweets}</div>
    );
  }
}

module.exports = TweetWall;
