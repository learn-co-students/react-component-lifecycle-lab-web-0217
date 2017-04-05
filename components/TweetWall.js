const React = require('react');
const Tweet = require('./Tweet');

class TweetWall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    };
  }

  // TODO: componentWillMount()
  componentWillMount() {
    this.state.tweets = this.props.newTweets
  }
  // TODO: shouldComponentUpdate()

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.newTweets.length > 0)
  }

  // TODO: componentWillReceiveProps()
  componentWillReceiveProps(nextProps) {
    let arr = this.state.tweets
    nextProps.newTweets.forEach((tweet) => {arr.unshift(tweet)})
    this.setState({
      tweets: arr
    })
  }


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
