import React, { Component } from 'react';
import {Segment,Form,Button} from 'semantic-ui-react';


const emptyEvent ={
  title:'',
  date:'',
  city:'',
  venue:'',
  hostedBy:''
}
class EventForm extends Component {
 
  state = {
    event:emptyEvent
  }
  componentDidMount(){
    if(this.props.selectedEvent !==null) { 
      this.setState({
      event:this.props.selectedEvent
    })}
  }
  onSubmitForm = (e) =>{
    e.preventDefault();
    if(this.state.event.id){
      this.props.updateEvent(this.state.event)
    }else{
      this.props.createEvent(this.state.event)
    }
   
  }
  componentWillReceiveProps(nextProps){
    let newEvent = nextProps.selectedEvent;
    if(this.props.selectedEvent !== nextProps.selectedEvent){
      this.setState({
        event: newEvent || emptyEvent
      })        
    }
    // this.setState({
    //   event:newEvent
    // })
    
  }
  onInputChange =(event,name)=>{
     const newEvent ={
       ...this.state.event
     }
     newEvent[name] = event.target.value 
     this.setState({
      event:newEvent
     })
  }
  render() {
   
    return (
            <Segment>
              <Form onSubmit={this.onSubmitForm}>
                <Form.Field>
                  <label>عنوان رویداد</label>
                  <input onChange={(event)=>this.onInputChange(event,'title')} value={this.state.event.title} placeholder="عنوان را وارد کنید" />
                </Form.Field>
                <Form.Field>
                  <label>تاریخ</label>
                  <input  onChange={(event)=>this.onInputChange(event,'date')} value={this.state.event.date} type="date" placeholder="تاریخ " />
                </Form.Field>
                <Form.Field>
                  <label>شهر</label>
                  <input  onChange={(event)=>this.onInputChange(event,'city')} value={this.state.event.city} placeholder="شهر " />
                </Form.Field>
                <Form.Field>
                  <label>خیابان</label>
                  <input  onChange={(event)=>this.onInputChange(event,'venue')} value={this.state.event.venue} placeholder="خیابان" />
                </Form.Field>
                <Form.Field>
                  <label>انتشار توسط</label>
                  <input  onChange={(event)=>this.onInputChange(event,'hostedBy')} value={this.state.event.hostedBy} placeholder="نام انتشار دهنده را وارد کنید" />
                </Form.Field>
                <Button positive type="submit">
                  ذخیره
                </Button>
                <Button type="button" onClick ={this.props.handleCancle}>انصراف</Button>
              </Form>
            </Segment>
    )
  }
}

export default  EventForm
