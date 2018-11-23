import React, {Component} from 'react'

import config, {storage} from './../firebase-config'

class AdminPortfolio extends Component{
    constructor(props){
        super(props)

        this.state = {
            isSaving : false
        }

        this.savePortfolio = this.savePortfolio.bind(this)
    }

    render(){
        if(this.state.isSaving){
            return (
                <p className="text-center"> Wait<div className="loader "></div></p>
            )
        }
        return(
            <div style={{padding: '40px 120px'}}>
                <form onSubmit={this.savePortfolio}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" id="title" placeholder="Title" ref={(ref)=> this.title = ref}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea className="form-control" id="description" placeholder="Type a description here" rows="3" ref={(ref)=> this.description = ref}></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image</label>
                        <input type="file" className="form-control-file" id="image" ref={(ref) => this.image = ref} />
                    </div>
                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }

    savePortfolio(event){
        const itemPortfolio = {
            title: this.title.value,
            description: this.description.value,
            image: this.image
        }
        this.setState({ isSaving: true })
        const file = itemPortfolio.image.files[0]
        const {name, size, type} = file
        console.log(name, size, type)

        const ref = storage.ref(name)
        ref.put(file)
            .then(img =>{
                img.ref.getDownloadURL()
                    .then(downloadURL => {
                        const newPortfolio = {
                            title: itemPortfolio.title,
                            description: itemPortfolio.description,
                            image: downloadURL
                        }
                        //console.log(newPortfolio)
                        config.push('portfolio', {
                            data: newPortfolio
                        })
                        this.setState({ isSaving: false })
                    })
            })
        event.preventDefault()
    }
}

export default AdminPortfolio