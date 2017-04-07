const React = require('react');
const Tweet = require('./Tweet');

class TweetWall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    };
  }

  componentWillMount() {
    this.setState({
      tweets: this.props.newTweets
    })
  }

  shouldComponentUpdate() {
    return (this.props.newTweets === [])
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      tweets: this.state.tweets.concat(nextProps.newTweets).reverse()
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
