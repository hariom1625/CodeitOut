import React from 'react';
import './Instructions.css';
import Gist from 'react-gist';
class Instructions extends React.Component {

      render() {
            // const {questions} = this.state

return (
<div className="container-fluid instruct-container">
<h2 className="instruct-head">Instructions:</h2>

<p className="instruct-pt"> 1. Read Input from STDIN and Print Output to STDOUT. </p>
<p className="instruct-pt"> 2. Outputs are case sensitive. </p>
<div className="instruct-pt">3. Printing extra whitespace before the newline or between the output variable will lead to Wrong Answer.<br/>

Example: For C++ -
<div className="instruct-gist"> <Gist  id = 'd2d3f5122d1726a3222b2afe021507a7'/></div>

- The above formats will be considered as Wrong Answer in System Testing because of extra whitespace present before the newline character or between the output variables.
<br/>
<br/>
Accepted Output Format: For C++ -
<div className="instruct-gist"> <Gist  id = 'd4d5c0340a1c2c8c1e1078aa0094e805'/></div>
Note: Only the extra 'Printed' whitespaces are considered as WA.<br/><br/>
Same rules will be applicable for other languages as well.
</div>
</div>

      )
}
}

export default Instructions;
// Therefore, output format should be strictly followed. Printing Extra whitespaces in output might lead to ‘Wrong Answer’.
