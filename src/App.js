import React from 'react';
import { marked } from 'marked';
// import 'bootstrap/dist/css/bootstrap.css';

import 'bootstrap/scss/bootstrap.scss'
import './index.scss';



class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            input:('# Markdown Previewer Here!\n## Welcome!\n This [link](https://www.markdownguide.org/cheat-sheet/) provides a quick reference to the Markdown syntax. \n\nThis is inline `<div>code</div>`.\n```\n//this is code block\n const hello = ()=>{\n console.log("hello world!")\n}\n```\n - This is a list \n- Second \n- Third \n\nAlso \n> Block quotes here.\n\n ![alt text](https://pbs.twimg.com/profile_images/612148081442865152/5YaxW8F5_400x400.jpg) \n\nHere is some **bold text**')
        }
        marked.setOptions({breaks:true});
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({
            input: event.target.value
        });
    }

    render(){
        return (
            <div className="container">
                <h1 className='text-center title'>Markdown Previewer</h1>
                {/* ------------------------------- */}
                <div className="row">
                    <div className="col-md-6">
                        <div className="editor-bar">
                            <i className="bi bi-rocket-takeoff"></i>
                            <span className="bar-title">Editor</span>
                        </div>
                        <textarea id="editor" value={this.state.input} onChange={this.handleChange}></textarea>
                    </div>
                    <div className="col-md-6">
                        <div className="previewer-bar">
                            <i className="bi bi-rocket-takeoff"></i>
                            <span className="bar-title">Previewer</span>
                        </div>
                        <div id="preview" dangerouslySetInnerHTML={{
                            __html:marked(this.state.input)
                        }}></div>
                    </div>
                </div>
                
                <footer className="text-center">
                    <hr />
                     Created by <a href="https://jobaniprojects.github.io/Portfolio/index.html" target="_blank" rel="noreferrer" className="name-a">David Zenteno</a>
                </footer>
            </div>
        );
    }
}

export default App;