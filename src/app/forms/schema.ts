export interface elementSchema{
    tabIndex:number;
    input:boolean;
    inputType:string;
    label?:string;
    placeholder?:string;
    defaultValue?:string;
    validate?:{
        required?:boolean;
        minlength?:number;
        maxlength?:number;
        pattern?:number;
    },
    type:string;
}

export interface layoutSchema{
    input:boolean;
    columns?:elementSchema[];
    html?:string;
    tabIndex?:number;
    inputType:string;
    label?:string;
    placeholder?:string;
    defaultValue?:string;
    validate?:{
        required?:boolean
        minlength?:number
        maxlength?:number
        pattern?:number
    },
    type:string
    hideLabel?:boolean
    tableView?:boolean
}