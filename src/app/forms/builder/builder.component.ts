import { Component, OnInit } from '@angular/core';
import { text } from '@angular/core/src/render3/instructions';
import { MatDialog } from '@angular/material';
import { ElementsComponent } from '../elements/elements.component';
import { elementSchema,layoutSchema } from '../schema';


@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {
  formSchema:layoutSchema[] = []
  
  constructor(private elements:MatDialog) { }

  
  

  ngOnInit() {
    let formData = [
      
  ];
    this.formSchema.push({
      'input':false,
      'label':'',
      'type':'content',
      'html':'Test Forms',
      'defaultValue':'',
      'placeholder':'',
      'columns':[],
      'tabIndex':null,
      'inputType':'',
      'hideLabel':false,
      'tableView':false,
      'validate':{
        'required':false,
        'minlength':null,
        'maxlength':null,
        'pattern':null
      }
    },
    {
      'input':false,
      'validate':null,
      'label':'',
      'type':'columns',
      'html':'',
      'placeholder':'',
      'inputType':'',
      'defaultValue':'',
      'tabIndex':null,
      'hideLabel':false,
      'tableView':false,
      'columns':[
        {
        'tabIndex':1,
        'input':true,
        'inputType':"text",
        'label':'First Name',
        'placeholder':'',
        'defaultValue':'',
        'validate':{
          'required':false,
          'minlength':null,
          'maxlength':null,
          'pattern':null
        },
        'type':'text'
        },
        {
          'tabIndex':2,
          'input':true,
          'inputType':"text",
          'label':'Last Name',
          'placeholder':'',
          'defaultValue':'',
          'validate':{
            'required':false,
            'minlength':null,
            'maxlength':null,
            'pattern':null
          },
          'type':'text'
        }
      ]
    },
    {
      'tabIndex':3,
      'input':true,
      'inputType':"textarea",
      'label':'Address',
      'placeholder':'',
      'defaultValue':'',
      'validate':{
        'required':false,
        'minlength':null,
        'maxlength':null,
        'pattern':null
      },
      'type':'textarea',
      'hideLabel':false,
      'tableView':false,
    });
  }
  openElementDialog(){
    this.formSchema.push(
      {
        'input':false,
        'validate':null,
        'label':'',
        'type':'columns',
        'html':'',
        'placeholder':'',
        'inputType':'',
        'defaultValue':'',
        'tabIndex':null,
        'hideLabel':false,
        'tableView':false,
        'columns':[
          {
          'tabIndex':1,
          'input':true,
          'inputType':"text",
          'label':'Email Address',
          'placeholder':'',
          'defaultValue':'',
          'validate':{
            'required':false,
            'minlength':null,
            'maxlength':null,
            'pattern':null
          },
          'type':'text'
          },
          {
            'tabIndex':2,
            'input':true,
            'inputType':"text",
            'label':'Phone Number',
            'placeholder':'',
            'defaultValue':'',
            'validate':{
              'required':false,
              'minlength':null,
              'maxlength':null,
              'pattern':null
            },
            'type':'text'
          }
        ]
      }
    )
    /* const dialogRef = this.elements.open(ElementsComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    }); */
  }
}
