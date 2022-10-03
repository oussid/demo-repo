import React from "react";
import './formInput.css'

export default class Form extends React.Component{
    constructor(){
        super()
        this.state = {
            smya: '',
            mdina: '',
            jins: '',
            hiwaya: [],
        }
    }

    addToHiwaya(e){
        var arr = this.state.hiwaya
        if (e.target.checked){
            arr.push(e.target.name)
        }else{
            arr.pop(e.target.name)
        }
        this.setState({hiwaya: arr})
    }
    
    render(){
        console.log(this.state.smya, this.state.mdina, this.state.jins, this.state.hiwaya);
    return <form className="form">
                <input type='text' placeholder="Smya" name="smya" onChange={(e)=> this.setState({[e.target.name] : e.target.value})}/><br></br>

                <label>Lmdina</label>
                <select name="mdina" onChange={(e)=> this.setState({[e.target.name] : e.target.value})}>
                    <option>Casa</option>
                    <option>Sla</option>
                    <option>Rbat</option>
                </select><br></br>

                <label>Ljins: </label><br></br>
                <label>dkr</label>
                <input type='radio' name='jins'  value='dkr' onChange={(e)=> this.setState({[e.target.name] : e.target.value})}/>
                <label>ntwa</label>
                <input type='radio' name='jins'  value='ntwa' onChange={(e)=> this.setState({[e.target.name] : e.target.value})}/><br></br>

                <label>Lhiwaya: </label><br></br>
                <label>hokey</label>
                <input type='checkbox' name='hokey'  onChange={(e)=> this.addToHiwaya(e)}/>
                <label>tbrgig</label>
                <input type='checkbox' name='tbrgig' onChange={(e)=> this.addToHiwaya(e)}/>
                <label>molakama</label>
                <input type="checkbox" name="molakama" onChange={(e)=> this.addToHiwaya(e)}/><br></br>

                {this.state.smya.length>0 && <p>Smiti {this.state.smya}</p> }
                {this.state.mdina.length>0 && <p>Sakn f {this.state.mdina}</p> }
                
                    {this.state.hiwaya.length>0 && <p>Hiwayati: {this.state.hiwaya.map(hiw => <p>{hiw}</p>)}</p> }
                
                
            </form>

    }

}