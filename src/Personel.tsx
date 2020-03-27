import React from "react";

interface PersonInfo {
    Ad: string;
    Soyad :string;
    Yas:number;

}

interface IProps {
    superhero: string;
}
  
interface IState {
health: number;
}



export default class Personel extends React.Component<IProps, IState> 
{
    constructor(props:any)
    {
       super(props);

       this.setState(
        {
           health:100
        }
      );

    
    }

    
    public VerileriGetir(person:PersonInfo) {
        
    }

    render()
    {


        return(
        <div>{
            this.state.health

            }</div>


        );
    }

}