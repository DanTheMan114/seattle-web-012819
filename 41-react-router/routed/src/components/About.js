import React, { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  componentWillMount(){
    document.body.classList.add('about')
  }

  componentWillUnmount(){
    document.body.classList.remove('about')
  }

  render() { 
    return (
      <div>
        <h1>About</h1>
        <p>lksdjnfldksjnfseoilfdskhjfnwoeilkfjnewol jlksjdf mlkfj lwekjfs lksje flkwjefoilkjwe sdofkljes dlkfjwe soflkj weosilrjkfesoirlfkj weoisldk j</p>
        <p>lksdjnfldksjnfseoilfdskhjfnwoeilkfjnewol jlksjdf mlkfj lwekjfs lksje flkwjefoilkjwe sdofkljes dlkfjwe soflkj weosilrjkfesoirlfkj weoisldk j</p>
        <p>lksdjnfldksjnfseoilfdskhjfnwoeilkfjnewol jlksjdf mlkfj lwekjfs lksje flkwjefoilkjwe sdofkljes dlkfjwe soflkj weosilrjkfesoirlfkj weoisldk j</p>
        <p>lksdjnfldksjnfseoilfdskhjfnwoeilkfjnewol jlksjdf mlkfj lwekjfs lksje flkwjefoilkjwe sdofkljes dlkfjwe soflkj weosilrjkfesoirlfkj weoisldk j</p>
      </div>
    );
  }
}
 
export default About;