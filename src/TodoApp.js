import React, {Component} from 'react';
import './App.css';
import {TodoList} from "./TodoList";
import {Login} from "./component/Login";
import 'react-datepicker/dist/react-datepicker.css';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import {MuiPickersUtilsProvider, DatePicker} from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
import moment from "moment";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


export class TodoApp extends Component {


    constructor(props) {
        super(props);
        this.state = {items: [], text: ' ', priority: 0, dueDate: moment()};
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    render() {

        return (
            <div>
                <Grid container spacing={24} >
                    <Grid item xs>
                        <Paper>
                            <br/>
                            <form onSubmit={this.handleSubmit}>
                                <h3>New TODO</h3>
                                <TextField
                                    label="Description"
                                    id="text"
                                    onChange={this.handleTextChange}
                                    margin="normal"
                                    value={this.state.text}>
                                </TextField>
                                <br/>
                                <br/>
                                <TextField
                                    label="Priority"
                                    id="priority"
                                    type="number"
                                    onChange={this.handlePriorityChange}
                                    margin="normal"
                                    value={this.state.priority}>
                                </TextField>
                                <br/>
                                <br/>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <DatePicker
                                        margin="normal"
                                        label="Date picker"
                                        id="due-date"
                                        value={this.state.dueDate}
                                        onChange={this.handleDateChange}>
                                    </DatePicker>
                                </MuiPickersUtilsProvider>
                                <br/>
                                <br/>
                                <Button variant="contained" color="primary" type="submit">
                                    Add #{this.state.items.length + 1}
                                </Button>
                            </form>
                            <br/>
                        </Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper>
                            <br/>
                            <TodoList todoList={this.state.items}/>
                            <br/>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handlePriorityChange(e) {
        this.setState({
            priority: e.target.value
        });
    }

    handleDateChange(date) {
        this.setState({
            dueDate: moment(date)
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate)
            return;
        const newItem = {
            text: this.state.text,
            priority: this.state.priority,
            dueDate: this.state.dueDate,
        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: '',
            priority: '',
            dueDate: moment()
        }));
    }

}


