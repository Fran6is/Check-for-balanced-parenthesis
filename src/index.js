import  React          from 'react';
import  ReactDOM       from 'react-dom';
import  './style/App.css';
import  evaluate       from './helper';
import  Header         from './components/Header';
import  Input          from './components/Input';
import  DisplayResult  from './components/DisplayResult';


class BalancedParenthesis extends React.Component{
    state = {
        answer: ""
    }
    handleExpression = (e) =>
    {
        e.preventDefault();
        let expression = e.target.elements.exp.value.trimStart();

        if(expression === "")
        {
            this.setState({answer: "Field cannot be empty"})
        }
        else
        {
            // 'evaluate()' returns -1 or a value greater than zero for unbalanced parenthesis
            let answer = evaluate(expression);
            console.log(answer)

            if(answer === -1 || answer > 0 ){
                this.setState( {answer: "Unbalanced"} );
            }
            else{
                this.setState({answer: "Balanced"});  
                e.target.elements.exp.value = "";
            } 
            

        }
    }
    render()
    {
        let title = "Check for balanced parenthesis";
        return (<div>
                    <Header title={title}/>
                    <div className="container">
                        <DisplayResult answer={this.state.answer}/>
                        <Input handleExpression={this.handleExpression}/>
                    </div>
               </div>);
    }
}

ReactDOM.render(<BalancedParenthesis />, document.getElementById('root'));
