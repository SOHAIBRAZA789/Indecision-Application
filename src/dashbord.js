import React, { Component } from 'react';
import Header from './components/Header.js';
import Action from './components/Action.js';
import Addoption from './components/Addoption.js';

import Option from './components/Option.js';
import OptionModal from './components/OptionModal.js';
import Options from './components/Options.js';

class Dashbord extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [],
            selectOption: undefined
        }
    }
    componentDidMount() {
        // console.log('Component Did Mount');
        try {
            const json = localStorage.getItem('data');
            const options = JSON.parse(json);
            if (options) {
                this.setState({ options });
            }
        }
        catch (e) {
            //Do nothing at all
        }
    }
    componentDidUpdate(prevProps, prevState) {
        // console.log('Component Did Update');
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('data', json);
        }

    }
    handleDeleteOptions = () => {
        this.setState({
            options: []
        });
    }
    handleDeleteOption = (index) => {
        const options = this.state.options;
        options.splice(index, 1);
        this.setState({ options });
        const json = JSON.stringify(options);
        localStorage.setItem('data', json);
        // this.setState((prevState) => ({
        //   options : prevState.options.filter((option) => index !== option )
        // })); 
    }
    handlePick = () => {
        const bigDecimal = Math.random();
        let improvedNum = (bigDecimal * this.state.options.length);
        let numberOfStars = Math.floor(improvedNum);
        let options = this.state.options[numberOfStars];
        this.setState(() => ({
            selectOption: options
        }));
        // alert(options);
    }
    handleAddOption = (option) => {
        if (!option) {
            return 'Enter Valid value to add item'
        }
        else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exist'
        }
        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            };
        })
    }
    handleClearOption = () => (
        this.setState(() => ({
            selectOption: undefined
        }))
    );
    render() {
        const title = "Indecision";
        const subTitle = "Put your life in the hands of Computer";
        return (
            <div className="App ">
                <Header title={title} subTitle={subTitle} />
                <div className="container">
                    <Action hasOption={this.state.options.length > 0}
                        handlePick={this.handlePick} />
                    <div className="widget">

                        <Options options={this.state.options}
                            deleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption} />
                        <Addoption handleAddOption={this.handleAddOption} />
                    </div>


                </div>
                <OptionModal selectOption={this.state.selectOption} handleClearOption={this.handleClearOption} />
            </div>
        );
    }
};


export default Dashbord;